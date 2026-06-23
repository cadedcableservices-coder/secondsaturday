# Tiny static file server for local preview — no Node/Python needed.
# Run:  powershell -ExecutionPolicy Bypass -File serve.ps1
# Then open http://localhost:8123  (Ctrl+Shift+R to force-refresh after edits)

$port = 8246
$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Second Saturday preview running at http://localhost:$port  (Ctrl+C to stop)" -ForegroundColor Green

$mime = @{ '.html'='text/html'; '.css'='text/css'; '.js'='application/javascript';
  '.json'='application/json'; '.svg'='image/svg+xml'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg';
  '.png'='image/png'; '.ico'='image/x-icon'; '.webp'='image/webp' }

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $path = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    if ($path -eq '/') { $path = '/index.html' }
    $file = Join-Path $root ($path.TrimStart('/') -replace '/', '\')
    $ctx.Response.KeepAlive = $false
    if (Test-Path $file -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($file).ToLower()
      $ctx.Response.ContentType = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
      $b = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
      $ctx.Response.OutputStream.Write($b, 0, $b.Length)
    }
    $ctx.Response.OutputStream.Close()
  }
} finally { $listener.Stop() }
