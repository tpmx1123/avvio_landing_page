import { motion } from 'framer-motion'

export default function MoneySimpleSection({
  contentOpacity,
  contentY,
  contentX,
  contentScale,
  contentFilter,
  mobileBelow = false,
}) {
  return (
    <section
      className={
        mobileBelow
          ? 'w-full px-6  pointer-events-none'
          : 'absolute inset-0 z-30 flex flex-col items-center justify-end  lg:grid lg:grid-cols-2 lg:items-center px-6 lg:px-20  lg:pb-0 h-full w-full pointer-events-none'
      }
    >
      
      {/* Space reserved for phone on Desktop */}
      <div className="hidden lg:block pointer-events-none" />

      {/* Content Side */}
      <div className="flex items-end lg:items-center justify-center lg:justify-start pointer-events-auto">
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY, // This creates the "rise" from 40px to 0px
            x: contentX,
            scale: contentScale,
            filter: contentFilter,
          }}
          className="text-center lg:text-center w-full max-w-xl"
        >
          <h2 className="text-[38px] md:text-7xl lg:text-7xl font-black text-black mb-4 lg:mb-8 leading-[1.1] lg:leading-[0.9] tracking-tighter">
            Money, finally <br className="hidden lg:block" /> simple
          </h2>

          <p className="text-[16px] md:text-2xl lg:text-2xl font-medium text-zinc-400 leading-snug max-w-2xl mx-auto lg:mx-0">
            Avvio replaces multiple accounts, transfers, and apps with one account built for people who live between systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}