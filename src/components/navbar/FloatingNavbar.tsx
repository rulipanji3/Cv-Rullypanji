import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, User, Briefcase, Mail, Home } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavItem {

  id: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Beranda', icon: <Home className="w-4 h-4" /> },
  { id: 'about', label: 'About Me', icon: <User className="w-4 h-4" /> },
  { id: 'portfolio', label: 'Portfolio', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'contact', label: 'Kontak', icon: <Mail className="w-4 h-4" /> },
];

export const FloatingNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Floating Navbar Container Centered at Top */}
      <motion.nav
        initial={{ y: -60, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ duration: 0.8, type: 'spring', damping: 20 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-fit"
      >
        <div
          className={`relative flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 backdrop-blur-2xl ${
            isScrolled
              ? 'bg-[#060c1d]/90 border border-[#2c67ed]/60 shadow-[0_0_30px_rgba(44,103,237,0.45)]'
              : 'bg-[#081026]/75 border border-[#2c67ed]/40 shadow-[0_0_22px_rgba(44,103,237,0.35)] hover:shadow-[0_0_32px_rgba(44,103,237,0.55)]'
          }`}
        >
          {/* Logo / Brand with Cosmic Pulse */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 pr-2 sm:pr-4 group text-left cursor-pointer border-r border-white/10"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#2c67ed] to-cyan-400 p-0.5 shadow-[0_0_12px_rgba(44,103,237,0.7)] group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-[#050b1a] rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-sm tracking-wider text-white group-hover:text-blue-400 transition-colors">
                {PERSONAL_INFO.name.toUpperCase()}<span className="text-[#2c67ed]">.DEV</span>
              </span>
            </div>

          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2c67ed]/40 to-[#2c67ed]/20 border border-[#2c67ed]/80 shadow-[0_0_15px_rgba(44,103,237,0.5)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA Hubungi / Status Badge on Desktop */}
          <div className="hidden md:flex items-center pl-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#2c67ed] to-blue-600 hover:from-blue-600 hover:to-cyan-500 shadow-[0_0_16px_rgba(44,103,237,0.6)] hover:shadow-[0_0_24px_rgba(56,189,248,0.7)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-[#2c67ed] shadow-[0_0_10px_rgba(44,103,237,0.5)] cursor-pointer"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm bg-[#081026]/95 backdrop-blur-2xl border border-[#2c67ed]/50 rounded-2xl p-4 shadow-[0_10px_40px_rgba(44,103,237,0.3)] md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#2c67ed]/25 text-white border border-[#2c67ed]/60 shadow-[0_0_15px_rgba(44,103,237,0.4)]'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-[#2c67ed]">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
