import { useEffect, useRef, useState } from 'react';

/**
 * Tracks horizontal scroll progress of a scrollable element (the process rail)
 * and returns { ref, progress } where progress is 0..1. Components derive the
 * fill width and which phases are "lit" from this single value.
 */
export function useRailProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return { ref, progress };
}
