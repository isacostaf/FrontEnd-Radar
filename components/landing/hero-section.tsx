"use client";

import { useEffect, useState } from "react";
import { Mail, Search } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines with Brazil colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
              background: i % 2 === 0 ? 'oklch(0.50 0.16 145 / 0.3)' : 'oklch(0.80 0.16 90 / 0.3)',
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
              background: i % 2 === 0 ? 'oklch(0.50 0.16 145 / 0.3)' : 'oklch(0.80 0.16 90 / 0.3)',
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Main headline */}
        <div className="mb-16">
          <h1 
            className={`text-[clamp(2.2rem,9.5vw,8rem)] font-bold leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'oklch(0.25 0.08 145)'
            }}
          >
            <span className="block">Radar Colegiados</span>
          </h1>
        </div>

        <div
          className={`-mt-10 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className="text-lg md:text-2xl font-medium tracking-[0.2em] uppercase"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'oklch(0.40 0.10 145)'
            }}
          >
            Ministério da Defesa
          </p>
        </div>
        
        {/* 3D Cards */}
        <div 
          className={`flex flex-col sm:flex-row gap-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ perspective: "1000px" }}
        >
          <a 
            href="https://colegiados-md.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-4 p-8 w-64 h-48 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md transition-all duration-500 ease-out hover:scale-105 hover:border-primary/40"
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = (y - centerY) / 10;
              const rotateY = (centerX - x) / 10;
              e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-2xl" style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
              transform: "translateZ(1px)"
            }} />
            <Mail className="w-12 h-12 text-primary/70 group-hover:text-primary transition-colors duration-300" style={{ transform: "translateZ(30px)" }} />
            <span className="text-lg font-medium text-foreground" style={{ transform: "translateZ(20px)" }}>Ver email de hoje</span>
          </a>
          
          <a 
            href="https://colegiados-md.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-4 p-8 w-64 h-48 rounded-2xl border border-accent/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md transition-all duration-500 ease-out hover:scale-105 hover:border-accent/40"
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = (y - centerY) / 10;
              const rotateY = (centerX - x) / 10;
              e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-2xl" style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
              transform: "translateZ(1px)"
            }} />
            <Search className="w-12 h-12 text-accent/80 group-hover:text-accent transition-colors duration-300" style={{ transform: "translateZ(30px)" }} />
            <span className="text-lg font-medium text-foreground" style={{ transform: "translateZ(20px)" }}>Fazer pesquisa</span>
          </a>
        </div>
      </div>
    </section>
  );
}
