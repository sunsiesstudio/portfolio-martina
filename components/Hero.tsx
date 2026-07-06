import { BlurredBlooms } from "./BlurredBlooms";
import { SiteBackground } from "./SiteBackground";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <SiteBackground className="absolute inset-0" />
      <BlurredBlooms count={10} />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 sm:pt-28">
        <h1 className="max-w-3xl font-serif text-4xl italic leading-[1.15] tracking-tight text-ink sm:text-6xl">
          I study what&apos;s shifting in culture and technology, then help brands act on it before it&apos;s obvious.
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-ink/70">
          I&apos;m a cultural intelligence researcher and concept strategist. Ten years
          moving between speculative research and shipped strategy: from a
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
