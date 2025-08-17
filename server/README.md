# VideoDownload.io Backend Server

This is the backend server for the VideoDownload.io application. It proxies requests to the Social Download All-in-One API (via RapidAPI) to download videos from various social media platforms.

## Setup

1. Install dependencies:
   ```
   cd server
   npm install
   ```

2. Create a `.env` file based on the `.env.example`:
   ```
   cp .env.example .env
   ```

3. Edit the `.env` file and add your RapidAPI key:
   ```
   PORT=6000
   RAPIDAPI_KEY=your_rapidapi_key_here
   RAPIDAPI_HOST=social-download-all-in-one.p.rapidapi.com
   RAPIDAPI_BASE=https://social-download-all-in-one.p.rapidapi.com
   ```

## Development

Run the server in development mode:
```
npm run dev
```

## Production

Build the server for production:
```
npm run build
```

Run the production server:
```
npm start
```

## API Endpoints

### Extract Video Information

```
POST /api/extract
Content-Type: application/json

{ "url": "https://www.tiktok.com/@user/video/123" }
```

Response:
```json
{
  "status": "ok",
  "source": "tiktok",
  "url": "https://...",
  "results": [
    { "type": "video", "quality": "720p", "format": "mp4", "downloadUrl": "https://..." },
    { "type": "audio", "format": "mp3", "downloadUrl": "https://..." }
  ]
}
```

### Health Check

```
GET /api/health
```

Response:
```json
{ "status": "ok" }
```

## Notes

- Rate limiting is set to 30 requests per minute per IP.
- Requests to the RapidAPI endpoint have a timeout of 15 seconds.

## Deployment

For production deployment, you'll need to:

1. Build both the frontend and backend:
   ```
   # In the project root
   npm run build
   npm run server:build
   ```

2. Set up environment variables on your hosting platform:
   - `PORT`: The port to run the server on (e.g., 8080)
   - `RAPIDAPI_KEY`: Your RapidAPI key
   - `RAPIDAPI_HOST`: The RapidAPI host
   - `RAPIDAPI_BASE`: The base URL for the RapidAPI endpoint
   - `NODE_ENV`: Set to "production"
   - `FRONTEND_URL`: Your frontend URL (e.g., https://videodownload.netlify.app) for CORS configuration

3. Start the server:
   ```
   npm run server:start
   ```

The server is configured to serve the frontend static files in production mode, so you only need to deploy and run the backend service.
