import MotionReveal from './MotionReveal'

export default function TrustStrip() {
  return (
    <section className="border-y border-border px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Built with trusted infrastructure
          </p>
        </MotionReveal>
      </div>
    </section>
  )
}
