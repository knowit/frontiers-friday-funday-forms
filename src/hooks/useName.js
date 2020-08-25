import { useEffect, useState } from "react";

const useName = () => {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameBlur = (e) => {
    setTouched(true);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Add validation on name here.

    touched && setError(errorMessage);
  }, [touched, name]);

  return { name, error, handleNameChange, handleNameBlur };
};

export default useName;
