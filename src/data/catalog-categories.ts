export type CatalogCategory = {
  slug: string;
  name: string;
  cardTitle: string;
  cardDescription: string;
  pageTitle: string;
  pageSubtitle: string;
  pageLead: string;
  pageDescription: string;
  highlights: string[];
  applications: string[];
  image: string;
  ctaMessage: string;
  iconKey: "coccao" | "refrigeracao" | "mobiliarios" | "utensilios" | "fornos";
};

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "coccao",
    name: "Coccao",
    cardTitle: "Coccao",
    cardDescription:
      "Equipamentos de alta performance para preparo profissional de alimentos com eficiencia e seguranca.",
    pageTitle: "Cocção Para\nCozinha Industrial",
    pageSubtitle: "Equipamentos de alta performance",
    pageLead: "para resultados profissionais.",
    pageDescription:
      "Equipamentos de alta performance para resultados profissionais.",
    highlights: ["Alta producao", "Controle termico", "Operacao continua"],
    applications: ["Restaurantes", "Hoteis", "Cozinhas industriais"],
    image: "/img/cocao.png",
    ctaMessage: "Olá, quero falar com um consultor sobre equipamentos de coccao.",
    iconKey: "coccao",
  },
  {
    slug: "refrigeracao",
    name: "Refrigeracao",
    cardTitle: "Refrigeracao",
    cardDescription:
      "Solucoes completas para conservacao de alimentos e bebidas com qualidade e maxima eficiencia.",
    pageTitle: "Refrigeração Para\nCozinha Industrial",
    pageSubtitle: "Equipamentos de alta performance",
    pageLead: "para conservação e eficiência.",
    pageDescription:
      "Soluções completas em equipamentos de refrigeração que mantêm alimentos e bebidas na temperatura ideal, com tecnologia, durabilidade e economia de energia para o dia a dia da sua operação.",
    highlights: ["Conservacao eficiente", "Baixo desperdicio", "Seguranca alimentar"],
    applications: ["Camara fria", "Estoque refrigerado", "Exposicao de bebidas"],
    image: "/img/refrigeracao.png",
    ctaMessage: "Olá, quero falar com um consultor sobre equipamentos de refrigeracao.",
    iconKey: "refrigeracao",
  },
  {
    slug: "mobiliarios",
    name: "Mobiliarios",
    cardTitle: "Mobiliarios",
    cardDescription: "Mobiliarios em aco inox desenvolvidos para unir funcionalidade, resistencia e organizacao.",
    pageTitle: "Mobiliários para\nCozinha Industrial",
    pageSubtitle: "Funcionalidade, resistência e",
    pageLead: "organização para o seu espaço.",
    pageDescription:
      "Mobiliários em aço inox desenvolvidos para otimizar o fluxo de trabalho, garantir higiene e oferecer máxima durabilidade no dia a dia da sua cozinha.",
    highlights: ["Estrutura em inox", "Alta durabilidade", "Facil higienizacao"],
    applications: ["Bancadas", "Mesas de apoio", "Areas de preparo"],
    image: "/img/mobiliarios.png",
    ctaMessage: "Olá, quero falar com um consultor sobre mobiliarios para cozinha industrial.",
    iconKey: "mobiliarios",
  },
  {
    slug: "utensilios",
    name: "Utensilios de Cozinha",
    cardTitle: "Utensilios de Cozinha",
    cardDescription: "Utensilios profissionais que oferecem praticidade e durabilidade para a operacao diaria.",
    pageTitle: "Utensílios Para\nCozinha Industrial",
    pageSubtitle: "Praticidade, resistência e qualidade",
    pageLead: "em cada detalhe.",
    pageDescription:
      "Utensílios profissionais desenvolvidos para facilitar o dia a dia da sua cozinha, com materiais duráveis e seguros que garantem mais eficiência, higiene e desempenho em cada preparo.",
    highlights: ["Praticidade diaria", "Qualidade profissional", "Maior agilidade"],
    applications: ["Preparo", "Distribuicao", "Finalizacao"],
    image: "/img/utensilios.png",
    ctaMessage: "Olá, quero falar com um consultor sobre utensilios profissionais.",
    iconKey: "utensilios",
  },
  {
    slug: "fornos-combinados",
    name: "Fornos Combinados",
    cardTitle: "Fornos Combinados",
    cardDescription: "Tecnologia avancada que combina coccao, vapor e precisao para resultados consistentes.",
    pageTitle: "Fornos Combinados\nPara Cozinha Industrial",
    pageSubtitle: "Versatilidade, precisão e performance",
    pageLead: "para resultados superiores.",
    pageDescription:
      "Tecnologia que combina cocção a vapor e ar quente em um único equipamento, proporcionando mais produtividade, padronização e qualidade em cada preparo. Ideal para cozinhas que exigem o máximo desempenho.",
    highlights: ["Padronizacao", "Versatilidade", "Eficiencia energetica"],
    applications: ["Assados", "Coccao a vapor", "Finalizacao de pratos"],
    image: "/img/fornos_combinados.png",
    ctaMessage: "Olá, quero falar com um consultor sobre fornos combinados.",
    iconKey: "fornos",
  },
];

export function getCatalogCategoryBySlug(slug: string) {
  return catalogCategories.find((category) => category.slug === slug);
}
