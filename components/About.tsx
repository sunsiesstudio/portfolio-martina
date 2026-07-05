import { Scribble } from "./Scribble";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ink/10 bg-paper-dim">
      <Scribble
        color="var(--color-sage)"
        className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-30 sm:h-56 sm:w-56"
      />
      <div className="pointer-events-none absolute right-16 top-8 h-10 w-10 rounded-full bg-blush/60" />
      <div className="relative mx-auto max-w-3xl px-6 py-20">
        <p className="font-script text-3xl text-sage">About</p>
        <h2 className="mt-2 font-serif text-3xl font-bold italic tracking-tight text-ink sm:text-4xl">
          Reading culture for a living
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-ink/75">
          Martina studies what&apos;s shifting in culture and technology, then
          helps brands act on it before it&apos;s obvious. That instinct started
          with speculative prototypes exhibited at Barcelona&apos;s DHUB design
          museum and covered by national television, and later shaped brand and
          product strategy for platforms like BeInCrypto and Guestline.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-ink/75">
          She works from research, not assumptions, and from a decade spent on
          both sides: building the speculative thing, and shipping the real one.
        </p>
      </div>
    </section>
  );
}
