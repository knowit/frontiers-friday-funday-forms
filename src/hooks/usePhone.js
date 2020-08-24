import { useEffect, useState } from "react";

const usePhone = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    let errorMessage = null;

    // TODO: Add validation on phone here.

    setError(errorMessage);
  }, [phone]);

  return [phone, handleChange, error];
};

export default usePhone;
