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
  const titleY = useTransform(smooth, [0, 0.25], [0, -100])

  // Phone Vertical Position
  const phoneY = useTransform(
    smooth,
    [0, 0.28, 0.5, 0.75, 1],
    isMobile 
      ? ['92%', '45%', '20%', '15%', '18%'] // Moves phone higher so text fits below
      : ['82%', '56%', '18%', '12%', '14%']
  )

  // Phone Horizontal Position (Keep centered on mobile)
  const phoneX = useTransform(
    smooth,
    [0, 0.22, 0.48, 0.78, 1],
    isMobile
      ? ['0%', '0%', '0%', '0%', '0%']
      : ['7%', '4%', '1%', '-40%', '-68%']
  )

  const phoneScale = useTransform(
    smooth,
    [0, 0.35, 0.7, 1],
    isMobile ? [0.8, 0.9, 0.75, 0.72] : [1.08, 1, 0.86, 0.82]
  )

  const rotateX = useTransform(smooth, [0, 0.18, 0.42, 0.55, 1], [26, 20, 4, 0, 0])
  const rotateY = useTransform(smooth, [0, 0.42, 0.78, 1], [0, 0, 2, 0])

  const bgGradient = useTransform(
    smooth,
    [0, 0.55, 0.82],
    [
      'linear-gradient(to bottom, #ccff00 0%, #aaff00 100%)',
      'linear-gradient(to bottom, #ccff00 0%, #aaff00 45%, #dfff99 72%, #ffffff 100%)',
      'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
    ]
  )

  // Money Section Logic
  const moneyOpacity = useTransform(smooth, [0.62, 0.92], [0, 1])
  // On mobile, we start Y much lower (450) and bring it up to its relative position (180)
  const moneyY = useTransform(smooth, [0.62, 0.92], isMobile ? [450, 180] : [70, 0])
  const moneyX = useTransform(smooth, [0.62, 0.92], [0, 0])
  const moneyScale = useTransform(smooth, [0.62, 0.92], [0.9, 1])
  const blur = useTransform(smooth, [0.62, 0.92], [8, 0])

  return {
    titleOpacity, titleY, phoneY, phoneScale, phoneX, rotateX, rotateY,
    bgGradient, moneyOpacity, moneyY, moneyX, moneyScale, blur,
  }
}