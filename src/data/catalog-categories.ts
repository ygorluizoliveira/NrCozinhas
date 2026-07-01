export type CatalogCategory = {
  slug: string;
  name: string;
  cardTitle: string;
  cardDescription: string;
  pageTitle: string;
  pageSubtitle: string;
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
    pageTitle: "Coccao para Cozinha Industrial",
    pageSubtitle: "NR Cozinhas Profissionais",
    pageDescription:
      "Explore nossa linha de coccao e encontre equipamentos profissionais para cozinhas industriais, como fornos, fogoes e chapas. Produtos robustos e eficientes para garantir alto desempenho na preparacao de alimentos.",
    highlights: ["Alta producao", "Controle termico", "Operacao continua"],
    applications: ["Restaurantes", "Hoteis", "Cozinhas industriais"],
    image: "/products/fogoes-real.jpg",
    ctaMessage: "Olá, quero falar com um consultor sobre equipamentos de coccao.",
    iconKey: "coccao",
  },
  {
    slug: "refrigeracao",
    name: "Refrigeracao",
    cardTitle: "Refrigeracao",
    cardDescription:
      "Solucoes completas para conservacao de alimentos e bebidas com qualidade e maxima eficiencia.",
    pageTitle: "Refrigeracao para Cozinha Industrial",
    pageSubtitle: "NR Cozinhas Profissionais",
    pageDescription:
      "Garanta controle termico e conservacao ideal com equipamentos de refrigeracao para operacoes profissionais. Solucoes para armazenamento seguro, rotina intensa e melhor aproveitamento de insumos.",
    highlights: ["Conservacao eficiente", "Baixo desperdicio", "Seguranca alimentar"],
    applications: ["Camara fria", "Estoque refrigerado", "Exposicao de bebidas"],
    image: "/products/coifas-real.jpg",
    ctaMessage: "Olá, quero falar com um consultor sobre equipamentos de refrigeracao.",
    iconKey: "refrigeracao",
  },
  {
    slug: "mobiliarios",
    name: "Mobiliarios",
    cardTitle: "Mobiliarios",
    cardDescription: "Mobiliarios em aco inox desenvolvidos para unir funcionalidade, resistencia e organizacao.",
    pageTitle: "Mobiliarios para Cozinha Industrial",
    pageSubtitle: "NR Cozinhas Profissionais",
    pageDescription:
      "Estruture sua operacao com mobiliarios tecnicos em inox para preparo, apoio e fluxo de trabalho. Equipamentos pensados para higiene, durabilidade e produtividade no dia a dia.",
    highlights: ["Estrutura em inox", "Alta durabilidade", "Facil higienizacao"],
    applications: ["Bancadas", "Mesas de apoio", "Areas de preparo"],
    image: "/products/inox-real.jpg",
    ctaMessage: "Olá, quero falar com um consultor sobre mobiliarios para cozinha industrial.",
    iconKey: "mobiliarios",
  },
  {
    slug: "utensilios",
    name: "Utensilios de Cozinha",
    cardTitle: "Utensilios de Cozinha",
    cardDescription: "Utensilios profissionais que oferecem praticidade e durabilidade para a operacao diaria.",
    pageTitle: "Utensilios para Cozinha Industrial",
    pageSubtitle: "NR Cozinhas Profissionais",
    pageDescription:
      "Tenha mais agilidade e padrao de execucao com utensilios adequados para cozinhas profissionais. Itens resistentes para preparo, distribuicao e apoio em diferentes tipos de operacao.",
    highlights: ["Praticidade diaria", "Qualidade profissional", "Maior agilidade"],
    applications: ["Preparo", "Distribuicao", "Finalizacao"],
    image: "/products/utensilios-real.jpg",
    ctaMessage: "Olá, quero falar com um consultor sobre utensilios profissionais.",
    iconKey: "utensilios",
  },
  {
    slug: "fornos-combinados",
    name: "Fornos Combinados",
    cardTitle: "Fornos Combinados",
    cardDescription: "Tecnologia avancada que combina coccao, vapor e precisao para resultados consistentes.",
    pageTitle: "Fornos Combinados para Cozinha Industrial",
    pageSubtitle: "NR Cozinhas Profissionais",
    pageDescription:
      "Aprimore o desempenho da producao com fornos combinados que entregam controle, padronizacao e eficiencia energetica. Solucao ideal para operacoes que exigem constancia e qualidade final.",
    highlights: ["Padronizacao", "Versatilidade", "Eficiencia energetica"],
    applications: ["Assados", "Coccao a vapor", "Finalizacao de pratos"],
    image: "/products/fogoes-real.jpg",
    ctaMessage: "Olá, quero falar com um consultor sobre fornos combinados.",
    iconKey: "fornos",
  },
];

export function getCatalogCategoryBySlug(slug: string) {
  return catalogCategories.find((category) => category.slug === slug);
}
