import { cn } from '@/app/lib/utils';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-transparent border-2 border-gray-700 text-gray-200 py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:border-gray-400 hover:text-white transition-all disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
