import Image from "next/image";
import { CatalogSection } from "@/components/sections/catalog-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { EquipmentsShowcaseSection } from "@/components/sections/equipments-showcase-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FixedCtaBar } from "@/components/sections/fixed-cta-bar";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { SegmentsSection } from "@/components/sections/segments-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";


export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-24 max-[768px]:pb-14 sm:pb-28">
      <SiteHeader />
      <section className="relative w-full overflow-hidden border-y border-black/10 bg-white/75">
        <div className="lg:hidden">
          <Image
            src="/products/banner_logo_2.png"
            alt="Banner institucional NR Cozinhas"
            width={1920}
            height={560}
            className="h-auto w-full"
            sizes="100vw"
            unoptimized
            priority
          />
        </div>

        <div className="hidden lg:grid lg:h-[430px] lg:grid-cols-[1fr_860px_1fr] lg:items-stretch">
          <div className="relative overflow-hidden">
            <Image
              src="/img/equipamentos2.jpeg"
              alt=""
              fill
              className="object-cover object-center opacity-35 grayscale-[0.15]"
              sizes="(min-width: 1024px) 30vw, 100vw"
              aria-hidden="true"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,246,251,0.88)_0%,rgba(244,246,251,0.45)_100%)]" />
          </div>

          <div className="relative h-[430px] w-[860px] overflow-hidden">
            <Image
              src="/products/banner_logo_2.png"
              alt="Banner institucional NR Cozinhas"
              fill
              className="object-contain"
              sizes="860px"
              quality={100}
              priority
            />
          </div>

          <div className="relative overflow-hidden">
            <Image
              src="/img/refrigeracao2.jpeg"
              alt=""
              fill
              className="object-cover object-center opacity-35 grayscale-[0.15]"
              sizes="(min-width: 1024px) 30vw, 100vw"
              aria-hidden="true"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(244,246,251,0.88)_0%,rgba(244,246,251,0.45)_100%)]" />
          </div>
        </div>
      </section>
      <HeroSection />
      <EquipmentsShowcaseSection />
      <CatalogSection />
      <ClientsSection />
      <QuoteSection />
      <SegmentsSection />
      <ProcessSection />
      <FaqSection />
      <SiteFooter />
      <FixedCtaBar />
    </main>
  );
}