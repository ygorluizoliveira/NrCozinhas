import {
  ChefHat,
  ClipboardList,
  Clock3,
  Grid2x2,
  Info,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import { ProductCarousel } from "@/components/product-carousel";
import { QuoteForm } from "@/components/quote-form";
import { LogoMark } from "@/components/logo-mark";
import { whatsappUrl } from "@/lib/contact";

const menuItems = [
  { label: "Sobre a NR Passos", href: "#institucional", icon: Info },
  { label: "Linha de Produtos", href: "#linhas", icon: Grid2x2 },
  { label: "Cozinhas Profissionais", href: "#equipamentos", icon: ChefHat },
  { label: "Nossos Clientes", href: "#clientes", icon: Users },
  { label: "Orcamento", href: "#orcamento", icon: ClipboardList },
];

const contactItems = [
  { label: "Telefone", value: "(11) 2564-2001", href: "tel:1125642001" },
  { label: "WhatsApp", value: "(11) 99999-9999", href: whatsappUrl("Ola, gostaria de falar com a NR Passos Cozinhas.") },
];

const productLines = [
  {
    title: "Coccao",
    description: "Fogoes, chapas, fritadeiras e linhas de preparo para cozinhas industriais e profissionais.",
  },
  {
    title: "Refrigeracao",
    description: "Equipamentos para conservacao, armazenamento e desempenho termico no setor alimenticio.",
  },
  {
    title: "Distribuicao",
    description: "Buffets, vitrines e apoio para servico, exposicao e atendimento com operacao eficiente.",
  },
  {
    title: "Inox e apoio",
    description: "Bancadas, prateleiras, mesas e estruturas em inox para organizacao tecnica da cozinha.",
  },
];

const equipmentItems = [
  "Fogao industrial",
  "Fritadeira",
  "Chapa",
  "Coifa",
  "Freezer",
  "Refrigerador",
  "Buffet",
  "Vitrine",
  "Bancada inox",
  "Prateleira",
  "Mesa de apoio",
  "Utensilios",
];

const stats = [
  { value: "100%", label: "Experiencia pensada para mobile, iPhone e desktop" },
  { value: "30+", label: "Produtos e combinacoes possiveis para cozinhas profissionais" },
  { value: "1", label: "Fluxo comercial focado em atendimento e orcamento" },
];

const processSteps = [
  {
    step: "01",
    title: "Diagnostico da operacao",
    description: "Entendemos a rotina da cozinha e o volume de uso para indicar a configuracao mais adequada.",
  },
  {
    step: "02",
    title: "Selecao de equipamentos",
    description: "Definimos linhas, medidas e composicoes com base em produtividade, higiene e fluxo operacional.",
  },
  {
    step: "03",
    title: "Projeto e orcamento",
    description: "Consolidamos a proposta comercial com orientacao tecnica e atendimento profissional.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-32">
      <section className="px-0 pt-0">
        <div className="w-full bg-[color:var(--brand-red)] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 text-sm font-medium sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a href="tel:1125642001" className="flex items-center gap-2 transition hover:text-white/80">
                <Phone className="h-4 w-4" strokeWidth={1.9} />
                <span>(21) 2564-2001</span>
              </a>
              <a href={whatsappUrl("Ola, gostaria de falar com a NR Passos Cozinhas.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white/80">
                <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
                <span>(21) 97215-7105</span>
              </a>
            </div>
            <p className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" strokeWidth={1.9} />
              <span>Seg a Sex 08:00 as 17:00</span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] bg-white px-6 py-4 shadow-[var(--shadow)] lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <a href="#inicio" className="block max-w-[17rem] rounded-[1.25rem] px-1 py-1">
                <LogoMark className="mx-auto w-full max-w-[15rem]" />
              </a>

              <nav className="flex flex-col gap-3 text-[color:var(--brand-blue)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 lg:gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-[15px] font-medium transition hover:text-[color:var(--brand-red)]"
                  >
                    <item.icon className="h-5 w-5 shrink-0 text-[color:var(--brand-blue)] transition group-hover:text-[color:var(--brand-red)]" strokeWidth={1.9} />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section id="inicio" className="px-5 py-5 sm:px-8 lg:px-12">
        <div className="hero-grid glass-panel mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-8 lg:px-12 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
            Cozinhas industriais e profissionais
          </p>
          <h1 className="display-font mx-auto mt-6 max-w-4xl text-5xl leading-[0.95] text-[#2b2024] sm:text-6xl lg:text-7xl">
            Cozinhas Industriais e Profissionais
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-black/72 sm:text-xl">
            Solucoes completas em equipamentos para operacoes do setor alimenticio, com atendimento especializado e apoio comercial para projetos profissionais.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="rounded-full bg-[color:var(--brand-red)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[color:var(--accent-strong)]"
              href="#orcamento"
            >
              Solicitar orcamento
            </a>
            <a
              className="rounded-full border border-[color:var(--line)] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[color:var(--brand-blue)] transition hover:bg-white hover:text-[color:var(--brand-red)]"
              href="#equipamentos"
            >
              Ver equipamentos
            </a>
          </div>
        </div>
      </section>

      <section id="institucional" className="px-5 py-5 sm:px-8 lg:px-12">
        <div className="section-shell mx-auto max-w-7xl rounded-[2rem] p-7 sm:p-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
              Institucional
            </p>
            <p className="mt-5 text-xl leading-[1.65] text-black/80 sm:text-2xl">
              A NR Passos Cozinhas e especializada na revenda de equipamentos para <strong>cozinhas industriais e profissionais, oferecendo solucoes completas para o setor alimenticio</strong>. Atuamos desde o fornecimento de equipamentos e utensilios ate a elaboracao de projetos cozinhas industrias. <strong>Trabalhamos com foco em qualidade</strong>, confiabilidade e atendimento profissional, garantindo sucesso aos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      <section id="linhas" className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
              Linha de produtos
            </p>
            <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
              Principais frentes de equipamentos para cozinhas industriais e profissionais.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productLines.map((group) => (
              <article key={group.title} className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(21,42,108,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-red)]">
                  Categoria
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[color:var(--brand-blue)]">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/68">{group.description}</p>
                <div className="mt-6 h-px w-full bg-[color:var(--line)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                  Linha profissional
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              O bloco central funciona como exposicao comercial das categorias e linhas mais relevantes da operacao.
            </p>
          </div>

          <ProductCarousel />
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white px-6 py-8 shadow-[var(--shadow)] sm:px-8 lg:px-10">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
              Catalogo de equipamentos
            </p>
            <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
              Equipamentos para cozinhas industriais e profissionais.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-4">
            {equipmentItems.map((item) => (
              <article key={item} className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-5 py-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)]">Equipamento</p>
                <h3 className="mt-4 text-2xl font-semibold text-[color:var(--brand-blue)]">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes" className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
              Nossos clientes
            </p>
            <h2 className="display-font mt-3 text-3xl leading-tight text-[color:var(--brand-blue)] sm:text-4xl">
              Marcas e grupos que confiam no atendimento da NR Passos Cozinhas.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(21,42,108,0.08)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-red)]">
                Cliente atendido
              </p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f6f79] text-3xl font-bold text-white shadow-lg">
                  A
                </div>
                <div>
                  <h3 className="text-5xl font-light tracking-[-0.06em] text-[#2c8ea0] sm:text-6xl">
                    ALTOMAR
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-black/55">
                    Grupo LC Restaurantes
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-black/72">
                Fornecimento de equipamentos e apoio tecnico para cozinhas com padrao profissional.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(21,42,108,0.08)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-red)]">
                Cliente atendido
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-base font-black text-white shadow-lg">
                  LC
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-semibold tracking-[-0.04em] text-[#7c8089] sm:text-3xl">
                    GRUPO
                  </span>
                  <span className="text-5xl font-black tracking-[-0.07em] text-[#5c606a] sm:text-6xl">
                    GPS
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-black/72">
                Relacionamento comercial baseado em confiabilidade, qualidade e atendimento tecnico.
              </p>
            </article>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <article key={item.label} className="section-shell rounded-[1.5rem] px-6 py-7 text-center">
                <p className="display-font text-5xl text-[color:var(--brand-blue)]">{item.value}</p>
                <p className="mt-4 text-sm leading-7 text-black/68">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[color:var(--brand-blue)] px-6 py-8 text-white shadow-[var(--shadow)] sm:px-8 lg:px-10">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Processo de atendimento
            </p>
            <h2 className="display-font mt-3 text-3xl leading-tight sm:text-4xl">
              Como conduzimos o atendimento para cozinhas profissionais.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-[1.5rem] border border-white/15 bg-white/7 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  Etapa {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/78">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="orcamento" className="px-5 pb-14 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="section-shell rounded-[2rem] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
              Orcamento
            </p>
            <h2 className="display-font mt-4 text-3xl leading-tight sm:text-4xl">
              Formulario pensado para iniciar o atendimento sem transformar o site em loja virtual.
            </h2>
            <p className="mt-5 text-sm leading-8 text-black/70 sm:text-base">
              O visitante informa o tipo de ambiente, prazo e detalhes do projeto. Em seguida, o site prepara uma mensagem para envio direto pelo WhatsApp, mantendo o fluxo comercial simples e rapido.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-[color:var(--line)] bg-white/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
                Canais previstos
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-black/72">
                <li>WhatsApp com mensagem pre-preenchida</li>
                <li>Captura de nome, contato, ambiente e faixa de investimento</li>
                <li>Estrutura pronta para integrar e-mail ou CRM depois</li>
              </ul>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-8 lg:px-12">
        <div className="fixed-cta-shell mx-auto grid max-w-7xl grid-cols-2 gap-2 rounded-[1.5rem] p-2 sm:gap-3 sm:p-4">
          <a
            href={whatsappUrl("Ola, quero falar com um consultor da NR Passos Cozinhas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[color:var(--brand-blue)] px-3 py-2.5 text-center text-[13px] font-semibold transition hover:bg-[color:var(--brand-red)] sm:px-5 sm:py-3 sm:text-sm"
            style={{ color: "#ffffff" }}
          >
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Fale com consultor</span>
          </a>
          <a
            href="#orcamento"
            className="rounded-full bg-[color:var(--brand-blue)] px-3 py-2.5 text-center text-[13px] font-semibold transition hover:bg-[color:var(--accent-strong)] sm:px-5 sm:py-3 sm:text-sm"
            style={{ color: "#ffffff" }}
          >
            <span className="sm:hidden">Orcamento</span>
            <span className="hidden sm:inline">Orcamento de Projetos</span>
          </a>
        </div>
      </div>
    </main>
  );
}