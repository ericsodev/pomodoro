import { useState, useEffect } from "react";

export default function useTabFocus(): boolean {
  const [isFocused, setIsFocused] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener("focus", () => setIsFocused(true));
    window.addEventListener("blur", () => setIsFocused(false));

    return () => {
      window.removeEventListener("focus", () => setIsFocused(true));
      window.removeEventListener("blur", () => setIsFocused(false));
    };
  });

  return isFocused;
}
