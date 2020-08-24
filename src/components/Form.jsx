import React from "react";
import { useEmail, useName, usePhone } from "../hooks";
import Input from "./Input";

const Form = () => {
  const [name, handleNameChange, nameError] = useName();
  const [email, handleEmailChange, emailError] = useEmail();
  const [phone, handlePhoneChange, phoneError] = usePhone();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting form.", { name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        error={nameError}
        id="name"
        label="Name: "
        onChange={handleNameChange}
        type="text"
        value={name}
      />

      <Input
        error={emailError}
        id="email"
        label="Email: "
        onChange={handleEmailChange}
        type="email"
        value={email}
      />

      <Input
        error={phoneError}
        id="phone"
        label="Phone: "
        onChange={handlePhoneChange}
        type="tel"
        value={phone}
      />

      <button type="submit">Submit form</button>
    </form>
  );
};

export default Form;
