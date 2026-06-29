import { profile } from '../content.js'

export default function LemonPhrase() {
  if (!profile.funLine) return null
  return (
    <section className="border-b border-hairline bg-accent-soft">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 flex flex-col items-center text-center">
        <span className="text-5xl mb-6 animate-bounce">🍋</span>
        <p className="font-display italic text-3xl md:text-4xl text-accent-deep max-w-2xl leading-snug mb-3">
          "{profile.funLine}"
        </p>
        <p className="font-mono text-sm text-accent">— make lemonade, obviously.</p>
      </div>
    </section>
  )
}