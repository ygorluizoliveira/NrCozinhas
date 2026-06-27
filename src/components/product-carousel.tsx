"use client";

import { useState } from "react";

const products = [
  {
    name: "Fogoes industriais",
    summary: "Modelos para alta producao com estrutura reforcada e queimadores de desempenho profissional.",
    details: ["2, 4 e 6 bocas", "Opcoes com forno", "Aplicacao em cozinhas profissionais"],
  },
  {
    name: "Coifas e exaustao",
    summary: "Solucao para captacao de vapores, conforto operacional e organizacao tecnica do ambiente.",
    details: ["Modelos sob medida", "Fluxo de ar otimizado", "Projetos para cozinhas industriais"],
  },
  {
    name: "Bancadas e inox",
    summary: "Superficies resistentes para preparo, apoio e higienizacao, com foco em durabilidade e limpeza.",
    details: ["Aco inox profissional", "Montagem customizada", "Acabamento de facil manutencao"],
  },
  {
    name: "Utensilios e apoio",
    summary: "Itens complementares para ampliar a eficiencia da operacao e atender a rotina do setor alimenticio.",
    details: ["Linha complementar", "Apoio a cozinhas comerciais", "Escolha orientada por uso"],
  },
];

export function ProductCarousel() {
  const [index, setIndex] = useState(0);

  function showPrevious() {
    setIndex((current) => (current === 0 ? products.length - 1 : current - 1));
  }

  function showNext() {
    setIndex((current) => (current === products.length - 1 ? 0 : current + 1));
  }

  const activeProduct = products[index];

  return (
    <div className="glass-panel rounded-[2rem] p-5 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <article className="section-shell flex min-h-[22rem] flex-col justify-between rounded-[1.75rem] p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-red)]">
              Slide {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="display-font mt-4 text-4xl leading-tight text-[color:var(--brand-blue)] sm:text-5xl">
              {activeProduct.name}
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-black/72 sm:text-base">
              {activeProduct.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {activeProduct.details.map((detail) => (
              <span
                key={detail}
                className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-blue)]"
              >
                {detail}
              </span>
            ))}
          </div>
        </article>

        <div className="flex flex-col justify-between gap-4 rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--brand-blue)] p-5 text-white sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Navegacao
            </p>
            <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
              Use as setas para percorrer os grupos de produtos e destacar as linhas atendidas pela empresa.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={showPrevious}
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-[color:var(--sand)] transition hover:bg-white/18"
            >
              Produto anterior
            </button>
            <button
              type="button"
              onClick={showNext}
              className="rounded-full bg-[color:var(--brand-red)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-strong)]"
            >
              Proximo produto
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {products.map((product, productIndex) => {
              const isActive = productIndex === index;

              return (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => setIndex(productIndex)}
                  className={`rounded-[1.25rem] border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-white bg-white text-[color:var(--brand-blue)]"
                      : "border-white/15 bg-white/7 text-white/82 hover:bg-white/12"
                  }`}
                >
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="mt-2 text-xs leading-6 opacity-80">{product.summary}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}