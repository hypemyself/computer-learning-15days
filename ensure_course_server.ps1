$ErrorActionPreference = 'Stop'
$courseRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$healthUrl = 'http://127.0.0.1:8766/health'
$pythonw = 'D:\env\python\pythonw.exe'

try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $healthUrl -TimeoutSec 2
    if ($response.StatusCode -eq 200) { exit 0 }
} catch {
    # Start the dedicated server below.
}

$serverScript = Join-Path $courseRoot 'course_server.py'
Start-Process -WindowStyle Hidden -FilePath $pythonw -ArgumentList ('"{0}"' -f $serverScript) -WorkingDirectory $courseRoot

for ($attempt = 0; $attempt -lt 25; $attempt++) {
    Start-Sleep -Milliseconds 200
    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri $healthUrl -TimeoutSec 1
        if ($response.StatusCode -eq 200) { exit 0 }
    } catch {
        # Continue polling while Python starts.
    }
}

Write-Error '课程服务器未能启动，请确认 Python 仍安装在 D:\env\python。'
exit 1
