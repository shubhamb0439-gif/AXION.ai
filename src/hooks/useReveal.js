import { useEffect, useRef } from 'react';

/**
 * Returns a ref; when the element scrolls into view it gains the `in` class
 * (the CSS handles the actual transition). Self-unobserving — fires once.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
