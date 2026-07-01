import Link from "next/link";
import { ArrowRight, ChefHat, CookingPot, Refrigerator, Snowflake, UtensilsCrossed } from "lucide-react";
import { catalogCategories } from "@/data/catalog-categories";

export function CatalogSection() {
  const iconByKey = {
    coccao: ChefHat,
    refrigeracao: Snowflake,
    mobiliarios: Refrigerator,
    utensilios: UtensilsCrossed,
    fornos: CookingPot,
  } as const;

  return (
    <section id="catalogo" className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">Catalogo de Equipamentos</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {catalogCategories.map((item) => {
            const ItemIcon = iconByKey[item.iconKey];

            return (
              <Link
                key={item.slug}
                href={`/categorias/${item.slug}`}
                className="flex min-h-[320px] flex-col rounded-[1rem] border border-black/10 bg-white px-5 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center text-[color:var(--brand-blue)]">
                  <ItemIcon className="h-9 w-9" strokeWidth={1.5} />
                </div>

                <span className="mt-4 h-[2px] w-4 rounded-full bg-[color:var(--brand-red)]" />

                <h3 className="mt-4 text-[1.05rem] font-semibold uppercase tracking-[0.08em] text-[#222]">{item.cardTitle}</h3>

                <p className="mt-4 text-[0.78rem] leading-6 text-black/66">{item.cardDescription}</p>

                <div className="mt-auto flex justify-end pt-4 text-black/80">
                  <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
