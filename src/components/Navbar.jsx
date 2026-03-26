import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const JOIN = 'https://avvio.xyz/join'
const LOGO_BLACK =
  'https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Black_4x-removebg-preview_e6qgvm.png'
const LOGO_COLOR =
  'https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Color_4x-removebg-preview_wxqq4d.png'

export default function Navbar({ useColorLogo = false }) {
  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-0 z-[100]', // Higher z-index to stay above phone
        'bg-transparent',
      )}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* MOBILE FIX: 
          - Changed justify-around to justify-between for better edge spacing on mobile.
          - Replaced fixed gap-209 with md:gap-209 so it only applies to desktop.
          - Added px-4 for mobile and md:px-6 for desktop.
      */}
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:justify-around md:px-4 md:gap-[809px]">
        
        <a href="/" className="flex items-center">
          <img
            src={useColorLogo ? LOGO_COLOR : LOGO_BLACK}
            alt="Avvio"
            // Slightly smaller logo on mobile (h-7) vs desktop (md:h-8.5)
            className="h-7 w-auto md:h-8.5"
          />
        </a>

        {/* Action Button */}
        <nav className="flex items-center">
          <a
            href={JOIN}
            className={cn(
              // Smaller padding on mobile (px-4 py-2) vs desktop (md:px-6 md:py-2.5)
              "rounded-full bg-white px-4 py-2 text-[14px] font-bold text-black shadow-sm md:px-6 md:py-2.5 md:text-[16px]",
              "transition-transform active:scale-95 hover:bg-zinc-50"
            )}
          >
            Get early access
          </a>
        </nav>
      </div>
    </motion.header>
  )
}