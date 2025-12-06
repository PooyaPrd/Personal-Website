import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-purple-400 text-sm tracking-[0.2em] uppercase font-semibold mb-3 block animate-pulse-slow">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-gradient-to-r from-purple-500 to-fuchsia-500 mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};