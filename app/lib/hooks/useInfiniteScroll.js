import { useEffect, useRef, useCallback } from "react";

export const useInfiniteScroll = (callback, options = {}) => {
  const observerTarget = useRef(null);
  const { threshold = 0.1 } = options;
  const lastCallTime = useRef(0);

  const handleIntersection = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        const now = Date.now();
        // Debounce: evita llamadas múltiples en menos de 300ms
        if (now - lastCallTime.current > 300) {
          lastCallTime.current = now;
          callback();
        }
      }
    },
    [callback],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return observerTarget;
};
