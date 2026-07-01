import { Clock3, Mail, MessageCircle, Phone, Settings, ShieldCheck } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { whatsappUrl } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="w-full px-4 pb-28 pt-10 sm:px-6 sm:pb-32 lg:px-8">
      <div className="rounded-[1.5rem] border border-black/10 bg-[#f5f5f6] px-6 py-8 text-[#131a2a] sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white p-1.5">
                <LogoMark className="h-full w-full" />
              </span>
              <span className="text-3xl font-extrabold tracking-tight text-[color:var(--brand-red)]">NR Cozinhas</span>
            </a>

            <p className="mt-5 max-w-sm text-[1.08rem] leading-10 text-[#1e2433]">
              Referência nacional em cozinhas industriais, a NR Cozinhas oferece equipamentos robustos, modulares e de alto desempenho para foodservices e cozinhas profissionais.
            </p>

            <div className="mt-5 flex items-center gap-3 text-[#222]">
              <a href="#" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-white transition hover:bg-black/5">
                <span className="text-[11px] font-bold">IG</span>
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-white transition hover:bg-black/5">
                <span className="text-[11px] font-bold">YT</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#1b2030]">Cozinhas Profissionais</h3>
            <ul className="mt-6 grid gap-3 text-[1.06rem] text-[#1d2435]">
              <li>Todos os cases</li>
              <li>Para Hotel</li>
              <li>Para Hospital</li>
              <li>Para Restaurante</li>
              <li>Cozinhas Corporativas</li>
              <li>Offshore</li>
            </ul>
          </div>

          <div>
            <h3 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#1b2030]">Unidades</h3>
            <ul className="mt-6 grid gap-3 text-[1.06rem] text-[#1d2435]">
              <li>São Paulo</li>
              <li>Rio de Janeiro</li>
              <li>Espírito Santo</li>
              <li>Pernambuco</li>
            </ul>
          </div>

          <div>
            <h3 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#1b2030]">Fale Conosco</h3>
            <ul className="mt-6 grid gap-3 text-[1.06rem] text-[#1d2435]">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <span>(21) 2564-2001</span></li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> <a href={whatsappUrl("Olá, gostaria de falar com a NR Cozinhas.")} target="_blank" rel="noopener noreferrer">(21) 97215-7105</a></li>
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
