import { segments } from "@/data/home-content";
import { whatsappUrl } from "@/lib/contact";

export function SegmentsSection() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,246,255,0.92))] px-6 py-8 shadow-[var(--shadow)] sm:px-8 lg:px-10">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">Segmentos atendidos</p>
          <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
            Soluções por perfil de operação.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-black/70 sm:text-base">
            Estruturamos a proposta com base no tipo de negócio, volume de produção e dinâmica de atendimento da sua
            cozinha.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment) => {
            const SegmentIcon = segment.icon;

            return (
              <article
                key={segment.title}
                className="group rounded-[1.5rem] border border-[color:var(--line)] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(21,42,108,0.12)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--brand-blue-soft)] text-[color:var(--brand-blue)]">
                  <SegmentIcon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-[color:var(--brand-blue)]">{segment.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/68">{segment.description}</p>
                <a
                  href={whatsappUrl(segment.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-brand mt-5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]"
                >
                  Solicitar análise
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
