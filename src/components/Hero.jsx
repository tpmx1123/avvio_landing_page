import { motion } from 'framer-motion'

const JOIN = 'https://avvio.xyz/join'

export default function Hero({ titleOpacity, titleY }) {
  return (
    <section className="relative z-30 flex min-h-screen flex-col items-center justify-center px-8 pt-20 text-center ">
      <motion.div
        className="pointer-events-auto max-w-6xl"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <h1 className="mb-4 text-[40px] font-black leading-[0.9] text-black sm:text-[60px] md:text-[72px] uppercase">
        One global banking for <br />  digital life
          
        </h1>

        <p className="mx-auto mb-6 max-w-3xl text-[20px] font-medium text-black-500  md:text-[32px] ">
          Get paid, save, invest, & spend everywhere
        </p>

        <motion.a
          href={JOIN}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex rounded-full bg-black px-8 py-6 text-[16px] font-bold text-[#DFFF00]"
        >
          Get early access
        </motion.a>
      </motion.div>
    </section>
  )
}