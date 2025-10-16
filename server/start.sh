#!/bin/bash
# Startup script for videodownload.io backend server
# Sets NODE_OPTIONS to avoid WebAssembly memory issues on shared hosting

# Disable experimental fetch to prevent undici from allocating WASM memory
export NODE_OPTIONS="--no-experimental-fetch"

echo "Starting server with NODE_OPTIONS: $NODE_OPTIONS"

# Run the launcher
exec node launcher.cjs
