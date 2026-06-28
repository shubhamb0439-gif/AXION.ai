import { Section } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Button from '../primitives/Button.jsx';
import Icon from '../primitives/Icon.jsx';
import { contactChannels } from '../../data/site.js';

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal className="contact-card">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">Let's Build</span>
            <h2 style={{ marginTop: 18 }}>From vision to production — starting this week.</h2>
            <p className="sec-sub">
              Tell us what you're building. We'll come back within one business day with a clear path,
              timeline, and estimate. No obligation, no jargon.
            </p>
            <div className="hero-cta">
              <Button href="mailto:hello@quantumforge.dev" variant="primary" arrow magnetic>
                Book Consultation
              </Button>
            </div>
          </div>
          <div className="channels">
            {contactChannels.map((c) => (
              <a className="chan" href={c.href} key={c.title}>
                <span className="chan-ico"><Icon name={c.icon} /></span>
                <div>
                  <b>{c.title}</b>
                  <span>{c.detail}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
