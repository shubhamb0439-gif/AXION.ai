import { motion } from 'framer-motion';

const markVariants = {
  rest: { rotate: 0, scale: 1, filter: 'drop-shadow(0 4px 14px rgba(99, 102, 241, 0.55))' },
  hover: {
    rotate: [0, -2, 2, 0],
    scale: 1.05,
    filter: 'drop-shadow(0 6px 22px rgba(139, 92, 246, 0.75))',
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
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

/** Full lockup: single AXION logo image + tagline. */
export default function Logo({ href = '#top', onClick }) {
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
      <motion.small
        className="brand-tagline"
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        animate={{ opacity: 1, letterSpacing: '0.32em' }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      >
        BUILD · AUTOMATE · ELEVATE
      </motion.small>
    </motion.a>
  );
}
