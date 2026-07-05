import { motion } from 'framer-motion';

const markVariants = {
  rest: { rotate: 0, scale: 1, filter: 'drop-shadow(0 4px 14px rgba(99, 102, 241, 0.55))' },
  hover: {
    rotate: [0, -4, 3, 0],
    scale: 1.08,
    filter: 'drop-shadow(0 6px 22px rgba(139, 92, 246, 0.75))',
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * i, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

export function LogoMark({ className = 'mark' }) {
  return (
    <motion.img
      className={className}
      src="/axion-logo.png"
      alt="AXION logo"
      variants={markVariants}
      initial="rest"
      whileHover="hover"
    />
  );
}

/** Full lockup: mark + AXION wordmark + tagline. */
export default function Logo({ href = '#top', onClick }) {
  const word = 'AXION'.split('');

  return (
    <motion.a
      href={href}
      className="brand"
      aria-label="AXION home"
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <LogoMark />
      <span className="word">
        <motion.span className="q" style={{ display: 'inline-flex' }}>
          {word.map((ch, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letter}
              initial="hidden"
              animate="show"
              style={{ display: 'inline-block' }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.span>
        <motion.small
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.32em' }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          BUILD · AUTOMATE · ELEVATE
        </motion.small>
      </span>
    </motion.a>
  );
}
