# 🚀 ClarityAI Backend - Quick Deploy

## Prerequisites
- [Supabase CLI](https://supabase.com/docs/guides/cli) installed
- Supabase project created

## Quick Deploy (2 minutes)

### 1. Install Supabase CLI
```bash
# Windows (using winget)
winget install Supabase.CLI

# Or using npm (if supported)
npm install -g supabase
```

### 2. Login to Supabase
```bash
supabase login
```

### 3. Deploy Backend
```bash
# Run the deployment script
deploy.bat
```

### 4. Test Endpoints
```bash
# Run the test script
test-endpoints.bat
```

## Manual Deployment

```bash
# Deploy function
supabase functions deploy make-server-78ad1ffc --project-ref YOUR_PROJECT_REF

# Test health
curl https://YOUR_PROJECT.supabase.co/functions/v1/make-server-78ad1ffc/health
```

## Available Endpoints

- `GET /health` - Health check
- `GET /status` - System status
- `GET /demo/survival` - Demo survival data
- `GET /demo/dashboard` - Demo dashboard data

## Success Response
```json
{
  "status": "ok",
  "service": "ClarityAI Backend",
  "version": "1.0.0",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Troubleshooting

### Function not found
- Ensure you're using the correct project reference
- Check function logs: `supabase functions logs make-server-78ad1ffc`

### CORS errors
- The function includes CORS headers for all origins
- Check browser console for specific errors

### Deployment fails
- Verify Supabase CLI is logged in: `supabase projects list`
- Check project permissions

## Next Steps
1. ✅ Deploy basic backend
2. 🔄 Add database schema
3. 🔐 Add authentication
4. 🤖 Add AI services
5. 📊 Add monitoring

🎉 **Your ClarityAI backend is now live!**