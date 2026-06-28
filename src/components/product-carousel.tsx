"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  {
    name: "Fogoes industriais",
    summary: "Modelos para alta producao com estrutura reforcada e queimadores de desempenho profissional.",
    details: ["2, 4 e 6 bocas", "Opcoes com forno", "Aplicacao em cozinhas profissionais"],
    shortTagline: "Alto desempenho em coccao",
    image: "/products/fogoes-real.jpg",
    imagePosition: "center 54%",
    imageScale: 1.06,
  },
  {
    name: "Coifas e exaustao",
    summary: "Solucao para captacao de vapores, conforto operacional e organizacao tecnica do ambiente.",
    details: ["Modelos sob medida", "Fluxo de ar otimizado", "Projetos para cozinhas industriais"],
    shortTagline: "Captacao eficiente e segura",
    image: "/products/coifas-real.jpg",
    imagePosition: "center 50%",
    imageScale: 1.1,
  },
  {
    name: "Bancadas e inox",
    summary: "Superficies resistentes para preparo, apoio e higienizacao, com foco em durabilidade e limpeza.",
    details: ["Aco inox profissional", "Montagem customizada", "Acabamento de facil manutencao"],
    shortTagline: "Organizacao tecnica da cozinha",
    image: "/products/inox-real.jpg",
    imagePosition: "center 58%",
    imageScale: 1.08,
  },
  {
    name: "Utensilios e apoio",
    summary: "Itens complementares para ampliar a eficiencia da operacao e atender a rotina do setor alimenticio.",
    details: ["Linha complementar", "Apoio a cozinhas comerciais", "Escolha orientada por uso"],
    shortTagline: "Versatilidade para a operacao",
    image: "/products/utensilios-real.jpg",
    imagePosition: "center 52%",
    imageScale: 1.04,
  },
];

export function ProductCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setIndex((current) => (current === products.length - 1 ? 0 : current + 1));
    }, 3500);

    return () => clearInterval(autoplay);
  }, []);

  const activeProduct = products[index];

  return (
    <div className="glass-panel rounded-[2rem] p-3 sm:p-8">
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <article className="section-shell overflow-hidden rounded-[1.75rem] p-4 sm:p-7">
          <div key={index} className="carousel-fade relative h-[12.5rem] overflow-hidden rounded-[1.25rem] bg-[color:var(--brand-blue-soft)] sm:h-[17.5rem]">
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className="object-cover transition duration-700"
              style={{ objectPosition: activeProduct.imagePosition, transform: `scale(${activeProduct.imageScale})` }}
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-blue)] sm:left-4 sm:top-4">
              Destaque
            </span>
            <span className="absolute bottom-3 left-3 rounded-full bg-[color:var(--brand-red)]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:bottom-4 sm:left-4">
              {activeProduct.shortTagline}
            </span>
          </div>

          <div className="mt-4 sm:mt-6">
            <h3 className="display-font text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-5xl">
              {activeProduct.name}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-black/72 sm:mt-5 sm:text-base sm:leading-8">
              {activeProduct.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              {activeProduct.details.map((detail) => (
                <span
                  key={detail}
                  className="rounded-full border border-[color:var(--line)] bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[color:var(--brand-blue)] sm:px-4 sm:py-2 sm:text-xs sm:uppercase sm:tracking-[0.16em]"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </article>

        <aside className="rounded-[1.75rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,var(--brand-blue),#102861)] p-4 text-white sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
              Galeria de referência
            </p>
            <span className="rounded-full bg-white/14 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/84">
              {String(index + 1).padStart(2, "0")}/{String(products.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {products.map((product, productIndex) => {
              const isActive = productIndex === index;

              return (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => setIndex(productIndex)}
                  className={`group overflow-hidden rounded-[1rem] border text-left transition duration-300 ${
                    isActive
                      ? "border-white bg-white text-[color:var(--brand-blue)] shadow-[0_14px_28px_rgba(0,0,0,0.22)]"
                      : "border-white/20 bg-white/8 text-white/86 hover:border-white/45 hover:bg-white/14"
                  }`}
                >
                  <div className="relative h-20 overflow-hidden sm:h-24">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.06]"
                      style={{ objectPosition: product.imagePosition, transform: `scale(${product.imageScale})` }}
                      sizes="(max-width: 640px) 45vw, 18vw"
                    />
                    <div className={`absolute inset-0 bg-[linear-gradient(145deg,rgba(181,54,65,0.42),rgba(21,42,108,0.48))] transition-opacity duration-300 ${isActive ? "opacity-20" : "opacity-0 group-hover:opacity-100"}`} />
                  </div>
                  <div className="px-2.5 py-2.5 sm:px-3 sm:py-3">
                    <p className="text-[11px] font-semibold leading-5 sm:text-xs">{product.name}</p>
                    <p className="mt-1 text-[10px] leading-4 opacity-80">{product.shortTagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-2 sm:mt-5">
            {products.map((product, productIndex) => (
              <button
                key={`${product.name}-dot`}
                type="button"
                onClick={() => setIndex(productIndex)}
                aria-label={`Ir para ${product.name}`}
                className={`h-2 rounded-full transition-all ${productIndex === index ? "w-7 bg-white" : "w-2 bg-white/45 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}