import express from "express";
import rateLimit from "express-rate-limit";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit: "1mb" }));
app.use(cors());

// Rate limiting - 30 requests per minute per IP
const limiter = rateLimit({ 
  windowMs: 60_000, 
  max: 30,
  standardHeaders: true,
  message: { error: "Too many requests, please try again later." }
});
app.use("/api/", limiter);

// Constants from env
const BASE = process.env.RAPIDAPI_BASE || "https://social-download-all-in-one.p.rapidapi.com";
const HOST = process.env.RAPIDAPI_HOST || "social-download-all-in-one.p.rapidapi.com";
const KEY = process.env.RAPIDAPI_KEY;
const PORT = process.env.PORT || 6000;

// URL validation helper
function isValidHttpUrl(s: unknown): s is string {
  if (typeof s !== "string") return false;
  try { 
    const u = new URL(s); 
    return ["http:", "https:"].includes(u.protocol); 
  } catch { 
    return false; 
  }
}

// Main API endpoint to extract video info
app.post("/api/extract", async (req, res) => {
  const { url } = req.body ?? {};
  
  // Validate URL
  if (!isValidHttpUrl(url)) {
    return res.status(400).json({ 
      error: "Invalid URL",
      message: "Please provide a valid http/https URL"
    });
  }

  if (!KEY) {
    return res.status(500).json({ 
      error: "Server configuration error",
      message: "RapidAPI key not configured"
    });
  }

  try {
    console.log(`Processing request for URL: ${url}`);
    
    const r = await axios.post(
      `${BASE}/v1/social/autolink`,
      { url },
      {
        timeout: 15_000,
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": HOST,
          "X-RapidAPI-Key": KEY,
        },
      }
    );
    
    // Get the raw response
    const rapidApiResponse = r.data;
    
    // Debug raw response to see what we're getting
    console.log("Raw API Response:", JSON.stringify(rapidApiResponse, null, 2));
    console.log("API Response type:", typeof rapidApiResponse);
    console.log("Is array?", Array.isArray(rapidApiResponse));
    console.log("Has results?", !!rapidApiResponse.results);
    console.log("Has url_list?", !!rapidApiResponse.url_list);
    
    if (rapidApiResponse.results) {
      console.log("Results type:", typeof rapidApiResponse.results);
      console.log("Results is array?", Array.isArray(rapidApiResponse.results));
      console.log("Results length:", Array.isArray(rapidApiResponse.results) ? rapidApiResponse.results.length : 'N/A');
    }
    
    // Define the interface for our transformed response
    interface TransformedResponse {
      status: string;
      source: string;
      url: string;
      title: string;
      results: Array<{
        type: string;
        quality: string;
        format: string;
        downloadUrl: string;
        size?: string;
      }>;
      thumb?: string;
      duration?: string;
      author?: string;
    }
    
    // Transform the response to match our frontend expected format
    const transformedResponse: TransformedResponse = {
      status: rapidApiResponse.status || "ok",
      source: rapidApiResponse.source || "unknown",
      url: rapidApiResponse.url || url,
      title: rapidApiResponse.title || `${rapidApiResponse.source || "Video"} content`,
      results: []
    };
    
    // Process results based on the API response format
    interface MediaItem {
      type?: string;
      quality?: string;
      format?: string;
      downloadUrl?: string;
      url?: string;
      size?: string;
      [key: string]: string | number | boolean | undefined; // Allow for other unknown properties
    }
    
    // Log all keys in response to help debug
    console.log("Available top-level keys in response:", Object.keys(rapidApiResponse));
    
    // More aggressive results detection
    let foundResults = false;
    
    // Case 1: Standard format from the API docs
    if (rapidApiResponse.results && Array.isArray(rapidApiResponse.results)) {
      console.log("Found standard 'results' array");
      // Inspect first result item to see what's available
      const firstItem = rapidApiResponse.results[0];
      console.log("First result item keys:", Object.keys(firstItem));
      console.log("First result item:", firstItem);
      
      transformedResponse.results = rapidApiResponse.results.map((item: MediaItem) => {
        // Create result with all possible fields to ensure we don't miss anything
        const result = {
          type: item.type || "video",
          quality: item.quality || "",
          format: item.format || "",
          downloadUrl: item.downloadUrl || "",
          size: item.size || ""
        };
        
        // Ensure we have the format if it exists in any form
        if (!result.format && item.mimetype && typeof item.mimetype === 'string') {
          const parts = item.mimetype.split('/');
          if (parts.length > 1) {
            result.format = parts[1];
          }
        }
        
        return result;
      });
      foundResults = true;
    }
    
    // Case 2: Alternative url_list format
    else if (rapidApiResponse.url_list && Array.isArray(rapidApiResponse.url_list)) {
      console.log("Found 'url_list' array");
      // Inspect first result item to see what's available
      const firstItem = rapidApiResponse.url_list[0];
      console.log("First url_list item keys:", Object.keys(firstItem));
      console.log("First url_list item:", firstItem);
      
      transformedResponse.results = rapidApiResponse.url_list.map((item: MediaItem) => {
        // Create result with all possible fields
        const result = {
          type: item.type || "video",
          quality: item.quality || "",
          format: item.format || "",
          downloadUrl: item.url || item.downloadUrl || "",
          size: item.size || ""
        };
        
        // Extract format from mimetype if available
        if (!result.format && item.mimetype && typeof item.mimetype === 'string') {
          const parts = item.mimetype.split('/');
          if (parts.length > 1) {
            result.format = parts[1];
          }
        }
        
        // Extract format from fileType if available
        if (!result.format && item.fileType) {
          result.format = typeof item.fileType === 'string' ? item.fileType : String(item.fileType);
        }
        
        // Extract format from extension if available
        if (!result.format && item.extension) {
          result.format = typeof item.extension === 'string' ? item.extension : String(item.extension);
        }
        
        return result;
      });
      foundResults = true;
    }
    
    // Case 3: Raw response is an array directly
    else if (Array.isArray(rapidApiResponse)) {
      console.log("Response itself is an array");
      transformedResponse.results = rapidApiResponse.map((item: MediaItem) => ({
        type: item.type || "video", 
        quality: item.quality || "",
        format: item.format || "",
        downloadUrl: item.url || item.downloadUrl || "",
        size: item.size || ""
      }));
      foundResults = true;
    }
    
    // Case 4: Look for any nested property that might be an array of results
    else {
      console.log("Searching for nested results arrays");
      for (const key in rapidApiResponse) {
        if (Array.isArray(rapidApiResponse[key])) {
          console.log(`Found array in property: ${key}`);
          // Check first item to see if it has url or downloadUrl
          const firstItem = rapidApiResponse[key][0];
          if (firstItem && (firstItem.url || firstItem.downloadUrl)) {
            console.log(`Property ${key} contains download items`);
            transformedResponse.results = rapidApiResponse[key].map((item: MediaItem) => ({
              type: item.type || "video",
              quality: item.quality || "",
              format: item.format || "", 
              downloadUrl: item.url || item.downloadUrl || "",
              size: item.size || ""
            }));
            foundResults = true;
            break;
          }
        }
      }
    }
    
    // Case 5: No array found, but has direct downloadUrl or url
    if (!foundResults && (rapidApiResponse.downloadUrl || rapidApiResponse.url)) {
      console.log("Using direct download URL from response");
      transformedResponse.results = [{
        type: "video",
        quality: "default",
        format: "",
        downloadUrl: rapidApiResponse.downloadUrl || rapidApiResponse.url,
        size: ""
      }];
    }
    
    // Add thumbnail and duration if available
    if (rapidApiResponse.thumb) {
      transformedResponse.thumb = rapidApiResponse.thumb;
    } else if (rapidApiResponse.thumbnail) {
      transformedResponse.thumb = rapidApiResponse.thumbnail;
    }
    
    // Extract duration from various possible locations in the API response
    let extractedDuration = '';
    
    // Direct duration field
    if (rapidApiResponse.duration) {
      extractedDuration = rapidApiResponse.duration;
    }
    // Length in seconds
    else if (rapidApiResponse.length_seconds) {
      extractedDuration = String(rapidApiResponse.length_seconds);
    }
    // Duration in video_info or video_details
    else if (rapidApiResponse.video_info && rapidApiResponse.video_info.duration) {
      extractedDuration = rapidApiResponse.video_info.duration;
    }
    else if (rapidApiResponse.video_details && rapidApiResponse.video_details.duration) {
      extractedDuration = rapidApiResponse.video_details.duration;
    }
    // Meta data duration
    else if (rapidApiResponse.meta && rapidApiResponse.meta.duration) {
      extractedDuration = rapidApiResponse.meta.duration;
    }
    
    // Add the duration to the response
    if (extractedDuration) {
      console.log("Found duration:", extractedDuration);
      transformedResponse.duration = extractedDuration;
    }

    // Extract author/uploader information from various possible fields
    const authorCandidates: Array<unknown> = [
      rapidApiResponse.author,
      rapidApiResponse.uploader,
      rapidApiResponse.username,
      rapidApiResponse.owner,
      rapidApiResponse.channelTitle,
      rapidApiResponse.author_name,
      rapidApiResponse?.user?.name,
      rapidApiResponse?.meta?.author,
      rapidApiResponse?.meta?.username,
    ];
    const authorName = authorCandidates.find((v) => typeof v === "string" && v.trim().length > 0) as string | undefined;
    if (authorName) {
      transformedResponse.author = authorName;
    }
    
    // Debug the transformed response
    console.log("Transformed API Response:", JSON.stringify(transformedResponse, null, 2));
    
    // Return the transformed response to client
    res.status(r.status).json(transformedResponse);
  } catch (e: unknown) {
    const error = e as Error;
    console.error("API Error:", error.message);
    
    // Handle axios errors
    if (axios.isAxiosError(e)) {
      if (e.response) {
        // Forward upstream error responses
        res.status(e.response.status).json(e.response.data);
      } else if (e.code === "ECONNABORTED") {
        res.status(504).json({ error: "Upstream timeout" });
      } else {
        res.status(502).json({ error: "Upstream error", detail: error.message });
      }
    } else {
      // Generic error handler
      res.status(500).json({ error: "Server error", detail: error.message });
    }
  }
});

