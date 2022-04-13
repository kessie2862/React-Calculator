import React from "react";
import "./Button.css";

function isOperator(val) {
  return !isNaN(val) || val === "." || val === "=";
}

function Button(props) {
  return (
    <div
      className={`Button-wrapper ${
        isOperator(props.children) ? null : "Operator"
      }`}
    >
      {props.children}
    </div>
  );
}

export default Button;
