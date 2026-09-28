import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Icon from '../primitives/Icon.jsx';
import { liveSites } from '../../data/showcase.js';

// Strip protocol, "www." and trailing slash for a clean display label.
const domainOf = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export default function Showcase() {
  return (
    <Section id="portfolio">
      <SectionHeading
        eyebrow="Portfolio"
        title="Live and in production."
        sub="A few of the sites we've built for our clients — click through and see them running."
      />
      <div className="live-grid">
        {liveSites.map((site, i) => (
          <Reveal
            as="a"
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            delay={(i % 4) + 1}
            className="card live"
          >
            <span className="port-tag">{site.tag}</span>
            <h3>{site.name}</h3>
            <span className="live-url">{domainOf(site.url)}</span>
            <span className="live-cta">Visit site <Icon name="arrow" /></span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
