$port = 8080
$root = "C:\Users\keff2\.gemini\antigravity\scratch\atm-travels-clone"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "Serving ATM Travels clone at http://localhost:$port/"

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $request = $context.Request
  $response = $context.Response

  $localPath = $request.Url.LocalPath.TrimStart('/')
  if ([string]::IsNullOrEmpty($localPath)) {
    $localPath = "index.html"
  }
  $filePath = Join-Path $root $localPath
  if (-not (Test-Path $filePath -PathType Leaf)) {
    $filePath = Join-Path $root "index.html"
  }

  try {
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
    if ($mimeTypes.ContainsKey($ext)) {
      $response.ContentType = $mimeTypes[$ext]
    } else {
      $response.ContentType = "application/octet-stream"
    }
    $response.ContentLength64 = $bytes.Length
    $response.StatusCode = 200
    $response.OutputStream.Write($bytes, 0, $bytes.Length)
  } catch {
    $response.StatusCode = 500
  } finally {
    $response.OutputStream.Close()
  }
}
