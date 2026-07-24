import { processSteps } from "@/data/home-content";

export function ProcessSection() {
  return (
    <section className="w-full px-4 py-10 max-[768px]:px-0 max-[768px]:py-6 sm:px-6 lg:px-8">
      <div className="w-full rounded-[2rem] bg-[color:var(--brand-blue)] px-6 py-8 text-white shadow-[var(--shadow)] max-[768px]:rounded-none max-[768px]:shadow-none sm:px-8 lg:px-10">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Processo de atendimento</p>
          <h2 className="display-font mt-3 text-3xl leading-tight sm:text-4xl">
            Como conduzimos o atendimento para cozinhas profissionais.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-[1.5rem] border border-white/15 bg-white/7 p-5 max-[768px]:border-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Etapa {item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/78">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
