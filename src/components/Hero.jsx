import { motion } from 'framer-motion'

const JOIN = 'https://avvio.xyz/join'

export default function Hero({ titleOpacity, titleY }) {
  return (
    <section className="relative z-30 flex min-h-screen flex-col items-center justify-start px-6 pt-30 text-center lg:justify-center lg:px-8 lg:pt-20">
      <motion.div
        className="pointer-events-auto max-w-6xl"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        {/* MOBILE FIXES:
            - text-[38px] on mobile to prevent overflow.
            - leading-[1] on mobile to give more breathing room.
            - tracking-tighter for that high-end look.
        */}
        <h1 className="mb-6 text-[38px] font-black leading-none text-black sm:text-[60px] lg:text-[72px] lg:leading-[0.9] uppercase tracking-tighter">
          One global <br className="lg:hidden" /> banking for <br /> digital life
        </h1>

        {/* MOBILE FIXES:
            - text-[18px] and tighter max-w so it doesn't span the whole width.
            - text-zinc-800 for better contrast on the lime background.
        */}
        <p className="mx-auto mb-4 max-w-[320px] text-[18px] font-medium leading-tight text-zinc-800 sm:max-w-3xl lg:text-[32px]">
          Get paid, save, invest, & spend everywhere
        </p>

        <motion.a
          href={JOIN}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          // Slightly smaller button on mobile (px-8 py-4)
          className="inline-flex rounded-full bg-black px-8 py-4 text-[15px] font-bold text-[#DFFF00] lg:px-12 lg:py-6 lg:text-[16px] "
        >
          Get early access
        </motion.a>
      </motion.div>
    </section>
  )
}