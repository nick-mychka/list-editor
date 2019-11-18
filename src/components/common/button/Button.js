import React from "react";

const Button = props => {
  const { children, btnVariant = "btn-primary", clicked, disabled } = props;

  return (
    <button
      type="button"
      onClick={clicked}
      disabled={disabled}
      className={`btn btn-sm ${btnVariant}`}
    >
      {children}
    </button>
  );
};

export default Button;
