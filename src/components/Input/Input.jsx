import t from "prop-types";
import React from "react";
import StyledInput, { InputWrapper, Label } from "./Input.styles";

const Input = (props) => {
  const { error, id, label, onChange, type, value, ...rest } = props;
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        isError={!!error}
        onChange={onChange}
        type={type}
        value={value}
        {...rest}
      />
      {error && <p>{error}</p>}
    </InputWrapper>
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
