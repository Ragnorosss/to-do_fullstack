import { motion } from 'framer-motion';
import { forwardRef, type InputHTMLAttributes } from 'react';

// Определяем пропсы для input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <input ref={ref} {...props} />;
  }
);

export const MInput = motion(Input);
