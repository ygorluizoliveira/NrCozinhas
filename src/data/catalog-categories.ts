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
    name: "Cocção",
    cardTitle: "Cocção",
    cardDescription:
      "Equipamentos de alta performance para preparo profissional de alimentos com eficiência e segurança.",
    pageTitle: "Cocção Para\nCozinha Industrial",
    pageSubtitle: "Equipamentos de alta performance",
    pageLead: "para resultados profissionais.",
    pageDescription:
      "Equipamentos de alta performance para resultados profissionais.",
    highlights: ["Alta produção", "Controle térmico", "Operação contínua"],
    applications: ["Restaurantes", "Hotéis", "Cozinhas industriais"],
    image: "/img/cocao.png",
    ctaMessage: "Olá, quero falar com um consultor sobre equipamentos de cocção.",
    iconKey: "coccao",
  },
  {
    slug: "refrigeracao",
    name: "Refrigeração",
    cardTitle: "Refrigeração",
    cardDescription:
      "Soluções completas para conservação de alimentos, bebidas com máxima eficiência.",
    pageTitle: "Refrigeração Para\nCozinha Industrial",
    pageSubtitle: "Equipamentos de alta performance",
    pageLead: "para conservação e eficiência.",
    pageDescription:
      "Soluções completas em equipamentos de refrigeração que mantêm alimentos e bebidas na temperatura ideal, com tecnologia, durabilidade e economia de energia para o dia a dia da sua operação.",
    highlights: ["Conservação eficiente", "Baixo desperdício", "Segurança alimentar"],
    applications: ["Câmara fria", "Estoque refrigerado", "Exposição de bebidas"],
    image: "/img/refrigeracao1.png",
    ctaMessage: "Olá, quero falar com um consultor sobre equipamentos de refrigeração.",
    iconKey: "refrigeracao",
  },
  {
    slug: "mobiliarios",
    name: "Mobiliários",
    cardTitle: "Mobiliários",
    cardDescription: "Mobiliários em aço inox, polipropileno ou madeira desenvolvidos para unir funcionalidade, resistência e organização",
    pageTitle: "Mobiliários para\nCozinha Industrial",
    pageSubtitle: "Funcionalidade, resistência e",
    pageLead: "organização para o seu espaço.",
    pageDescription:
      "Mobiliários em aço inox desenvolvidos para otimizar o fluxo de trabalho, garantir higiene e oferecer máxima durabilidade no dia a dia da sua cozinha.",
    highlights: ["Estrutura em inox", "Alta durabilidade", "Facil higienizacao"],
    applications: ["Bancadas", "Mesas de apoio", "Areas de preparo"],
    image: "/img/mobiliarios1.png",
    ctaMessage: "Olá, quero falar com um consultor sobre mobiliários para cozinha industrial.",
    iconKey: "mobiliarios",
  },
  {
    slug: "utensilios",
    name: "Utensílios de Cozinha",
    cardTitle: "Utensílios de cozinha",
    cardDescription: "Utensílios profissionais que oferecem praticidade e durabilidade para a operação diária.",
    pageTitle: "Utensílios Para\nCozinha Industrial",
    pageSubtitle: "Praticidade, resistência e qualidade",
    pageLead: "em cada detalhe.",
    pageDescription:
      "Utensílios profissionais desenvolvidos para facilitar o dia a dia da sua cozinha, com materiais duráveis e seguros que garantem mais eficiência, higiene e desempenho em cada preparo.",
    highlights: ["Praticidade diária", "Qualidade profissional", "Maior agilidade"],
    applications: ["Preparo", "Distribuição", "Finalização"],
    image: "/img/utensilios1.png",
    ctaMessage: "Olá, quero falar com um consultor sobre utensílios profissionais.",
    iconKey: "utensilios",
  },
  {
    slug: "fornos-combinados",
    name: "Fornos Combinados",
    cardTitle: "Fornos Combinados",
    cardDescription: "Tecnologia avançada que combina cocção, vapor e precisão para resultados consistentes.",
    pageTitle: "Fornos Combinados\nPara Cozinha Industrial",
    pageSubtitle: "Versatilidade, precisão e performance",
    pageLead: "para resultados superiores.",
    pageDescription:
      "Tecnologia que combina cocção a vapor e ar quente em um único equipamento, proporcionando mais produtividade, padronização e qualidade em cada preparo. Ideal para cozinhas que exigem o máximo desempenho.",
    highlights: ["Padronização", "Versatilidade", "Eficiência energética"],
    applications: ["Assados", "Cocção a vapor", "Finalização de pratos"],
    image: "/img/fornos_combinados.png",
    ctaMessage: "Olá, quero falar com um consultor sobre fornos combinados.",
    iconKey: "fornos",
  },
];

export function getCatalogCategoryBySlug(slug: string) {
  return catalogCategories.find((category) => category.slug === slug);
}
