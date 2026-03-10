"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/validationSchema";

const ContactForm = ({ layout = "stacked", className = "" }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    shouldUseNativeValidation: false,
  });

  const [status, setStatus] = useState('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setStatus('idle');
    setMounted(true);
  }, []);


  const onSubmit = async (data) => {
    setStatus('loading');
    
    if (!executeRecaptcha) {
      setStatus('error');
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");
      if (!token) {
        throw new Error("reCAPTCHA failed");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          pageUrl: window.location.href,
          recaptchaToken: token,
        }),
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#975554]/50 focus:bg-white/10 transition-all font-light";
  const textareaClass = "w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#975554]/50 focus:bg-white/10 transition-all font-light min-h-[130px] resize-none";
  const labelClass = "text-sm font-medium text-gray-300 ml-1 block mb-[6px]";

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      {!mounted ? (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center gap-4">
             <div className="h-4 w-48 bg-white/5 rounded-full" />
             <div className="h-4 w-64 bg-white/5 rounded-full" />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          
          {/* ✅ Grid matching Marketing desktop split layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            <div className="space-y-2 relative">
              <label className={labelClass}>Full Name*</label>

              <input
                type="text"
                placeholder="John Doe"
                {...register("name")}
                required
                minLength={3}
                className={inputClass}
              />
            </div>

            <div className="space-y-2 relative">
              <label className={labelClass}>Your Business*</label>

              <input
                type="text"
                placeholder="Company Name"
                {...register("business")}
                required
                minLength={3}
                className={inputClass}
              />
            </div>

            <div className="space-y-2 relative">
              <label className={labelClass}>Email*</label>

              <input
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                required
                className={inputClass}
              />
            </div>

            <div className="space-y-2 relative">
              <label className={labelClass}>Mobile*</label>

              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                {...register("phone")}
                required
                className={inputClass}
              />
            </div>

          </div>

          <div className="space-y-2 relative mt-4">
            <label className={labelClass}>Message*</label>

            <textarea
              placeholder="Tell us about your project..."
              {...register("message")}
              required
              minLength={10}
              rows={4}
              className={textareaClass}
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>Something went wrong. Please try again.</span>
            </div>
          )}

          {/* ✅ Muted Brick Button Matching the Screenshot */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full md:w-auto cursor-pointer font-bold py-4 px-8 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${
                status === 'success' 
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-600/20' 
                  : 'bg-[#975554] text-white hover:bg-white hover:text-[#975554] shadow-[#975554]/20'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span>Sending...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <span>Message Sent</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </>
              )}
            </button>
          </div>

        </form>
      )}
    </div>
  );
};

export default ContactForm;
