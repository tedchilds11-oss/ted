@echo off
echo 🧪 Testing ClarityAI Backend Endpoints...

set /p PROJECT_REF=Enter your Supabase project reference: 

if "%PROJECT_REF%"=="" (
    echo ❌ Project reference is required
    pause
    exit /b 1
)

set FUNCTION_URL=https://%PROJECT_REF%.supabase.co/functions/v1/make-server-78ad1ffc

echo.
echo 🔍 Testing endpoints...
echo.

echo 1. Health Check:
powershell -Command "try { $response = Invoke-WebRequest -Uri '%FUNCTION_URL%/health' -UseBasicParsing; Write-Host $response.Content -ForegroundColor Green } catch { Write-Host 'Failed: ' $_.Exception.Message -ForegroundColor Red }"

echo.
echo 2. Status Check:
powershell -Command "try { $response = Invoke-WebRequest -Uri '%FUNCTION_URL%/status' -UseBasicParsing; Write-Host $response.Content -ForegroundColor Green } catch { Write-Host 'Failed: ' $_.Exception.Message -ForegroundColor Red }"

echo.
echo 3. Demo Survival Data:
powershell -Command "try { $response = Invoke-WebRequest -Uri '%FUNCTION_URL%/demo/survival' -UseBasicParsing; Write-Host $response.Content -ForegroundColor Green } catch { Write-Host 'Failed: ' $_.Exception.Message -ForegroundColor Red }"

echo.
echo 4. Demo Dashboard Data:
powershell -Command "try { $response = Invoke-WebRequest -Uri '%FUNCTION_URL%/demo/dashboard' -UseBasicParsing; Write-Host $response.Content -ForegroundColor Green } catch { Write-Host 'Failed: ' $_.Exception.Message -ForegroundColor Red }"

echo.
echo 🎉 Testing complete!
pause