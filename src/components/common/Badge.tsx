import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'cyan' | 'purple' | 'outline' | 'glass';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  icon
}) => {
  const variantStyles = {
    primary: 'bg-[#2c67ed]/15 text-blue-300 border-[#2c67ed]/40 shadow-[0_0_12px_rgba(44,103,237,0.25)]',
    cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]',
    purple: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.2)]',
    outline: 'bg-white/[0.04] text-slate-300 border-white/10 hover:border-white/20',
    glass: 'bg-white/[0.06] backdrop-blur-md text-blue-200 border-blue-400/30'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
