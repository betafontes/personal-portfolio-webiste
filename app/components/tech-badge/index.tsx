'use client';

import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="text-purple-100 bg-gray-700/80 text-base py-1 px-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-all"
      {...props}
    >
      {name}
    </motion.span>
  );
};
