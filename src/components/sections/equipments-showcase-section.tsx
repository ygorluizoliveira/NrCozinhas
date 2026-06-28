import { ProductCarousel } from "@/components/product-carousel";

export function EquipmentsShowcaseSection() {
  return (
    <section id="equipamentos" className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
              Equipamentos para cozinha industrial
            </p>
            <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
              Vitrine central de produtos em destaque.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/72 sm:text-right">
            O bloco central funciona como exposição comercial das categorias e linhas mais relevantes da operação.
          </p>
        </div>

        <ProductCarousel />
      </div>
    </section>
  );
}
