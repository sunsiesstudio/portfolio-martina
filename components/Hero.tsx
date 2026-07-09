import { BlurredBlooms } from "./BlurredBlooms";
import { SiteBackground } from "./SiteBackground";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <SiteBackground className="absolute inset-0" />
      <BlurredBlooms count={10} />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 sm:pt-28">
        <h1 className="max-w-3xl font-serif text-4xl italic leading-[1.15] tracking-tight text-ink sm:text-6xl">
          I study cultural shifts and emerging technology to help brands design what comes next.
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-ink/70">
          I am a cultural intelligence researcher and concept strategist. My work
          combines conceptual foresight with a decade of technical execution.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
          Moving from visual communication and wearable prototypes to scaling
          digital platforms across thousands of properties, I look at trends
          through a practical lens. I translate cultural signals into clear
          product strategies, positioning territories, and interactive systems.
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
