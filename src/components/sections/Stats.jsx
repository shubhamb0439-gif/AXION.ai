import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Icon from '../primitives/Icon.jsx';
import { useCountUp } from '../../hooks/useCountUp.js';
import { stats, badges } from '../../data/stats.js';

function Stat({ target, suffix, label }) {
  const { ref, value } = useCountUp(target);
  return (
    <div className="stat">
      <div className="num" ref={ref}>
        {value}
        <span className="suf">{suffix}</span>
      </div>
      <div className="lbl">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <Section id="stats">
      <SectionHeading center eyebrow="Why Clients Choose Us" title="The numbers behind the speed." />
      <Reveal delay="1" className="stats">
        {stats.map((s) => <Stat key={s.label} {...s} />)}
      </Reveal>
      <Reveal delay="2" className="badges">
        {badges.map((b) => (
          <span className="badge" key={b.label}><Icon name={b.icon} />{b.label}</span>
        ))}
      </Reveal>
    </Section>
  );
}
