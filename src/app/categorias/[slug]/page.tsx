import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { getCatalogCategoryBySlug, catalogCategories } from "@/data/catalog-categories";
import { whatsappUrl } from "@/lib/contact";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return catalogCategories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCatalogCategoryBySlug(slug);
  const relatedCategories = catalogCategories.filter((item) => item.slug !== slug).slice(0, 3);

  if (!category) {
    notFound();
  }

  return (
    <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-5">
        <Link
          href="/#catalogo"
          className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-4 py-2 text-sm font-semibold text-[color:var(--brand-blue)] transition hover:bg-[color:var(--brand-blue-soft)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para catalogo
        </Link>
      </div>

      <section className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f5f6f8] px-5 py-7 shadow-[0_20px_44px_rgba(15,23,42,0.1)] sm:px-7 lg:px-10 lg:py-9">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.04fr]">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              {category.pageTitle.split("\n").map((line, index) => (
                <span
                  key={`${category.slug}-title-${index}`}
                  className={`block ${index === 1 ? "text-[color:var(--brand-red)]" : "text-[#1f3b7d]"}`}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[#1f3b7d] sm:text-lg">
              <span className="block">{category.pageSubtitle}</span>
              <span className="block">{category.pageLead}</span>
            </p>

            <span className="mt-6 block h-[2px] w-40 rounded-full bg-[color:var(--brand-red)]" />

            <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-[#1f3b7d] sm:text-lg">
              {slug === "coccao" ? (
                <>
                  Soluções completas em equipamentos de cocção que
                  unem tecnologia, eficiência e durabilidade para o dia a
                  dia da sua operação. Mais produtividade, segurança e
                  qualidade em cada preparo.
                </>
              ) : (
                category.pageDescription
              )}
            </p>

            <a
              href={whatsappUrl(category.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#1f8f5b] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#187649]"
            >
              <Image src="/icons/whats.jpg" alt="" width={20} height={20} className="h-5 w-5 rounded-sm object-cover" />
              <span className="text-white">Fale com um consultor</span>
            </a>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[360px]">
            <div className="pointer-events-none absolute inset-[7%] rounded-[1.5rem] border-2 border-[color:var(--brand-red)]" />

            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-7 grid gap-5 lg:grid-cols-2">
        <article className="rounded-[1.25rem] border border-black/10 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Diferenciais</p>
          <ul className="mt-4 grid gap-3">
            {category.highlights.map((item) => (
              <li key={`${category.slug}-diff-${item}`} className="flex items-center gap-2 text-sm text-black/78 sm:text-base">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-blue)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.25rem] border border-black/10 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Aplicacoes atendidas</p>
          <ul className="mt-4 grid gap-3">
            {category.applications.map((item) => (
              <li key={`${category.slug}-app-${item}`} className="flex items-center gap-2 text-sm text-black/78 sm:text-base">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-blue)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Outras categorias</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {relatedCategories.map((item) => (
            <Link
              key={item.slug}
              href={`/categorias/${item.slug}`}
              className="group rounded-[1.1rem] border border-black/10 bg-white p-5 shadow-[0_10px_26px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-semibold text-[color:var(--brand-blue)]">{item.name}</h3>
              <p className="mt-2 text-sm leading-7 text-black/68">{item.cardDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-blue)]">
                Abrir categoria
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
