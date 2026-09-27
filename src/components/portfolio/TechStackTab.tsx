import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, FileCode2, Palette, Cpu, Zap, Code2, Layout,
  Server, Network, Globe, Database, Table, Flame, GitFork,
  Terminal, PenTool, Cloud, Sparkles
} from 'lucide-react';
import { TECH_STACK_DATA } from '../../data/portfolioData';

// Icon + color per category
const CATEGORY_META: Record<string, { color: string; glow: string }> = {
  'Frontend': { color: '#61dafb', glow: 'rgba(97,218,251,0.25)' },
  'Backend':  { color: '#68d391', glow: 'rgba(104,211,145,0.25)' },
  'Database': { color: '#f6ad55', glow: 'rgba(246,173,85,0.25)' },
  'Tools & DevOps': { color: '#b794f4', glow: 'rgba(183,148,244,0.25)' },
};

const iconMap: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-5 h-5" />,
  FileCode2: <FileCode2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Table: <Table className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  GitFork: <GitFork className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  PenTool: <PenTool className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
};

export const TechStackTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools & DevOps'];

  const filteredTech = selectedCategory === 'All'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((t) => t.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const meta = CATEGORY_META[cat];
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer border"
              style={
                isActive
                  ? {
                      background: meta ? `${meta.color}20` : 'rgba(44,103,237,0.2)',
                      borderColor: meta ? meta.color : '#2c67ed',
                      color: meta ? meta.color : '#ffffff',
                      boxShadow: meta ? `0 0 15px ${meta.glow}` : '0 0 15px rgba(44,103,237,0.4)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.1)',
                      color: '#94a3b8',
                    }
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Tech Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredTech.map((tech, idx) => {
            const meta = CATEGORY_META[tech.category] ?? { color: '#2c67ed', glow: 'rgba(44,103,237,0.25)' };

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-2xl backdrop-blur-xl border transition-all duration-300 overflow-hidden"
                style={{
                  background: 'rgba(8,16,38,0.75)',
                  borderColor: `${meta.color}22`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${meta.color}55`;
                  e.currentTarget.style.boxShadow = `0 0 25px ${meta.glow}, 0 4px 20px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${meta.color}22`;
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-8 -right-8 w-20 h-20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                  style={{ background: meta.color }}
                />

                {/* Header: icon + name + level */}
                <div className="flex items-start justify-between gap-3 mb-3 relative">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-xl transition-all duration-300"
                      style={{
                        background: `${meta.color}15`,
                        border: `1px solid ${meta.color}30`,
                        color: meta.color,
                      }}
                    >
                      {iconMap[tech.icon] ?? <Sparkles className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4
                        className="text-sm font-bold text-white transition-colors"
                        style={{ textShadow: '0 0 0 transparent' }}
                      >
                        {tech.name}
                      </h4>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: meta.color, opacity: 0.8 }}
                      >
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-md border flex-shrink-0"
                    style={{
                      background: `${meta.color}15`,
                      borderColor: `${meta.color}35`,
                      color: meta.color,
                    }}
                  >
                    {tech.level}%
                  </span>
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4 relative line-clamp-2">
                  {tech.description}
                </p>

                {/* Proficiency Progress Bar */}
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.04 + 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${meta.color}aa, ${meta.color})`,
                      boxShadow: `0 0 8px ${meta.color}80`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
