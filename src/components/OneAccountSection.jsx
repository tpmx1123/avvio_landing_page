import { motion } from 'framer-motion'

export default function OneAccountSection() {
  return (
    <section id="one-account-section" className="bg-black text-white py-14 px-5 md:py-24 md:px-12">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12 md:mb-24">
        <h2 className="text-[34px] md:text-[55px] font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-4">
          Everything in <br className="md:hidden" /> one account
        </h2>
        <p className="text-zinc-400 text-[18px] md:text-[25px] font-medium max-w-2xl mx-auto leading-tight">
          Get paid, earn, spend, and invest without managing multiple systems.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 md:space-y-2">
        
        {/* ROW 1: Move Money */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-4 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[28px] md:rounded-[40px] overflow-hidden bg-zinc-900 aspect-square"
          >
            <img 
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774506786/bELiUijhEgIbPSbqoH6wBzEUt8c_s27xmf.avif" 
              alt="Hand holding phone"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left lg:pl-20 px-1 md:px-0"
          >
            <h3 className="text-[34px] md:text-5xl font-bold mb-3 md:mb-4 leading-none">
              Move money easily
            </h3>
            <p className="text-zinc-500 text-[18px] md:text-2xl font-medium leading-snug">
              Deposit and withdraw when you need to
            </p>
          </motion.div>
        </div>

        {/* ROW 2: Global Markets (Fixed Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-4 items-center">
          
          {/* TEXT SIDE: Removed flex-center and forced lg:items-start */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left lg:pr-20 px-1 md:px-0"
          >
            <h3 className="text-[34px] md:text-5xl font-bold mb-3 md:mb-4 leading-none">
              24/7 access to <br /> global markets
            </h3>
            <p className="text-zinc-400 text-[18px] md:text-xl font-medium leading-snug">
              Invest in major assets from one place
            </p>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 rounded-[28px] md:rounded-[40px] overflow-hidden bg-zinc-900 aspect-square"
          >
            <img 
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774506786/qqNFzjfNDGYW7DZ1NVrwmOlyU6Y_zpghq7.avif" 
              alt="Phone on green desk"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* ROW 3: Security made simple */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-4 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[28px] md:rounded-[40px] overflow-hidden bg-zinc-900 aspect-square"
          >
            <img 
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774506786/2Fptrj0515reM7E89vgJbP0cMg_x7kurx.avif" 
              alt="Hand holding phone"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left lg:pl-20 px-1 md:px-0"
          >
            <h3 className="text-[34px] md:text-5xl font-bold mb-3 md:mb-4 leading-none">
            Security made <br /> simple
            </h3>
            <p className="text-zinc-400 text-[18px] md:text-xl font-medium leading-snug">
            Face ID login, safe recovery,  export keys anytime.
            </p>
          </motion.div>
        </div>

        {/* ROW 4: Global Markets (Fixed Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-4 items-center">
          
          {/* TEXT SIDE: Removed flex-center and forced lg:items-start */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left lg:pr-20 px-1 md:px-0"
          >
            <h3 className="text-[34px] md:text-5xl font-bold mb-3 md:mb-4 leading-none">
            One USD balance
            </h3>
            <p className="text-zinc-400 text-[18px] md:text-xl font-medium leading-snug">
            Works automatically behind the <br /> scenes, no extra steps, no confusion.
            </p>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 rounded-[28px] md:rounded-[40px] overflow-hidden bg-zinc-900 aspect-square"
          >
            <img 
              src="https://res.cloudinary.com/di4caiech/image/upload/v1774506786/dyrV0gtQocg6qNewlJKzcJvV510_nwelau.avif" 
              alt="Phone on green desk"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}