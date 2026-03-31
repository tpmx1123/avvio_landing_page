import { useScroll, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const SPRING = { stiffness: 60, damping: 45, mass: 0.5 }

export function useHomeScrollAnimation(containerRef) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smooth = useSpring(scrollYProgress, SPRING)

  // 1. HERO TITLE
  const titleOpacity = useTransform(smooth, [0, 0.1], [1, 0])
  const titleY = useTransform(smooth, [0, 0.1], [0, -40])

  // 2. TIMING WINDOW
  const desktopT = [0.05, 0.35, 0.55, 0.75]
  // Mobile uses fewer steps to reduce "bouncy" motion while scrolling.
  const mobileT = [0.05, 0.35]

  // Phone Position
  // Mobile: stays at 8vh (top) | Desktop: stays at 6vh (centered)
  const phoneYDesktop = useTransform(smooth, desktopT, [
    '88vh',
    '6vh',
    '6vh',
    '6vh',
  ])
  const phoneYMobile = useTransform(smooth, mobileT, ['60vh', '2vh'])
  const phoneY = isMobile ? phoneYMobile : phoneYDesktop

  const phoneXDesktop = useTransform(smooth, desktopT, ['0vw', '-18vw', '-18vw', '-18vw'])
  const phoneXMobile = useTransform(smooth, mobileT, ['0vw', '0vw'])
  const phoneX = isMobile ? phoneXMobile : phoneXDesktop
  
  const phoneScaleX = useTransform(smooth, [0.05, 0.35], isMobile ? [1.6, 1.15] : [2.6, 1.2])
  const phoneScaleY = useTransform(smooth, [0.05, 0.35], isMobile ? [1.3, 1.12] : [1.9, 1.1])
  const rotateX = useTransform(smooth, [0.05, 0.35], isMobile ? [22, 0] : [52, 0])

  // 3. MONEY TEXT REVEAL
  const MONEY_T = [0.25, 0.60] 

  const moneyOpacityDesktop = useTransform(smooth, MONEY_T, [0, 1])
  const moneyOpacityMobile = useTransform(smooth, [0, 1], [1, 1])
  const moneyOpacity = isMobile ? moneyOpacityMobile : moneyOpacityDesktop
  
  // Money text: on mobile we keep it "stuck" to the bottom of the phone
  // (no y/x/scale/filter animation), while desktop keeps the reveal motion.
  const moneyYDesktop = useTransform(smooth, MONEY_T, ['30px', '0px'])
  const moneyYMobile = useTransform(smooth, [0, 1], ['0px', '0px'])
  const moneyY = isMobile ? moneyYMobile : moneyYDesktop

  const moneyXDesktop = useTransform(smooth, MONEY_T, ['40px', '0px'])
  const moneyXMobile = useTransform(smooth, [0, 1], [0, 0])
  const moneyX = isMobile ? moneyXMobile : moneyXDesktop

  const moneyScaleDesktop = useTransform(smooth, MONEY_T, [0.96, 1])
  const moneyScaleMobile = useTransform(smooth, [0, 1], [1, 1])
  const moneyScale = isMobile ? moneyScaleMobile : moneyScaleDesktop

  const moneyFilterDesktop = useTransform(
    smooth,
    [0.25, 0.45, 0.60],
    ['blur(15px)', 'blur(0px)', 'blur(0px)']
  )
  const moneyFilterMobile = useTransform(smooth, [0, 1], ['blur(0px)', 'blur(0px)'])
  const moneyFilter = isMobile ? moneyFilterMobile : moneyFilterDesktop
  // 4. BACKGROUND
  const bgGradient = useTransform(
    smooth,
    [0, 0.20, 0.50],
    [
      'linear-gradient(to bottom, #ccff00 0%, #ccff00 100%)',
      'linear-gradient(to bottom, #ccff00 100%, #ccff00 0%)',
      'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
    ]
  )

  return {
    titleOpacity, titleY, phoneY, phoneScaleX, phoneScaleY, phoneX, rotateX,
    rotateY: 0, bgGradient, moneyOpacity, moneyY, moneyX, moneyScale, moneyFilter,
  }
}