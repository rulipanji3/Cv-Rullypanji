import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Sparkles, Code2, Layers, Zap, Globe } from 'lucide-react';

import { PERSONAL_INFO } from '../../data/portfolioData';
import { TypewriterText } from './TypewriterText';

const FLOATING_BADGES = [
  { icon: <Code2 className="w-3.5 h-3.5" />, label: 'React', color: '#61dafb', cls: 'float-1', pos: 'top-[8%] left-[5%]' },
  { icon: <Layers className="w-3.5 h-3.5" />, label: 'TypeScript', color: '#3178c6', cls: 'float-2', pos: 'top-[15%] right-[3%]' },
  { icon: <Zap className="w-3.5 h-3.5" />, label: 'Framer', color: '#bb4bff', cls: 'float-3', pos: 'bottom-[20%] left-[2%]' },
  { icon: <Globe className="w-3.5 h-3.5" />, label: 'Laravel', color: '#f05340', cls: 'float-4', pos: 'bottom-[10%] right-[4%]' },
];

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#2c67ed]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-400/6 blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2c67ed]/40 bg-[#2c67ed]/10 text-xs font-semibold text-blue-300 mb-8 shadow-[0_0_20px_rgba(44,103,237,0.25)] backdrop-blur-md animate-glow-pulse"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>{PERSONAL_INFO.status}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Profile Photo - centered, big, with orbital rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative mb-8"
        >
          {/* Floating tech badges around photo */}
          {FLOATING_BADGES.map((badge) => (
            <div
              key={badge.label}
              className={`absolute ${badge.pos} ${badge.cls} z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold backdrop-blur-md border`}
              style={{
                background: `rgba(8,16,38,0.9)`,
                borderColor: `${badge.color}40`,
                color: badge.color,
                boxShadow: `0 0 15px ${badge.color}30`,
              }}
            >
              <span style={{ color: badge.color }}>{badge.icon}</span>
              {badge.label}
            </div>
          ))}

          {/* Orbital rings */}
          <div className="absolute inset-[-20px] rounded-full border border-dashed border-[#2c67ed]/20 animate-spin-slow pointer-events-none" />
          <div className="absolute inset-[-40px] rounded-full border border-[#2c67ed]/10 animate-spin-reverse pointer-events-none" />

          {/* Photo frame */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2c67ed] via-cyan-400 to-purple-500 blur-xl opacity-50 animate-pulse-slow pointer-events-none" />

            {/* Photo container */}
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-[#2c67ed] via-cyan-400 to-purple-500 shadow-[0_0_50px_rgba(44,103,237,0.6)] animate-glow-pulse">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#070e24] border-2 border-white/10 group">
                <img
                  src="/profil.jpg"
                  alt={PERSONAL_INFO.fullName}
                  className="w-full h-full object-cover object-center filter saturate-110 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Scan line effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="scan-line opacity-30" />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4"
        >
          <span className="text-white">Hi, Saya</span>{' '}
          <span className="animated-gradient-text">
            {PERSONAL_INFO.fullName}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span>Saya seorang</span>
          <TypewriterText
            texts={PERSONAL_INFO.roles}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={1800}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {PERSONAL_INFO.tagline} Menjelajahi antarmuka interaktif masa depan dengan performa responsif, estetika kosmis, dan arsitektur kode yang bersih.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection('portfolio')}
            className="shimmer-btn group relative px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2c67ed] to-blue-500 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_30px_rgba(44,103,237,0.6)] hover:shadow-[0_0_45px_rgba(44,103,237,0.85)] transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-1.5 active:translate-y-0"
          >
            <span>Jelajahi Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#2c67ed]/60 backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-1.5 active:translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <Send className="w-4 h-4 text-[#2c67ed] group-hover:rotate-12 transition-transform" />
            <span>Hubungi Saya</span>
          </button>
        </motion.div>

        {/* Terminal Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-mono"
        >
          {[
            { dot: 'bg-cyan-400', text: 'Stack: React & TypeScript' },
            { dot: 'bg-[#2c67ed]', text: 'Design: Cosmic Dark Mode' },
            { dot: 'bg-emerald-400', text: 'Status: Open to Work' },
          ].map(({ dot, text }) => (
            <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07]">
              <span className={`w-1.5 h-1.5 rounded-full ${dot} animate-pulse`} />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#2c67ed]/60 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};
