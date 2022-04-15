import React from "react";
import "./Button.css";

function isOperator(val) {
  return !isNaN(val) || val === "." || val === "=" || val === "CLEAR";
}

function Button(props) {
  return (
    <div
      className={`Button-wrapper ${
        isOperator(props.children) ? null : "Operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
