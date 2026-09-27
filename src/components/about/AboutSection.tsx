import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, Code2
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { StatsCounter } from './StatsCounter';

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      <SectionHeader
        badge="Tentang Diri Saya"
        title="Menjelajahi Latar Belakang &"
        highlightedTitle="Dedikasi Karir"
        subtitle="Dari baris kode pertama hingga pengembangan antarmuka web modern berskala penuh, inilah perjalanan evolusi saya di dunia teknologi."
      />

      {/* Profile + Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2c67ed] via-indigo-600 to-cyan-400 blur-2xl opacity-35 animate-pulse-slow pointer-events-none" />

            {/* Orbital rings */}
            <div className="absolute inset-[-16px] rounded-full border border-dashed border-[#2c67ed]/30 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-[-30px] rounded-full border border-[#2c67ed]/10 animate-spin-reverse pointer-events-none" />

            {/* Orbiting dot */}
            <div className="absolute inset-[-16px] rounded-full pointer-events-none animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
            </div>

            {/* Photo */}
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-b from-[#2c67ed] via-[#10204d] to-[#040817] shadow-[0_0_50px_rgba(44,103,237,0.55)] animate-glow-pulse">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/15 bg-[#070e24] relative group">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.fullName}
                  className="w-full h-full object-cover object-center filter saturate-110 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent opacity-50" />

                {/* Name tag at bottom */}
                <div className="absolute bottom-4 inset-x-0 text-center">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/80 border border-[#2c67ed]/50 text-cyan-300 backdrop-blur-md shadow-md">
                    🚀 {PERSONAL_INFO.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating specialty badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-3 px-3.5 py-2 rounded-xl backdrop-blur-lg flex items-center gap-2 border"
              style={{
                background: 'rgba(8,16,38,0.95)',
                borderColor: 'rgba(44,103,237,0.6)',
                boxShadow: '0 0 20px rgba(44,103,237,0.4)',
              }}
            >
              <Code2 className="w-4 h-4 text-[#2c67ed]" />
              <div className="text-left">
                <p className="text-[10px] text-slate-400 leading-tight">Spesialisasi</p>
                <p className="text-xs font-bold text-white leading-tight">Frontend & React</p>
              </div>
            </motion.div>
          </div>

          {/* Location & status chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#2c67ed]" />
              {PERSONAL_INFO.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Siap Project Baru
            </span>
          </div>
        </motion.div>

        {/* Right: Bio Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-8 rounded-2xl relative overflow-hidden border transition-all duration-300"
            style={{
              background: 'rgba(8,16,38,0.8)',
              borderColor: 'rgba(44,103,237,0.25)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 0 35px rgba(0,0,0,0.5)',
            }}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2c67ed]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/6 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 relative">
              <Sparkles className="w-5 h-5 text-[#2c67ed]" />
              Misi Saya di Dunia Pemrograman
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 relative">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative">
              Bagi saya, pemrograman adalah seni memadukan logika matematis dengan estetika visual untuk menyelesaikan masalah nyata. Saya selalu fokus pada performa, aksesibilitas antarmuka, dan penulisan kode modular yang mudah dirawat.
            </p>

            {/* Core values - stagger */}
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 relative"
            >
              {[
                { color: 'text-[#2c67ed]', text: 'Responsif & Mobile-First Design' },
                { color: 'text-cyan-400', text: 'Animasi Halus & Interaktif (Framer Motion)' },
                { color: 'text-indigo-400', text: 'Clean Code & Struktur Komponen Teratur' },
                { color: 'text-sky-400', text: 'Selalu Up-to-date dengan Ekosistem Modern' },
              ].map(({ color, text }) => (
                <motion.div key={text} variants={itemVariants} className="flex items-start gap-2.5">
                  <CheckCircle2 className={`w-4 h-4 ${color} mt-0.5 flex-shrink-0`} />
                  <span className="text-xs text-slate-300">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Timeline Section */}
      <div className="mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
              Rekam Jejak & Eksplorasi
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Riwayat pendidikan formal, pelatihan intensif, dan pengalaman kontribusi.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-[#2c67ed]/30 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-[#2c67ed] text-white shadow-[0_0_15px_rgba(44,103,237,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Riwayat Pendidikan</span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-[#2c67ed] text-white shadow-[0_0_15px_rgba(44,103,237,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Pengalaman Kerja</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="relative pl-7 sm:pl-9 border-l-2 border-[#2c67ed]/20 space-y-8"
          >
            {(activeTab === 'education' ? EDUCATION_DATA : EXPERIENCE_DATA).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-3 w-5 h-5 rounded-full bg-[#070e24] border-2 border-[#2c67ed] shadow-[0_0_14px_#2c67ed] group-hover:scale-125 transition-transform flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-300" />
                </div>

                {/* Card */}
                <div
                  className="p-5 sm:p-6 rounded-2xl border transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: 'rgba(8,16,38,0.75)',
                    borderColor: 'rgba(44,103,237,0.18)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(44,103,237,0.55)';
                    el.style.boxShadow = '0 0 25px rgba(44,103,237,0.2), 0 4px 20px rgba(0,0,0,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(44,103,237,0.18)';
                    el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20 max-w-fit flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-[#2c67ed] mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/10 hover:border-[#2c67ed]/40 transition-colors"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
