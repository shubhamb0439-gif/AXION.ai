import { Section } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <Reveal className="philo">
        <span className="eyebrow center">Our Philosophy</span>
        <h2 style={{ marginTop: 20 }}>
          AI Builds <span className="grad-text">Faster.</span>
          <br />
          Engineers Build <span className="grad-text">Stronger.</span>
        </h2>
        <p>
          We don't replace engineers with AI. We amplify experienced engineers with AI-powered
          workflows — collapsing delivery timelines while holding the line on enterprise-grade quality,
          security, and scale.
        </p>
        <p>
          Every application is professionally reviewed, architected, tested, and deployed using the same
          best practices that hold up under audit, traffic, and time.
        </p>
      </Reveal>
    </Section>
  );
}
