"use client";

import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
