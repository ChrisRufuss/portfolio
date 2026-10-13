import { useState, useEffect } from 'react';

/**
 * Custom hook to detect when an element scrolls into the viewport.
 * Automatically respects prefers-reduced-motion.
 */
export function useIntersectionObserver(options = {}) {
  const [element, setElement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, stop observing
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.15,
      ...options,
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [element, options]);

  return [setElement, isVisible];
}
