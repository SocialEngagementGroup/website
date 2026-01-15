"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/validationSchema"; // Adjust the import path accordingly
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./contactForm.module.css";
const AnimatedDots = () => {
  return (
    <span className={styles.dots} aria-hidden="true">
      <span className={styles.dot}>.</span>
      <span className={`${styles.dot} ${styles.dot2}`}>.</span>
      <span className={`${styles.dot} ${styles.dot3}`}>.</span>
    </span>
  );
};

const ContactForm = ({ layout = "stacked", className = "" }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",  // Validation happens only when submitting the form
    shouldUseNativeValidation: false, // 👈 browser tooltips
  });

  const recaptchaRef = useRef(null);
  const [captchaError, setCaptchaError] = useState("");

  const [messagePlaceholder, setMessagePlaceholder] = useState("How can we help*");

  useEffect(() => {
    const updatePlaceholder = () => {
      setMessagePlaceholder(window.innerWidth <= 767 ? "Your Message*" : "How can we help*");
    };
    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  const values = watch();
  const canShowCaptcha =
    isValid &&
    values?.name &&
    values?.phone &&
    values?.email &&
    values?.business &&
    values?.message;

  useEffect(() => {
    if (!canShowCaptcha) {
      recaptchaRef.current?.reset();
      setCaptchaError("");
    }
  }, [canShowCaptcha]);

  const onSubmit = async (data) => {
    setCaptchaError("");

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setCaptchaError("Please verify that you are human.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      });

      const result = await response.json();
      if (!result.success) throw new Error();

      alert("Your message has been sent successfully!");
      reset();
      recaptchaRef.current?.reset();
    } catch {
      alert("Something went wrong. Please try again later.");
      recaptchaRef.current?.reset();
    }
  };

  const inputClass =
    "w-full bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-[#c43b3b] transition-all duration-200";

  const textareaClass =
    "w-full min-h-[148px] resize-none bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-3 focus:outline-none focus:border-[#c43b3b] transition-all duration-200";

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <div className={`backdrop-blur-md bg-black/40 rounded-xl border-4 border-gray-700 shadow-lg p-12 ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name*"
          {...register("name")}
          required
          minLength={3}
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Phone Number*"
          {...register("phone")}
          required
          className={inputClass}
        />

        <input
          type="email"
          placeholder="Email Address*"
          {...register("email")}
          required
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Your Business*"
          {...register("business")}
          required
          minLength={3}
          className={inputClass}
        />

        <textarea
          placeholder={messagePlaceholder}
          {...register("message")}
          required
          minLength={10}
          className={textareaClass}
        />

        {/* CAPTCHA */}
        {!siteKey ? (
          <p className="text-red-400 text-sm">
            Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY
          </p>
        ) : canShowCaptcha ? (
          <div className="recaptcha flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={siteKey}
              theme="dark"
            />
            {captchaError && (
              <p className="text-red-400 text-sm mt-2">
                {captchaError}
              </p>
            )}
          </div>
        ) : null}

   <button
  type="submit"
  disabled={isSubmitting}
  className="mt-2 cursor-pointer w-full bg-gradient-to-r from-[#6a1b1b] to-[#c43b3b] text-white font-semibold py-2 rounded-md hover:opacity-90 transition-all duration-200 disabled:opacity-50"
>
  {isSubmitting ? (
    <span className="inline-flex items-center justify-center gap-1">
      <span>Submitting</span>
      <AnimatedDots />
    </span>
  ) : (
    "SUBMIT"
  )}
</button>

      </form>
    </div>
  );
};

export default ContactForm;
