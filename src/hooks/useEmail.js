import { useEffect, useState } from "react";

const useEmail = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBlur = (e) => {
    setTouched(true);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Replace validation with something messed up.
    if (
      // eslint-disable-next-line no-control-regex
      !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        email
      )
    ) {
      errorMessage = "Email is not valid.";
    }
    touched && setError(errorMessage);
  }, [touched, email]);

  return [email, error, handleChange, handleBlur];
};

export default useEmail;
