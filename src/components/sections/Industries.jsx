import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Icon from '../primitives/Icon.jsx';
import { industries } from '../../data/industries.js';

export default function Industries() {
  return (
    <Section id="industries">
      <SectionHeading
        eyebrow="Industries"
        title={<>Built for regulated,<br />high-stakes domains.</>}
        sub="We've shipped into environments where downtime, security gaps, and compliance failures aren't an option."
      />
      <Reveal delay="1" className="ind-grid">
        {industries.map((ind) => (
          <div className="ind" key={ind.name}>
            <Icon name={ind.icon} />
            <span>{ind.name}</span>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
