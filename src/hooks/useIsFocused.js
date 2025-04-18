import { useEffect, useState } from "react";

export const useIsFocused = () => {
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    const onPageShow = (event) => {
      if (event.persisted) {
        setIsFocused(false);
      }
    };

    window.addEventListener("pageshow", onPageShow);

    const onVisibilityChange = () => {
      setTimeout(() => setIsFocused(!document.hidden), 100);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return isFocused;
};
