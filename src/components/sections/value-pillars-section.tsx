import { valuePillars } from "@/data/home-content";

export function ValuePillarsSection() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
            Diferenciais NR Cozinhas
          </p>
          <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
            Mais clareza para o cliente decidir.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="section-shell rounded-[1.6rem] px-6 py-7">
              <h3 className="text-2xl font-semibold leading-tight text-[color:var(--brand-blue)]">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/70">{pillar.description}</p>
              <p className="mt-5 rounded-[1rem] bg-[color:var(--brand-blue-soft)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--brand-blue)]">
                {pillar.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
