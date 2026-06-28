import { CatalogSection } from "@/components/sections/catalog-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { EquipmentsShowcaseSection } from "@/components/sections/equipments-showcase-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FixedCtaBar } from "@/components/sections/fixed-cta-bar";
import { HeroSection } from "@/components/sections/hero-section";
import { InstitutionalSection } from "@/components/sections/institutional-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProductLinesSection } from "@/components/sections/product-lines-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { SegmentsSection } from "@/components/sections/segments-section";
import { SiteHeader } from "@/components/sections/site-header";
import { ValuePillarsSection } from "@/components/sections/value-pillars-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-24 sm:pb-28">
      <SiteHeader />
      <HeroSection />
      <InstitutionalSection />
      <ProductLinesSection />
      <EquipmentsShowcaseSection />
      <CatalogSection />
      <ClientsSection />
      <SegmentsSection />
      <ValuePillarsSection />
      <ProcessSection />
      <FaqSection />
      <QuoteSection />
      <FixedCtaBar />
    </main>
  );
}