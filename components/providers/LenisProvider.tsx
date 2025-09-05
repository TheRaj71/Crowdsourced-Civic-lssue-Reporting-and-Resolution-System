"use client";
import React, { useEffect, type PropsWithChildren } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const LenisProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    // Ensure plugin is registered on client
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      // Tune to taste
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // autoRaf: false is default; we drive it manually below
    });

    // Keep GSAP ScrollTrigger in sync with Lenis
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
