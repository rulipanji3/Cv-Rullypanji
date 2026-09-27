import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Award, Clock, Sparkles } from 'lucide-react';
import { STATS_DATA } from '../../data/portfolioData';

const ICON_CONFIG: Record<string, { icon: React.ReactNode; color: string; glow: string }> = {
  Rocket:   { icon: <Rocket className="w-5 h-5" />,   color: '#2c67ed', glow: 'rgba(44,103,237,0.4)' },
  Award:    { icon: <Award className="w-5 h-5" />,    color: '#38bdf8', glow: 'rgba(56,189,248,0.4)' },
  Clock:    { icon: <Clock className="w-5 h-5" />,    color: '#818cf8', glow: 'rgba(129,140,248,0.4)' },
  Sparkles: { icon: <Sparkles className="w-5 h-5" />, color: '#f59e0b', glow: 'rgba(245,158,11,0.4)' },
};

export const StatsCounter: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 my-12">
      {STATS_DATA.map((item, index) => {
        const cfg = ICON_CONFIG[item.icon] ?? ICON_CONFIG['Sparkles'];
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative p-5 sm:p-6 rounded-2xl backdrop-blur-xl overflow-hidden group transition-all duration-300"
            style={{
              background: 'rgba(8,16,38,0.8)',
              border: `1px solid ${cfg.color}25`,
              boxShadow: '0 4px 25px rgba(0,0,0,0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${cfg.color}60`;
              e.currentTarget.style.boxShadow = `0 0 30px ${cfg.glow}, 0 4px 25px rgba(0,0,0,0.4)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${cfg.color}25`;
              e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,0,0,0.4)';
            }}
          >
            {/* Background glow blob */}
            <div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
              style={{ background: cfg.color }}
            />

            {/* Icon */}
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: `${cfg.color}15`,
                  border: `1px solid ${cfg.color}35`,
                  color: cfg.color,
                  boxShadow: `0 0 12px ${cfg.glow}`,
                }}
              >
                {cfg.icon}
              </div>
              <div
                className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md border"
                style={{
                  background: `${cfg.color}10`,
                  borderColor: `${cfg.color}25`,
                  color: cfg.color,
                }}
              >
                #{String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Value */}
            <div
              className="text-2xl sm:text-3xl font-black tracking-tight transition-all duration-300"
              style={{ color: cfg.color }}
            >
              {item.value}
            </div>

            <div className="text-sm font-semibold text-slate-200 mt-1">
              {item.label}
            </div>

            <div className="text-xs text-slate-500 mt-0.5 leading-snug">
              {item.subtext}
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
              style={{ background: `linear-gradient(90deg, transparent, ${cfg.color}, transparent)` }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
