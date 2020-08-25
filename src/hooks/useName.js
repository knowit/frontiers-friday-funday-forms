import { useEffect, useState } from "react";

const useName = () => {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleBlur = (e) => {
    setTouched(true);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Replace validation with something messed up.
    if (name.length < 3) {
      errorMessage = "Your name is too short.";
    }

    touched && setError(errorMessage);
  }, [touched, name]);

  return [name, error, handleChange, handleBlur];
};

export default useName;
