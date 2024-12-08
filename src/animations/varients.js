const SectionVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      delay: 0.3,
      damping: 10,
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 200,
    },
  },
  viewport: { once: true },
};

export const pulseIcon = {
  initial: { scale: 0 },
  animate: { scale: [0, 1, 0.8, 1] },
  transition: {
    repeat: Infinity,
    duration: 1,
    ease: "easeInOut",
  },
};

export const fadeInButton = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.5, delay: 2.0 },
  },
  viewport: { once: true },
};

export const CardHoverVariants = {
  hidden: { scale: 1 },
  hover: {
    scale: 1.04,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};
export const CardHoverVariantsTwo = {
  hidden: { y: 0 },
  hover: {
    y: -8,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export default SectionVariants;
