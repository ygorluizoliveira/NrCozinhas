import { whatsappUrl } from "@/lib/contact";

export function FixedCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 sm:px-8 lg:px-12">
      <div className="fixed-cta-shell mx-auto grid max-w-7xl grid-cols-2 gap-2 rounded-[1.25rem] p-2 sm:gap-2.5 sm:p-3">
        <a
          href={whatsappUrl("Olá, quero falar com um consultor da NR Cozinhas.")}
          target="_blank"
          rel="noopener noreferrer"
          className="button-brand px-3 py-2 text-center text-[12px] font-semibold sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Fale com consultor</span>
        </a>
        <a href="#orcamento" className="button-brand px-3 py-2 text-center text-[12px] font-semibold sm:px-5 sm:py-2.5 sm:text-sm">
          <span className="sm:hidden">Orçamento</span>
          <span className="hidden sm:inline">Orçamento de Projetos</span>
        </a>
      </div>
    </div>
  );
}
