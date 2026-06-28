import Reveal from './Reveal.jsx';

/** Section — consistent vertical rhythm + centered container for every block. */
export function Section({ id, className = '', children }) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      <div className="container">{children}</div>
    </section>
  );
}

/**
 * SectionHeading — eyebrow + title + optional subtitle, revealed on scroll.
 * `title` accepts nodes so callers can colour fragments with <span className="grad-text">.
 */
export function SectionHeading({ eyebrow, title, sub, center = false }) {
  return (
    <Reveal className={`sec-head ${center ? 'center' : ''}`.trim()}>
      <span className={`eyebrow ${center ? 'center' : ''}`.trim()}>{eyebrow}</span>
      <h2 className="sec-title">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </Reveal>
  );
}
