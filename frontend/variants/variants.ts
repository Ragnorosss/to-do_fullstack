export const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      when: "beforeChildren", 
      staggerChildren: 0.4, 
    },
  },
  out: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};
export const childVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  out: { opacity: 0, y: -20 },
};
export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};