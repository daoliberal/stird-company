import { FadeIn } from "@/components/ui/FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="bg-section px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About Stird
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Stird LTD is an independent software company based in London, UK.
              We design and develop mobile applications that solve small but
              persistent everyday frustrations — the kind most people have
              learned to live with.
            </p>
            <p>We believe technology should simplify, not complicate.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
