import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightedTitle,
  subtitle,
  align = 'center'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2c67ed]/30 bg-[#2c67ed]/10 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3 shadow-[0_0_15px_rgba(44,103,237,0.2)]`}>
        <span className="w-2 h-2 rounded-full bg-[#2c67ed] animate-ping" />
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-2">
        {title}{' '}
        {highlightedTitle && (
          <span className="bg-gradient-to-r from-[#2c67ed] via-blue-400 to-cyan-300 bg-clip-text text-transparent glow-text-blue">
            {highlightedTitle}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
