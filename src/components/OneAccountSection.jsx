import { ArrowRightLeft, LineChart, Lock } from 'lucide-react'
import MotionReveal from './MotionReveal'

const bullets = [
  {
    title: 'Everything in one account',
    body: 'Get paid, earn, spend, and invest without managing multiple systems.',
  },
  {
    title: 'Move money easily',
    body: 'Deposit and withdraw when you need to',
    icon: ArrowRightLeft,
  },
  {
    title: '24/7 access to global markets',
    body: 'Invest in major assets from one place',
    icon: LineChart,
  },
  {
    title: 'Security made simple',
    body: 'Face ID login, safe recovery, export keys anytime.',
    icon: Lock,
  },
  {
    title: 'One USD balance',
    body: 'Works automatically behind the scenes, no extra steps, no confusion.',
  },
]

export default function OneAccountSection() {
  return (
    <section className="border-t border-border bg-[#070708] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Everything in one account
          </h2>
        </MotionReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bullets.map((item, i) => {
            const Icon = item.icon
            return (
            <MotionReveal key={item.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-zinc-800 bg-surface p-6 transition hover:border-zinc-700">
                {Icon ? (
                  <Icon
                    className="mb-3 h-5 w-5 text-zinc-500"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                ) : null}
                <h3 className="mb-2 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {item.body}
                </p>
              </div>
            </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
