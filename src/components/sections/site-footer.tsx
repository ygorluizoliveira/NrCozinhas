import Image from "next/image";
import { ArrowUpRight, Clock3, Mail, Settings, ShieldCheck } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { whatsappUrl } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="w-full px-3 pb-24 pt-8 md:px-6 md:pb-32 lg:px-8">
      <div className="overflow-hidden rounded-[1.2rem] border border-black/10 bg-[linear-gradient(170deg,#f8f9fd_0%,#eef2fb_42%,#f6f7fb_100%)] text-[#131a2a] md:rounded-[1.5rem]">
        <div className="grid gap-4 border-b border-black/10 p-4 md:p-7 lg:grid-cols-[1.25fr_0.75fr] lg:p-8">
          <div className="rounded-[1.2rem] border border-black/10 bg-white/80 p-4 md:p-6">
            <a href="#inicio" className="inline-flex items-center gap-2.5 md:gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white p-1.5 md:h-14 md:w-14">
                <LogoMark className="h-full w-full" />
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-[color:var(--brand-red)] md:text-3xl">NR Cozinhas</span>
            </a>

            <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[#1e2433] md:text-[1.04rem] md:leading-8">
              Referência nacional em cozinhas industriais, a NR Cozinhas projeta operações de alto desempenho com equipamentos robustos, fluxos inteligentes e soluções sob medida para cada perfil de serviço.
            </p>
          </div>

          <a
            href={whatsappUrl("Olá, gostaria de falar com a NR Cozinhas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between rounded-[1.2rem] bg-[linear-gradient(135deg,var(--brand-red)_0%,#9e2f3a_38%,var(--brand-blue)_100%)] p-5 text-white transition hover:brightness-110 md:p-6"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/75">Canal direto</p>
            <p className="mt-6 text-2xl font-semibold leading-tight text-white md:text-[2rem]">Fale com o time comercial</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/92">
              Atendimento no WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-7 lg:grid-cols-3 lg:p-8">
          <article className="rounded-[1.1rem] border border-black/10 bg-white/86 p-5">
            <h3 className="text-[1.45rem] font-semibold leading-tight text-[#1b2030] md:text-[1.7rem]">Cozinhas Profissionais</h3>
            <ul className="mt-4 grid gap-2 text-[0.98rem] text-[#1d2435] md:gap-3 md:text-[1.02rem]">
              <li>Todos os cases</li>
              <li>Para Hotel</li>
              <li>Para Hospital</li>
              <li>Para Restaurante</li>
              <li>Cozinhas Corporativas</li>
              <li>Offshore</li>
            </ul>
          </article>

          <article className="rounded-[1.1rem] border border-black/10 bg-white/86 p-5">
            <h3 className="text-[1.45rem] font-semibold leading-tight text-[#1b2030] md:text-[1.7rem]">Atendimento</h3>
            <ul className="mt-4 grid gap-2 text-[0.98rem] text-[#1d2435] md:gap-3 md:text-[1.02rem]">
              <li>Não operamos com loja física.</li>
              <li>Atendimento comercial por agendamento.</li>
              <li>Visita técnica no local do cliente.</li>
              <li>Cobertura em diferentes regiões do Brasil.</li>
            </ul>
          </article>

          <article className="rounded-[1.1rem] border border-black/10 bg-white/86 p-5 md:col-span-2 lg:col-span-1">
            <h3 className="text-[1.45rem] font-semibold leading-tight text-[#1b2030] md:text-[1.7rem]">Fale Conosco</h3>
            <ul className="mt-4 grid gap-3 text-[0.98rem] text-[#1d2435] md:text-[1.02rem]">
              <li className="flex items-center gap-2">
                <Image src="/icons/whats.jpg" alt="" width={16} height={16} className="h-4 w-4 rounded-sm object-cover" />
                <a href={whatsappUrl("Olá, gostaria de falar com a NR Cozinhas.")} target="_blank" rel="noopener noreferrer">(21) 96914-6705</a>
              </li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <span>nrpassoscozinhas@gmail.com</span></li>
              <li className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> <span>Seg à Sex 08:00 às 17:00</span></li>
              <li className="flex items-center gap-2"><Settings className="h-4 w-4" /> <span>Assistência Técnica</span></li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> <span>Política de Dados</span></li>
            </ul>
          </article>
        </div>

        <div className="flex flex-col gap-2 border-t border-black/10 px-4 py-4 text-xs text-[#2b3345]/80 md:flex-row md:items-center md:justify-between md:px-7 md:text-sm lg:px-8">
          <span>NR Cozinhas. Projetos e equipamentos para cozinhas industriais.</span>
          <a href="#inicio" className="font-semibold uppercase tracking-[0.08em] text-[color:var(--brand-blue)] transition hover:text-[color:var(--brand-red)]">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
