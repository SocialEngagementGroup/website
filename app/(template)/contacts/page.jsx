'use client';

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/validationSchema"; // Adjust the import path accordingly
import ReCAPTCHA from "react-google-recaptcha";
import { Icon } from "@iconify/react";
import Div from "@/app/(site)/UI/MarketingUI/ui/Div";
import SectionHeading from "@/app/(site)/UI/MarketingUI/ui/SectionHeading";
import Spacing from "@/app/(site)/UI/MarketingUI/ui/Spacing";
import ContactInfoWidget from "@/app/(site)/UI/MarketingUI/ui/Widget/ContactInfoWidget";

const AnimatedDots = () => {
  return (
    <span className="dots" aria-hidden="true">
      <span className="dot">.</span>
      <span className="dot dot2">.</span>
      <span className="dot dot3">.</span>
    </span>
  );
};

export default function ContactPage({ layout = "stacked", className = "" }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",  // Validation happens only when submitting the form
    shouldUseNativeValidation: false, // 👈 browser tooltips
  });

  // Define formData to store form state
  const [formResponse, setFormResponse] = useState(null);
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
    setFormResponse(null); // Reset previous form response

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
      setFormResponse(result);

      if (!result.success) throw new Error();

      reset();
      recaptchaRef.current?.reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        setFormResponse(null);
      }, 3000);
    } catch (error) {
      setFormResponse({
        success: false,
        error: "Something went wrong. Please try again later.",
      });
      recaptchaRef.current?.reset();
    }
  };

  const inputClass =
    "w-full bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-[#c43b3b] transition-all duration-200";

  const textareaClass =
    "w-full min-h-[148px] resize-none bg-transparent border border-gray-500 text-gray-100 placeholder-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-[#c43b3b] transition-all duration-200";

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit(onSubmit)} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="name"
                  {...register("name")}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="email"
                  className="cs-form_field"
                  name="email"
                  {...register("email")}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Phone*</label>
                <input
                  type="tel"
                  className="cs-form_field"
                  name="phone"
                  {...register("phone")}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Business Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="business"
                  {...register("business")}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  name="message"
                  {...register("message")}
                  required
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>

              {/* Conditionally render reCAPTCHA */}
              {canShowCaptcha && (
                <Div className="col-sm-12">
                  <div className="recaptcha flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={siteKey} // Use your actual reCAPTCHA site key here
                      theme="dark"
                      onChange={() => {}}
                    />
                    {formResponse?.success === false && (
                      <p className="text-red-400 text-sm mt-2">Please verify that you are human.</p>
                    )}
                  </div>
                </Div>
              )}

              <Div className="col-sm-12">
                <button
                  type="submit"
                  className="cs-btn cs-style1"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>

            {/* Success Message */}
            {formResponse && formResponse.success === true && (
              <div className="success-message-container bg-green-500 text-white p-4 rounded-lg mt-4 flex items-center justify-between">
                <p className="success-message flex items-center">
                  <Icon icon="bi:check-circle" className="mr-2" />
                  Your message has been sent successfully!
                </p>
              </div>
            )}

            {formResponse && formResponse.success === false && (
              <p className="error-message">{formResponse.error}</p>
            )}
          </Div>
        </Div>
      </Div>
    </>
  );
}
