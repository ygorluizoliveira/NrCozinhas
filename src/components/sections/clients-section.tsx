import { stats } from "@/data/home-content";
import { whatsappUrl } from "@/lib/contact";

export function ClientsSection() {
  return (
    <section id="clientes" className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">Nossos clientes</p>
          <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
            Marcas e grupos que confiam no atendimento da NR Cozinhas.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(21,42,108,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-red)]">Cliente atendido</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f6f79] text-3xl font-bold text-white shadow-lg">
                A
              </div>
              <div>
                <h3 className="text-5xl font-light tracking-[-0.06em] text-[#2c8ea0] sm:text-6xl">ALTOMAR</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-black/55">Grupo LC Restaurantes</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-black/72">
              Fornecimento de equipamentos e apoio técnico para cozinhas com padrão profissional.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(21,42,108,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-red)]">Cliente atendido</p>
            <div className="mt-5 flex flex-wrap items-end gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-base font-black text-white shadow-lg">
                LC
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-semibold tracking-[-0.04em] text-[#7c8089] sm:text-3xl">GRUPO</span>
                <span className="text-5xl font-black tracking-[-0.07em] text-[#5c606a] sm:text-6xl">GPS</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-black/72">
              Relacionamento comercial baseado em confiabilidade, qualidade e atendimento técnico.
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <article key={item.label} className="section-shell rounded-[1.5rem] px-6 py-7 text-center">
              <p className="display-font text-5xl text-[color:var(--brand-blue)]">{item.value}</p>
              <p className="mt-4 text-sm leading-7 text-black/68">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(21,42,108,0.96),rgba(15,111,121,0.92))] px-6 py-7 text-white shadow-[0_20px_45px_rgba(21,42,108,0.14)] sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Fechamento comercial</p>
              <h3 className="display-font mt-3 text-2xl leading-tight sm:text-3xl">
                Quer uma proposta pronta para a sua operação?
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/82 sm:text-base">
                Enviamos uma orientação objetiva com base no tipo de cozinha, volume de uso e prazo do seu projeto.
              </p>
            </div>

            <a
              href={whatsappUrl("Olá, quero uma proposta para o meu projeto de cozinha industrial.")}
              target="_blank"
              rel="noopener noreferrer"
              className="button-brand inline-flex shrink-0 px-5 py-3 text-sm font-semibold"
            >
              Falar sobre meu projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
