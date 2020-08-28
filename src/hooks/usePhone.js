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

    if (parseInt(phone) < 60000000) {
      errorMessage = "Phone number must be larger than 60 million.";
    }
    if (parseInt(phone) > 80000000) {
      errorMessage = "Phone number must be smaller than 80 million.";
    }
    if (parseInt(phone) > 80000000 && parseInt(phone) < 60000000) {
      errorMessage = "That is not a valid Norwegian phone number.";
    }

    touched && setError(errorMessage);
  }, [touched, phone]);

  return [phone, error, handleChange, handleBlur];
};

export default usePhone;
