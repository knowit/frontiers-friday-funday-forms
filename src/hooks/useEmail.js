import { useEffect, useState } from "react";

const useEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Add validation on email here.

    setError(errorMessage);
  }, [email]);

  return [email, handleChange, error];
};

export default useEmail;
