import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export function FixedCtaBar() {
  return (
    <>
      <a
        href={whatsappUrl("Olá, quero falar com um consultor da NR Cozinhas.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="whatsapp-pulse fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f5b] text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] md:hidden"
      >
        <Image src="/icons/whats.jpg" alt="" width={28} height={28} className="h-7 w-7 rounded-sm object-cover" />
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-50 hidden w-full px-6 pb-3 md:block lg:px-8">
        <div className="w-full rounded-2xl border border-black/10 bg-[#e6e6e9] px-6 py-5 shadow-[0_-14px_36px_rgba(15,23,42,0.14)]">
          <div className="grid items-center justify-items-center gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
            <div className="mx-auto text-center">
              <p className="text-[clamp(1.35rem,2.2vw,2rem)] font-normal leading-tight">
                <span className="text-[color:var(--brand-blue)]">Solicite seu Orçamento!</span>
              </p>
            </div>

            <div className="grid w-full max-w-[680px] gap-3 md:grid-cols-2 lg:min-w-[620px]">
              <a
                href={whatsappUrl("Olá, quero falar com um consultor da NR Cozinhas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-pulse inline-flex min-h-14 items-center justify-center gap-2 rounded-[0.6rem] bg-[#1f8f5b] px-6 text-base font-semibold !text-[#f4f6fb] transition hover:bg-[#17784b]"
                style={{ color: "#f4f6fb" }}
              >
                <span>Fale com um consultor</span>
                <Image src="/icons/whats.jpg" alt="" width={20} height={20} className="h-5 w-5 rounded-sm object-cover" />
              </a>

              <a
                href="#orcamento"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[0.6rem] bg-[#152a6c] px-6 text-base font-semibold !text-[#f4f6fb] transition hover:bg-[#102155]"
                style={{ color: "#f4f6fb" }}
              >
                <span>Projeto de Cozinha Industrial</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
