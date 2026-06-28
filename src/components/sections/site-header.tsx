import { Clock3, Menu, MessageCircle } from "lucide-react";
import { menuItems } from "@/data/home-content";
import { LogoMark } from "@/components/logo-mark";
import { whatsappUrl } from "@/lib/contact";

export function SiteHeader() {
  return (
    <section className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-white/95 px-0 pt-0">
      <div className="w-full bg-[color:var(--brand-red)] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-2 px-3 py-1.5 text-[10px] font-medium leading-tight sm:px-8 sm:py-2 sm:text-xs lg:px-12">
          <div className="min-w-0">
            <a
              href={whatsappUrl("Olá, gostaria de falar com a NR Cozinhas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center gap-1.5 transition hover:text-white/80 sm:gap-2"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
              <span className="break-all sm:break-normal">(21) 96914-6705</span>
            </a>
          </div>
          <p className="ml-auto flex items-center justify-end gap-1.5 text-right sm:gap-2">
            <Clock3 className="h-4 w-4" strokeWidth={1.9} />
            <span className="whitespace-nowrap">Seg a Sex 08:00 as 17:00</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-3 py-2.5 sm:px-8 sm:py-3 lg:px-12">
        <div className="rounded-[1.5rem] bg-white px-3 py-2.5 shadow-[var(--shadow)] sm:rounded-[2rem] sm:px-6 sm:py-3.5 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <a href="#inicio" className="block w-[5.75rem] shrink-0 rounded-full sm:w-[6.1rem] lg:w-[6.4rem]">
              <LogoMark className="w-full" />
            </a>

            <details className="group relative md:hidden">
              <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[color:var(--line)] text-[color:var(--brand-blue)] transition hover:bg-[color:var(--brand-blue-soft)] [&::-webkit-details-marker]:hidden">
                <Menu className="h-5 w-5" />
              </summary>

              <nav className="absolute right-0 top-12 z-[80] w-[17.5rem] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white text-[color:var(--brand-blue)] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 border-b border-[color:var(--line)] px-4 py-3 text-[15px] font-medium transition hover:bg-[color:var(--brand-blue-soft)] hover:text-[color:var(--brand-red)] last:border-b-0"
                  >
                    <item.icon
                      className="h-4 w-4 shrink-0 text-[color:var(--brand-blue)] transition group-hover:text-[color:var(--brand-red)]"
                      strokeWidth={1.9}
                    />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </details>

            <nav className="hidden items-center gap-4 text-[color:var(--brand-blue)] md:flex md:flex-nowrap lg:gap-5">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-1.5 whitespace-nowrap text-[14px] font-medium transition hover:text-[color:var(--brand-red)] xl:text-[15px]"
                >
                  <item.icon
                    className="h-[17px] w-[17px] shrink-0 text-[color:var(--brand-blue)] transition group-hover:text-[color:var(--brand-red)]"
                    strokeWidth={1.9}
                  />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
