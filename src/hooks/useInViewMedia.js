import { useEffect } from "react";

/**
 * Auto-pause/play a media element when it leaves/enters the viewport.
 * Does nothing if ref is null.
 */
export default function useInViewMedia(ref, options = {}) {
  useEffect(() => {
    const element = ref?.current;
    if (!element || typeof IntersectionObserver === "undefined") return undefined;

    const { root = null, rootMargin = "0px 0px -25% 0px", threshold = 0.25 } = options;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (typeof element.play === "function") {
            element.play().catch(() => {});
          }
        } else {
          if (typeof element.pause === "function") {
            element.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
}


