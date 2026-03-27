import { useScroll, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const SPRING = { stiffness: 90, damping: 38 }

export function useHomeScrollAnimation(containerRef) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smooth = useSpring(scrollYProgress, SPRING)

  // Hero Title Animations
  const titleOpacity = useTransform(smooth, [0, 0.22], [1, 0])
  const titleY = useTransform(smooth, [0, 0.25], [0, -120])

  // Phone Vertical Position
  const phoneY = useTransform(
    smooth,
    [0, 0.2, 0.38, 0.56, 0.74],
    isMobile 
      ? ['56%', '38%', '20%', '12%', '4%'] // Mobile: starts lower in hero, then rises
      : ['92%', '56%', '18%', '12%', '14%']  // Desktop
  )

  // Phone Horizontal Position
  const phoneX = useTransform(
    smooth,
    [0, 0.18, 0.36, 0.56, 0.74],
    isMobile
      ? ['0%', '0%', '0%', '0%', '0%']       // Mobile: Keep centered
      : ['0%', '4%', '1%', '-40%', '-68%']  // Desktop: Slide left
  )

  const phoneScale = useTransform(
    smooth,
    [0, 0.26, 0.5, 0.74],
    isMobile ? [0.96, 1, 0.9, 0.86] : [1.08, 1, 0.86, 0.82]
  )

  // Rotations
  const rotateX = useTransform(smooth, [0, 0.14, 0.3, 0.42, 0.74], [26, 20, 4, 0, 0])
  const rotateY = useTransform(smooth, [0, 0.3, 0.56, 0.74], [0, 0, 2, 0])
  
  // Background Gradient
  const bgGradient = useTransform(
    smooth,
    isMobile ? [0, 0.62, 0.74] : [0.14, 0.26, 0.62],
    isMobile
      ? [
          'linear-gradient(to bottom, #ccff00 0%, #aaff00 45%, #dfff99 72%, #ffffff 100%)',
          'linear-gradient(to bottom, #ccff00 0%, #aaff00 45%, #dfff99 72%, #ffffff 100%)',
          'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
        ]
      : [
          'linear-gradient(to bottom, #ccff00 0%, #aaff00 100%)',
          'linear-gradient(to bottom, #ccff00 0%, #aaff00 45%, #dfff99 72%, #ffffff 100%)',
          'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
        ]
  )

  // Money Section Text Animations
  const moneyOpacity = useTransform(smooth, isMobile ? [0.5, 0.72] : [0.46, 0.68], [0, 1])
  const moneyY = useTransform(smooth, isMobile ? [0.5, 0.72] : [0.46, 0.68], isMobile ? [70, 0] : [70, 0])
  const moneyX = useTransform(smooth, isMobile ? [0.5, 0.72] : [0.46, 0.68], isMobile ? [0, 0] : [90, 0])
  const moneyScale = useTransform(smooth, isMobile ? [0.5, 0.72] : [0.46, 0.68], [0.95, 1])
  const blur = useTransform(smooth, isMobile ? [0.5, 0.72] : [0.46, 0.68], [8, 0])

  return {
    titleOpacity, titleY, phoneY, phoneScale, phoneX, rotateX, rotateY,
    bgGradient, moneyOpacity, moneyY, moneyX, moneyScale, blur,
  }
}