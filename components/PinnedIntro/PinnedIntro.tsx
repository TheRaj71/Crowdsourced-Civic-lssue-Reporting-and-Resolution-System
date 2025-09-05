"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicaHands from "../MagicaHands";
import SihHero from "../SihHero";

export type PinnedIntroProps = {
  className?: string;
};

const PinnedIntro: React.FC<PinnedIntroProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const magicaRef = useRef<HTMLDivElement | null>(null);
  const sihRef = useRef<HTMLDivElement | null>(null);

  const [showText, setShowText] = useState(false);
  const words = [
    "Accountable Civic Jharkhand",
    "Transparent Civic Jharkhand",
    "Smart Governance Jharkhand",
    "Efficient Digital Jharkhand",
    "Inclusive Civic Jharkhand",
    "AI-Powered Jharkhand",
    "Trustworthy Service Jharkhand",
    "Data-Driven Jharkhand",
    "Responsive Civic Jharkhand",
    "Future-Ready Jharkhand",
  ];
  
  const [wordIndex, setWordIndex] = useState(0);
  const [wordFading, setWordFading] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !magicaRef.current || !sihRef.current) return;

    // Register plugin in an effect to ensure client-side execution and proper typing
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Start SIH below the viewport
      gsap.set(sihRef.current, { yPercent: 100 });

      gsap.to(sihRef.current, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current!,
          start: "top top",
          end: "+=100%", // one viewport worth of scroll
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    // Trigger entrance animation for headline
    const t = setTimeout(() => setShowText(true), 100);

    // Start subtext cycle loop
    let mounted = true;
    const timers: number[] = [];
    const loop = () => {
      if (!mounted) return;
      // ensure visible
      setWordFading(false);
      const showTimer = window.setTimeout(() => {
        setWordFading(true); // fade out
        const swapTimer = window.setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length);
          loop();
        }, 350); // fade-out duration, keep in sync with CSS
        timers.push(swapTimer);
      }, 1800); // visible duration
      timers.push(showTimer);
    };
    loop();

    return () => {
      clearTimeout(t);
      mounted = false;
      timers.forEach((id) => clearTimeout(id));
      ctx.revert();
    };
  }, [words.length]);

  return (
    <section ref={containerRef} className={`relative w-full h-[100dvh] overflow-hidden ${className}`}>
      {/* Base layer: MagicaHands */}
      <div ref={magicaRef} className="absolute inset-0">
        <MagicaHands height="h-full" />
      </div>

      {/* Text overlay over MagicaHands (left side), but under SIH layer */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className={`text-left leading-none transform transition-all duration-700 ease-out ${showText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'}` }>
            {/* Top label: "Let's" above the CREATE word */}
            <div className="mb-1">
              <span className="font-semibold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#5b21b6] text-transparent bg-clip-text text-[clamp(1.4rem,3vw,2.4rem)] leading-tight">
                {"Let's"}
              </span>
            </div>

            {/* CREATE with increasing thickness per letter (responsive) */}
            <div className="flex gap-[0.75rem] sm:gap-3 items-baseline text-white drop-shadow-[0_6px_0_rgba(0,0,0,0.35)] 
                            text-[clamp(4.2rem,15vw,11.5rem)] sm:text-[clamp(5rem,14vw,13rem)] leading-[0.8]">
              <span className={`font-light transition-all duration-900 ease-out ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '200ms' }}>C</span>
              <span className={`font-light transition-all duration-900 ease-out ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '380ms' }}>R</span>
              <span className={`font-normal transition-all duration-900 ease-out ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '560ms' }}>E</span>
              <span className={`font-semibold transition-all duration-900 ease-out ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '740ms' }}>A</span>
              <span className={`font-bold transition-all duration-900 ease-out ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '920ms' }}>T</span>
              <span className={`font-black transition-all duration-900 ease-out ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '1100ms' }}>E</span>
            </div>

            {/* Cycling subtext */}
            <div className="mt-5 sm:mt-6 h-8 sm:h-10 overflow-hidden">
              <span
                className={`inline-block align-top ml-2 sm:ml-3 md:ml-4 text-[#9C9C9C] text-lg sm:text-xl tracking-wide transition-all duration-300 ease-out ${wordFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}`}
                aria-live="polite"
              >
                {words[wordIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay: SIH Hero slides up to fully cover */}
      <div ref={sihRef} className="absolute inset-0 z-20">
        <SihHero />
      </div>
    </section>
  );
};

export default PinnedIntro;
