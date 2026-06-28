import { useRef, useState } from 'react';
import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import { faqs } from '../../data/faqs.js';

/** Each item owns its own open/closed state — independent and self-contained. */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef(null);
  return (
    <div className={`faq ${open ? 'open' : ''}`.trim()}>
      <button className="faq-q" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {q}
        <span className="faq-ico" />
      </button>
      <div
        className="faq-a"
        ref={answerRef}
        style={{ maxHeight: open ? answerRef.current?.scrollHeight : 0 }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <Section id="faq">
      <SectionHeading center eyebrow="FAQ" title="Questions, answered." />
      <Reveal delay="1" className="faq-wrap">
        {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
      </Reveal>
    </Section>
  );
}
