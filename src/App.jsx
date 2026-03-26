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

const PHONE_IMAGE =
  'https://res.cloudinary.com/dhzhuobu2/image/upload/v1774344202/MOBILE_SCREEN_i8myu5.png'

function HomePage() {
  const containerRef = useRef(null)
  const [useColorLogo, setUseColorLogo] = useState(false)
  const {
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
  } = useHomeScrollAnimation(containerRef)

  useEffect(() => {
    const sectionIds = [
      'virtual-accounts-section',
      'one-account-section',
      'trust-strip-section',
      'waitlist-cta-section',
      'footer-section',
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
      <div className="min-h-svh bg-gradient-to-b from-[#cf0] to-[#af0]">
        <Navbar useColorLogo={useColorLogo} />

        <main ref={containerRef} className="relative h-[230vh]">
          <motion.div
            className="sticky top-0 h-screen w-full "
            style={{
              background: bgGradient,
              perspective: '1400px',
            }}
          >
            <div className="absolute inset-0 flex items-end justify-center">
              <motion.div
                style={{
                  y: phoneY,
                  x: phoneX,
                  scale: phoneScale,
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center bottom',
                }}
                className="relative z-10 pointer-events-none"
              >
                <img
                  src={PHONE_IMAGE}
                  alt="App"
                  className="h-auto w-[min(70vw,390px)] md:w-[min(52vw,520px)] object-contain  "
                />
              </motion.div>
            </div>

            <div className="absolute inset-0 z-20">
              <Hero titleOpacity={titleOpacity} titleY={titleY} />

              <MoneySimpleSection
                contentOpacity={moneyOpacity}
                contentY={moneyY}
                contentX={moneyX}
                contentScale={moneyScale}
                blur={blur}
              />
            </div>
          </motion.div>

          <div className="h-screen bg-white" />
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
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
