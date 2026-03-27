import { motion } from 'framer-motion'

export default function MoneySimpleSection({
  contentOpacity,
  contentY,
  contentX,
  contentScale,
  blur,
}) {
  return (
    <section className="absolute inset-x-0 top-0 h-[145vh] lg:inset-0 lg:h-full z-0 lg:z-30 flex items-start lg:items-center px-6 pt-[90vh] lg:pt-0 pb-14 lg:pb-0 lg:px-12">

      <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 lg:max-w-3xl lg:pr-16">

        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
            x: contentX,
            scale: contentScale,
            filter: blur ? `blur(${blur}px)` : 'blur(0px)',
          }}
          className="text-center pt-6 pb-10 lg:pt-30 lg:pb-0 lg:translate-y-0"
        >
          <h2 className="text-[40px] md:text-[58px] lg:text-7xl font-black text-black mb-4 lg:mb-8 leading-[0.9] tracking-tight ">
            Money, finally <br /> simple
          </h2>

          <p className="text-[16px] md:text-[24px] lg:text-3xl font-medium text-zinc-400 max-w-xl leading-snug">
            Avvio replaces multiple accounts, transfers, and apps with one account built for people who live between systems.
          </p>
        </motion.div>

      </div>
    </section>
  )
}