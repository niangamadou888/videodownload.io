# VideoDownload.io

A modern, fast, and user-friendly web application for downloading videos, audio, and images from 40+ popular social media platforms.

![VideoDownload.io Screenshot](src/assets/video-download-hero.png)

## Features

- Download videos from 40+ platforms including YouTube, TikTok, Instagram, Facebook, Twitter, and more
- Extract high-quality video, audio, and image downloads without watermarks
- Multiple quality options for each download
- Clean, responsive UI built with React and Tailwind CSS
- Secure server-side processing to protect API keys

## How It Works

1. Paste a URL from a supported social media platform
2. Our backend securely processes the request using the Social Download All-in-One API
3. Select your preferred format and quality
4. Download directly to your device with a single click

## Supported Platforms

- YouTube
- TikTok
- Instagram
- Facebook
- Twitter/X
- Snapchat
- Pinterest
- LinkedIn
- Reddit
- Vimeo
- Tumblr
- Dailymotion
- And many more...

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, Axios
- **API Integration**: RapidAPI (Social Download All-in-One)

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or bun
- RapidAPI key for the [Social Download All-in-One API](https://rapidapi.com/ytjar/api/social-download-all-in-one)

### Installation

```sh
# Clone the repository
git clone https://github.com/yourusername/videodownload.io.git
cd videodownload.io

# Install frontend dependencies
npm install

# Install backend dependencies
cd server && npm install && cd ..

# Configure the backend
# Create a .env file in the server directory with:
# PORT=6000
# RAPIDAPI_KEY=your_rapidapi_key_here
# RAPIDAPI_HOST=social-download-all-in-one.p.rapidapi.com
# RAPIDAPI_BASE=https://social-download-all-in-one.p.rapidapi.com

# Start development servers
# Option 1: Start both frontend and backend with one command
npm run start:all

# Option 2: Start them separately
# In one terminal:
npm run dev
# In another terminal:
npm run server:dev
```

## Deployment

### Frontend

The frontend can be deployed to any static hosting provider like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the frontend with:
```
npm run build
```

### Backend

The backend server can be deployed to services like:
- Heroku
- Render
- DigitalOcean
- AWS
- Vercel (serverless functions)

Make sure to:
1. Set the required environment variables (especially your RapidAPI key)
2. Update the frontend API endpoint to point to your deployed backend
3. Set up CORS properly for production

See the `server/README.md` file for more detailed deployment instructions.

## Legal Considerations

- This application is for educational and personal use only
- Users are responsible for complying with the terms of service of all platforms
- Users should respect copyright laws and only download content they have the right to access

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Social Download All-in-One API](https://rapidapi.com/ytjar/api/social-download-all-in-one)
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Tailwind CSS](https://tailwindcss.com/) for styling