# Deployment Guide for Shared Hosting

## WebAssembly Memory Issue Fix

If you encounter the error:
```
RangeError: WebAssembly.instantiate(): Out of memory: Cannot allocate Wasm memory for new instance
```

This happens because Node.js 20's built-in `undici` library tries to allocate WebAssembly memory, which can exceed shared hosting memory limits.

## Solution 1: Using NODE_OPTIONS (Recommended)

### For cPanel/LiteSpeed:

1. In your cPanel, go to **Setup Node.js App**
2. Find your application
3. Under **Environment Variables**, add:
   - **Name**: `NODE_OPTIONS`
   - **Value**: `--no-experimental-fetch`
4. Restart your application

### For Command Line:

If you're starting the server via command line:
```bash
export NODE_OPTIONS="--no-experimental-fetch"
npm start
```

Or use the provided shell script:
```bash
npm run start:sh
```

## Solution 2: .htaccess Configuration

If your hosting provider uses Apache with LiteSpeed, create or update `.htaccess` in your server directory:

```apache
# Set Node.js environment variables
SetEnv NODE_OPTIONS "--no-experimental-fetch"
```

## Solution 3: Update Node App Startup Command

In cPanel's Setup Node.js App, change the **Application Startup File** from:
```
launcher.cjs
```

To the shell script:
```
start.sh
```

## Verification

After applying the fix, your server logs should show:
```
[Launcher] NODE_OPTIONS: --no-experimental-fetch
```

And the server should start without WebAssembly errors.

## Alternative: Downgrade Node.js

If none of the above works, you can downgrade to Node.js 18.x which doesn't have this issue:
1. In cPanel, go to Setup Node.js App
2. Change Node.js version to 18.x
3. Restart application

## Additional Memory Optimization

If you continue to have memory issues, consider:

1. **Reduce concurrent connections** - Update rate limiting in `server.ts`:
   ```typescript
   const limiter = rateLimit({
     windowMs: 60_000,
     max: 10,  // Reduce from 30 to 10
   });
   ```

2. **Increase timeout to free resources faster** - Update axios timeout:
   ```typescript
   timeout: 10_000,  // Reduce from 15_000 to 10_000
   ```

3. **Disable production static file serving** if not needed - This reduces memory footprint when only using the API.

## Contact Support

If issues persist, contact your hosting provider to:
- Increase LVE limits (Max address space, Max resident set)
- Enable Node.js environment variable configuration
- Verify Node.js version compatibility
