import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeoutIDRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutIDRef.current) {
        clearTimeout(timeoutIDRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutIDRef.current) {
      clearTimeout(timeoutIDRef.current);
    }

    timeoutIDRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
