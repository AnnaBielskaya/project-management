import React from "react";

const VARIANTS = {
  defaultBtn:
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100",
  transparentBtn: "text-stone-800 hover:text-stone-950",
  blackBtn:
    "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 mx-8",
};

const Button = ({ title, variant = "defaultBtn", className, ...props }) => {
  const variantClasses = VARIANTS[variant] || VARIANTS.defaultBtn;

  return (
    <button {...props} className={`${variantClasses} ${className || ""}`}>
      {title}
    </button>
  );
};

export default Button;
