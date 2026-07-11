import Image from "next/image";

export function HeroSection() {
  return (
    <section id="inicio" className="w-full px-4 py-5 sm:px-6 lg:px-8">
      <div className="hero-grid glass-panel w-full overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-8 lg:px-12 lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">Institucional</p>
        <h1 className="display-font mx-auto mt-6 max-w-4xl text-[clamp(2rem,11.5vw,3rem)] font-normal leading-[1.02] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
          <span className="text-[color:var(--brand-blue)]">Cozinhas Industriais e </span>
          <span className="text-[color:var(--brand-red)]">Profissionais</span>
        </h1>
        <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-black/72 sm:text-xl">
          Soluções completas em equipamentos para operações do setor alimentício, com atendimento especializado e apoio
          comercial para projetos profissionais.
        </p>
        <p className="mx-auto mt-8 max-w-5xl text-base leading-8 text-black/80 sm:text-lg">
          A NR Cozinhas é especializada na revenda de equipamentos para
          <strong> cozinhas industriais e profissionais, oferecendo soluções completas para o setor alimentício</strong>.
          Atuamos desde o fornecimento de equipamentos e utensílios até a elaboração de projetos de cozinhas
          industriais. <strong>Trabalhamos com foco em qualidade</strong>, confiabilidade e atendimento profissional,
          garantindo sucesso aos nossos clientes.
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
