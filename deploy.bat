@echo off
echo 🚀 Deploying ClarityAI Backend...

REM Check if Supabase CLI is installed
supabase --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Supabase CLI not found. Please install it first:
    echo winget install Supabase.CLI
    pause
    exit /b 1
)

echo ✅ Supabase CLI found

REM Get project reference
set /p PROJECT_REF=Enter your Supabase project reference: 

if "%PROJECT_REF%"=="" (
    echo ❌ Project reference is required
    pause
    exit /b 1
)

echo 📦 Deploying function...
supabase functions deploy make-server-78ad1ffc --project-ref %PROJECT_REF%

if errorlevel 1 (
    echo ❌ Deployment failed
    pause
    exit /b 1
)

echo 🧪 Testing deployment...
set FUNCTION_URL=https://%PROJECT_REF%.supabase.co/functions/v1/make-server-78ad1ffc

powershell -Command "try { $response = Invoke-WebRequest -Uri '%FUNCTION_URL%/health' -UseBasicParsing; if ($response.StatusCode -eq 200) { Write-Host '✅ Backend deployed successfully!' -ForegroundColor Green; Write-Host '🔗 URL: %FUNCTION_URL%' -ForegroundColor Cyan } else { Write-Host '❌ Health check failed' -ForegroundColor Red } } catch { Write-Host '❌ Connection failed' -ForegroundColor Red }"

echo.
echo 🎯 Available endpoints:
echo   GET  %FUNCTION_URL%/health
echo   GET  %FUNCTION_URL%/status  
echo   GET  %FUNCTION_URL%/demo/survival
echo   GET  %FUNCTION_URL%/demo/dashboard
echo.
echo 🎉 Deployment complete!
pause