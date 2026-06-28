import { useState } from 'react';
import Logo from '../brand/Logo.jsx';
import Button from '../primitives/Button.jsx';
import { useScrolled } from '../../hooks/useScrolled.js';
import { navLinks } from '../../data/site.js';

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`.trim()}>
        <div className="nav-inner">
          <Logo onClick={close} />
          <div className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="nav-cta">
            <Button href="#contact" variant="primary" arrow>Start Your Project</Button>
          </div>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`.trim()}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`.trim()}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <Button href="#contact" variant="primary" onClick={close}>Start Your Project</Button>
      </div>
    </>
  );
}
