# Social Download All‑in‑One API — Server Integration (RapidAPI)

> Last verified: **Aug 17, 2025**

This README shows how to integrate the **Social Download All‑in‑One** API (via RapidAPI) into your own backend so you can safely power a video/image/audio downloader site without exposing your API key.

---

## Overview

- **Purpose**: Given a public post URL from a supported social platform, the API returns one or more direct download links (video, audio, image) that you can present to your users.
- **Why a backend?** Your RapidAPI key must never be exposed in the browser. Proxy all requests through your server.

---

## Service Basics

**Base URL**

```
https://social-download-all-in-one.p.rapidapi.com
```

**Primary Endpoint**

```
POST /v1/social/autolink
```

**Headers (required)**

- `X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>`
- `X-RapidAPI-Host: social-download-all-in-one.p.rapidapi.com`
- `Content-Type: application/json`

**Request Body (JSON)**

```json
{ "url": "https://<the-original-post-url>" }
```

> Notes
>
> - Some providers also accept a **GET** form (`/v1/social/autolink?url=<encoded>`). Prefer **POST** in production and keep requests idempotent.
> - The API auto-detects the platform from the URL.

**Successful Response (example, structure can vary by platform)**

```json
{
  "status": "ok",                
  "source": "tiktok",            
  "url": "https://...",          
  "results": [                    
    { "type": "video", "quality": "720p", "format": "mp4", "downloadUrl": "https://..." },
    { "type": "audio", "format": "mp3", "downloadUrl": "https://..." },
    { "type": "image", "downloadUrl": "https://..." }
  ]
}
```

**Error Responses (typical)**

- `400` — Invalid or unsupported URL; missing `url`.
- `401/403` — Missing or wrong `X-RapidAPI-Key` / `X-RapidAPI-Host`.
- `404` — No downloadable assets found for that URL.
- `429` — Rate limit exceeded for your plan.
- `5xx` — Upstream provider error.

**Rate limits & pricing**

- Managed by your RapidAPI subscription plan. Handle `429` gracefully and consider request queuing/backoff.

---

## Security & Compliance

- **Do not expose** your RapidAPI key to the client. Use environment variables and a server‑side proxy only.
- **Validate input**: accept only absolute `http(s)` URLs; reject data URIs and file paths.
- **Abuse prevention**: add per‑IP rate limiting and CAPTCHA/turnstile if open to the public.
- **Legal**: you are responsible for complying with the target platform’s terms and any applicable copyright/DMCA laws.

---

## Quick Start (cURL)

```bash
curl --request POST \
  --url https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink \
  --header 'Content-Type: application/json' \
  --header 'X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>' \
  --header 'X-RapidAPI-Host: social-download-all-in-one.p.rapidapi.com' \
  --data '{"url":"https://www.tiktok.com/@user/video/123"}'
```

---

## Reference Backend Implementations

Below are minimal, production‑oriented examples for three stacks. Each:

- accepts `POST /api/extract` with `{ url: string }`
- validates input, calls the RapidAPI endpoint, and returns the upstream JSON unmodified
- adds basic rate limiting and timeouts

### 1) Node.js (TypeScript + Express)

**.env**

```
PORT=8080
RAPIDAPI_KEY=your_rapidapi_key
RAPIDAPI_HOST=social-download-all-in-one.p.rapidapi.com
RAPIDAPI_BASE=https://social-download-all-in-one.p.rapidapi.com
```

**src/server.ts**

```ts
import express from "express";
import rateLimit from "express-rate-limit";
import axios from "axios";

const app = express();
app.use(express.json({ limit: "1mb" }));

const limiter = rateLimit({ windowMs: 60_000, max: 30 }); // 30 req/min/IP
app.use("/api/", limiter);

const BASE = process.env.RAPIDAPI_BASE || "https://social-download-all-in-one.p.rapidapi.com";
const HOST = process.env.RAPIDAPI_HOST || "social-download-all-in-one.p.rapidapi.com";
const KEY = process.env.RAPIDAPI_KEY!;

function isValidHttpUrl(s: unknown): s is string {
  if (typeof s !== "string") return false;
  try { const u = new URL(s); return ["http:", "https:"].includes(u.protocol); } catch { return false; }
}

app.post("/api/extract", async (req, res) => {
  const { url } = req.body ?? {};
  if (!isValidHttpUrl(url)) return res.status(400).json({ error: "Invalid 'url'" });

  try {
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
    res.status(r.status).json(r.data);
  } catch (e: any) {
    if (e.response) {
      res.status(e.response.status).json(e.response.data);
    } else if (e.code === "ECONNABORTED") {
      res.status(504).json({ error: "Upstream timeout" });
    } else {
      res.status(502).json({ error: "Upstream error", detail: e.message });
    }
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`API listening on :${process.env.PORT || 8080}`);
});
```

