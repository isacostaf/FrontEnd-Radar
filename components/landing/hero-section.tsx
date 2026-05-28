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
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Main headline */}
        <div className="mb-16">
          <h1 
            className={`text-[clamp(2.2rem,9.5vw,8rem)] font-bold leading-[0.9] tracking-tight transition-all duration-1000 text-black ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
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
            className="text-[lab(28_0_0)] text-lg md:text-2xl font-medium tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
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
          {/* CARD VERDE */}
          <a 
            href="https://colegiados-md.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-4 p-8 w-64 h-48 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/70 backdrop-blur-md transition-all duration-500 ease-out hover:scale-105 hover:border-emerald-300"
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.08) inset"
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
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-200/30 via-transparent to-emerald-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{ 
                background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%)",
                transform: "translateZ(1px)"
              }} 
            />

            <Mail 
              className="w-12 h-12 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" 
              style={{ transform: "translateZ(30px)" }} 
            />

            <span 
              className="text-lg font-medium text-emerald-900" 
              style={{ transform: "translateZ(20px)" }}
            >
              Ver email de hoje
            </span>
          </a>

          {/* CARD AMARELO */}
          <a 
            href="https://colegiados-md.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-4 p-8 w-64 h-48 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-100/70 backdrop-blur-md transition-all duration-500 ease-out hover:scale-105 hover:border-amber-300"
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.08) inset"
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
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-200/30 via-transparent to-yellow-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{ 
                background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%)",
                transform: "translateZ(1px)"
              }} 
            />

            <Search 
              className="w-12 h-12 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" 
              style={{ transform: "translateZ(30px)" }} 
            />

            <span 
              className="text-lg font-medium text-amber-900" 
              style={{ transform: "translateZ(20px)" }}
            >
              Fazer pesquisa
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
