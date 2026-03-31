import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import MoneySimpleSection from './components/MoneySimpleSection'
import Navbar from './components/Navbar'
import { useHomeScrollAnimation } from './hooks/useHomeScrollAnimation'
import GlobalIncomeSection from './components/GlobalIncomeSection'
import MakeMoneySection from './components/MakeMoneySection'
import SavingsFeaturesSection from './components/SavingsFeaturesSection'
import Footer from './components/Footer'
import WaitlistCTA from './components/WaitlistCTA'
import TrustStrip from './components/TrustStrip'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Brand from './components/Brand'
import Blog from './components/blogPosts'
import VirtualAccountsSection from './components/VirtualAccountsSection'
import OneAccountSection from './components/OneAccountSection'
import FAQ from './components/FAQ'
import JoinPage from './components/JoinPage'

const PHONE_IMAGE =
  'https://res.cloudinary.com/di4caiech/image/upload/v1774596314/EWu41VqQkx12Iz9EYP12sxSuk_2_tpro6q.avif'

function HomePage() {
  const containerRef = useRef(null)
  const [useColorLogo, setUseColorLogo] = useState(false)
  const {
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
  } = useHomeScrollAnimation(containerRef)

  useEffect(() => {
    const sectionIds = [
      'virtual-accounts-section',
      'one-account-section',
      'faq-section',
      'footer-section',
      'trust-strip-section',
      'waitlist-cta-section',
    ]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const visibleSections = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target.id) return

          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id)
          } else {
            visibleSections.delete(entry.target.id)
          }
        })

        setUseColorLogo(visibleSections.size > 0)
      },
      {
        root: null,
        rootMargin: '-35% 0px -35% 0px',
        threshold: [0, 0.15, 0.3, 0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="min-h-svh lg:bg-white">
        <Navbar useColorLogo={useColorLogo} />

        <main
          ref={containerRef}
          className="relative min-h-[125svh] overflow-x-clip lg:min-h-[128svh]"
        >
          <div className="sticky top-0 z-10 h-svh min-h-svh w-full pointer-events-none">
            <motion.div
              aria-hidden
              className="absolute inset-0"
              style={{ background: bgGradient }}
            />
            // inside HomePage...
<div className="absolute inset-0 flex items-start lg:items-end justify-center pt-20 lg:pt-0">
  <motion.div
    style={{
      transformPerspective: 1200,
      x: phoneX,
      y: phoneY,
      scaleX: phoneScaleX,
      scaleY: phoneScaleY,
      rotateX,
      rotateY,
      transformStyle: 'preserve-3d',
      transformOrigin: 'center bottom',
    }}
    className="relative w-max max-w-full will-change-transform"
  >
    <img
      src={PHONE_IMAGE}
      alt="App"
      // Cap height on mobile so text has room at the bottom
      className="h-auto max-h-[54svh] sm:max-h-[60svh] lg:max-h-[min(88dvh,920px)] w-auto max-w-[80vw] lg:max-w-full object-contain"
    />
  </motion.div>
</div>

            {/* Desktop-only overlay text (beside phone) */}
            <div className="hidden lg:block">
              <MoneySimpleSection
                contentOpacity={moneyOpacity}
                contentY={moneyY}
                contentX={moneyX}
                contentScale={moneyScale}
                contentFilter={moneyFilter}
              />
            </div>
          </div>

          {/* Pull only the Hero into the sticky viewport */}
          <div className="relative z-20 -mt-[100svh]">
            <Hero titleOpacity={titleOpacity} titleY={titleY} />
          </div>

          {/* Mobile: show Money text after the phone image, without motion */}
          <div className="relative z-20 lg:hidden">
            <MoneySimpleSection
              contentOpacity={moneyOpacity}
              contentY={moneyY}
              contentX={moneyX}
              contentScale={moneyScale}
              contentFilter={moneyFilter}
              mobileBelow
            />
          </div>
        </main>
        <GlobalIncomeSection />
        <MakeMoneySection />
        <SavingsFeaturesSection />
        <VirtualAccountsSection />
        <OneAccountSection />
        <TrustStrip />
        <FAQ />
        <WaitlistCTA />
      </div>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}