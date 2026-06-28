// Pricing tiers. `featured` controls the highlighted middle card.
export const plans = [
  {
    tag: 'Starter', featured: false,
    name: 'MVP Sprint', price: '$4,500', priceNote: 'starting',
    desc: 'Ideal for MVPs, internal platforms, and getting a real product in front of users fast.',
    features: ['MVP & business applications', 'Custom dashboards', 'Internal platforms', 'Responsive design system', 'Cloud deployment included'],
    cta: { label: 'Start a Sprint', variant: 'ghost', arrow: false },
  },
  {
    tag: 'Professional', featured: true, badge: 'MOST POPULAR',
    name: 'Enterprise Build', price: 'Custom', priceNote: 'scoped to you',
    desc: 'For large platforms, regulated systems, and mission-critical software that has to hold up.',
    features: ['Enterprise systems & large platforms', 'Healthcare, insurance, ERP, CRM', 'Cloud migration & modernization', 'Security hardening & compliance', 'Dedicated senior engineering team'],
    cta: { label: 'Book a Discovery Call', variant: 'primary', arrow: true },
  },
  {
    tag: 'Managed', featured: false,
    name: 'Run & Scale', price: 'Monthly', priceNote: 'retainer',
    desc: 'Keep it fast, secure, and evolving after launch with a dedicated managed service.',
    features: ['Cloud hosting & infrastructure', 'Monitoring & server maintenance', 'Security updates', 'Performance optimization', 'Ongoing feature enhancements'],
    cta: { label: 'Talk Managed Services', variant: 'ghost', arrow: false },
  },
];
