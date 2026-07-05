import { AmbientBackground } from "./AmbientBackground";
import { AsciiShapes } from "./AsciiShapes";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <AmbientBackground className="absolute inset-0" />
      <AsciiShapes
        count={16}
        avoid={{ leftRange: [0, 62], topRange: [0, 100] }}
        className="z-[1]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 sm:pt-28">
        <p className="font-script text-4xl text-ink/80 sm:text-5xl">Martina Solés</p>
        <p className="mt-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-ink/60">
          Cultural Intelligence Researcher &amp; Concept Strategist
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl italic leading-[1.15] tracking-tight text-ink sm:text-6xl">
          I study what&apos;s shifting in culture and technology, then help brands act on it before it&apos;s obvious.
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-ink/70">
          Ten years moving between speculative research and shipped strategy: from a
          Mars-tourism satire exhibited in a Barcelona museum, to a guest-journey study
          that now runs across 3,500+ hotels.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="mailto:martinasoles@gmail.com"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-sage"
          >
            Say hello
          </a>
          <a
            href="https://www.linkedin.com/in/martinasoles/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-10 max-w-md text-xs italic text-ink/45">
          Past collaborators &amp; research partners: BMW, Guestline, BeInCrypto, Quanos
        </p>
      </div>
    </section>
  );
}
