import { SiteBackground } from "./SiteBackground";
import { BlurredBlooms } from "./BlurredBlooms";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 text-center">
      <SiteBackground className="absolute inset-0" />
      <BlurredBlooms count={8} className="z-[1]" />
      <p className="relative font-script text-4xl text-ink/70">Let&apos;s talk</p>
      <h2 className="relative mx-auto mt-2 max-w-2xl font-serif text-3xl font-bold italic tracking-tight text-ink sm:text-5xl">
        Got a shift you&apos;re trying to get ahead of?
      </h2>
      <p className="relative mx-auto mt-5 max-w-md text-ink/70">
        I take on a select number of strategy, research, and concept consulting
        projects each year. Let&apos;s look at the signals together.
      </p>
      <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:martinasoles@gmail.com"
          className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-colors hover:bg-sage"
        >
          martinasoles@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/martinasoles/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ink/25 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
