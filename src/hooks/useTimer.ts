import { useState } from "react";
import { useInterval } from "./useInterval";

export function useTimer(baseDuration: number, start: boolean) {
  const [duration, setDuration] = useState(baseDuration);
  useInterval(
    () => {
      setDuration((prev) => {
        return prev - 1;
      });
    },
    duration > 0 && start ? 1000 : null
  );
  const resetTimer = (newDuration?: number) => {
    setDuration(newDuration || baseDuration);
  };
  return { duration, resetTimer };
}
