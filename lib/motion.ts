/**
 * Motion system: duraciones, easing y variantes estándar para animaciones.
 * Objetivo: coherencia en cards, botones, acordeón y scroll-reveal sin sacrificar performance.
 */

export const MOTION = {
  /** Easing suave para entradas (scroll, modals) */
  easeOut: [0.22, 1, 0.36, 1] as const,
  /** Easing para salidas o microinteracciones */
  easeInOut: [0.4, 0, 0.2, 1] as const,
  /** Duraciones estándar (segundos) */
  duration: {
    fast: 0.25,
    normal: 0.35,
    slow: 0.45,
    section: 0.4
  },
  /** Delays para stagger */
  stagger: {
    child: 0.06,
    card: 0.08
  }
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION.duration.section, ease: MOTION.easeOut }
  }
};

export const cardReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION.duration.normal, ease: MOTION.easeOut }
  }
};

/** Variants para listas con stagger por custom index */
export const listItemReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: MOTION.stagger.child * i,
      duration: MOTION.duration.normal,
      ease: MOTION.easeOut
    }
  })
};

export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION.stagger.card,
      delayChildren: 0.1
    }
  }
};
