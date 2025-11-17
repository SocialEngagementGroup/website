import React from "react";

// ✅ Reusable button component with optional icon
const Button = ({ text, icon }) => {
  return (
    // ✅ Button element wrapping an icon (if provided) and text
    <button>
      {/* ✅ Display icon before text */}
      <span>{icon}</span> {text}
    </button>
  );
};

export default Button;
