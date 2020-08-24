import t from "prop-types";
import React from "react";

const Input = (props) => {
  const { error, id, label, onChange, type, value, ...rest } = props;
  return (
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={onChange} type={type} value={value} {...rest} />
      {error && <p>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  error: t.string,
  id: t.string.isRequired,
  label: t.string.isRequired,
  onChange: t.func.isRequired,
  type: t.oneOf(["email", "tel", "text"]),
  value: t.string,
};

Input.defaultProps = {
  type: "text",
  value: "",
};

export default Input;