// The six delivery phases shown on the horizontal forge rail.
export const phases = [
  {
    no: 'PHASE 01', duration: '3 DAYS', title: 'Discovery & Planning',
    activities: ['Business discovery', 'Requirements', 'Tech consultation', 'Architecture', 'Risk assessment', 'Stack selection'],
    deliverables: ['Roadmap', 'Technical proposal', 'Cost estimate'],
  },
  {
    no: 'PHASE 02', duration: '3 DAYS', title: 'UX Strategy & Validation',
    activities: ['Wireframes', 'UI concepts', 'Interactive prototype', 'Stakeholder feedback', 'Iterations', 'Final approval'],
    deliverables: ['Clickable prototype', 'Validated flows'],
  },
  {
    no: 'PHASE 03', duration: 'WEEK 2', title: 'Rapid Design Sprint',
    activities: ['Modern UI design', 'Design system', 'Component library', 'Responsive layouts', 'Hi-fi screens', 'Animations'],
    deliverables: ['Design system', 'Production-ready screens'],
  },
  {
    no: 'PHASE 04', duration: 'WEEK 3', title: 'AI-Accelerated Development',
    activities: ['React / Next.js', 'TypeScript', 'Tailwind', 'Backend integration', 'Auth & APIs', 'Database', 'Testing'],
    deliverables: ['Working application', 'Test coverage'],
  },
  {
    no: 'PHASE 05', duration: 'WEEK 4', title: 'Enterprise Engineering',
    activities: ['Security hardening', 'Code review', 'Performance', 'Azure / AWS', 'CI/CD', 'Containerization', 'Monitoring'],
    deliverables: ['Hardened infra', 'CI/CD pipeline', 'Documentation'],
  },
  {
    no: 'PHASE 06', duration: 'GO LIVE', title: 'Launch & Support',
    activities: ['Production deploy', 'Domain & SSL', 'Monitoring', 'Optimization', 'Team training', 'Knowledge transfer'],
    deliverables: ['Live product', 'Handover', 'Ongoing support'],
  },
];
