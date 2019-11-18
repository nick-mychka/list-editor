import React from "react";

const Input = props => {
  const {
    onChange,
    onKeyUp,
    value,
    name,
    type = "text",
    placeholder = "Add item"
  } = props;

  return (
    <input
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      autoFocus
      className="form-control form-control-sm"
    />
  );
};

export default Input;