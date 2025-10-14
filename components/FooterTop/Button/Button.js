import React from "react";


const Button = ({ text, icon }) => {
  return (
    <button >
      <span>{icon}</span> {text}
    </button>
  );
};

export default Button;
