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
        'fixed inset-x-0 top-0 z-[100]',
        'bg-transparent',
      )}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={cn(
        "mx-auto flex w-full max-w-[1440px] items-center justify-between",
        // MOBILE & TABLET (iPad Mini): 
        // - Increased top padding (pt-8) to avoid status bars
        // - px-6 for better edge breathing room
        // - h-auto to ensure height doesn't clip button
        "h-auto px-6 pt-8 pb-4",
        // DESKTOP:
        // - Returns to your original layout
        "md:h-24 md:px-12 md:pt-6 md:justify-around md:gap-[809px]"
      )}>
        
        <a href="/" className="flex items-center shrink-0">
          <img
            src={useColorLogo ? LOGO_COLOR : LOGO_BLACK}
            alt="Avvio"
            // Scale logo for iPad/Mobile vs Desktop
            className="h-7 w-auto md:h-8.5 transition-all"
          />
        </a>

        {/* Action Button */}
        <nav className="flex items-center">
          <a
            href={JOIN}
            className={cn(
              "whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[14px] font-bold text-black shadow-lg shadow-black/5 md:px-6 md:py-2.5 md:text-[16px]",
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