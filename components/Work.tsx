import { FEATURED_PRACTICE, MORE_PRACTICE } from "@/lib/work";
import { SiteBackground } from "./SiteBackground";
import { BlurredBlooms } from "./BlurredBlooms";

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden">
      <SiteBackground className="absolute inset-0" />
      <BlurredBlooms count={12} />
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <p className="font-script text-3xl text-sage">Field notes</p>
        <h2 className="mt-2 font-serif text-3xl font-bold italic tracking-tight text-ink sm:text-4xl">
          Research &amp; practice
        </h2>
        <p className="mt-3 max-w-xl text-ink/60">
          Where cultural research turned into a point of view, and sometimes, a
          shipped product.
        </p>

        <div className="mt-12 space-y-14">
          {FEATURED_PRACTICE.map((project) => (
            <div key={project.id} className="border-t border-ink/10 pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage">
                {project.eyebrow}
              </p>
              <h3 className="mt-3 max-w-2xl font-serif text-2xl font-bold italic tracking-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-ink/50">{project.role}</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-ink/75">{project.paragraph}</p>

              {project.stats && (
                <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                  {project.stats.map((stat) => (
                    <li key={stat} className="text-sm font-semibold text-ink/70">
                      · {stat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* condensed practice index */}
        <div className="mt-16 border-t border-ink/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink/40">Also</p>
          <div className="mt-6 space-y-6">
            {MORE_PRACTICE.map((item) => (
              <div key={item.title} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <div className="sm:w-56 sm:flex-none">
                  <p className="font-serif text-lg font-bold italic text-ink">{item.title}</p>
                  <p className="text-xs font-semibold text-ink/45">{item.role}</p>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-ink/65">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
