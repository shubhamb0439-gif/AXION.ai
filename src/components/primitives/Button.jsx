import Icon from './Icon.jsx';
import { useMagnetic } from '../../hooks/useMagnetic.js';

/**
 * Button — one component, swappable variants (Liskov: any variant is a drop-in
 * for another through the same props). Renders an <a> by default since every
 * call site here is a navigation/CTA link.
 */
export default function Button({
    children,
    href = '#',
    variant = 'primary',
    icon,
    arrow = false,
    magnetic = false,
    className = '',
    ...rest
}) {
    const ref = useMagnetic(magnetic && variant === 'primary');
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    return (
        <a
            ref={ref}
            href={href}
            className={`btn btn-${variant} ${className}`.trim()}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            {...rest}
        >
            {icon && <Icon name={icon} />}
            {children}
            {arrow && (
                <span className="btn-arrow">
                    <Icon name="arrow" />
                </span>
            )}
        </a>
    );
}
