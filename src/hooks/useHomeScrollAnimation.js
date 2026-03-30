import { useScroll, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const SPRING = { stiffness: 92, damping: 36, mass: 0.88 }
const END = 0.44

export function useHomeScrollAnimation(containerRef) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Match Tailwind breakpoints: iPad Pro portrait is often exactly 1024px.
    // Treat <= 1024px as the tablet/mobile variant so layout + animation stay in sync.
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const scrollClamped = useTransform(scrollYProgress, (v) =>
    Math.min(1, Math.max(0, v))
  )

  const smooth = useSpring(scrollClamped, SPRING)

  // Title fades out quickly
  const titleOpacity = useTransform(smooth, [0, 0.12], [1, 0])
  const titleY = useTransform(smooth, [0, 0.12], [0, -100])

  // --- PHONE POSITION FIX ---
  // We stop the phone at 0.35 by repeating the final value ['2vh', '2vh']
  // This prevents the "drifting" bug in your video.
  const phoneY = useTransform(
    smooth,
    [0, 0.35, END], 
    isMobile ? ['55vh', '2vh', '2vh'] : ['88vh', '6vh', '6vh']
  )

  const phoneX = useTransform(
    smooth,
    [0, 0.35, END],
    isMobile ? ['0vw', '0vw', '0vw'] : ['0vw', '-20vw', '-20vw']
  )

  const PHONE_SCALE_T = [0, 0.2, 0.35]
  const phoneScaleX = useTransform(
    smooth,
    PHONE_SCALE_T,
    isMobile ? [1.5, 1.2, 1.05] : [2.8, 1.7, 1.05]
  )
  const phoneScaleY = useTransform(
    smooth,
    PHONE_SCALE_T,
    isMobile ? [1.3, 1.1, 1.02] : [2.0, 1.3, 1.1]
  )

  // Phone should be straight by the time the text starts
  const rotateX = useTransform(
    smooth,
    [0, 0.35], 
    isMobile ? [25, 0] : [54, 0]
  )

  // --- MONEY TEXT LOGIC ---
  // Desktop: 3 stops (0.35 -> 0.42 -> END)
  // Mobile: remove 1 step (2 stops) for a tighter, smoother reveal.
  const MONEY_T = [0.35, 0.42, END]

  const moneyOpacity = useTransform(smooth, MONEY_T, [0, 1, 1])

  const moneyX = useTransform(
    smooth,
    MONEY_T,
    isMobile ? ['0vw', '0vw', '0vw'] : [22, 0, 0]
  )

  // High vertical offset for mobile ensures it stays BELOW the phone
  const moneyY = useTransform(
    smooth,
    MONEY_T,
    isMobile ? ['85vh', '68vh', '68vh'] : [36, 0, 0]
  )

  const moneyScale = useTransform(
    smooth,
    MONEY_T,
    isMobile ? [0.9, 1, 1] : [0.9, 1, 1]
  )

  const moneyFilterT = isMobile ? [0.35, 0.4, END] : MONEY_T
  const moneyFilterOut = isMobile
    ? ['blur(12px)', 'blur(4px)', 'blur(0px)']
    : ['blur(12px)', 'blur(0px)', 'blur(0px)']

  const moneyFilter = useTransform(smooth, moneyFilterT, moneyFilterOut)

  const bgGradient = useTransform(
    smooth,
    [0, 0.16, 0.32, 0.4],
    [
      'linear-gradient(to bottom, #ccff00 0%, #ccff00 100%)',
      'linear-gradient(to bottom, #ccff00 0%, #aaff00 45%, #e5ffb8 100%)',
      'linear-gradient(to bottom, #f2ffd8 0%, #ffffff 100%)',
      'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
    ]
  )

  return {
    titleOpacity,
    titleY,
    phoneY,
    phoneScaleX,
    phoneScaleY,
    phoneX,
    rotateX,
    rotateY: 0,
    bgGradient,
    moneyOpacity,
    moneyY,
    moneyX,
    moneyScale,
    moneyFilter,
  }
}