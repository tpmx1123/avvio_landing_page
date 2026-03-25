import { motion } from 'framer-motion'

const JOIN = 'https://avvio.xyz/join'

export default function Hero({ titleOpacity, titleY }) {
  return (
    <section className="relative z-30 flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center ">
      <motion.div
        className="pointer-events-auto max-w-6xl"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <h1 className="mb-4 text-[40px] font-black leading-[0.9] text-black sm:text-[60px] md:text-[80px] uppercase">
          One Global Account
          <br />
          For Digital Life
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-2xl font-medium tracking-tight text-zinc-700  md:text-4xl">
          Get paid, save, invest, & spend everywhere
        </p>

        <motion.a
          href={JOIN}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex rounded-full bg-black px-12 py-6 text-xl font-bold text-[#DFFF00]"
        >
          Get early access
        </motion.a>
      </motion.div>
    </section>
  )
}