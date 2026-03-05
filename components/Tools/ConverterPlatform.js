"use client";

import React, { useState } from "react";
import PhotoConverter from "./PhotoConverter";

export default function ConverterPlatform() {
  const [activeTool, setActiveTool] = useState("photo");
  const tools = [
    {
      id: "photo",
      name: "Photo",
      shortName: "Photo",
      icon: (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      disabled: false,
    },
    {
      id: "video",
      name: "Video & Audio",
      shortName: "Video & Audio",
      icon: (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      disabled: true,
    },
    {
      id: "document",
      name: "Document",
      shortName: "Document",
      icon: (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      disabled: true,
    },

    {
      id: "units",
      name: "Units",
      shortName: "Units",
      icon: (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      disabled: true,
    },
  ];

  return (
    <div className="w-full relative z-10 transition-all duration-500">
      
      {/* Platform Header & Stats */}
      <div className="flex flex-col items-center justify-center mb-8 md:mb-16 gap-3 md:gap-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight px-2">
          Media Conversion Platform
        </h1>
        <p className="text-gray-400 mt-1 md:mt-2 max-w-2xl px-6 text-xs md:text-base leading-relaxed">
          Convert and optimize your media files instantly with professional-grade quality. Secure, fast, and completely private—your files never leave your device.
        </p>
      </div>

      {/* Tool Selection Modern Navigation Pill Row */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => !tool.disabled && setActiveTool(tool.id)}
            className={`flex flex-row items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 relative group
              ${activeTool === tool.id 
                ? "bg-[#975554] shadow-lg shadow-[#975554]/20 z-10" 
                : "bg-white/5 hover:bg-white/10 border border-white/5"}
            `}
          >
            <div className={`${activeTool === tool.id ? "text-white" : "text-gray-400 group-hover:text-white"} transition-colors flex items-center gap-3`}>
              {tool.icon}
              <span className="text-sm md:text-base font-semibold tracking-wide">
                 {tool.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Active Tool Workspace */}
      <div className="min-h-[500px] w-full mt-12 relative animate-fade-in-up">
        {activeTool === "photo" && <PhotoConverter />}
        
        {/* Placeholder for other tools */}
        {activeTool !== "photo" && (
           <div className="flex flex-col items-center justify-center h-[400px] rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
             <div className="w-16 h-16 rounded-full border-t-2 border-l-2 border-[#975554] animate-spin mb-6"></div>
             <h3 className="text-2xl font-bold text-white tracking-tight">Loading {tools.find(t => t.id === activeTool)?.shortName} Converter...</h3>
             <p className="text-gray-400 mt-2">This feature is currently under development.</p>
           </div>
        )}
      </div>


    </div>
  );
}
