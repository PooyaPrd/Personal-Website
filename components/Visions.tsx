import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { SectionHeading } from './ui/SectionHeading';
import { BrainCircuit, Rocket, Users, Zap } from 'lucide-react';

export const Visions: React.FC = () => {
  return (
    <section id="visions" className="w-full">
      <SectionHeading title="Future Visions" subtitle="What Drives Me" />

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
        
        {/* Large Card - AI Innovation */}
        <GlassCard hoverEffect className="md:col-span-2 md:row-span-1 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <BrainCircuit size={120} />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="p-2 bg-purple-500/20 w-fit rounded-lg mb-4">
              <BrainCircuit className="text-purple-300" size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">AI Innovation</h3>
              <p className="text-gray-400 max-w-md">
                Pushing the boundaries of human-computer interaction by integrating predictive models and generative AI into everyday web interfaces.
              </p>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
        </GlassCard>

        {/* Tall Card - Open Source */}
        <GlassCard hoverEffect className="md:col-span-1 md:row-span-2 relative overflow-hidden group flex flex-col">
           <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-30 transition-all duration-500 group-hover:rotate-12">
            <Users size={180} />
          </div>
          <div className="p-2 bg-fuchsia-500/20 w-fit rounded-lg mb-auto">
            <Users className="text-fuchsia-300" size={24} />
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Community & Open Source</h3>
            <p className="text-gray-400 text-sm">
              Believing in the power of shared knowledge. I actively contribute to libraries that empower developers worldwide to build better, faster, and more accessible software.
            </p>
          </div>
        </GlassCard>

        {/* Standard Card - Performance */}
        <GlassCard hoverEffect className="md:col-span-1 relative overflow-hidden group">
          <div className="absolute top-4 right-4 opacity-10 group-hover:scale-110 transition-transform">
            <Zap size={64} />
          </div>
          <div className="h-full flex flex-col justify-end">
             <div className="p-2 bg-blue-500/20 w-fit rounded-lg mb-4">
              <Zap className="text-blue-300" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">High Performance</h3>
            <p className="text-gray-400 text-xs">Optimizing for the milliseconds that matter.</p>
          </div>
        </GlassCard>

        {/* Standard Card - Scalability */}
        <GlassCard hoverEffect className="md:col-span-1 relative overflow-hidden group">
           <div className="absolute top-4 right-4 opacity-10 group-hover:scale-110 transition-transform">
            <Rocket size={64} />
          </div>
          <div className="h-full flex flex-col justify-end">
            <div className="p-2 bg-emerald-500/20 w-fit rounded-lg mb-4">
              <Rocket className="text-emerald-300" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Scalable Architecture</h3>
            <p className="text-gray-400 text-xs">Building systems that grow with the user base.</p>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};