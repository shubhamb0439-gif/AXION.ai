import { Section, SectionHeading } from '../primitives/Section.jsx';
import Reveal from '../primitives/Reveal.jsx';
import Button from '../primitives/Button.jsx';
import Icon from '../primitives/Icon.jsx';
import { plans } from '../../data/pricing.js';

function Plan({ plan }) {
    return (
        <div className={`card plan ${plan.featured ? 'feat' : ''}`.trim()}>
            <div className="ptag">
                {plan.tag}
                {plan.badge && <span className="pop">{plan.badge}</span>}
            </div>
            <div className="pname">{plan.name}</div>
            <div className="pprice">
                {plan.price}
                <small> {plan.priceNote}</small>
            </div>
            <p className="pdesc">{plan.desc}</p>
            <ul>
                {plan.features.map((f) => (
                    <li key={f}>
                        <Icon name="check" />
                        {f}
                    </li>
                ))}
            </ul>
            <Button href={plan.cta.href || '#contact'} variant={plan.cta.variant} arrow={plan.cta.arrow}>
                {plan.cta.label}
            </Button>
        </div>
    );
}

export default function Pricing() {
    return (
        <Section id="pricing">
            <SectionHeading
                center
                eyebrow="Pricing"
                title={
                    <>
                        Transparent engagements,
                        <br />
                        no surprise invoices.
                    </>
                }
                sub="Clear scope, fixed milestones, weekly demos. Pick the model that matches where you are."
            />
            <Reveal delay="1" className="price-grid">
                {plans.map((plan) => (
                    <Plan key={plan.name} plan={plan} />
                ))}
            </Reveal>
        </Section>
    );
}
