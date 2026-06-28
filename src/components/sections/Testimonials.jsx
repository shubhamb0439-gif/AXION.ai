import { SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Icon from '../primitives/Icon.jsx';
import { testimonials } from '../../data/testimonials.js';

const initials = (name) => name.split(' ').map((n) => n[0]).join('');

function Quote({ item }) {
  return (
    <div className="quote">
      <div className="stars">
        {Array.from({ length: 5 }).map((_, i) => <Icon name="star" key={i} />)}
      </div>
      <p>"{item.quote}"</p>
      <div className="who">
        <div className="av">{initials(item.name)}</div>
        <div>
          <b>{item.name}</b>
          <span>{item.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Doubled so the CSS marquee loops seamlessly.
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Testimonials"
          title={<>Trusted by teams who<br />can't afford to get it wrong.</>}
        />
      </div>
      <Reveal delay="1" className="marquee">
        <div className="marquee-row">
          {loop.map((item, i) => <Quote item={item} key={i} />)}
        </div>
      </Reveal>
    </section>
  );
}
