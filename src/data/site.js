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
    {
        icon: 'cal',
        title: 'Discovery Call',
        detail: '30 min · find your fastest path to launch',
        href: 'https://calendly.com/d/d3f4-5n8-bnd',
    },
    {
        icon: 'mail',
        title: 'Email',
        detail: 'quantum.forge.hmsb@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=quantum.forge.hmsb@gmail.com&su=Enquiry',
    },
    { icon: 'phone', title: 'Phone', detail: '+91 86609 63056', href: 'tel:+918660963056' },
    { icon: 'linkedin', title: 'LinkedIn', detail: '/company/quantum-forge', href: '#' },
];

export const footerColumns = [
    {
        title: 'Company',
        links: [
            ['#services', 'Services'],
            ['#industries', 'Industries'],
            ['#work', 'Case Studies'],
            ['#contact', 'About'],
        ],
    },
    {
        title: 'Resources',
        links: [
            ['#process', 'Our Process'],
            ['#pricing', 'Pricing'],
            ['#faq', 'FAQ'],
            ['#contact', 'Careers'],
        ],
    },
    {
        title: 'Legal',
        links: [
            ['#', 'Privacy'],
            ['#', 'Terms'],
            ['#contact', 'Contact'],
        ],
    },
];

export const socials = [
    { icon: 'linkedin', label: 'LinkedIn', href: '#' },
    { icon: 'xSocial', label: 'X', href: '#' },
    {
        icon: 'mail',
        label: 'Email',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=quantum.forge.hmsb@gmail.com&su=Enquiry',
    },
];
