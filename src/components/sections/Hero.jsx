import OrbitalCanvas from './OrbitalCanvas.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Button from '../primitives/Button.jsx';
import Icon from '../primitives/Icon.jsx';
import { capabilities, heroTrust } from '../../data/capabilities.js';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <OrbitalCanvas />
      <div className="hero-fade" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <Reveal>
              <span className="hero-badge"><span className="dot" />AI-ACCELERATED · ENTERPRISE-SECURED</span>
            </Reveal>
            <Reveal as="h1" delay="1">
              <span className="line">Build Enterprise</span>
              <span className="line">Software in <span className="grad-text">Weeks,</span></span>
              <span className="line"><span className="grad-text">Not Months.</span></span>
            </Reveal>
            <Reveal as="p" delay="2" className="lead">
              Quantum Forge turns ideas into secure, scalable, production-ready software — pairing
              AI-assisted development with senior enterprise engineering. From vision to production, fast.
            </Reveal>
            <Reveal delay="3" className="hero-cta">
              <Button href="#contact" variant="primary" arrow magnetic>Start Your Project</Button>
              <Button href="#contact" variant="ghost" icon="cal">Schedule Discovery Call</Button>
            </Reveal>
            <Reveal delay="4" className="hero-trust">
              {heroTrust.map((t, i) => (
                <span key={t.label} style={{ display: 'contents' }}>
                  <span><b>{t.value}</b> {t.label}</span>
                  {i < heroTrust.length - 1 && <span className="sep" />}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay="2" className="cap-stack">
            {capabilities.map((c) => (
              <div className="cap cap-float" key={c.title}>
                <span className="cap-ico"><Icon name={c.icon} /></span>
                <div><b>{c.title}</b><span>{c.sub}</span></div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </header>
  );
}