// Proxy download endpoint to force Content-Disposition attachment
app.get("/api/download", async (req, res) => {
  const rawUrl = req.query.url as string | undefined;
  const suggestedName = (req.query.filename as string | undefined) || "download";

  if (!isValidHttpUrl(rawUrl)) {
    return res.status(400).json({ error: "Invalid 'url' query parameter" });
  }

  try {
    const upstream = await axios.get(rawUrl, {
      responseType: "stream",
      timeout: 60_000,
      // Some hosts require a UA; keep generic
      headers: { "User-Agent": "Mozilla/5.0 (compatible; VideoDownload.io)" },
      maxRedirects: 5,
      validateStatus: (s) => s >= 200 && s < 400, // allow redirects to be followed
    });

    // Infer content type/length
    const contentType = upstream.headers["content-type"] || "application/octet-stream";
    const contentLength = upstream.headers["content-length"];

    // Derive filename
    const urlObj = new URL(rawUrl);
    const urlName = urlObj.pathname.split("/").pop() || "file";
    const extFromType = (() => {
      if (typeof contentType === "string") {
        const parts = contentType.split("/");
        if (parts.length === 2) return parts[1].split(";")[0];
      }
      return "";
    })();

    // Sanitize and pick filename
    const safe = (s: string) => s.replace(/[^A-Za-z0-9._-]+/g, "_");
    let filename = safe(suggestedName);
    if (!filename.includes(".")) {
      // Try append extension from content-type or URL
      const urlExt = urlName.includes(".") ? urlName.split(".").pop() : "";
      const ext = (extFromType || urlExt || "").replace(/[^A-Za-z0-9]/g, "");
      if (ext) filename += `.${ext}`;
    }

    res.setHeader("Content-Type", contentType);
    if (contentLength) res.setHeader("Content-Length", String(contentLength));
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);

    upstream.data.on("error", () => res.destroy());
    upstream.data.pipe(res);
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const status = e.response?.status || 502;
      return res.status(status).json({ error: "Download proxy error", detail: e.message });
    }
    return res.status(500).json({ error: "Server error", detail: (e as Error).message });
  }
});

// In production, serve the built frontend
if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, "../../dist");
  app.use(express.static(clientPath));
  
  app.get("*", (_, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

// Health check endpoint
app.get("/api/health", (_, res) => {
  res.json({ status: "ok" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/extract`);
});
