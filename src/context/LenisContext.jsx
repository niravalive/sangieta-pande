import { createContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext(undefined);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Initialize Lenis with specified settings
    const lenisInstance = new Lenis({
      duration: 1.2, // Between 1.1-1.3 as specified
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease-in-out exponential
      smoothWheel: true, // Enable smooth wheel scrolling
      smoothTouch: false, // Disable smooth touch (as specified)
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    // Use requestAnimationFrame for performant scrolling
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links - Lenis automatically handles hash links
    // Ensure anchor links work smoothly
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
            lenisInstance.scrollTo(element, {
              offset: -80,
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};
