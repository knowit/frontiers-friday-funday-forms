import t from "prop-types";
import React from "react";

const TextInput = (props) => {
  const { id, label, onChange, value, ...rest } = props;
  return (
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={onChange} value={value} {...rest} />
    </div>
  );
};

TextInput.propTypes = {
  id: t.string.isRequired,
  label: t.string.isRequired,
  onChange: t.func.isRequired,
  value: t.string,
};

TextInput.defaultProps = {
  value: "",
};

export default TextInput;
