import { ICONS, STROKE } from '../brand/iconRegistry.jsx';

/**
 * Icon — the single component that knows how to turn a registry entry into SVG.
 * Consumers reference glyphs by name only (`<Icon name="cloud" />`), which keeps
 * them decoupled from SVG markup and lets colour stay a CSS concern.
 */
export default function Icon({ name, className, ...rest }) {
  const glyph = ICONS[name];
  if (!glyph) {
    if (import.meta.env?.DEV) console.warn(`Icon "${name}" is not registered.`);
    return null;
  }
  const filled = glyph.fill;
  return (
    <svg
      className={className}
      viewBox={glyph.vb || '0 0 24 24'}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={filled ? undefined : glyph.sw || 1.7}
      {...(filled ? {} : STROKE)}
      aria-hidden="true"
      {...rest}
    >
      {glyph.body}
    </svg>
  );
}
