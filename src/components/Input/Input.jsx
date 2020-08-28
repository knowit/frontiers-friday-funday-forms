import t from "prop-types";
import React from "react";
import { Error } from "../Typography";
import StyledInput, { InputWrapper, Label } from "./Input.styles";

const Input = (props) => {
  const { error, id, label, opacity, onChange, type, value, ...rest } = props;
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        error={!!error}
        opacity={opacity}
        onChange={onChange}
        type={type}
        value={value}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};

Input.propTypes = {
  error: t.string,
  id: t.string.isRequired,
  label: t.string.isRequired,
  onChange: t.func.isRequired,
  opacity: t.number,
  type: t.oneOf(["email", "tel", "text"]),
  value: t.string,
};

Input.defaultProps = {
  opacity: 1,
  type: "text",
  value: "",
};

export default Input;
