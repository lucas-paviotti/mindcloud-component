import React from "react";
import "./Button.styles.css";

export const Button = ({ variant = "default", children, ...restProps }) => {
  return (
    <button {...restProps} className={`button ${variant}`}>
      {children}
    </button>
  );
};
