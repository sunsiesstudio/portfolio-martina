import { SERVICES } from "@/lib/work";

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-5xl px-6 py-24">
      <p className="font-script text-3xl text-sage">Ways in</p>
      <h2 className="mt-2 max-w-xl font-serif text-3xl font-bold italic tracking-tight text-ink sm:text-4xl">
        Four ways to work together
      </h2>
      <p className="mt-3 max-w-md text-ink/60">
        Less a menu, more a loop — most projects move through all four.
      </p>

      <div className="relative mt-16 grid grid-cols-[3rem_1fr] gap-x-6 sm:grid-cols-[4.5rem_1fr] sm:gap-x-10">
        {/* winding connector line */}
        <svg
          className="absolute left-0 top-2 h-full w-12 sm:w-[4.5rem]"
          viewBox="0 0 72 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 36 20 C 60 120, 12 180, 36 280 C 60 380, 12 440, 36 540 C 60 640, 12 700, 36 780"
            stroke="var(--color-sage)"
            strokeWidth="1.5"
            strokeDasharray="1 7"
            strokeLinecap="round"
          />
        </svg>

        {SERVICES.map((service, i) => (
          <div key={service.title} className="contents">
            <div className="relative z-10 flex justify-center pt-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-sage bg-paper font-serif text-sm italic text-sage sm:h-11 sm:w-11">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div className={i === SERVICES.length - 1 ? "pb-2" : "pb-16"}>
              <h3 className="font-serif text-xl font-bold italic tracking-tight text-ink sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 max-w-md leading-relaxed text-ink/70">
                {service.description}
              </p>
              {service.note && (
                <a
                  href={service.note.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-sage underline decoration-sage/40 underline-offset-4 hover:text-ink"
                >
                  {service.note.text} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
