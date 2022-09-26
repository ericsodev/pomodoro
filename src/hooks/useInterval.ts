import { useEffect, useRef } from "react";

export function useInterval(
  callback: () => void,
  interval: number | null,
): void {
  const saved = useRef<any>();

  useEffect(() => {
    saved.current = callback;
  });

  useEffect(() => {
    function tick(): any {
      saved.current();
    }
    if (interval !== null) {
      const id = setInterval(tick, interval);
      return () => {
        clearInterval(id);
      };
    }
  }, [interval]);
}
