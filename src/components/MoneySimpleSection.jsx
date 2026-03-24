import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MoneySimpleSection() {
  const containerRef = useRef(null);
  
  // Create a subtle parallax/tilt for the phone as you scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT SIDE: The Animated Phone */}
        <motion.div 
          style={{ rotateX, y, perspective: 1200 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start"
        >
          {/* Phone Frame */}
          <div className="relative w-[320px] h-[650px] bg-black rounded-[3.5rem] border-[10px] border-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-3xl z-30" />
            
            {/* App UI Content */}
            <div className="h-full w-full bg-black text-white p-6 pt-12 font-sans">
              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-zinc-800 rounded-full border border-zinc-700" />
                  <span className="text-sm font-medium">@dave</span>
                </div>
                <div className="grid grid-cols-2 gap-1 opacity-60">
                  <div className="w-1 h-1 bg-white rounded-full" />
                  <div className="w-1 h-1 bg-white rounded-full" />
                  <div className="w-1 h-1 bg-white rounded-full" />
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
              </div>

              {/* Balance */}
              <div className="mb-10">
                <h2 className="text-4xl font-bold tracking-tight">
                  $7,116<span className="text-zinc-500">.30</span>
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mb-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-[#DFFF00] rounded-full flex items-center justify-center text-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 13l5 5 5-5M12 18V6"/></svg>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Deposit</span>
                </div>
                {/* ... Repeat for Convert and Send with Zinc bg ... */}
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#141414] p-4 rounded-3xl border border-white/5">
                  <div className="w-5 h-5 bg-zinc-800 mb-4 rounded" />
                  <p className="text-xs text-zinc-500">Cash</p>
                  <p className="font-bold text-lg">$1050<span className="text-zinc-500">.58</span></p>
                </div>
                <div className="bg-[#141414] p-4 rounded-3xl border border-white/5">
                  <div className="w-5 h-5 bg-zinc-800 mb-4 rounded" />
                  <p className="text-xs text-zinc-500">Savings</p>
                  <p className="font-bold text-lg">$100<span className="text-zinc-500">.30</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Content */}
        <motion.div 
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-6xl md:text-5xl font-black leading-[0.9] text-black mb-8 uppercase tracking-tighter">
            Money, finally <br /> simple
          </h2>
          <p className="text-xl md:text-3xl font-medium text-zinc-400 max-w-xl leading-snug">
            Avvio replaces multiple accounts, transfers, and apps with one account built for people who live between systems.
          </p>
        </motion.div>

      </div>
    </section>
  );
}