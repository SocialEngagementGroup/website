"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuArrowUpRight } from "react-icons/lu";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const [status, setStatus] = useState("idle");

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      const queryParams = new URLSearchParams({
        Email: data.email,
        "Lead From": window.location.href,
        Date: new Date().toISOString().split("T")[0],
      }).toString();

      const response = await fetch(
        `https://n8n.socialengagementgroup.com/webhook/f919de32-0556-47c2-ad79-460241398f9d?${queryParams}`,
        {
          method: "GET",
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
      <span className="text-[10px] md:text-[11px] font-extrabold text-white/70 tracking-[0.2em] uppercase whitespace-nowrap">
        Newsletter
      </span>
      <div className="flex flex-col justify-center w-full max-w-2xl min-h-[44px]">
        {status === "success" ? (
          <div className="text-green-400/90 text-[14px] font-medium animate-fade-in flex items-center justify-center gap-2 bg-white/[0.05] border border-white/10 rounded-lg px-6 py-2 w-full h-[41px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
            Thank You for Subscribing!
          </div>
        ) : (
          <div className="relative w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-stretch bg-white/[0.05] border border-white/10 rounded-lg overflow-hidden focus-within:border-white/20 transition-all w-full"
            >
              <input
                type="email"
                placeholder="Email address"
                {...register("email", { required: true })}
                className="flex-[5] bg-transparent px-6 py-2 text-white placeholder:text-gray-500 focus:outline-none text-[14px]"
                required
                suppressHydrationWarning
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex-none bg-[#975554] hover:bg-white hover:text-[#975554] text-white px-4 py-2 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap !text-[16px] font-bold"
              >
                {status === "loading" ? (
                  "..."
                ) : (
                  <>
                    Subscribe <LuArrowUpRight size={18} />
                  </>
                )}
              </button>
            </form>
            {status === "error" && (
              <span className="text-red-400 text-[12px] animate-fade-in mt-1 absolute left-0 -bottom-6">
                Something went wrong. Please try again.
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
