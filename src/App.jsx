import FeatureBento from './components/FeatureBento'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MoneySimpleSection from './components/MoneySimpleSection'
import Navbar from './components/Navbar'
import OneAccountSection from './components/OneAccountSection'
import SavingsSection from './components/SavingsSection'
import TrustStrip from './components/TrustStrip'
import VirtualAccounts from './components/VirtualAccounts'
import WaitlistCTA from './components/WaitlistCTA'

export default function App() {
  return (
    <div className="min-h-svh bg-background text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <MoneySimpleSection />  
        {/* <FeatureBento /> */}
        {/* <SavingsSection /> */}
        {/* <VirtualAccounts /> */}
        {/* <OneAccountSection /> */}
        {/* <TrustStrip /> */}
        {/* <WaitlistCTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
