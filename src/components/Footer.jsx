import MotionReveal from './MotionReveal'

const links = {
  legal: [
    { label: 'Blogs', href: 'https://blog.avvio.xyz/' },
    { label: 'Privacy Policy', href: 'https://avvio.xyz/privacypolicy' },
    { label: 'Terms & Conditions', href: 'https://avvio.xyz/termsofservice' },
  ],
  social: [
    { label: 'X', href: 'https://x.com/tryavvio' },
    { label: 'Instagram', href: 'https://www.instagram.com/tryavvio/' },
  ],
  other: [{ label: 'Brand assets', href: 'https://avvio.xyz/brandassets' }],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#030304] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Legal
              </p>
              <ul className="space-y-2">
                {links.legal.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-zinc-400 transition hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Social
              </p>
              <ul className="space-y-2">
                {links.social.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-zinc-400 transition hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Other
              </p>
              <ul className="space-y-2">
                {links.other.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-zinc-400 transition hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-12 text-xs leading-relaxed text-zinc-600">
            © {new Date().getFullYear()} Anzo Labs, Inc. (d/b/a Avvio). All
            rights reserved.
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-zinc-600">
            Avvio is a financial technology company, not a bank. Services
            including virtual accounts, payment cards, and custody are provided
            by licensed partners. Availability varies by jurisdiction.
          </p>
        </MotionReveal>
      </div>
    </footer>
  )
}
