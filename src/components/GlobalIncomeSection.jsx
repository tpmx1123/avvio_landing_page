import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Get paid in USD/EUR',
    desc: 'Dedicated account details to receive payments like a local, then hold or move funds anytime.',
    img: 'https://res.cloudinary.com/di4caiech/image/upload/v1774412011/aTB94AAdmwu44S5sMwgkL1ai1M_1_xng3dg.avif',
  },
  {
    title: 'Spend anywhere',
    desc: 'Spend global. Pay local.  Fair rates, 0 FX fee, access cash anywhere.',
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
          <h2 className="text-[30px] md:text-[60px] font-black text-black mb-4 mt-20">
            Built for global income
          </h2>

          <p className="text-[18px] md:text-[30px] text-zinc-500 max-w-4xl mx-auto leading-relaxed font-medium">
            Get paid in the U.S., pay bills in Canada, live in Mexico, your money stays in one place and works the same everywhere.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-20">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden rounded-3xl mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[380px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-2xl md:text-[38px] font-bold text-black mb-2">
                {card.title}
              </h3>

              <p className="text-zinc-400 text-xl md:text-[21px] leading-relaxed max-w-[340px] font-medium ">
                {card.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}