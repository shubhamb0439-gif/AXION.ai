// Site-wide chrome: navigation, contact channels, footer, socials.
export const navLinks = [
  { href: '#why', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export const contactChannels = [
  { icon: 'cal', title: 'Discovery Call', detail: '30 min · find your fastest path to launch', href: '#' },
  { icon: 'mail', title: 'Email', detail: 'hello@quantumforge.dev', href: 'mailto:hello@quantumforge.dev' },
  { icon: 'phone', title: 'Phone', detail: '+1 (000) 000-0000', href: 'tel:+10000000000' },
  { icon: 'linkedin', title: 'LinkedIn', detail: '/company/quantum-forge', href: '#' },
];

export const footerColumns = [
  { title: 'Company', links: [['#services', 'Services'], ['#industries', 'Industries'], ['#work', 'Case Studies'], ['#contact', 'About']] },
  { title: 'Resources', links: [['#process', 'Our Process'], ['#pricing', 'Pricing'], ['#faq', 'FAQ'], ['#contact', 'Careers']] },
  { title: 'Legal', links: [['#', 'Privacy'], ['#', 'Terms'], ['#contact', 'Contact']] },
];

export const socials = [
  { icon: 'linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'xSocial', label: 'X', href: '#' },
  { icon: 'mail', label: 'Email', href: 'mailto:hello@quantumforge.dev' },
];