**Build & Run**

```bash
npm i express express-rate-limit axios
npm i -D typescript ts-node @types/node @types/express
npx tsc --init
npx ts-node src/server.ts
```

---

### 2) Python (FastAPI + httpx)

**requirements.txt**

```
fastapi
uvicorn[standard]
httpx
python-dotenv
```

**main.py**

```py
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, AnyHttpUrl
import httpx

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
RAPIDAPI_HOST = os.getenv("RAPIDAPI_HOST", "social-download-all-in-one.p.rapidapi.com")
BASE = os.getenv("RAPIDAPI_BASE", "https://social-download-all-in-one.p.rapidapi.com")

class ExtractIn(BaseModel):
    url: AnyHttpUrl

app = FastAPI()

@app.post("/api/extract")
async def extract(payload: ExtractIn):
    headers = {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
    }
    async with httpx.AsyncClient(timeout=15.0) as client:
        try:
            r = await client.post(f"{BASE}/v1/social/autolink", json=payload.dict(), headers=headers)
            return r.json(), r.status_code
        except httpx.ReadTimeout:
            raise HTTPException(status_code=504, detail="Upstream timeout")
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail=e.response.text)
        except Exception as e:
            raise HTTPException(status_code=502, detail=str(e))
```

**Run**

```bash
uvicorn main:app --port 8080 --reload
```

---

### 3) Java (Spring Boot + WebClient)

**application.yml**

```yaml
server:
  port: 8080
rapidapi:
  base: https://social-download-all-in-one.p.rapidapi.com
  host: social-download-all-in-one.p.rapidapi.com
  key: ${RAPIDAPI_KEY}
```

**ExtractController.java**

```java
@RestController
@RequestMapping("/api")
public class ExtractController {
  private final WebClient web;
  private final String base;
  private final String host;
  public ExtractController(WebClient.Builder b, @Value("${rapidapi.base}") String base,
                           @Value("${rapidapi.host}") String host,
                           @Value("${rapidapi.key}") String key) {
    this.base = base; this.host = host;
    this.web = b
      .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
      .defaultHeader("X-RapidAPI-Key", key)
      .defaultHeader("X-RapidAPI-Host", host)
      .build();
  }
  public record ExtractReq(String url) {}

  @PostMapping("/extract")
  public Mono<ResponseEntity<String>> extract(@RequestBody ExtractReq req) {
    try { new java.net.URL(req.url()); } catch (Exception e) { return Mono.just(ResponseEntity.badRequest().body("Invalid url")); }
    return web.post()
      .uri(base + "/v1/social/autolink")
      .bodyValue(req)
      .retrieve()
      .toEntity(String.class)
      .timeout(java.time.Duration.ofSeconds(15))
      .onErrorResume(TimeoutException.class, t -> Mono.just(ResponseEntity.status(504).body("Upstream timeout")));
  }
}
```

---

## Caching (optional but recommended)

- Cache successful results for a short TTL (e.g., 10–60 minutes) keyed by the original URL.
- Evict on `4xx` errors to avoid poisoning the cache.
- Consider a shared cache like Redis if you run multiple instances.

---

## Frontend contract

Send your backend:

```ts
POST /api/extract
Content-Type: application/json

{ "url": "https://<post-url>" }
```

Receive (pass‑through of upstream JSON):

```json
{
  "status": "ok",
  "source": "...",
  "url": "...",
  "results": [ { /* direct links */ } ]
}
```

Render a table/cards of the `results` with filename, type, quality/format and a download button that points to `downloadUrl`.

---

## Troubleshooting

- **401/403**: Verify both headers (`X-RapidAPI-Key`, `X-RapidAPI-Host`) and that your subscription is active.
- **429**: Implement exponential backoff, queueing, and a user‑facing “try again later” message.
- **5xx**: Treat as transient; retry with jitter.
- **Mixed content**: If your site is HTTPS and a returned `downloadUrl` is HTTP, proxy it through your server.
- **CORS**: Your backend should be same‑origin for your frontend or explicitly allow your frontend’s origin.

---

## Production checklist

-

---

## Changelog

- v1 (2025‑08‑17): Initial guide.

