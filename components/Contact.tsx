import { Scribble } from "./Scribble";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 text-center"
      style={{
        background: "linear-gradient(180deg, #f4efe4 0%, #c7d8de 100%)",
      }}
    >
      <Scribble
        color="var(--color-ink)"
        className="pointer-events-none absolute -bottom-14 -left-14 h-56 w-56 opacity-[0.15] sm:h-72 sm:w-72"
      />
      <p className="relative font-script text-4xl text-ink/70">Let&apos;s talk</p>
      <h2 className="mx-auto mt-2 max-w-2xl font-serif text-3xl font-bold italic tracking-tight text-ink sm:text-5xl">
        Got a shift you&apos;re trying to get ahead of?
      </h2>
      <p className="mx-auto mt-5 max-w-md text-ink/70">
        I take on a small number of research and strategy projects at a time.
        Tell me what you&apos;re building.
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
