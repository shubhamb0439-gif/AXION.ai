import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

/**
 * Magnetic hover: nudges the element toward the pointer on fine-pointer devices.
 * Pass `false` to opt out. No-op under reduced motion or on touch.
 */
export function useMagnetic(enabled = true) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || reduced) return;
    if (!matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${
        (e.clientY - r.top - r.height / 2) * 0.3
      }px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.style.transform = '';
    };
  }, [enabled, reduced]);

  return ref;
}
