import { useEffect, useRef } from "react";

function useTimeout(callback, delay) {
  const timeoutRef = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    timeoutRef.current = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(timeoutRef.current);
  }, [delay]);

  return () => clearTimeout(timeoutRef.current);
}

export default useTimeout;
