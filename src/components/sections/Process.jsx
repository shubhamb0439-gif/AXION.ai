import { Section, SectionHeading } from '../primitives/Section.jsx';
import { useRailProgress } from '../../hooks/useRailProgress.js';
import { phases } from '../../data/process.js';

function PhaseCard({ phase, lit }) {
  return (
    <article className={`phase ${lit ? 'lit' : ''}`.trim()}>
      <span className="node" />
      <div className="phase-card">
        <span className="phase-no">{phase.no}</span>
        <span className="phase-dur">{phase.duration}</span>
        <h3>{phase.title}</h3>
        <ul>
          {phase.activities.map((a) => <li key={a}>{a}</li>)}
        </ul>
        <div className="phase-deliv">
          <b>Deliverables</b>
          {phase.deliverables.map((d) => <span key={d}>{d}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function Process() {
  const { ref, progress } = useRailProgress();
  const litUpTo = Math.round(progress * (phases.length - 1));
  const fillPercent = 15 + progress * 85;

  return (
    <Section id="process">
      <SectionHeading
        eyebrow="The AXION Process"
        title={<>Six phases. One month.<br />Production at the end.</>}
        sub="A transparent path from first conversation to live product — you see working software every single week."
      />
      <div className="process-track" ref={ref}>
        <div className="process-rail">
          <div className="rail-line">
            <div className="fill" style={{ '--p': `${fillPercent}%` }} />
          </div>
          {phases.map((phase, i) => (
            <PhaseCard key={phase.no} phase={phase} lit={i <= litUpTo} />
          ))}
        </div>
      </div>
      <p className="process-hint">↔ DRAG OR SCROLL TO MOVE THROUGH THE PROCESS</p>
    </Section>
  );
}
