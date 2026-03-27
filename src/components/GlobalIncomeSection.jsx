import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Get paid in USD/EUR',
    desc: 'Dedicated account details to receive payments like a local, then hold or move funds anytime.',
    img: 'https://res.cloudinary.com/di4caiech/image/upload/v1774412011/aTB94AAdmwu44S5sMwgkL1ai1M_1_xng3dg.avif',
  },
  {
    title: 'Spend anywhere',
    desc: 'Spend global. Pay local. Fair rates, 0 FX fee, access cash anywhere.',
    img: 'https://res.cloudinary.com/di4caiech/image/upload/v1774412012/9af6tAGS101wObCA2fEZ9gosj4_j42qn5.avif',
  },
  {
    title: 'Earn automatically',
    desc: 'Put idle money to work with higher yield, while keeping access whenever you need it.',
    img: 'https://res.cloudinary.com/di4caiech/image/upload/v1774412011/lwRS1DhRRUwowN5fBmrGb55WI_mbl0ci.avif',
  },
]

export default function GlobalIncomeSection() {
  return (
    <section className="bg-white py-14 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* 🔥 HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-black leading-[1] tracking-tight text-black mb-4 mt-10 md:mt-40 md:text-[60px] md:leading-normal uppercase md:normal-case">
            Built for <br className="md:hidden" /> global income
          </h2>

          <p className="text-[18px] text-zinc-500 max-w-4xl mx-auto leading-tight font-medium md:text-[30px] md:leading-relaxed">
            Get paid in the U.S., pay bills in Canada, live in Mexico, your money stays in one place and works the same everywhere.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid grid-cols-1 gap-14 mb-20 md:grid-cols-3 md:gap-6">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center md:items-start"
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[32px] mb-6 md:mb-4 w-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[320px] md:h-[350px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT CONTENT - CENTERED ON MOBILE */}
              <div className="px-1 text-center md:text-left">
                <h3 className="text-[28px] font-black leading-none text-black mb-3 md:text-[38px] md:font-bold md:normal-case uppercase tracking-tighter">
                  {card.title}
                </h3>

                <p className="text-zinc-400 text-[17px] leading-snug max-w-[280px] md:max-w-[320px] mx-auto md:mx-0 md:text-[20px]">
                  {card.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}