import { useScroll, useSpring, useTransform } from 'framer-motion'

const SPRING = { stiffness: 86, damping: 38, mass: 0.85 }
const END = 0.62

export function useHomeScrollAnimation(containerRef) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const scrollClamped = useTransform(scrollYProgress, (v) =>
    Math.min(1, Math.max(0, v))
  )

  const smooth = useSpring(scrollClamped, SPRING)

  const titleOpacity = useTransform(smooth, [0, 0.2], [1, 0])
  const titleY = useTransform(smooth, [0, 0.2], [0, -100])

  const phoneY = useTransform(
    smooth,
    [0, 0.18, 0.3, 0.42, 0.52, END],
    ['84vh', '20vh', '12vh', '8vh', '4vh', '4vh']
  )

  const phoneX = useTransform(
    smooth,
    [0, 0.2, 0.32, 0.44, 0.54, END],
    ['0vw', '-5vw', '-10vw', '-18vw', '-20vw', '-20vw']
  )

  const PHONE_SCALE_T = [0, 0.18, 0.38, END]
  const phoneScaleX = useTransform(
    smooth,
    PHONE_SCALE_T,
    [2.8, 2.3, 1.42, 1.05]
  )
  const phoneScaleY = useTransform(
    smooth,
    PHONE_SCALE_T,
    [2.00, 1.40, 1.20, 1.1]
  )

  const rotateX = useTransform(
    smooth,
    [0, 0.16, 0.3, 0.42, 0.52, END],
    [54, 38, 18, 5, 0, 0]
  )

  // Phase 3 (~45%–62%): delayed narrator after hero/swoop; raw progress = sharp lock at END.
  const MONEY_T = [0.45, 0.52, END]
  const moneyOpacity = useTransform(scrollClamped, MONEY_T, [0, 1, 1, 1])
  const moneyY = useTransform(scrollClamped, MONEY_T, [40, 10, 0, 0])
  const moneyX = useTransform(scrollClamped, MONEY_T, [28, 8, 0, 0])
  const moneyScale = useTransform(scrollClamped, MONEY_T, [0.94, 1, 1, 1])
  const moneyFilter = useTransform(scrollClamped, MONEY_T, [
    'blur(12px)',
    'blur(0px)',
    'blur(0px)',
    'blur(0px)',
  ])
  const rotateY = 0

  const bgGradient = useTransform(
    smooth,
    [0, 0.22, 0.42, END],
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
    rotateY,
    bgGradient,
    moneyOpacity,
    moneyY,
    moneyX,
    moneyScale,
    moneyFilter,
  }
}