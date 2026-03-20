import { useLenis } from "./useLenis";

// Default easing function for Lenis
const defaultEasing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

/**
 * Hook to scroll to a section using Lenis smooth scrolling
 * @param {string} id - The element ID to scroll to
 * @param {object} options - Scroll options
 */
export const useScrollTo = () => {
  const lenis = useLenis();

  const scrollTo = (id, options = {}) => {
    if (!lenis) {
      // Fallback to native scroll if Lenis not available
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const scrollOptions = {
        offset: options.offset || 0,
        duration: options.duration || 1.2,
        easing: options.easing || defaultEasing,
        ...options,
      };
      lenis.scrollTo(element, scrollOptions);
    }
  };

  return scrollTo;
};
