import { useCallback } from "react";
import { useFocusEffect } from "./useFocusEffect";

export const useRevertChangePage = (defaultColor) => {
  useFocusEffect(
    useCallback(() => {
      const pageTransition = document.querySelector("[data-page-transition]");

      if (pageTransition) {
        pageTransition.classList.remove("show");
        const colorClass = pageTransition.classList.value
          .split(" ")
          .find((className) => {
            return className.includes("page-transition--");
          });

        if (colorClass) {
          pageTransition.classList.remove(colorClass);
        }
      }

      if (defaultColor) {
        const body = document.body;

        body && setTimeout(() => (body.className = defaultColor), 400);
      }
    }, [defaultColor]),
  );
};
