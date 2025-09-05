import React from "react";

export type MagicaHandsProps = {
  className?: string;
  height?: string; // Tailwind height class like "h-[100dvh]" or "h-screen"
  title?: string;
};

/**
 * MagicaHands embeds a Spline scene inside a responsive container.
 * It is intentionally simple and modular, so it can be reused across pages/sections.
 */
const MagicaHands: React.FC<MagicaHandsProps> = ({
  className = "",
  height = "h-[100dvh]",
  title = "Magica Hands 3D Scene",
}) => {
  return (
    <section className={`relative w-full overflow-hidden ${height} ${className}`}>
      <iframe
        src="https://my.spline.design/handsholdingamagicalpearlwithparticles-imz9OppSeC7ZzdsdXyUmssEX/"
        frameBorder={0}
        width="100%"
        height="100%"
        title={title}
        className="block w-full h-full"
        loading="lazy"
        allow="fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
    </section>
  );
};

export default MagicaHands;
