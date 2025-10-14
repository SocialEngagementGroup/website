"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation Schema
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
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // later you can integrate Supabase or API call here
    reset();
  };

  return (
       <div className=" backdrop-blur-md bg-black/40  rounded-xl border-4 border-gray-700 shadow-lg p-8">
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
              className="w-full bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-[#c43b3b] transition-all duration-200"
            />
            <p className="text-red-400 text-sm mt-1">{errors.email?.message}</p>
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Your Message*"
              {...register("message")}
              rows={4}
              className="w-full bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-[#c43b3b] transition-all duration-200"
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

          {isSubmitSuccessful && (
            <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
          )}
        </form>
      </div>
  );
};

export default ContactForm;
