import { useEffect } from "react";

import { useIsFocused } from "./useIsFocused";

export const useFocusEffect = (cb) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      return cb();
    }
  }, [cb, isFocused]);
};
