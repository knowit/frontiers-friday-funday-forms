import { useEffect, useState } from "react";

const useError = (...errors) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const hasError = errors.map((e) => !!e).find((e) => e === true) || false;
    error !== hasError && setError(hasError);
  }, [error, errors]);

  return error;
};

export default useError;
