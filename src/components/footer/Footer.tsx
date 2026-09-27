import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#2c67ed]/20 bg-[#040814]/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#2c67ed]/20 border border-[#2c67ed] flex items-center justify-center shadow-[0_0_12px_#2c67ed]">
            <Sparkles className="w-4 h-4 text-cyan-300" />
          </div>
          <div>
            <span className="font-extrabold text-sm tracking-wider text-white">
              {PERSONAL_INFO.fullName.toUpperCase()}
            </span>
            <p className="text-[11px] text-slate-400">
              Cosmic Portfolio • Dark Space Edition
            </p>
          </div>
        </div>

        {/* Center Credits */}
        <div className="text-center text-xs text-slate-400 flex items-center gap-1.5">
          <span>Dibuat dengan</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>menggunakan React, Tailwind CSS & Framer Motion</span>
        </div>

        {/* Back to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-[#2c67ed]/20 border border-white/10 hover:border-[#2c67ed]/50 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer shadow-md group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};
