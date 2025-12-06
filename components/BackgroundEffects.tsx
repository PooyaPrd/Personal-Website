import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Top Left Purple Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob opacity-60"></div>
      
      {/* Bottom Right Violet Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 opacity-60"></div>
      
      {/* Center Fuchsia Blob */}
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 opacity-40"></div>
      
      {/* Noise Texture Overlay for grain effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};