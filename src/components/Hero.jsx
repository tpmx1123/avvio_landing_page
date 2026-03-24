import { motion } from 'framer-motion'

const JOIN = 'https://avvio.xyz/join'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#cf0] to-[#af0] px-4 pt-20 text-center">
      
      <motion.div
        className="max-w-6xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Main Heading: Extra Bold, Tight Tracking, All Caps style */}
        <h1 className="mb-4 text-5xl font-black leading-[0.9]  text-black sm:text-7xl md:text-8xl lg:text-7xl uppercase">
          One Global Account
          <br />
          For Digital Life
        </h1>

        {/* Subtext: Simple, clean, black */}
        <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-black md:text-3xl tracking-tight">
          Get paid, save, invest, & spend everywhere
        </p>

        {/* Black Pill Button with Lime Text */}
        <motion.a
          href={JOIN}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex rounded-full bg-black px-10 py-5 text-lg font-bold text-[#DFFF00] transition-colors hover:bg-zinc-900"
        >
          Get early access
        </motion.a>
      </motion.div>

      {/* Optional: Subtle texture or noise overlay often seen in these designs */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  )
}