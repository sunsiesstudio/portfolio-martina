import { TRAJECTORY } from "@/lib/work";
import { SiteBackground } from "./SiteBackground";

export default function Trajectory() {
  return (
    <section id="trajectory" className="relative overflow-hidden bg-white">
      <SiteBackground className="absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <p className="font-script text-3xl text-sage">The Trajectory</p>
        <h2 className="mt-2 max-w-2xl font-serif text-3xl font-bold italic tracking-tight text-ink sm:text-4xl">
          Built on a decade of shipping technology.
        </h2>
        <p className="mt-3 max-w-xl text-ink/60">
          My foresight work is anchored in design pedigree, technical execution,
          and business scale:
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {TRAJECTORY.map((item) => (
            <div key={item.label} className="border-t border-ink/10 pt-6">
              <h3 className="font-serif text-lg font-bold italic tracking-tight text-ink">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
