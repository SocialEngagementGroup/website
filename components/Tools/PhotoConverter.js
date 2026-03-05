"use client";

import React, { useState, useRef } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const PhotoConverter = () => {
  const [files, setFiles] = useState([]);
  const [targetFormat, setTargetFormat] = useState("webp");
  const [quality, setQuality] = useState(0.8);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [convertedOutput, setConvertedOutput] = useState(null); // { blob, filename, type: 'single' | 'zip' }
  
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

  const formats = [
    { label: "WEBP", value: "webp", mime: "image/webp" },
    { label: "PNG", value: "png", mime: "image/png" },
    { label: "JPEG", value: "jpeg", mime: "image/jpeg" },
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (selectedFiles) => {
    const validImages = selectedFiles.filter(file => {
      return file.type.startsWith("image/") || file.name.toLowerCase().endsWith(".heic");
    });
    
    if (validImages.length === 0) {
      alert("Please upload valid image files (JPG, PNG, WEBP, HEIC, GIF).");
      return;
    }
    
    // Create preview URLs for the accepted images
    const newFiles = validImages.map(file => ({
      originalFile: file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substring(7)
    }));
    
    setFiles(prev => [...prev, ...newFiles]);
    setConvertedOutput(null); // Reset output when new files are added
  };

  const removeFile = (id) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setConvertedOutput(null);
  };

  const clearAllFiles = () => {
    setFiles([]);
    setConvertedOutput(null);
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const processImage = (fileObj) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = fileObj.preview;
      img.onload = () => {
        const canvas = canvasRef.current;
        let targetWidth = img.width;
        let targetHeight = img.height;

        // For PNG, canvas ignores 'quality' parameter in toBlob. 
        // To give user actual size reduction, we scale down the dimensions based on quality.
        if (targetFormat === "png" && quality < 1) {
             // scale dimensions down proportionally. quality 0.1 = 10% dimensions.
             // taking sqrt of quality so area scales linearly with quality slider.
             const scaleFactor = Math.sqrt(quality);
             targetWidth = Math.max(1, img.width * scaleFactor);
             targetHeight = Math.max(1, img.height * scaleFactor);
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d");

        // Fill with white background in case converting PNG (transparent) to JPG
        if (targetFormat === "jpeg") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        const mimeType = formats.find(f => f.value === targetFormat).mime;
        
        // Export to Blob for JSZip
        // For png, quality is passed but browsers ignore it. The dimension scaling did the work.
        canvas.toBlob((blob) => {
          resolve(blob);
        }, mimeType, quality);
      };
    });
  };

  const convertAllImages = async () => {
    if (files.length === 0) return;
    
    setIsConverting(true);
    setProgress({ current: 0, total: files.length });
    setConvertedOutput(null);
    
    // Single file
    if (files.length === 1) {
        const fileObj = files[0];
        const blob = await processImage(fileObj);
        const baseName = fileObj.originalFile.name.replace(/\.[^/.]+$/, "");
        const newFileName = `${baseName}.${targetFormat}`;
        
        setProgress({ current: 1, total: 1 });
        setConvertedOutput({ blob, filename: newFileName, type: 'single' });
        setIsConverting(false);
        return;
    }
    
    // Bulk files
    const zip = new JSZip();
    for (let i = 0; i < files.length; i++) {
        const fileObj = files[i];
        const blob = await processImage(fileObj);
        const baseName = fileObj.originalFile.name.replace(/\.[^/.]+$/, "");
        const newFileName = `${baseName}.${targetFormat}`;
        zip.file(newFileName, blob);
        setProgress({ current: i + 1, total: files.length });
    }
    
    // Generate ZIP file
    const zipContent = await zip.generateAsync({ type: "blob" });
    setConvertedOutput({ blob: zipContent, filename: "converted-images.zip", type: 'zip' });
    setIsConverting(false);
  };

  const handleDownload = () => {
    if (!convertedOutput) return;
    saveAs(convertedOutput.blob, convertedOutput.filename);
  };

  const originalTotalSize = files.reduce((acc, f) => acc + f.originalFile.size, 0);

  return (
    <div className="w-full relative z-10 animate-fade-in-up">
      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} className="hidden" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-12 md:mt-16">
        {/* Left Side: Upload & Preview List */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-[#111113] border border-white/5 rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group/card shadow-black/50 min-h-[400px] lg:h-[700px] flex flex-col">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center bg-transparent mb-6 md:mb-8 gap-4 text-center sm:text-left">
              <h2 className="text-lg md:text-2xl font-bold text-white tracking-tight">Bulk Upload Photos</h2>
              {files.length > 0 && (
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-xs md:text-sm bg-white/10 text-white px-2 md:px-3 py-1 rounded-full whitespace-nowrap">{files.length} Photo{files.length > 1 ? 's' : ''}</span>
                  <button 
                    onClick={clearAllFiles}
                    className="text-xs md:text-sm bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1 rounded-full transition-colors flex items-center gap-1.5 whitespace-nowrap font-medium"
                  >
                    <svg className="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Clear All
                  </button>
                </div>
              )}
            </div>
            
            {/* Drag Drop Master Zone */}
            <div
              className={`flex-shrink-0 bg-black/40 border border-dashed ${files.length > 0 ? 'border-white/5 p-4 md:p-6 mb-6' : 'border-white/10 p-8 md:p-12'} rounded-3xl text-center cursor-pointer hover:border-[#975554]/50 hover:bg-[#975554]/5 transition-all duration-300`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className={`flex flex-col items-center justify-center ${files.length > 0 ? 'gap-2 md:gap-3' : 'gap-4 md:gap-5'}`}>
                 <div className={`${files.length > 0 ? 'w-8 h-8 md:w-10 md:h-10' : 'w-12 h-12 md:w-16 md:h-16'} rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 shadow-inner`}>
                  <svg className={`${files.length > 0 ? 'w-4 h-4 md:w-5 md:h-5' : 'w-6 h-6 md:w-8 md:h-8'} text-gray-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div>
                  <p className={`${files.length > 0 ? 'text-xs md:text-base' : 'text-base md:text-lg'} text-white font-medium mb-1 whitespace-nowrap md:whitespace-normal`}>
                    Click to upload <span className="hidden md:inline">or drag & drop</span>
                  </p>
                  {files.length === 0 && <p className="text-[10px] md:text-sm text-gray-500">Supports JPG, PNG, WEBP, HEIC, AVIF, GIF in bulk</p>}
                </div>
              </div>
              <input
                type="file"
                multiple
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*,.heic"
              />
            </div>

            {/* Uploaded Files Grid */}
            {files.length > 0 && (
              <div className="overflow-y-auto pr-1 md:pr-2 custom-scrollbar flex-1 min-h-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 pb-4 auto-rows-max">
                  {files.map((fileObj) => (
                    <div key={fileObj.id} className="relative group bg-black/40 rounded-2xl border border-white/5 overflow-hidden aspect-square">
                      <img src={fileObj.preview} alt={fileObj.originalFile.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Hover Overlay with Delete */}
                      <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 md:p-4">
                        <button 
                          onClick={(e) => { e.stopPropagation(); removeFile(fileObj.id); }}
                          className="bg-red-500/80 hover:bg-red-500 text-white p-1.5 md:p-2 rounded-full backdrop-blur-md transition-colors"
                          title="Remove image"
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                        <p className="text-[10px] md:text-xs text-white text-center mt-1 md:mt-2 truncate w-full px-1">{fileObj.originalFile.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Options & Output */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#111113] border border-white/5 rounded-[2.5rem] p-6 md:p-12 shadow-2xl lg:sticky lg:top-24 shadow-black/50 overflow-hidden min-h-[400px] lg:h-[700px] flex flex-col">
             {/* Subtle top glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 tracking-tight text-center lg:text-left">Bulk Settings</h3>
            
            {/* Summary */}
            <div className="bg-black/40 rounded-2xl p-5 mb-8 border border-white/5 flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-500">Total Images</span>
                <span className="text-gray-200 font-medium">{files.length}</span>
              </div>
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-500">Original Size</span>
                <span className="text-gray-200 font-medium">
                  {formatBytes(originalTotalSize)}
                </span>
              </div>
            </div>

            {/* Format Selection */}
            <div className="mb-8">
              <label className="block text-gray-300 text-base md:text-lg font-medium mb-4">Export All To Format</label>
              <div className="grid grid-cols-3 gap-3">
                {formats.map((fmt) => (
                  <button
                    key={fmt.value}
                    onClick={() => {
                      setTargetFormat(fmt.value);
                      setConvertedOutput(null);
                    }}
                    className={`py-3 px-2 rounded-xl text-sm md:text-base font-medium transition-all duration-200 border ${
                      targetFormat === fmt.value
                        ? "bg-[#975554] border-[#975554] text-white shadow-lg shadow-[#975554]/30"
                        : "bg-black/20 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {fmt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Slider (Now enabled for all formats) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <label className="text-gray-300 text-base md:text-lg font-medium">
                   {targetFormat === "png" ? "Image Scale (Size)" : "Image Quality"}
                </label>
                <span className="text-[#975554] font-bold">{Math.round(quality * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.05"
                value={quality}
                onChange={(e) => {
                  setQuality(parseFloat(e.target.value));
                  setConvertedOutput(null);
                }}
                className="w-full accent-[#975554] h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Smaller Files</span>
                <span>{targetFormat === "png" ? "Original Size" : "Better Quality"}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto flex flex-col gap-4">
              <button
                onClick={convertAllImages}
                disabled={files.length === 0 || isConverting}
                className="w-full bg-white text-black hover:bg-gray-200 disabled:bg-gray-700 disabled:text-gray-500 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isConverting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Converting {progress.current} of {progress.total}...
                  </>
                ) : (
                  <>Convert All {files.length > 0 ? `(${files.length})` : ''}</>
                )}
              </button>

              {convertedOutput && (
                <button
                  onClick={handleDownload}
                  className="w-full bg-[#975554] text-white hover:bg-[#7a4342] py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#975554]/20 animate-fade-in-up"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {convertedOutput.type === 'zip' ? "Download All (ZIP)" : "Download Image"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoConverter;
