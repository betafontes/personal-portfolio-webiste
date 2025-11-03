import { cn } from '@/app/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  href: string;
  label: string;
  target?: string;
  rel?: string;
};

export const NavItem = ({ label, href, target }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-mono font-medium text-[16px] hover:text-gray-200 transition-all',
        isActive && 'text-gray-200'
      )}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <span className="text-pink-400">#</span>
      {label}
    </Link>
  );
};
