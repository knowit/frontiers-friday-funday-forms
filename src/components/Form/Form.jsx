import React from "react";
import { useEmail, useName, usePhone } from "../../hooks";
import Button from "../Button";
import Input from "../Input";
import Wrapper from "../Wrapper";
import StyledForm from "./Form.styles";

const Form = () => {
  const [name, handleNameChange, nameError] = useName();
  const [email, handleEmailChange, emailError] = useEmail();
  const [phone, handlePhoneChange, phoneError] = usePhone();
  const error = !!(nameError || emailError || phoneError);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting form.", { name, email, phone });
  };

  return (
    <Wrapper narrow>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          error={nameError}
          id="name"
          label="Name: "
          onChange={handleNameChange}
          placeholder="Name"
          type="text"
          value={name}
        />

        <Input
          error={emailError}
          id="email"
          label="Email: "
          onChange={handleEmailChange}
          placeholder="Email"
          type="email"
          value={email}
        />

        <Input
          error={phoneError}
          id="phone"
          label="Phone: "
          onChange={handlePhoneChange}
          placeholder="Phone"
          type="tel"
          value={phone}
        />

        <Button disabled={error} type="submit">
          Submit form
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default Form;
