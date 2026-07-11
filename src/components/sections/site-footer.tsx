import Image from "next/image";
import { Clock3, Mail, Phone, Settings, ShieldCheck } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { whatsappUrl } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="w-full px-3 pb-24 pt-8 md:px-6 md:pb-32 lg:px-8">
      <div className="rounded-[1.2rem] border border-black/10 bg-[#f5f5f6] px-4 py-6 text-[#131a2a] md:rounded-[1.5rem] md:px-8 md:py-8 lg:px-10 lg:py-10">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-2.5 md:gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white p-1.5 md:h-14 md:w-14">
                <LogoMark className="h-full w-full" />
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-[color:var(--brand-red)] md:text-3xl">NR Cozinhas</span>
            </a>

            <p className="mt-4 max-w-sm text-[0.95rem] leading-7 text-[#1e2433] md:mt-5 md:text-[1.08rem] md:leading-10">
              Referência nacional em cozinhas industriais, a NR Cozinhas oferece equipamentos robustos, modulares e de alto desempenho para foodservices e cozinhas profissionais.
            </p>

            <div className="mt-4 flex items-center gap-3 text-[#222] md:mt-5">
              <a href="#" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-white transition hover:bg-black/5">
                <span className="text-[11px] font-bold">IG</span>
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-white transition hover:bg-black/5">
                <span className="text-[11px] font-bold">YT</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold leading-[1.05] tracking-tight text-[#1b2030] md:text-5xl">Cozinhas Profissionais</h3>
            <ul className="mt-4 grid gap-2 text-[0.98rem] text-[#1d2435] md:mt-6 md:gap-3 md:text-[1.06rem]">
              <li>Todos os cases</li>
              <li>Para Hotel</li>
              <li>Para Hospital</li>
              <li>Para Restaurante</li>
              <li>Cozinhas Corporativas</li>
              <li>Offshore</li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold leading-[1.05] tracking-tight text-[#1b2030] md:text-5xl">Atendimento</h3>
            <ul className="mt-4 grid gap-2 text-[0.98rem] text-[#1d2435] md:mt-6 md:gap-3 md:text-[1.06rem]">
              <li>Não operamos com loja física.</li>
              <li>Atendimento comercial por agendamento.</li>
              <li>Visita técnica no local do cliente.</li>
              <li>Cobertura em diferentes regiões do Brasil.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold leading-[1.05] tracking-tight text-[#1b2030] md:text-5xl">Fale Conosco</h3>
            <ul className="mt-4 grid gap-2 text-[0.98rem] text-[#1d2435] md:mt-6 md:gap-3 md:text-[1.06rem]">
              <li className="flex items-center gap-2"><Image src="/icons/whats.jpg" alt="" width={16} height={16} className="h-4 w-4 rounded-sm object-cover" /> <a href={whatsappUrl("Olá, gostaria de falar com a NR Cozinhas.")} target="_blank" rel="noopener noreferrer">(21) 96914-6705</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <span>contato@nrcozinhas.com.br</span></li>
              <li className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> <span>Seg à Sex 08:00 às 17:00</span></li>
              <li className="flex items-center gap-2"><Settings className="h-4 w-4" /> <span>Assistência Técnica</span></li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> <span>Política de Dados</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
