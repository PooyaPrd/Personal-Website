import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-gray-500">
        
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Mohammad Pouya Pourarshad. All Rights Reserved.
        </p>

        <div className="flex items-center gap-2">
          <span>Designed & Crafted with</span>
          <Heart size={14} className="text-red-500 animate-pulse fill-red-500" />
          <span>in the Digital Realm</span>
        </div>

      </div>
    </footer>
  );
};