import { useEffect, useState } from "react";

const useEmail = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = (e) => {
    setTouched(true);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Add validation on email here.

    touched && setError(errorMessage);
  }, [touched, email]);

  return { email, error, handleEmailChange, handleEmailBlur };
};

export default useEmail;
