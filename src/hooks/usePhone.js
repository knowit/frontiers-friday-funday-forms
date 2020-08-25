import { useEffect, useState } from "react";

const usePhone = () => {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePhoneBlur = (e) => {
    setTouched(true);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Add validation on phone here.

    touched && setError(errorMessage);
  }, [touched, phone]);

  return { phone, error, handlePhoneChange, handlePhoneBlur };
};

export default usePhone;
