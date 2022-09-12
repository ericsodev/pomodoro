import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, interval: number | null) {
  const saved = useRef<any>();

  useEffect(() => {
    saved.current = callback;
  });

  useEffect(() => {
    function tick() {
      saved.current();
    }
    if (interval !== null) {
      let id = setInterval(tick, interval);
      return () => {
        console.log("cleared");
        clearInterval(id);
      };
    }
  }, [interval]);
}
