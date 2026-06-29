import Logo from '../brand/Logo.jsx';
import Icon from '../primitives/Icon.jsx';
import { footerColumns, socials } from '../../data/site.js';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="foot-grid">
                    <div className="foot-brand">
                        <Logo />
                        <p>
                            From vision to production — in weeks, not months. AI-accelerated, enterprise-secured
                            software engineering.
                        </p>
                        <div className="foot-tags">
                            <span>DESIGN</span>
                            <span>ENGINEER</span>
                            <span>DEPLOY</span>
                        </div>
                    </div>
                    {footerColumns.map((col) => (
                        <div className="foot-col" key={col.title}>
                            <h5>{col.title}</h5>
                            {col.links.map(([href, label]) => (
                                <a key={label} href={href}>
                                    {label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="foot-bottom">
                    <span>© {new Date().getFullYear()} Quantum Forge. All rights reserved.</span>
                    <div className="socials">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                <Icon name={s.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
