import { useEffect } from "react";

export function useDebouncedEffect(fn: () => void) {
  useEffect(() => {
    const timeout = setTimeout(fn, 2000);
    return () => {
      clearTimeout(timeout);
    }
  }, [fn]);
}