import { useEffect, useState } from "react";
import { useInterval } from "./useInterval";

interface useTimerReturn {
  timeRemaining: number
  resetTimer: (newDuration?: number) => void
}
export function useTimer(
  baseDuration: number,
  start: boolean,
  callback?: () => void,
): useTimerReturn {
  const [timeRemaining, setTimeRemaining] = useState(baseDuration);
  const [inProgress, setInProgress] = useState(start);

  useEffect(() => {
    if (!inProgress) {
      setTimeRemaining(baseDuration);
    }
  }, [baseDuration, inProgress]);

  useEffect(() => {
    if (start) {
      setInProgress(true);
    }
  }, [start, setInProgress]);

  useEffect(() => {
    if (timeRemaining === 0 && callback != null && inProgress) {
      callback();
    }
  }, [timeRemaining, callback, inProgress]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setInProgress(false);
    }
  }, [setInProgress, timeRemaining]);
  useInterval(
    () => {
      setTimeRemaining((prev) => {
        return prev - 1;
      });
    },
    timeRemaining > 0 && start ? 1000 : null,
  );
  const resetTimer = (newDuration?: number): void => {
    setTimeRemaining(newDuration ?? baseDuration);
    setInProgress(false);
  };
  return { timeRemaining, resetTimer };
}
