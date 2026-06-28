import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Icon from '../primitives/Icon.jsx';
import { services } from '../../data/services.js';

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        center
        eyebrow="What We Build"
        title={<>Full-spectrum engineering,<br />one accountable partner.</>}
        sub="From a weekend MVP to a multi-region enterprise platform — design, build, deploy, and run it with one senior team."
      />
      <div className="grid grid-3">
        {services.map((s, i) => (
          <Reveal as="article" key={s.title} delay={(i % 3) + 1} className="card svc">
            <div className="svc-ico"><Icon name={s.icon} /></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
