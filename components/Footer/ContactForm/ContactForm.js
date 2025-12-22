"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Your name is required").min(3, "At least 3 characters"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9+\-()\s]+$/, "Enter a valid phone number"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  business: yup.string().required("Business name is required").min(3, "At least 3 characters"),
  message: yup.string().required("Message cannot be empty").min(10, "Minimum 10 characters"),
});

const ContactForm = ({ layout = "stacked", className = "" }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  // 🔹 Responsive placeholder state
  const [messagePlaceholder, setMessagePlaceholder] = useState("How can we help*");

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth <= 767) {
        setMessagePlaceholder("Your Message*");
      } else {
        setMessagePlaceholder("How can we help*");
      }
    };

    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!result.success) throw new Error(result.error || "Failed to store contact");

      await emailjs.send(
        "service_xa0hl99",
        "template_tzphyus",
        { ...data, time: new Date().toLocaleString() },
        "te0AortVTiyGMk9DL"
      );

      alert("Your message has been sent successfully!");
      reset();
    } catch (err) {
      console.error("Form Error:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  const inputClass =
    "w-full bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-[#c43b3b] transition-all duration-200";

  const textareaClass =
    "w-full min-h-[148px] resize-none bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-3 focus:outline-none focus:border-[#c43b3b] transition-all duration-200";

  return (
    <div
      className={`backdrop-blur-md bg-black/40 rounded-xl border-4 border-gray-700 shadow-lg p-12 ${className}`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {layout === "stacked" ? (
          <div className="flex flex-col space-y-4">
            <div>
              <input type="text" placeholder="Your Name*" {...register("name")} className={inputClass} />
              <p className="text-red-400 text-sm mt-1">{errors.name?.message}</p>
            </div>

            <div>
              <input type="text" placeholder="Phone Number*" {...register("phone")} className={inputClass} />
              <p className="text-red-400 text-sm mt-1">{errors.phone?.message}</p>
            </div>

            <div>
              <input type="email" placeholder="Email Address*" {...register("email")} className={inputClass} />
              <p className="text-red-400 text-sm mt-1">{errors.email?.message}</p>
            </div>

            <div>
              <input type="text" placeholder="Your Business*" {...register("business")} className={inputClass} />
              <p className="text-red-400 text-sm mt-1">{errors.business?.message}</p>
            </div>

            <div>
              <textarea
                placeholder={messagePlaceholder}
                {...register("message")}
                className={textareaClass}
              />
              <p className="text-red-400 text-sm mt-1">{errors.message?.message}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <input type="text" placeholder="Your Name*" {...register("name")} className={inputClass} />
              <p className="text-red-400 text-sm mt-1">{errors.name?.message}</p>
            </div>

            <div>
              <input type="text" placeholder="Phone Number*" {...register("phone")} className={inputClass} />
              <p className="text-red-400 text-sm mt-1">{errors.phone?.message}</p>
            </div>

            <div>
              <input type="email" placeholder="Email Address*" {...register("email")} className={inputClass} />
              <p className="text-red-400 text-sm mt-1">{errors.email?.message}</p>
            </div>

            <div className="md:col-span-2">
              <input type="text" placeholder="Your Business*" {...register("business")} className={inputClass} />
              <p className="text-red-400 text-sm mt-1">{errors.business?.message}</p>
            </div>

            <div className="md:col-span-2">
              <textarea
                placeholder={messagePlaceholder}
                {...register("message")}
                className={textareaClass}
              />
              <p className="text-red-400 text-sm mt-1">{errors.message?.message}</p>
            </div>
          </div>
        )}
        <p className="text-xs text-gray-400 mt-2">
        By submitting this form I consent to processing my personal data as described in the{" "}
        <span className="text-[#c43b3b] underline cursor-pointer">Privacy Policy</span>.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full bg-gradient-to-r from-[#6a1b1b] to-[#c43b3b] text-white font-semibold py-2 rounded-md hover:opacity-90 transition-all duration-200 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
