import { useEffect, useState } from "react";

const useName = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Add validation on name here.

    setError(errorMessage);
  }, [name]);

  return [name, handleChange, error];
};

export default useName;
