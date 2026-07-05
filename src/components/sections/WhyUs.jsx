import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Icon from '../primitives/Icon.jsx';
import { traditional, axion } from '../../data/comparison.js';

function Column({ data, variant, iconName }) {
  return (
    <div className={`cmp ${variant}`}>
      <h3>{data.heading}</h3>
      <div className="big">{data.headline}</div>
      <ul>
        {data.points.map((p) => (
          <li key={p}><Icon name={iconName} />{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyUs() {
  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why AXION"
        title={<>A different equation for<br />shipping software.</>}
        sub="Traditional delivery burns months and budget before you see anything real. We compress the timeline without compromising the engineering underneath."
      />
      <Reveal delay="1" className="compare">
        <Column data={traditional} variant="old" iconName="x" />
        <div className="cmp-vs"><span>VS</span></div>
        <Column data={axion} variant="new" iconName="check" />
      </Reveal>
    </Section>
  );
}
