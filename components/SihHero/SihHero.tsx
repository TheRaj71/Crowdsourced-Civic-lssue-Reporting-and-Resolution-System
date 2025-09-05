"use client";
import React from "react";
import Image from "next/image";

export type SihHeroProps = {
  className?: string;
};

const SihHero: React.FC<SihHeroProps> = ({ className = "" }) => {
  return (
    <div className={`relative min-h-[100dvh] w-full overflow-hidden ${className}`}>
      {/* Background Image */}
      <Image
        src="/Jharkhand folk.png"
        alt="Jharkhand folk art background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Subtle earthy overlay for Jharkhand vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.05_150_/_0.85)] via-[oklch(0.15_0.03_150_/_0.35)] to-transparent mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[100dvh] w-full items-end md:items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 md:translate-y-16 lg:translate-y-24">
          <div className="max-w-3xl">
            <h1 className="animate-slide-up text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFD700] drop-shadow-[0_3px_0_#800000]">
              Smart India Hackathon
            </h1>
            <p className="animate-slide-up delay-150 mt-4 text-base sm:text-lg md:text-xl text-[#F8F1E5] max-w-prose">
              Crowdsourced Civic Issue Reporting and Resolution System — inspired by the vibrant culture of Jharkhand.
            </p>
            <div className="animate-slide-up delay-300 mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm sm:text-base font-semibold text-foreground hover:bg-white transition-colors shadow-lg shadow-black/25"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur hover:bg-white/15 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SihHero;
