import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setScrollPercent(Math.round(v * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, width: '100%' }}
      />

      {/* Scroll Percent Badge (appears after 5%) */}
      {scrollPercent > 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(8,16,38,0.9)',
            border: '1.5px solid rgba(44,103,237,0.6)',
            boxShadow: '0 0 20px rgba(44,103,237,0.4)',
            backdropFilter: 'blur(12px)',
            cursor: 'none',
          }}
        >
          {/* Circular SVG progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
            <circle
              cx="22" cy="22" r="19"
              stroke="rgba(44,103,237,0.15)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="22" cy="22" r="19"
              stroke="url(#progressGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 19}`}
              strokeDashoffset={`${2 * Math.PI * 19 * (1 - scrollPercent / 100)}`}
              style={{ transition: 'stroke-dashoffset 0.1s ease' }}
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2c67ed" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
          <span className="relative text-[9px] font-bold text-cyan-300 font-mono">
            {scrollPercent}%
          </span>
        </motion.div>
      )}
    </>
  );
};
