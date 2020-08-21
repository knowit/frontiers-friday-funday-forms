import React, { useState } from "react";
import TextInput from "./TextInput";

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
      <TextInput
        id="name"
        label="Name: "
        onChange={handleNameChange}
        value={name}
      />

      <button type="submit">Submit form</button>
    </form>
  );
};

export default Form;
