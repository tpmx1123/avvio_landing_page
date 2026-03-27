import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const JOIN = 'https://avvio.xyz/join'
const LOGO_BLACK =
  'https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Black_4x-removebg-preview_e6qgvm.png'
const LOGO_COLOR =
  'https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Color_4x-removebg-preview_wxqq4d.png'

export default function Navbar({ useColorLogo = false }) {
  return (
    <>
      <motion.header
        className={cn('fixed inset-x-0 top-0 z-100', 'bg-transparent')}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Mobile: only centered logo */}
        <div className="mx-auto flex w-full items-center justify-center px-6 pt-8 pb-4 lg:hidden">
          <a
            href="/"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/25 shadow-[0_8px_28px_rgba(0,0,0,0.12)] backdrop-blur-md"
          >
            <img
              src={useColorLogo ? LOGO_COLOR : LOGO_BLACK}
              alt="Avvio"
              className="h-7 w-auto transition-all"
            />
          </a>
        </div>

        {/* Desktop: logo left + CTA right */}
        <div className="mx-auto hidden w-full max-w-[1440px] items-center justify-between px-24 pt-6 lg:flex lg:h-24">
          <a href="/" className="flex items-center shrink-0">
            <img
              src={useColorLogo ? LOGO_COLOR : LOGO_BLACK}
              alt="Avvio"
              className="h-8.5 w-auto transition-all"
            />
          </a>

          <nav className="flex items-center">
            <a
              href={JOIN}
              className={cn(
                'whitespace-nowrap rounded-full bg-white px-6 py-2.5 text-[16px] font-bold text-black shadow-lg shadow-black/5',
                'transition-transform active:scale-95 hover:bg-zinc-50'
              )}
            >
              Get early access
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Mobile floating CTA at bottom */}
      <div className="fixed inset-x-0 bottom-[max(16px,env(safe-area-inset-bottom))] z-120 flex justify-center px-5 lg:hidden">
        <a
          href={JOIN}
          className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-[#B4FF00] px-7 py-3 text-center text-[16px] font-bold text-black shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-transform active:scale-[0.97]"
        >
          Get early access
        </a>
      </div>
    </>
  )
}