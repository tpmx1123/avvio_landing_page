import {
  Banknote,
  CreditCard,
  Sparkles,
} from 'lucide-react'
import { cn } from '../lib/cn'
import MotionReveal from './MotionReveal'

const cards = [
  {
    title: 'Get paid in USD/EUR',
    body: 'Dedicated account details to receive payments like a local, then hold or move funds anytime.',
    icon: Banknote,
  },
  {
    title: 'Spend anywhere',
    body: 'Pay in local currency with one card and one balance, without juggling exchanges or extra steps.',
    icon: CreditCard,
    footnote:
      'Spend global. Pay local. Fair rates, 0 FX fee, access cash anywhere.',
  },
  {
    title: 'Earn automatically',
    body: 'Put idle money to work with higher yield, while keeping access whenever you need it.',
    icon: Sparkles,
  },
]

function BentoCard({ className, children }) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-800 bg-surface p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition',
        'hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40',
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/4 blur-2xl transition group-hover:bg-white/7" />
      {children}
    </div>
  )
}

export default function FeatureBento() {
  return (
    <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
            <MotionReveal key={card.title} delay={i * 0.08}>
              <BentoCard className="flex h-full flex-col text-left">
                <Icon
                  className="mb-4 h-6 w-6 text-zinc-400"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                  {card.body}
                </p>
                {card.footnote ? (
                  <p className="mt-4 border-t border-zinc-800 pt-4 text-xs text-zinc-500">
                    {card.footnote}
                  </p>
                ) : null}
              </BentoCard>
            </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
