import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting form.", { name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Name: "
        onChange={handleNameChange}
        type="text"
        value={name}
      />

      <button type="submit">Submit form</button>
    </form>
  );
};

export default Form;
