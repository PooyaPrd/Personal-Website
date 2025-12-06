import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-20">
      
      {/* Decorative top pill */}
      <div 
        className={`
          mb-8 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md
          flex items-center gap-2 text-purple-200 text-xs md:text-sm font-medium tracking-wide
          transition-all duration-1000 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        Available for new opportunities
      </div>

      {/* Main Heading */}
      <h1 className="max-w-4xl mx-auto">
        <span 
          className={`
            block text-5xl md:text-8xl font-display font-bold text-white tracking-tight mb-4
            transition-all duration-1000 delay-100 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          Mohammad Pouya
        </span>
        <span 
          className={`
            block text-5xl md:text-8xl font-display font-bold text-gradient tracking-tight
            transition-all duration-1000 delay-200 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          Pourarshad
        </span>
      </h1>

      {/* Slogan */}
      <p 
        className={`
          mt-8 max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed
          transition-all duration-1000 delay-300 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        Architecting the <span className="text-white font-medium">Digital Future</span> through innovation, code, and visionary design.
      </p>

      {/* CTA Buttons */}
      <div 
        className={`
          mt-12 flex flex-col sm:flex-row items-center gap-6
          transition-all duration-1000 delay-500 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <a 
          href="#visions"
          onClick={handleScroll('visions')}
          className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
            Explore My Vision <ArrowRight size={18} />
          </span>
        </a>
        
        <a 
          href="#about"
          onClick={handleScroll('about')}
          className="group px-8 py-4 rounded-full font-medium text-sm text-gray-300 tracking-wide border border-white/10 hover:bg-white/5 hover:text-white transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <Sparkles size={16} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
          View Bio & Resume
        </a>
      </div>

    </section>
  );
};