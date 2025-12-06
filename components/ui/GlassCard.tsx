import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        glass-card rounded-2xl p-6 md:p-8 
        transition-all duration-500 ease-out
        ${hoverEffect ? 'hover:bg-white/5 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] group' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};