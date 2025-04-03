import { Link, NavLink } from 'react-router';
import type { Route } from '../+types/root';
import { motion } from 'framer-motion';
import { containerVariants } from 'variants/variants';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About' },
    { name: 'description', content: 'Welcome to about page' },
  ];
}

export default function About() {
  const MotionPage = motion.main;

  return (
    <MotionPage
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <NavLink to="/" end>
        Home
      </NavLink>
    </MotionPage>
  );
}
