import Image from "next/image";
import { catalogSections } from "@/data/home-content";
import { whatsappUrl } from "@/lib/contact";

export function CatalogSection() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white px-6 py-8 shadow-[var(--shadow)] sm:px-8 lg:px-10">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
              Catálogo de equipamentos
            </p>
            <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
              Escolha por categoria e fale com um consultor.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-black/68 sm:text-base">
              A vitrine abaixo foi pensada para o cliente entender rapidamente as frentes atendidas e partir para o
              orçamento sem fricção.
            </p>
          </div>

          <a
            href={whatsappUrl("Olá, quero uma orientação para montar minha cozinha industrial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="button-brand px-5 py-2.5 text-center text-sm font-semibold"
          >
            Atendimento especializado
          </a>
        </div>

        <div className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2">
          {catalogSections.map((section, index) => {
            const SectionIcon = section.icon;

            return (
              <article
                key={section.title}
                className="stagger-rise group min-w-[87%] snap-start overflow-hidden rounded-[1.6rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,255,0.95))] shadow-[0_16px_35px_rgba(21,42,108,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(21,42,108,0.14)] md:min-w-0"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative h-52 overflow-hidden bg-[#eef2f8] sm:h-60">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-contain p-2 transition duration-500"
                    style={{ objectPosition: section.imagePosition }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-blue)]">
                    <SectionIcon className="h-3.5 w-3.5" strokeWidth={2} />
                    Solução
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-2xl font-semibold leading-tight text-[color:var(--brand-blue)]">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/68">{section.description}</p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {section.metrics.map((metric) => (
                      <div
                        key={`${section.title}-${metric}`}
                        className="rounded-[1rem] border border-[color:var(--line)] bg-white px-3 py-2 text-center"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-red)]">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {section.items.map((item) => (
                      <span
                        key={`${section.title}-${item}`}
                        className="rounded-full border border-[color:var(--line)] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--brand-blue)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <a
                      href={whatsappUrl(section.ctaMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-brand px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em]"
                    >
                      Solicitar orçamento
                    </a>
                    <a href="#orcamento" className="button-brand px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em]">
                      Enviar briefing
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
