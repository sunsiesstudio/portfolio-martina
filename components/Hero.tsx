import { Scribble } from "./Scribble";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #aec4cd 0%, #c7d8de 55%, #f4efe4 100%)",
      }}
    >
      {/* hand-drawn scribble-cloud motif */}
      <Scribble
        color="var(--color-paper)"
        className="pointer-events-none absolute -right-16 -top-6 h-64 w-64 opacity-80 sm:h-80 sm:w-80"
      />
      <div className="pointer-events-none absolute left-8 top-10 h-14 w-14 rounded-full bg-[#f3c9d9]/70 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute left-40 top-4 hidden h-8 w-8 rounded-full bg-[#f3c9d9]/70 sm:block" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-10 w-10 rounded-full bg-lime/50 sm:h-16 sm:w-16" />

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
