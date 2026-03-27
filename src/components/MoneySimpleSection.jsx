import { motion } from 'framer-motion'

export default function MoneySimpleSection({
  contentOpacity,
  contentY,
  contentX,
  contentScale,
  blur,
}) {
  return (
    <section className="absolute inset-0 z-30 flex items-start md:items-center px-6 pt-22 md:pt-20 md:px-12">

      <div className="w-full max-w-md mx-auto md:ml-auto md:mr-0 md:max-w-3xl lg:pr-16">

        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
            x: contentX,
            scale: contentScale,
            filter: blur ? `blur(${blur}px)` : 'blur(0px)',
          }}
          className="text-center "
        >
          <h2 className="text-[40px] md:text-7xl font-black text-black mb-4 md:mb-8 leading-[0.9] tracking-tight ">
            Money, finally <br /> simple
          </h2>

          <p className="text-[16px] md:text-3xl font-medium text-zinc-400 max-w-xl leading-snug">
            Avvio replaces multiple accounts, transfers, and apps with one account built for people who live between systems.
          </p>
        </motion.div>

      </div>
    </section>
  )
}