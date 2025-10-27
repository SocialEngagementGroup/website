"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser"; // Client-side EmailJS

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Your name is required").min(3, "At least 3 characters"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9+\-()\s]+$/, "Enter a valid phone number"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  message: yup.string().required("Message cannot be empty").min(10, "Minimum 10 characters"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      // 1️⃣ Store contact in Supabase
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!result.success) throw new Error(result.error || "Failed to store contact");

      // 2️⃣ Send email using EmailJS (client-side)
      await emailjs.send(
        "service_xa0hl99",                 // Service ID
        "template_tzphyus",                // Template ID
        { ...data, time: new Date().toLocaleString() }, // Template params
        "te0AortVTiyGMk9DL"                // Public Key
      );

      alert("Your message has been sent successfully!");
      reset();
    } catch (err) {
      console.error("Form Error:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="backdrop-blur-md bg-black/40 rounded-xl border-4 border-gray-700 shadow-lg p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Name*"
            {...register("name")}
            className="w-full bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-[#c43b3b] transition-all duration-200"
          />
          <p className="text-red-400 text-sm mt-1">{errors.name?.message}</p>
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            placeholder="Phone Number*"
            {...register("phone")}
            className="w-full bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-[#c43b3b] transition-all duration-200"
          />
          <p className="text-red-400 text-sm mt-1">{errors.phone?.message}</p>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address*"
            {...register("email")}
            className="w-full bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-3 focus:outline-none focus:border-[#c43b3b] transition-all duration-200"
          />
          <p className="text-red-400 text-sm mt-1">{errors.email?.message}</p>
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Your Message*"
            {...register("message")}
            className="w-full textarea min-h-[172px] resize-none bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-3 focus:outline-none focus:border-[#c43b3b] transition-all duration-200"
          />
          <p className="text-red-400 text-sm mt-1">{errors.message?.message}</p>
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-gray-400 mt-2">
          By submitting this form I consent to processing my personal data as described in the{" "}
          <span className="text-[#c43b3b] underline cursor-pointer">Privacy Policy</span>.
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 bg-gradient-to-r from-[#6a1b1b] to-[#c43b3b] text-white font-semibold py-2 rounded-md hover:opacity-90 transition-all duration-200 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
