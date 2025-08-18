import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Simple reveal-on-scroll wrapper. Animates its children with a fade and slight translate.
 * Usage: wrap content and optionally set props for direction/offset.
 */
const Reveal = ({ children, from = "up", distance = 24, duration = 0.8, delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const y = from === "up" ? distance : from === "down" ? -distance : 0;
    const x = from === "left" ? distance : from === "right" ? -distance : 0;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [from, distance, duration, delay]);

  return <div ref={containerRef}>{children}</div>;
};

export default Reveal;


