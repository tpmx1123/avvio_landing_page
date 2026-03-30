import { motion } from 'framer-motion'

export default function MoneySimpleSection({
  contentOpacity,
  contentY,
  contentX,
  contentScale,
  contentFilter,
}) {
  return (
    <section
      id="money-simple-section"
      className="relative z-20 flex min-h-svh w-full flex-col items-center px-10 pb-24 pt-14 lg:px-16"
    >
      {/* Container logic:
          - Mobile: Center everything, add top padding so it doesn't hit the phone.
          - Desktop: Shift content to the right (justify-end) to clear the phone on the left.
      */}
      <div className="flex w-full max-w-7xl flex-1 flex-col items-center justify-center lg:flex-row lg:justify-end">
        
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
            x: contentX,
            scale: contentScale,
            filter: contentFilter,
          }}
          // max-w-xl on mobile keeps the text from being too wide
          // lg:w-1/2 on desktop ensures it only takes up the right half of the screen
          className="z-30 flex w-full max-w-xl flex-col items-center text-center lg:max-w-2xl "
        >
          <h2 className="text-[10vw] font-black leading-[0.9] tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-7xl ">
            Money, finally <br className="hidden lg:block" /> simple
          </h2>

          <p className="mt-6 text-lg font-medium leading-snug text-zinc-500 md:text-2xl lg:mt-8 lg:text-3xl">
            Avvio replaces multiple accounts, transfers, and apps with one
            account built for people who live between systems.
          </p>
          
          {/* Optional: Add a button here if needed for mobile CTA */}
        </motion.div>
      </div>
    </section>
  )
}