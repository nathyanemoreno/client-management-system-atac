import { useCallback, useEffect, useRef } from "react";

export const useClickOutside = (callback: VoidFunction, enabled = true) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    if (enabled) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [enabled, handleClickOutside]);

  return selectRef;
};
