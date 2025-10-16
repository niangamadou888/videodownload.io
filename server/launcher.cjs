#!/usr/bin/env node
/**
 * CommonJS Launcher for LiteSpeed/cPanel compatibility
 *
 * This file serves as a CommonJS entry point that dynamically loads
 * the main application, which may use ESM or transpiled code.
 *
 * LiteSpeed's lsnode process manager uses require() to load the app,
 * which doesn't work with ESM modules. This launcher bridges the gap
 * by using dynamic import() to load the actual server.
 */

// Pure CommonJS - no imports
const path = require('path');
const fs = require('fs');

// Set Node.js options to avoid WebAssembly memory issues on shared hosting
// This prevents undici from trying to allocate WASM memory
process.env.NODE_OPTIONS = (process.env.NODE_OPTIONS || '') + ' --no-experimental-fetch';

console.log('[Launcher] Starting CommonJS launcher...');
console.log('[Launcher] Node version:', process.version);
console.log('[Launcher] Working directory:', process.cwd());
console.log('[Launcher] __dirname:', __dirname);
console.log('[Launcher] NODE_OPTIONS:', process.env.NODE_OPTIONS);

// Determine the path to the compiled server
const serverPath = path.join(__dirname, 'dist', 'server.js');

console.log('[Launcher] Looking for server at:', serverPath);

// Check if the server file exists
if (!fs.existsSync(serverPath)) {
  console.error('[Launcher] ERROR: Server file not found at:', serverPath);
  console.error('[Launcher] Please run "npm run build" to compile the TypeScript code first.');
  process.exit(1);
}

console.log('[Launcher] Server file found. Loading application...');

// Dynamically import the server
// This works for both ESM and CommonJS modules
(async () => {
  try {
    // Use dynamic import which works in CommonJS and supports both ESM and CJS targets
    await import(serverPath);
    console.log('[Launcher] Application loaded successfully');
  } catch (error) {
    console.error('[Launcher] Failed to load application:', error);

    // If dynamic import fails, try require as fallback (for pure CommonJS)
    try {
      console.log('[Launcher] Attempting fallback to require()...');
      require(serverPath);
      console.log('[Launcher] Application loaded successfully via require()');
    } catch (requireError) {
      console.error('[Launcher] Fallback require() also failed:', requireError);
      process.exit(1);
    }
  }
})();

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  console.error('[Launcher] Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[Launcher] Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
