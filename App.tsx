import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Visions } from './components/Visions';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full selection:bg-purple-500/30">
      <BackgroundEffects />
      
      <main className="relative z-10 flex flex-col items-center w-full px-4 md:px-8 max-w-7xl mx-auto space-y-24 md:space-y-32 pb-20">
        <Hero />
        <About />
        <Visions />
        <Connect />
      </main>

      <Footer />
    </div>
  );
};

export default App;