import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const JOIN = 'https://avvio.xyz/join'

export default function Navbar() {
  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        // This creates that "transparent lime" look if the background is lime
        // Or you can use 'bg-[#DFFF00]' if you want the bar itself to be lime
        'bg-gradient-to-b from-[#cf0] to-[#cf0] backdrop-blur-md ',
      )}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2 group">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path 
              d="M20 5C11.7157 5 5 11.7157 5 20V35H12V28C12 23.5817 15.5817 20 20 20C24.4183 20 28 23.5817 28 28V35H35V20C35 11.7157 28.2843 5 20 5Z" 
              fill="currentColor" 
            />
            <circle cx="20" cy="15" r="3" fill="currentColor" />
          </svg>
          <span className="text-xl font-bold tracking-tighter text-black">
            avvio
          </span>
        </a>

        {/* Action Button */}
        <nav className="flex items-center">
          <a
            href={JOIN}
            className={cn(
              "rounded-full bg-white px-6 py-2.5 text-[14px] font-bold text-black shadow-sm",
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