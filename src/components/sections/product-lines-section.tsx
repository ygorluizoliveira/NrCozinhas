import { productLines } from "@/data/home-content";

export function ProductLinesSection() {
  return (
    <section id="linhas" className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">Linha de produtos</p>
          <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
            Principais frentes de equipamentos para cozinhas industriais e profissionais.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productLines.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(21,42,108,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-red)]">Categoria</p>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--brand-blue)]">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/68">{group.description}</p>
              <div className="mt-6 h-px w-full bg-[color:var(--line)]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                Linha profissional
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
