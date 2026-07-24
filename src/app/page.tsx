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
      <section className="w-full border-y border-black/10 bg-white/75">
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

        <div className="hidden lg:block">
          <div className="relative mx-auto h-[430px] w-[860px]">
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