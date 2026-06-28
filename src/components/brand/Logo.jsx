export function LogoMark({ className = 'mark' }) {
  return (
    <img className={className} src="/QF.png" alt="Quantum Forge logo" />
  );
}

/** Full lockup: mark + QUANTUM FORGE wordmark + tagline. */
export default function Logo({ href = '#top', onClick }) {
  return (
    <a href={href} className="brand" aria-label="Quantum Forge home" onClick={onClick}>
      <LogoMark />
      <span className="word">
        <span className="q">QUANTUM</span> <span className="f">FORGE</span>
        <small>DESIGN · DEVELOP · DEPLOY</small>
      </span>
    </a>
  );
}
