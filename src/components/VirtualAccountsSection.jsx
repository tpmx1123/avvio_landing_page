import { motion } from 'framer-motion'

export default function VirtualAccountsSection() {
  return (
    <section id="virtual-accounts-section" className="bg-[#050505] text-white py-24 px-6 md:px-12 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
      <span className="inline-block px-4 py-1 text-xs font-semibold bg-[#aaff00]/20 text-[#cff23d] rounded-full mb-4 uppercase tracking-wider">
          Virtual accounts
        </span>

        <h2 className="text-4xl md:text-6xl font-semibold  text-[#aaff00]  mb-4">
          Accounts details that work globally
        </h2>

        <p className="mt-4 text-zinc-500 text-xl md:text-[33px] font-medium max-w-4xl mx-auto ">
          Send and receive bank transfers across 160+ countries with dedicated USD or EUR account details, built for global income.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* TOP BIG CARD (Full Width) */}
        <div className="group relative rounded-[40px] bg-[#111111] border border-white/5 p-10 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden md:col-span-4 min-h-[500px] md:h-[520px]">
          <div className="max-w-xl z-10">
            <h3 className="text-5xl md:text-6xl font-semibold  opacity-90 group-hover:opacity-100 transition-opacity text-zinc-500 ">
              Get <span className="text-white ">paid</span> and 
              <br />send money <br /> 
              anywhere
            </h3>
          </div>

          <div className="relative mt-12 md:mt-0 flex justify-center w-full md:w-auto">
             <img
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774502694/05NTXTD2gykqnsy4RTAWP3Yh0Xg_iilfgt.avif"
              alt="Virtual Bank Account UI"
              className="w-[320px] md:w-[500px] object-contain translate-y-10 md:translate-y-40"
            />
          </div>
        </div>

        {/* BOTTOM LEFT: Spend Card (2 Cols) */}
        <div className="rounded-[40px] bg-[#111111] border border-white/5 p-10 flex flex-col justify-between md:col-span-2 min-h-[450px]">
          <p className="text-zinc-400 text-xl md:text-2xl font-medium  max-w-xl pl-6 py-4">
            <span className="text-white">Spend from one balance.</span> Use your Avvio Visa card at 150M+ merchants. Apple Pay ready.
          </p>

          <div className="relative mt-4 flex justify-center">
            {/* Card Asset */}
            <img
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774502694/ABn7WAEBSmD585E8kbsxTre5hOM_h9ofry.avif"
              alt="Avvio Card"
              className="w-full max-w-[400px] object-contain"
            />
          </div>
        </div>

        {/* BOTTOM RIGHT: Split into Neon and Secure Card (2 Cols) */}
        <div className="md:col-span-2 grid grid-cols-1 gap-">
          
          {/* Neon Card */}
          <div className="rounded-[30px] bg-[#aaff00] p-16 flex flex-col justify-center min-h-[300px]">
            <h3 className="text-4xl md:text-5xl font-semibold text-black ">
              <span className="opacity-40">Your money,</span><br />
              your control.<br />
              <span className="opacity-40">No one else.</span>
            </h3>
          </div>

          {/* Secure Signed Card */}
          <div className="rounded-[40px] bg-[#111111] border border-white/5 p-10 flex flex-col justify-center min-h-[180px]">
            <p className="text-zinc-100 text-xl md:text-3xl font-semibold ">
              Every transaction is securely signed by Turnkey, <span className="text-zinc-600">with real time alerts for all activity</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}