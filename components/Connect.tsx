import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github size={28} />,
    href: "#",
    color: "hover:text-white"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={28} />,
    href: "#",
    color: "hover:text-blue-400"
  },
  {
    name: "Email",
    icon: <Mail size={28} />,
    href: "mailto:hello@example.com",
    color: "hover:text-purple-400"
  },
  {
    name: "Twitter",
    icon: <Twitter size={28} />,
    href: "#",
    color: "hover:text-sky-400"
  }
];

export const Connect: React.FC = () => {
  return (
    <section id="connect" className="w-full flex flex-col items-center">
      <SectionHeading title="Let's Connect" subtitle="Start a Conversation" />
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {socialLinks.map((link, idx) => (
          <a 
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group flex flex-col items-center justify-center gap-3
              w-32 h-32 rounded-2xl
              bg-white/5 border border-white/5 backdrop-blur-sm
              transition-all duration-300
              hover:bg-white/10 hover:scale-110 hover:border-white/20
              cursor-pointer
              ${link.color}
            `}
          >
            <div className="text-gray-400 transition-colors duration-300 group-hover:text-inherit">
              {link.icon}
            </div>
            <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
              {link.name}
            </span>
          </a>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">Or send a quick message directly</p>
        <a 
          href="mailto:hello@mohammadpouya.dev"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          hello@mohammadpouya.dev
        </a>
      </div>
    </section>
  );
};