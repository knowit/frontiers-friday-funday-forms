import { useEffect, useState } from "react";

const usePhone = () => {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleBlur = (e) => {
    setTouched(true);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Replace validation with something messed up.
    if (phone.length < 8) {
      errorMessage = "Phone number is too short.";
    }
    if (phone.length > 8) {
      errorMessage = "Phone number is too long.";
    }

    touched && setError(errorMessage);
  }, [touched, phone]);

  return [phone, error, handleChange, handleBlur];
};

export default usePhone;
