import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { SectionHeading } from './ui/SectionHeading';
import { Code2, Cpu, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full">
      <SectionHeading title="About Me" subtitle="The Architect" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <GlassCard className="h-full flex flex-col justify-center">
          <h3 className="text-2xl font-display font-bold text-white mb-6">
            Beyond the Code
          </h3>
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>
              I don't just write code; I craft digital ecosystems. With a background deeply rooted in engineering and a passion for aesthetic perfection, I bridge the gap between <span className="text-purple-400">complex logic</span> and <span className="text-fuchsia-400">intuitive design</span>.
            </p>
            <p>
              My journey began with a curiosity for how things work, evolving into an obsession with how they <em>feel</em>. I specialize in building scalable, high-performance web applications that leave a lasting impression.
            </p>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 gap-6">
          {[
            {
              icon: <Code2 className="w-6 h-6 text-purple-400" />,
              title: "Full-Stack Mastery",
              desc: "From database architecture to pixel-perfect frontends, I handle the entire stack with precision."
            },
            {
              icon: <Cpu className="w-6 h-6 text-fuchsia-400" />,
              title: "AI Integration",
              desc: "Leveraging the latest in generative AI to create smarter, more adaptive user experiences."
            },
            {
              icon: <Globe className="w-6 h-6 text-violet-400" />,
              title: "Global Scale",
              desc: "Designing systems built for performance, accessibility, and worldwide reach."
            }
          ].map((item, idx) => (
            <GlassCard key={idx} hoverEffect className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};