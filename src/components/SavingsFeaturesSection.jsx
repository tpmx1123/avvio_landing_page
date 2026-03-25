import { motion } from 'framer-motion'

export default function SavingsFeaturesSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      
      {/* HEADER */}
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 text-[20px] font-black bg-black text-[#aaff00] rounded-full mb-6 uppercase tracking-wider">
          Savings
        </span>

        <h2 className="text-[40px] md:text-[65px] font-black text-black">
          Earn more, without doing more
        </h2>

        <p className="mt-4 text-zinc-400 text-[18px] md:text-[28px] font-medium max-w-3xl mx-auto">
          Save in USD or EUR. Earn automatically. Withdraw anytime.
        </p>
      </div>

      {/* ✅ CENTERED GRID */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* BIG LEFT */}
        <div className="rounded-[40px] border border-zinc-300 bg-white p-10 flex flex-col items-center text-center min-h-[520px] md:row-span-2">
          
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-black pt-10">
              Set goals
            </h3>
            <p className="text-zinc-400 mt-2 text-lg font-medium">
              Separate money for taxes, runway, and plans.
            </p>
          </div>

          {/* 👇 FIXED SPACING */}
          <div className="mt-auto flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774423417/udn9OLgpaMuiVaZx0tZIEjIoxo_1_c2ckoe.avif"
              className="w-[100%] object-contain"
            />
          </div>
        </div>

        {/* SMALL RIGHT */}
        <div className="rounded-[40px] border border-zinc-300 bg-white p-10 flex flex-col items-center text-center min-h-[240px]">
          
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              Better rates
            </h3>
            <p className="text-zinc-400 mt-2 text-lg font-medium mb-5">
              Your savings is optimized behind the scenes.
            </p>
          </div>

          <div className="mt-auto flex justify-center">
            <img
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774423417/z51ZiglfsnU0R0bJV1RLVLEQ_co2w3p.avif"
              className="w-[90%] object-contain"
            />
          </div>
        </div>

        {/* BIG RIGHT */}
        <div className="rounded-[40px] border border-zinc-300 bg-white p-10 flex flex-col items-center text-center min-h-[520px] md:row-span-2">
          
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
              Instant access
            </h3>
            <p className="text-zinc-400 mt-2 text-lg font-medium mb-5">
              Move money in or out whenever you want.
            </p>
          </div>

          <div className="mt-auto flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774440427/image_-_2026-03-25T173353.129.jpg_ythy2z.png"
              className="w-[80%] object-contain"
            />
          </div>
        </div>

        {/* SMALL LEFT */}
        <div className="rounded-[40px] border border-zinc-300 bg-white p-10 flex flex-col items-center text-center min-h-[240px]">
          
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              Always growing
            </h3>
            <p className="text-zinc-400 mt-2 text-lg font-medium mb-5">
              Interest accrues automatically over time.
            </p>
          </div>

          <div className="mt-auto bg-[#f4fce3] rounded-[32px] p-6 w-full text-center">
            <p className="text-3xl font-black text-[#84cc16]">$17,234.22</p>
            <p className="text-3xl font-black text-[#84cc16]/40">$17,234.01</p>
            <p className="text-3xl font-black text-[#84cc16]/20">$17,233.47</p>
          </div>
        </div>

      </div>
    </section>
  )
}