"use client";

import React, { useState } from "react";
import { ArrowRight, Loader2, CheckCircle, Globe, Mail, User, Settings } from "lucide-react";

export default function WebsiteAuditForm() {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    email: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.url || !formData.name || !formData.email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const webhookUrl = new URL(
        "https://n8n.socialengagementgroup.com/webhook/96175799-8858-4524-bb52-549b509866c1"
      );
      webhookUrl.searchParams.append("url", formData.url);
      webhookUrl.searchParams.append("name", formData.name);
      webhookUrl.searchParams.append("email", formData.email);

      const fetchPromise = fetch(webhookUrl.toString(), {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      // 20 second artificial delay
      const timerPromise = new Promise((resolve) => setTimeout(resolve, 20000));

      const [response] = await Promise.all([fetchPromise, timerPromise]);

      if (!response.ok) {
        throw new Error("Failed to submit request. Please try again later.");
      }

      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  if (status === "loading") {
    return (
      <div className="w-full max-w-2xl bg-[#141414] rounded-2xl border border-[#00f0ff]/20 p-8 md:p-16 shadow-[0_0_40px_rgba(0,240,255,0.1)] backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[400px]">
        {/* Scanning grid background effect */}
        <div className="absolute inset-0 bg-[url('/assets/images/backgrounds/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-b from-transparent via-[#00f0ff]/10 to-transparent animate-[scan_3s_linear_infinite] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-[#00f0ff]/20 rounded-full blur-xl animate-pulse"></div>
            <Settings className="w-16 h-16 text-[#00f0ff] animate-[spin_3s_linear_infinite] relative z-10" />
            <Settings className="w-8 h-8 text-[#10b981] animate-[spin_2s_linear_infinite_reverse] absolute -bottom-2 -right-2 z-20" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Analyzing 70+ SEO signals...
            </h3>
            <p className="text-[#00f0ff]/80 font-medium animate-pulse">
              This may take a few minutes. Please don&apos;t close this tab.
            </p>
          </div>

          <div className="w-full max-w-sm h-1.5 bg-gray-800 rounded-full overflow-hidden mt-4">
            <div className="h-full bg-gradient-to-r from-[#00f0ff] to-[#10b981] w-full origin-left animate-[scaleX_2s_ease-in-out_infinite_alternate]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="w-full max-w-2xl bg-[#141414] rounded-2xl border border-[#10b981]/20 p-8 md:p-12 shadow-[0_0_40px_rgba(16,185,129,0.1)] backdrop-blur-md relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10">
          <div className="relative">
             <div className="absolute inset-0 bg-[#10b981]/30 rounded-full blur-xl animate-pulse"></div>
             <div className="w-20 h-20 bg-[#10b981]/10 rounded-full flex items-center justify-center border border-[#10b981]/30 relative z-10">
              <CheckCircle className="w-10 h-10 text-[#10b981]" />
             </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white">Analysis Complete!</h3>
          
          <div className="bg-[#10b981]/5 border border-[#10b981]/20 rounded-xl p-6 w-full mt-2">
             <p className="text-gray-300 text-lg leading-relaxed">
               Your customized performance report is being generated and sent to:
               <br />
               <span className="text-[#10b981] font-bold text-xl block mt-2">{formData.email}</span>
             </p>
             <p className="text-[#975554] text-[13px] md:text-sm mt-5">
               Note: It may take a few minutes
             </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl flex flex-col items-center">
      <div className="w-full bg-[#141414] rounded-2xl border border-white/10 hover:border-[#00f0ff]/30 p-8 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden group transition-colors duration-500">
        {/* Tech-glow background subtle on default, bright on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10 w-full">
          <div className="space-y-5">
            {/* URL Input */}
            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Globe className="h-5 w-5 text-gray-500 group-focus-within/input:text-[#00f0ff] transition-colors" />
              </div>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Input */}
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500 group-focus-within/input:text-[#00f0ff] transition-colors" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 group-focus-within/input:text-[#00f0ff] transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                />
              </div>
            </div>
          </div>

          {errorMessage && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm font-medium">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#975554] text-white hover:bg-[#7a4342] py-4 rounded-xl font-bold text-[17px] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#975554]/20 relative z-10 group"
          >
            <span className="relative z-10">Analyze My Website</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}
