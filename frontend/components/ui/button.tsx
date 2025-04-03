import { motion } from 'framer-motion';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

// Исправленный интерфейс
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export const MButton = motion(Button);
