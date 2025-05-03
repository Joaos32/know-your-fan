import { Button } from '@mantine/core';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export default function AnimatedButton({ children, ...props }) {
  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      {...props}
    >
      {children}
    </MotionButton>
  );
}
