import Image from "next/image";
import { Clock3, Menu } from "lucide-react";
import { menuItems } from "@/data/home-content";
import { whatsappUrl } from "@/lib/contact";

export function SiteHeader() {
  return (
    <section className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-white/95 px-0 pt-0">
      <div className="w-full bg-[color:var(--brand-red)] text-white">
        <div className="grid w-full grid-cols-[1fr_auto] items-center gap-1 px-2.5 py-0.5 text-[9px] font-medium leading-tight md:gap-2 md:px-8 md:py-1.5 md:text-xs lg:px-12">
          <div className="min-w-0">
            <a
              href={whatsappUrl("Olá, gostaria de falar com a NR Cozinhas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center gap-1 transition hover:text-white/80 md:gap-2"
            >
              <Image src="/icons/whats.jpg" alt="" width={16} height={16} className="h-3.5 w-3.5 rounded-sm object-cover md:h-4 md:w-4" />
              <span className="break-all md:break-normal">(21) 96914-6705</span>
            </a>
          </div>
          <p className="ml-auto flex items-center justify-end gap-1 text-right md:gap-2">
            <Clock3 className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={1.9} />
            <span className="whitespace-nowrap">Seg a Sex 08:00 as 17:00</span>
          </p>
        </div>
      </div>

      <div className="w-full px-2.5 py-0.5 md:px-8 md:py-2 lg:px-12">
        <div className="rounded-[1rem] bg-white px-2.5 py-1 shadow-[var(--shadow)] md:rounded-[1.6rem] md:px-6 md:py-2.5 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            <a href="#inicio" className="relative block h-[2rem] w-[7rem] shrink-0 md:h-[2.9rem] md:w-[10.4rem] lg:h-[3rem] lg:w-[10.8rem]">
              <Image
                src="/icons/logo.PNG"
                alt="NR Cozinhas"
                fill
                className="object-cover object-center"
                priority
              />
            </a>

            <details className="group relative md:hidden">
              <summary className="inline-flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border border-[color:var(--line)] text-[color:var(--brand-blue)] transition hover:bg-[color:var(--brand-blue-soft)] [&::-webkit-details-marker]:hidden">
                <Menu className="h-4.5 w-4.5" />
              </summary>

              <nav className="absolute right-0 top-10 z-[80] w-[16rem] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white text-[color:var(--brand-blue)] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 border-b border-[color:var(--line)] px-3.5 py-2.5 text-[14px] font-medium transition hover:bg-[color:var(--brand-blue-soft)] hover:text-[color:var(--brand-red)] last:border-b-0"
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
