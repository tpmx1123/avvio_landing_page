import React from "react";

export default function TrustStrip() {
  const logos = [
    "https://res.cloudinary.com/di4caiech/image/upload/v1774507907/Screenshot_2026-03-26_111145-Picsart-AiImageEnhancer_sttigs.png",
    "https://res.cloudinary.com/di4caiech/image/upload/v1774507907/Screenshot_2026-03-26_104942-Picsart-AiImageEnhancer_qfsxvw.png",
    "https://res.cloudinary.com/di4caiech/image/upload/v1774507907/Screenshot_2026-03-26_111918-Picsart-AiImageEnhancer_wrbmhc.png",
    "https://res.cloudinary.com/di4caiech/image/upload/v1774507907/Screenshot_2026-03-26_112839-Picsart-AiImageEnhancer_phjrie.png",
    "https://res.cloudinary.com/di4caiech/image/upload/v1774507907/Screenshot_2026-03-26_112707-Picsart-AiImageEnhancer_vvfq1o.png",
    "https://res.cloudinary.com/di4caiech/image/upload/v1774507906/Screenshot_2026-03-26_111325-Picsart-AiImageEnhancer_veo1pi.png",
  ];

  return (
    <section className="bg-black py-24 overflow-hidden">

      <p
        className="text-center uppercase mb-20 font-medium text-white/40"
        style={{ fontSize: "22px", letterSpacing: "0.64em", fontWeight: "bold" }}
      >
        BUILT WITH TRUSTED INFRASTRUCTURE
      </p>

      <div className="relative flex max-w-[1600px] mx-auto overflow-hidden">

        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-track flex w-max gap-12 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand logo"
              className="h-12 md:h-16 object-contain opacity-90 hover:opacity-100 transition duration-300 grayscale brightness-200 contrast-200"
            />
          ))}
        </div>

        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="mt-20 h-[1px] bg-white/10 max-w-6xl mx-auto"></div>
    </section>
  );
}