import { SiteBackground } from "./SiteBackground";
import { BlurredBlooms } from "./BlurredBlooms";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ink/10">
      <SiteBackground className="absolute inset-0" />
      <BlurredBlooms count={8} />
      <div className="relative mx-auto max-w-3xl px-6 py-20">
        <p className="font-script text-3xl text-sage">About</p>
        <h2 className="mt-2 font-serif text-3xl font-bold italic tracking-tight text-ink sm:text-4xl">
          Reading culture for a living.
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-ink/75">
          Based in Barcelona and working globally. I operate where cultural
          forecasting meets technical reality.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-ink/75">
          Because I spent years as both a visual designer and a product
          architect, my research avoids vague generalities. I provide brands
          with clear, tactically viable blueprints for how to evolve their
          products, narratives, and platforms alongside human culture.
        </p>
      </div>
    </section>
  );
}
