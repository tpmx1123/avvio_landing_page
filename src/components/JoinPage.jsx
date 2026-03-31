import Navbar from './Navbar'
import Footer from './Footer'

const HERO_IMAGE_1 = 'https://res.cloudinary.com/di4caiech/image/upload/v1774672795/EWu41VqQkx12Iz9EYP12sxSuk_2_xeypiy.png'
const HERO_IMAGE_2 = HERO_IMAGE_1 

function StoreButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-[#B4FF00] px-10 py-3.5 text-[16px] font-bold text-black transition-transform hover:scale-105 active:scale-95"
    >
      Download
    </a>
  );
}

function JoinSection({ reverse = false, subtitle, theme = 'dark', platform }) {
  const isDark = theme === 'dark';
  const platformLogo = platform === 'apple' 
    ? "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
    : "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg";
  
  const platformName = platform === 'apple' ? 'App Store' : 'Google Play';

  return (
    <section className={isDark ? 'bg-black text-white' : 'bg-white text-black'}>
      <div className="mx-auto grid w-full max-w-[1200px] items-center px-6 py-12 md:px-20 lg:grid-cols-2 lg:py-24 gap-12">
        
        {/* IMAGE CARD */}
        <div className={reverse ? 'order-1' : 'order-1 lg:order-2'}>
          <div className="relative mx-auto flex w-full max-w-[540px] aspect-square items-center justify-center rounded-[60px] bg-[#B4FF00] p-8 sm:p-16">
            <img
              src={reverse ? HERO_IMAGE_1 : HERO_IMAGE_2}
              alt="Avvio app preview"
              className="h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* CONTENT SIDE - FULLY CENTERED */}
        <div className={reverse ? 'order-2' : 'order-2 lg:order-1'}>
          <div className="flex flex-col items-center text-center">
            
            <div className="mb-6 flex flex-col items-center gap-2">
               <img 
                 src={platformLogo} 
                 alt={platformName} 
                 className={`h-12 w-12 object-contain ${platform === 'apple' && isDark ? 'invert' : ''}`} 
               />
               <h2 className="text-3xl font-black tracking-tighter md:text-5xl">
                 {platformName}
               </h2>
               <p className="text-lg font-bold text-zinc-500">Now available</p>
            </div>

            <p className={`mb-8 max-w-md text-lg font-medium leading-snug ${isDark ? 'text-white/60' : 'text-zinc-500'}`}>
              {subtitle}
            </p>

            <StoreButton 
              url={platform === 'apple' ? 'https://apps.apple.com/in/app/avvio-global-account/id6758032676' : 'https://play.google.com/store/apps/details?id=xyz.avvio.app'} 
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default function JoinPage() {
  return (
    <>
      <div className="min-h-svh bg-black">
        <Navbar useColorLogo />
        <main className="pt-20">
          <JoinSection
            reverse
            platform="apple"
            subtitle="Install the app and get started right away. Track markets, manage your balance, and stay in control of your assets."
            theme="dark"
          />
          <JoinSection
            platform="google"
            subtitle="Get Avvio on Android. One global account to receive, save, and spend money anywhere."
            theme="light"
          />
        </main>
      </div>
      <Footer />
    </>
  )
}