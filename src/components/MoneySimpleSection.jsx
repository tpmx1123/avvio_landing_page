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
      className="relative z-20 flex min-h-svh items-center justify-center bg-transparent px-6 lg:min-h-[132vh] lg:items-start lg:justify-center lg:px-14 lg:pb-8 lg:pt-8 xl:px-16"
    >
      {/* Wider column + stronger left shift closes gap to the sticky phone */}
      <div className="flex w-full max-w-md flex-col items-center text-center lg:ml-auto lg:max-w-none lg:w-[58%] lg:min-w-0 lg:-translate-x-14 lg:sticky lg:top-48 lg:z-30 lg:self-start  xl:w-[60%] xl:-translate-x-20">
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
            x: contentX,
            scale: contentScale,
            filter: contentFilter,
          }}
          className="w-full max-w-xl lg:max-w-none lg:w-2xl"
        >
          <h2 className="mb-4 text-[40px] font-black leading-[0.9] tracking-tight text-black md:text-[58px] lg:mb-8 lg:text-7xl">
            Money, finally <br /> simple
          </h2>

          <p className="mx-auto max-w-xl text-[16px] font-medium leading-snug text-zinc-400 md:text-[24px] lg:mx-0 lg:ml-auto lg:max-w-none lg:text-3xl">
            Avvio replaces multiple accounts, transfers, and apps with one account built for people who live between systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
