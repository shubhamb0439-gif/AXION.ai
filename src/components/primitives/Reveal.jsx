import { useReveal } from '../../hooks/useReveal.js';

/**
 * Reveal — wraps any content and fades/slides it in on scroll. The animation
 * mechanism lives in the useReveal hook; this component only declares intent.
 *
 * `as` lets a caller keep semantic markup (e.g. an <article>) while still
 * getting the reveal behaviour — Open/Closed without subclassing.
 */
export default function Reveal({ as: Tag = 'div', delay, className = '', children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} data-d={delay} {...rest}>
      {children}
    </Tag>
  );
}
