# =============================================================================
# SEG Website — Video Transcoding Script
# Converts all .webm files to H.264 MP4 for iOS/Safari compatibility
# and extracts poster frames (first frame as .jpg)
#
# Requirements: FFmpeg must be installed and available in PATH
#   Download: https://ffmpeg.org/download.html
#   Or via winget: winget install Gyan.FFmpeg
#
# Usage: Run from the project root (c:\Users\pc\Desktop\SEG\website\)
#   powershell -ExecutionPolicy Bypass -File .\scripts\transcode-videos.ps1
# =============================================================================

$videosDir = Join-Path $PSScriptRoot "..\public\assets\videos"
$videosDir = Resolve-Path $videosDir

Write-Host ""
Write-Host "========================================" -ForegroundColor Yellow
Write-Host " SEG Video Transcoding Pipeline" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Yellow
Write-Host "Source directory: $videosDir"
Write-Host ""

# Check FFmpeg is available
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] FFmpeg not found in PATH." -ForegroundColor Red
    Write-Host "Install via: winget install Gyan.FFmpeg" -ForegroundColor Red
    Write-Host "Then restart your terminal and re-run this script." -ForegroundColor Red
    exit 1
}

$webmFiles = Get-ChildItem -Path $videosDir -Recurse -Filter "*.webm"
$total = $webmFiles.Count
$done  = 0
$failed = @()

Write-Host "Found $total .webm files to process." -ForegroundColor Cyan
Write-Host ""

foreach ($file in $webmFiles) {
    $done++
    $inputPath  = $file.FullName
    $mp4Path    = $inputPath -replace '\.webm$', '.mp4'
    $posterPath = $inputPath -replace '\.webm$', '-poster.jpg'
    $label      = "$done/$total — $($file.Name)"

    Write-Host "[$label]" -ForegroundColor Cyan

    # ── MP4 (H.264) Transcode ──────────────────────────────────────────────
    if (Test-Path $mp4Path) {
        Write-Host "  MP4 already exists, skipping transcode." -ForegroundColor DarkGray
    } else {
        Write-Host "  Transcoding → $($file.Name -replace '.webm','.mp4') ..." -NoNewline

        $ffmpegArgs = @(
            "-i", $inputPath,
            "-c:v", "libx264",
            "-preset", "slow",
            "-crf", "23",
            "-profile:v", "baseline",
            "-level", "3.0",
            "-pix_fmt", "yuv420p",   # Required for iOS Safari
            "-movflags", "+faststart", # MOOV atom first — enables streaming
            "-an",                   # No audio (decorative videos are muted)
            "-y",                    # Overwrite without asking
            $mp4Path
        )

        $result = & ffmpeg @ffmpegArgs 2>&1
        if ($LASTEXITCODE -eq 0) {
            $sizeMB = [math]::Round((Get-Item $mp4Path).Length / 1MB, 2)
            Write-Host " done ($sizeMB MB)" -ForegroundColor Green
        } else {
            Write-Host " FAILED" -ForegroundColor Red
            $failed += $file.Name
        }
    }

    # ── Poster Frame Extraction ────────────────────────────────────────────
    if (Test-Path $posterPath) {
        Write-Host "  Poster already exists, skipping." -ForegroundColor DarkGray
    } else {
        Write-Host "  Extracting poster frame ..." -NoNewline

        $posterArgs = @(
            "-i", $inputPath,
            "-vframes", "1",
            "-q:v", "2",   # High quality JPEG
            "-y",
            $posterPath
        )

        $posterResult = & ffmpeg @posterArgs 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host " done" -ForegroundColor Green
        } else {
            Write-Host " FAILED" -ForegroundColor Yellow
        }
    }

    Write-Host ""
}

# ── Summary ────────────────────────────────────────────────────────────────
Write-Host "========================================" -ForegroundColor Yellow
Write-Host " Transcoding Complete" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Yellow
Write-Host "Processed: $total files"

if ($failed.Count -gt 0) {
    Write-Host "Failed ($($failed.Count)):" -ForegroundColor Red
    $failed | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
} else {
    Write-Host "All files processed successfully." -ForegroundColor Green
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Verify .mp4 files appeared alongside .webm in public/assets/videos/"
Write-Host "  2. Test on iOS Safari using BrowserStack or a real device"
Write-Host "  3. Restart the dev server: npm run dev"
