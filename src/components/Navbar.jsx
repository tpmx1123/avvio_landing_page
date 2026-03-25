import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const JOIN = 'https://avvio.xyz/join'
const LOGO =
  'https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Black_4x-removebg-preview_e6qgvm.png'

export default function Navbar() {
  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        'bg-transparent',
      )}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-4 py-14">
        <a href="/" className="flex items-center">
          <img
            src={LOGO}
            alt="Avvio"
            className="h-9 w-auto"
          />
        </a>

        {/* Action Button */}
        <nav className="flex items-center">
          <a
            href={JOIN}
            className={cn(
              "rounded-full bg-white px-4 py-3 text-[18px] font-bold text-black shadow-sm",
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