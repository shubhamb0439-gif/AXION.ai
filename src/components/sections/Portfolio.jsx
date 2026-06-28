import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import { projects } from '../../data/portfolio.js';

function ProjectCard({ project }) {
  return (
    <>
      <div className="port-top">
        <span className="port-tag">{project.tag}</span>
        <div className="port-out">
          <b>{project.metric}</b>
          <span>{project.metricLabel}</span>
        </div>
      </div>
      <h3>{project.title}</h3>
      <div className="timeline">⏱ {project.timeline} to production</div>
      <div className="ps"><b>Problem.</b> {project.problem}</div>
      <div className="ps"><b>Solution.</b> {project.solution}</div>
      <div className="ptech">
        {project.tech.map((t) => <span key={t}>{t}</span>)}
      </div>
    </>
  );
}

export default function Portfolio() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title="Shipped. Scaled. Still running."
        sub="A snapshot of platforms we've taken from whiteboard to production — with the outcomes that mattered to the business."
      />
      <div className="port-grid">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.title} delay={(i % 2) + 1} className="card port">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
