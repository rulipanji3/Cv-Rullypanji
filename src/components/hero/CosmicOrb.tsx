import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Sparkles, Globe, Cpu } from 'lucide-react';


export const CosmicOrb: React.FC = () => {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center select-none">
      {/* Outer subtle glow field */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2c67ed]/25 via-sky-500/15 to-purple-600/20 blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Orbit Ring 1 (Large tilted orbit) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-[#2c67ed]/30"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a122c] border border-[#2c67ed] shadow-[0_0_15px_#2c67ed] flex items-center justify-center text-[#38bdf8]">
          <Code className="w-4 h-4" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a122c] border border-cyan-400 shadow-[0_0_15px_#38bdf8] flex items-center justify-center text-cyan-300">
          <Terminal className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Orbit Ring 2 (Counter-clockwise elliptical) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[75%] h-[75%] rounded-full border border-[#38bdf8]/25"
      >
        <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-[#050b1d] border border-indigo-400 shadow-[0_0_12px_#818cf8] flex items-center justify-center text-indigo-300">
          <Cpu className="w-3.5 h-3.5" />
        </div>
        <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-[#050b1d] border border-blue-400 shadow-[0_0_12px_#60a5fa] flex items-center justify-center text-blue-300">
          <Globe className="w-3.5 h-3.5" />
        </div>
      </motion.div>

      {/* Orbit Ring 3 (Fast inner ring) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[52%] h-[52%] rounded-full border border-white/10"
      >
        <div className="absolute top-2 left-3 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
      </motion.div>

      {/* Central Cosmic Planet / Core */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-[#2c67ed] via-indigo-500 to-sky-400 shadow-[0_0_50px_rgba(44,103,237,0.7)] flex items-center justify-center"
      >
        {/* Planet Surface Texture with Cosmic Crater/Lighting */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#070e26] via-[#09153d] to-[#040817] flex flex-col items-center justify-center p-4 relative overflow-hidden border border-white/20">
          {/* Internal glowing eclipse light */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#38bdf8]/30 blur-xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#2c67ed]/40 blur-xl pointer-events-none" />

          {/* Icon Badge Center */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center justify-center"
          >
            <Sparkles className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] mb-1" />
            <span className="text-[11px] font-mono tracking-widest text-blue-200 font-semibold uppercase">
              COSMIC.DEV
            </span>
          </motion.div>

          {/* Latitudinal scanlines */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        </div>
      </motion.div>

      {/* Floating Status Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081129]/90 border border-[#2c67ed]/50 shadow-[0_0_20px_rgba(44,103,237,0.4)] backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[11px] font-medium text-slate-200">Orbiting in Tech Galaxy</span>
      </motion.div>
    </div>
  );
};
