import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

/**
 * Counts from 0 to `target` (eased) the first time the element is visible.
 * Returns { ref, value }. Respects reduced-motion by snapping to the target.
 */
export function useCountUp(target, { duration = 1400 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.unobserve(el);
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, reduced]);

  return { ref, value };
}
