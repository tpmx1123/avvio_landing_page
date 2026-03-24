import MotionReveal from './MotionReveal'

const JOIN = 'https://avvio.xyz/join'

export default function WaitlistCTA() {
  return (
    <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <MotionReveal>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Join the waitlist and help shape an account built for a global life.
          </h2>
          <a
            href={JOIN}
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Get early access
          </a>
        </MotionReveal>
      </div>
    </section>
  )
}
