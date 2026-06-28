import { useRef } from 'react';
import { useOrbitalField } from '../../hooks/useOrbitalField.js';

/** The hero's animated constellation. Markup-thin; all logic is in the hook. */
export default function OrbitalCanvas() {
  const ref = useRef(null);
  useOrbitalField(ref);
  return <canvas ref={ref} className="orbital" aria-hidden="true" />;
}
