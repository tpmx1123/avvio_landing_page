import { PiggyBank, TrendingUp, Wallet, Zap } from 'lucide-react'
import MotionReveal from './MotionReveal'
import { cn } from '../lib/cn'

const subfeatures = [
  {
    title: 'Set goals',
    body: 'Separate money for taxes, runway, and plans.',
    icon: PiggyBank,
  },
  {
    title: 'Always growing',
    body: 'Interest accrues automatically over time.',
    icon: TrendingUp,
  },
  {
    title: 'Better rates',
    body: 'Your savings is optimized behind the scenes',
    icon: Wallet,
  },
  {
    title: 'Instant access',
    body: 'Move money in or out whenever you want',
    icon: Zap,
  },
]

export default function SavingsSection() {
  return (
    <section className="border-t border-border bg-[#070708] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Savings
          </p>
          <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Earn more, without doing more
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-zinc-400 md:text-lg">
            Save in USD or EUR. Earn automatically. Withdraw anytime.
          </p>
        </MotionReveal>

        <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {subfeatures.map((item, i) => (
            <MotionReveal key={item.title} delay={i * 0.06}>
              <div
                className={cn(
                  'h-full rounded-xl border border-zinc-800 bg-surface p-5',
                  'transition hover:border-zinc-700',
                )}
              >
                <item.icon
                  className="mb-3 h-5 w-5 text-zinc-500"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mb-1.5 text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500">{item.body}</p>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-surface p-8 text-center md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,250,250,0.08),transparent_50%)]" />
            <p className="relative mb-3 text-sm font-medium text-zinc-400 md:text-base">
              Make your money work. Earn up to 9% APY on your cash.
            </p>
            <p className="relative text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Earn up to{' '}
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                9% APY
              </span>{' '}
              on your cash
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
