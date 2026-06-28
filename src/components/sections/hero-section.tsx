import Image from "next/image";

export function HeroSection() {
  return (
    <section id="inicio" className="px-5 py-5 sm:px-8 lg:px-12">
      <div className="hero-grid glass-panel mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-8 lg:px-12 lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">Institucional</p>
        <div className="mx-auto mt-5 w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[32rem]">
          <Image
            src="/image_fundo.png"
            alt="Linha de equipamentos NR Cozinhas"
            width={1200}
            height={820}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
        <h1 className="display-font mx-auto mt-6 max-w-4xl text-5xl leading-[0.95] text-[#2b2024] sm:text-6xl lg:text-7xl">
          Cozinhas Industriais e Profissionais
        </h1>
        <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-black/72 sm:text-xl">
          Soluções completas em equipamentos para operações do setor alimentício, com atendimento especializado e apoio
          comercial para projetos profissionais.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="button-brand px-6 py-3 text-center text-sm font-semibold" href="#orcamento">
            Solicitar orçamento
          </a>
          <a className="button-brand px-6 py-3 text-center text-sm font-semibold" href="#equipamentos">
            Ver equipamentos
          </a>
        </div>
      </div>
    </section>
  );
}
