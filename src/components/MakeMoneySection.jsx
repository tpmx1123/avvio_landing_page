export default function MakeMoneySection() {
  return (
    <section className="w-full sm:h-[50vh]  md:h-[100vh] bg-[#aaff00] flex items-center justify-center px-6 py-28 md:py-40">
      
      <div className="max-w-6xl text-center">
        
        {/* Heading */}
        <h2 className="text-black font-medium leading-tight tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Make your money work.
        </h2>

        {/* Sub Heading */}
        <p className=" text-black font-medium leading-snug tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          Earn up to <span className="font-bold">9% APY</span> on your cash.
        </p>
      </div>
    </section>
  )
}