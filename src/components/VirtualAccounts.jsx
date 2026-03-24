import { Globe2, ShieldCheck } from 'lucide-react'
import MotionReveal from './MotionReveal'

export default function VirtualAccounts() {
  return (
    <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <MotionReveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Virtual accounts
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Accounts details that work globally
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-zinc-400">
            Send and receive bank transfers across 160+ countries with dedicated
            USD or EUR account details, built for global income.
          </p>
          <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-surface p-4">
            <Globe2
              className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500"
              strokeWidth={1.5}
              aria-hidden
            />
            <div>
              <p className="text-sm font-medium text-white">
                Get paid and send money anywhere
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Spend from one balance. Use your Avvio Visa card at 150M+
                merchants. Apple Pay ready.
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="relative rounded-3xl border border-zinc-800 bg-surface-elevated p-8 shadow-2xl shadow-black/50">
            <div className="pointer-events-none absolute -right-20 top-10 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <ShieldCheck
              className="mb-6 h-8 w-8 text-zinc-400"
              strokeWidth={1.25}
              aria-hidden
            />
            <p className="mb-1 text-xl font-medium text-white">
              Your money,
              <br />
              your control.
            </p>
            <p className="mb-6 text-xl font-medium text-zinc-500">
              No one else.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Every transaction is securely signed by Turnkey, with real time
              alerts for all activity
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
