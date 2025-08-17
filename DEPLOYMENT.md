# Deployment Guide

This document explains how to deploy the VideoDownloader application with the backend on Render and the frontend on Netlify.

## Backend Deployment (Render)

1. Push your server code to a GitHub repository
2. Log in to [Render](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Configure the service:
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
   - Environment Variables: Set any necessary environment variables

## Frontend Deployment (Netlify)

1. Push your frontend code to a GitHub repository
2. Log in to [Netlify](https://netlify.com)
3. Create a new site from Git
4. Connect your GitHub repository
5. Configure the build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   
6. Set up environment variables in Netlify:
   - Go to Site settings > Build & deploy > Environment > Environment variables
   - Add the following environment variable:
     - Key: `VITE_API_URL`
     - Value: Your Render backend URL (e.g., `https://your-backend-name.onrender.com`)

7. Deploy your site

## Local Development with Environment Variables

For local development, create a `.env` file in the project root with:

```
VITE_API_URL=http://localhost:3000
```

Or point it to your deployed backend:

```
VITE_API_URL=https://your-backend-name.onrender.com
```

## CORS Configuration (Backend)

Ensure your backend has CORS configured to accept requests from your Netlify domain. In your `server/src/server.ts`, ensure you have:

```typescript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Your Netlify URL or local dev URL
  credentials: true
}));
```

Set `FRONTEND_URL` environment variable in your Render deployment settings to your Netlify domain.
