import { faqItems } from "@/data/home-content";
import { whatsappUrl } from "@/lib/contact";

export function FaqSection() {
  return (
    <section className="w-full px-4 py-10 max-[768px]:px-0 max-[768px]:py-6 sm:px-6 lg:px-8">
      <div className="w-full rounded-[2rem] border border-[color:var(--line)] bg-white px-6 py-8 shadow-[var(--shadow)] max-[768px]:rounded-none max-[768px]:border-0 max-[768px]:shadow-none sm:px-8 lg:px-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">Dúvidas frequentes</p>
            <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
              Informações rápidas para avançar com segurança.
            </h2>
          </div>

          <a
            href={whatsappUrl("Olá, tenho dúvidas sobre meu projeto e quero falar com um consultor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="button-brand px-5 py-2.5 text-center text-sm font-semibold"
          >
            Tirar dúvidas no WhatsApp
          </a>
        </div>

        <div className="grid gap-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,255,0.9))] px-5 py-4 max-[768px]:border-0"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-[color:var(--brand-blue)] [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-black/72">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
