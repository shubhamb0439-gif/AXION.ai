import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import { techStack } from '../../data/techStack.js';

export default function TechStack() {
  return (
    <Section id="stack">
      <SectionHeading
        center
        eyebrow="Technology Stack"
        title={<>Modern by default.<br />Battle-tested by choice.</>}
        sub="We pick the right tool for your problem — not whatever's trending. Here's what we reach for most."
      />
      <Reveal delay="1" className="tech-cols">
        {techStack.map((col) => (
          <div className="tech-col" key={col.category}>
            <h4>{col.category}</h4>
            {col.items.map((item) => (
              <div className="chip" key={item}><i />{item}</div>
            ))}
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
