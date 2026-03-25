import React from "react";

export default function TrustStrip() {
  const logos = (
    <div className="flex items-center whitespace-nowrap py-4">

      {/* Secured by turnkey */}
      <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-default px-12 md:px-16">
        <span className="text-white/80 text-[15px] font-medium mr-1">Secured by</span>
        <div className="w-[5px] h-[5px] rounded-full bg-current"></div>
        <span className="text-[20px] font-bold tracking-tight">turnkey</span>
      </div>

      {/* OneBalance */}
      <div className="flex items-center gap-3 text-white/80 hover:text-white   transition-colors cursor-default px-12 md:px-16">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
        <span className="text-[21px] font-medium tracking-tight mt-[1px]">OneBalance</span>
      </div>

      {/* YO */}
      <div className="flex items-center gap-1.5 text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors cursor-default px-12 md:px-16">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mr-1">
          <path d="M5 5h14l-7 7-7-7z" fill="#71717A" />
          <path d="M5 19h14l-7-7-7 7z" fill="currentColor" />
        </svg>
        <span className="text-[23px] font-medium tracking-tight mt-[1px]">Y</span>
        <div className="w-4 h-4 rounded-full bg-[#71717A] ml-0.5"></div>
      </div>

      {/* zerion */}
      <div className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors cursor-default px-12 md:px-16">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M10 8 L14 12 L10 16" />
        </svg>
        <span className="text-[21px] font-medium tracking-tight mt-[1px]">zerion</span>
      </div>

      {/* xStocks */}
      <div className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors cursor-default px-12 md:px-16">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6L18 18M18 6L6 18" />
        </svg>
        <span className="text-[21px] font-medium tracking-tight mt-[1px]">xStocks</span>
      </div>

      {/* Bridge */}
      <div className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors cursor-default px-12 md:px-16">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3.5 3.5">
          <circle cx="12" cy="12" r="9" />
        </svg>
        <span className="text-[21px] font-medium tracking-tight mt-[1px] ml-1">Bridge</span>
      </div>

    </div>
  );
  return (
    <section className="bg-black py-24 overflow-hidden">

      {/* TITLE */}
      <p
        className="text-center uppercase mb-24 font-medium text-white/40"
        style={{ fontSize: "22px", letterSpacing: "0.64em", fontWeight: "bold" }}
      >
        BUILT WITH TRUSTED INFRASTRUCTURE
      </p>

      {/* MARQUEE */}
      <div className="relative flex max-w-[1600px] mx-auto overflow-hidden">

        {/* LEFT FADE */}
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

        {/* SCROLLING LOGOS */}
        <div className="flex w-max animate-scroll">
          {logos}
          {logos}
        </div>

        {/* RIGHT FADE */}
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* DIVIDER */}
      <div className="mt-20 h-[1px] bg-white/10 max-w-6xl mx-auto"></div>
    </section>
  );
}