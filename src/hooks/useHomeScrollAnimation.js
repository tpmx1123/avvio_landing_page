import { useScroll, useSpring, useTransform } from 'framer-motion'

const SPRING = { stiffness: 90, damping: 38 }

/**
 * Scroll-driven motion values for the sticky hero → phone → money section sequence.
 * @param {React.RefObject<HTMLElement | null>} containerRef
 */
export function useHomeScrollAnimation(containerRef) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smooth = useSpring(scrollYProgress, SPRING)

  const titleOpacity = useTransform(smooth, [0, 0.22], [1, 0])
  const titleY = useTransform(smooth, [0, 0.25], [0, -180])

  const phoneY = useTransform(
    smooth,
    [0, 0.28, 0.5, 0.75, 1],
    ['82%', '56%', '18%', '12%', '14%']
  )

  const phoneScale = useTransform(
    smooth,
    [0, 0.35, 0.7, 1],
    [1.08, 1, 0.86, 0.82]
  )

  const phoneX = useTransform(
    smooth,
    [0, 0.22, 0.48, 0.78, 1],
    ['7%', '4%', '1%', '-40%', '-68%']
  )

  const rotateX = useTransform(
    smooth,
    [0, 0.18, 0.42, 0.55, 1],
    [26, 20, 4, 0, 0]
  )
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

  const moneyOpacity = useTransform(smooth, [0.62, 0.92], [0, 1])
  const moneyY = useTransform(smooth, [0.62, 0.92], [70, 0])
  const moneyX = useTransform(smooth, [0.62, 0.92], [90, 0])
  const moneyScale = useTransform(smooth, [0.62, 0.92], [0.88, 1.03])
  const blur = useTransform(smooth, [0.62, 0.92], [10, 0])

  return {
    titleOpacity,
    titleY,
    phoneY,
    phoneScale,
    phoneX,
    rotateX,
    rotateY,
    bgGradient,
    moneyOpacity,
    moneyY,
    moneyX,
    moneyScale,
    blur,
  }
}
