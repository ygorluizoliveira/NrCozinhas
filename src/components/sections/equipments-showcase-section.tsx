import { ProductCarousel } from "@/components/product-carousel";

export function EquipmentsShowcaseSection() {
  return (
    <section id="equipamentos" className="w-full px-4 py-10 max-[768px]:bg-[#f4f6fb] max-[768px]:px-0 max-[768px]:py-6 max-[425px]:pb-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-6 flex flex-col gap-3 px-4 max-[768px]:relative max-[768px]:z-10 max-[768px]:bg-[#f4f6fb] max-[768px]:px-4 sm:flex-row sm:items-end sm:justify-between sm:px-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
              Equipamentos para cozinha industrial
            </p>
            <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
              Vitrine de produtos com foco técnico e comercial.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/72 sm:text-right">
            Compare categorias, linhas e aplicações em um único painel para acelerar a análise do seu projeto.
          </p>
        </div>

        <ProductCarousel />
      </div>
    </section>
  );
}
