import { useEffect, useState } from "react";

const useName = () => {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    let newName = `${e.target.value}`;
    newName = newName.toUpperCase().split("").sort().join("").toLowerCase();
    setName(newName.charAt(0).toUpperCase() + newName.slice(1));
  };

  const handleBlur = (e) => {
    setTouched(true);
  };

  useEffect(() => {
    let errorMessage = null;

    if (name.length > 0) {
      errorMessage = "That can't be right. No lollygagging!";
    }

    touched && setError(errorMessage);
  }, [touched, name]);

  return [name, error, handleChange, handleBlur];
};

export default useName;
