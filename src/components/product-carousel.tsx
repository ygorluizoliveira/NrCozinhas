"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  {
    name: "Cocção",
    summary:
      "Equipamentos para cocção profissional com performance constante, aquecimento uniforme e robustez para operação intensa.",
    details: ["Aquecimento uniforme", "Alta produtividade", "Uso profissional contínuo"],
    image: "/img/coccao2.jpeg",
    imagePosition: "center 50%",
    imageScale: 1.02,
  },
  {
    name: "Utensílios e apoio",
    summary:
      "Itens de apoio para preparo, finalização e organização da operação, com foco em praticidade, higiene e resistência no uso diário.",
    details: ["Rotina mais ágil", "Apoio operacional", "Durabilidade no uso diário"],
    image: "/img/utensilios2.jpeg",
    imagePosition: "center 50%",
    imageScale: 1.06,
  },
  {
    name: "Refrigeração",
    summary:
      "Soluções para conservação eficiente de alimentos e bebidas, mantendo estabilidade térmica e segurança para a sua operação.",
    details: ["Controle de temperatura", "Conservação eficiente", "Segurança alimentar"],
    image: "/img/refrigeracao2.jpeg",
    imagePosition: "center 50%",
    imageScale: 1.04,
  },
  {
    name: "Equipamentos para Cozinhas Industriais",
    summary:
      "Linha completa para cozinhas industriais, reunindo tecnologia, robustez e eficiência para projetos de diferentes portes.",
    details: ["Soluções completas", "Projetos sob demanda", "Foco técnico e comercial"],
    image: "/img/equipamentos2.jpeg",
    imagePosition: "center 50%",
    imageScale: 1.08,
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
    <div className="glass-panel rounded-[2rem] p-3 !border-0 max-[768px]:rounded-none max-[768px]:p-0 max-[768px]:shadow-none sm:p-6 lg:p-7">
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <article className="section-shell overflow-hidden rounded-[1.5rem] !border-0 p-4 max-[768px]:rounded-none max-[768px]:shadow-none sm:p-6 lg:p-7">
          <div
            key={index}
            className="carousel-fade relative h-[12.5rem] overflow-hidden rounded-[1.15rem] bg-[color:var(--brand-blue-soft)] sm:h-[18rem]"
          >
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className="object-contain p-2 mix-blend-multiply transition duration-700"
              style={{ objectPosition: activeProduct.imagePosition }}
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/48 to-transparent" />
            <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-blue)] sm:left-4 sm:top-4">
              Destaque
            </span>
          </div>

          <div className="mt-4 sm:mt-5">
            <h3 className="display-font text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl lg:text-[3.1rem]">
              {activeProduct.name}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-black/72 sm:mt-4 sm:text-[1.02rem] sm:leading-8">
              {activeProduct.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              {activeProduct.details.map((detail) => (
                <span
                  key={detail}
                  className="rounded-full bg-[color:var(--brand-blue-soft)] px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[color:var(--brand-blue)] sm:px-4 sm:py-2 sm:text-xs sm:uppercase sm:tracking-[0.16em]"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </article>

        <aside className="hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#f8fafe,#eef3ff)] p-4 sm:p-5 lg:block lg:p-6">
          <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-blue)]/70">
              Galeria de referência
            </p>
            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--brand-blue)]/85 shadow-[0_4px_12px_rgba(21,42,108,0.08)]">
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
                  className={`group overflow-hidden rounded-[1rem] text-left transition duration-300 ${
                    isActive
                      ? "bg-white text-[color:var(--brand-blue)] shadow-[0_12px_24px_rgba(21,42,108,0.14)] ring-1 ring-[color:var(--brand-blue)]/15"
                      : "bg-white/80 text-[color:var(--brand-blue)]/84 hover:bg-white"
                  }`}
                >
                  <div className="relative h-20 overflow-hidden sm:h-24">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-1.5 mix-blend-multiply transition duration-500"
                      style={{ objectPosition: product.imagePosition }}
                      sizes="(max-width: 640px) 45vw, 18vw"
                    />
                    <div
                      className={`absolute inset-0 bg-[linear-gradient(160deg,rgba(181,54,65,0.28),rgba(21,42,108,0.24))] transition-opacity duration-300 ${
                        isActive ? "opacity-35" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                  <div className="px-2.5 py-2.5 sm:px-3 sm:py-3">
                    <p className="text-[11px] font-semibold leading-5 sm:text-xs">{product.name}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-[1.2rem] bg-white p-4 shadow-[0_12px_28px_rgba(21,42,108,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-red)]">Destaque técnico</p>
            <h4 className="mt-3 text-lg font-semibold leading-tight text-[color:var(--brand-blue)]">
              {activeProduct.name}
            </h4>
            <p className="mt-2 text-sm leading-7 text-black/68">
              {activeProduct.summary}
            </p>

            <div className="mt-4 grid gap-2">
              {activeProduct.details.map((detail) => (
                <div
                  key={`${activeProduct.name}-${detail}`}
                  className="flex items-center gap-2 rounded-xl bg-[color:var(--brand-blue-soft)] px-3 py-2 text-sm font-medium text-[color:var(--brand-blue)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-red)]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 sm:mt-5">
            {products.map((product, productIndex) => (
              <button
                key={`${product.name}-dot`}
                type="button"
                onClick={() => setIndex(productIndex)}
                aria-label={`Ir para ${product.name}`}
                className={`h-2 rounded-full transition-all ${
                  productIndex === index
                    ? "w-7 bg-[color:var(--brand-blue)]"
                    : "w-2 bg-[color:var(--brand-blue)]/30 hover:bg-[color:var(--brand-blue)]/55"
                }`}
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}