import React from "react";

export default function WaitlistCTA() {
  return (
    <section id="waitlist-cta-section" className="relative w-full h-[520px] md:h-[620px] flex items-center justify-center overflow-hidden">

      {/* 💵 US DOLLAR BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1920&auto=format&fit=crop"
        alt="usd"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* DARK OVERLAY (important for contrast like Avvio) */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        <h2 className="text-[#B4FF00] text-[45px] md:text-[55px] font-bold leading-tight mb-10">
          Join the waitlist and help shape
          <br />
          an account built for a global life.
        </h2>

        <a
          href="https://avvio.xyz/join"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-36 py-6 rounded-full text-[16px] font-medium hover:scale-105 transition"
        >
          <b>Get early access</b>
        </a>

      </div>
    </section>
  );
}