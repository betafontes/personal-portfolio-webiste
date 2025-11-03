'use client';

import { NavItem } from './nav-item';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Projetos', href: '/projects' },
  { label: 'Download CV', href: '/cv-roberta-santos.pdf', target: '_blank' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNavigateHome = () => {
    setMenuOpen(false);
    router.push('/');
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-[100] h-14 flex items-center justify-between px-6 sm:px-10 backdrop-blur-md transition-colors duration-300 ${
        menuOpen ? 'bg-slate-900/95' : 'bg-gray/30'
      }`}
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        onClick={handleNavigateHome}
        className="text-[18px] csm:text-[17px] font-mono font-semibold text-pink-400 cursor-pointer hover:opacity-80 transition-opacity"
        initial={false}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -10 : 0 }}
        transition={{ duration: 0.4 }}
      >
        Portfó
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
          lio.
        </span>
      </motion.h1>

      <motion.h1
        onClick={handleNavigateHome}
        className="absolute left-6 sm:left-10 text-[18px] csm:text-[17px] font-mono font-semibold text-pink-400 cursor-pointer hover:opacity-80 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 10 }}
        transition={{ duration: 0.4 }}
      >
        Bem-
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
          vindo!
        </span>
      </motion.h1>

      <button
        className="sm:hidden text-white text-2xl hover:opacity-80 transition-opacity z-[110]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav className="hidden sm:flex items-center gap-3 sm:gap-6">
        {NAV_ITEMS.map((item) => (
          <NavItem {...item} key={item.label} target={item.target} rel="noopener noreferrer" />
        ))}
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-14 bg-slate-900/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 sm:hidden z-[105]"
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                onClick={() => setMenuOpen(false)}
                className="w-full flex justify-center"
              >
                <NavItem {...item} target={item.target} rel="noopener noreferrer" />
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
