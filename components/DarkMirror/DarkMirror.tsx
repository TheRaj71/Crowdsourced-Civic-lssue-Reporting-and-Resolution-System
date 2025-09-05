'use client';

import React, { useState, useEffect } from 'react';

const AnimatedGreeting = () => (
  <div className="relative z-10 max-w-3xl px-12 py-20">
    <h1
      className="text-[4rem] md:text-[6rem] font-bold leading-[1.05] mb-2 break-words max-w-full"
      style={{
        fontFamily: 'SF Pro Display, Inter, Arial, sans-serif',
        letterSpacing: '-0.03em',
        color: '#111',
        textShadow: '0 4px 32px rgba(0,0,0,0.08)',
        wordBreak: 'break-word',
        maxWidth: '100%',
      }}
    >
      Civic Issue
    </h1>
    <h2
      className="text-[3rem] md:text-[4rem] font-extrabold leading-[1.1] mb-4 break-words max-w-full text-green-600"
      style={{
        fontFamily: 'SF Pro Display, Inter, Arial, sans-serif',
        letterSpacing: '-0.02em',
        wordBreak: 'break-word',
        maxWidth: '100%',
      }}
    >
      Reporting
    </h2>
    <p
      className="text-2xl md:text-3xl font-light italic text-gray-700 mb-8"
      style={{
        fontFamily: 'SF Pro Display, Inter, Arial, sans-serif',
        letterSpacing: '-0.01em',
        textShadow: '0 2px 16px rgba(0,0,0,0.06)',
      }}
    >
      Empowering communities,<br />
      simply and beautifully.
    </p>
    <p
      className="text-base md:text-lg font-medium mt-4"
      style={{
        fontFamily: 'Noto Sans Devanagari, serif',
        color: '#8B4513', /* brown */
      }}
    >
      झारखण्डस्य समृद्धसंस्कृत्या प्रेरितम्
    </p>
  </div>
);

export default function CivicReportingLanding() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="hidden md:block relative min-h-screen w-full overflow-hidden">
      {/* Full Screen Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src="https://my.spline.design/projectpromolookatmouse-Z5L52tfHFZWaD5DvqPGlbijP/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full"
          style={{
            minHeight: '100vh',
            border: 'none'
          }}
          title="Civic Engagement 3D Scene"
        />
      </div>
      
      {/* Text Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-start"
        style={{ pointerEvents: "none" }}
      >
        <AnimatedGreeting />
      </div>

      <style jsx>{`
        /* Remove any pointer event blocking for iframe interaction */
        iframe {
          pointer-events: auto !important;
        }
      `}</style>
    </section>
  );
}
