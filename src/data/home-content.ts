import {
  ChefHat,
  ClipboardList,
  Grid2x2,
  Info,
  Users,
} from "lucide-react";

export const menuItems = [
  { label: "Catalogo de Equipamentos", href: "#catalogo", icon: Grid2x2 },
  { label: "Cozinhas Profissionais", href: "#equipamentos", icon: ChefHat },
  { label: "Nossos Clientes", href: "#clientes", icon: Users },
  { label: "Orçamento", href: "#orcamento", icon: ClipboardList },
];

export const productLines = [
  {
    title: "Cocção",
    description: "Fogões, chapas, fritadeiras e linhas de preparo para cozinhas industriais e profissionais.",
  },
  {
    title: "Refrigeração",
    description: "Equipamentos para conservação, armazenamento e desempenho térmico no setor alimentício.",
  },
  {
    title: "Distribuição",
    description: "Buffets, vitrines e apoio para serviço, exposição e atendimento com operação eficiente.",
  },
  {
    title: "Inox e apoio",
    description: "Bancadas, prateleiras, mesas e estruturas em inox para organização técnica da cozinha.",
  },
];

export const catalogSections = [
  {
    title: "Cocção profissional",
    description: "Equipamentos para preparo intenso com desempenho térmico, produtividade e robustez operacional.",
    icon: ChefHat,
    image: "/products/fogoes-real.jpg",
    imagePosition: "center 54%",
    items: ["Fogão industrial", "Fritadeira", "Chapa"],
    metrics: ["3 linhas", "Alta produção"],
    ctaMessage: "Olá, quero orçamento para equipamentos de cocção profissional.",
  },
  {
    title: "Exaustão e conforto",
    description: "Soluções para captação de vapores, controle térmico e ambiente de trabalho mais seguro e eficiente.",
    icon: Info,
    image: "/products/coifas-real.jpg",
    imagePosition: "center 50%",
    items: ["Coifa", "Sistema de exaustão", "Projeto sob medida"],
    metrics: ["Sob medida", "Ambiente seguro"],
    ctaMessage: "Olá, quero orçamento para coifas e sistema de exaustão.",
  },
  {
    title: "Inox e apoio técnico",
    description: "Superfícies e estruturas para organização da operação, higiene e fluxo de produção em cozinha industrial.",
    icon: ClipboardList,
    image: "/products/inox-real.jpg",
    imagePosition: "center 58%",
    items: ["Bancada inox", "Prateleira", "Mesa de apoio"],
    metrics: ["Fácil limpeza", "Estrutura robusta"],
    ctaMessage: "Olá, quero orçamento para inox e apoio técnico.",
  },
  {
    title: "Linha de apoio",
    description: "Complementos para distribuição e atendimento, com foco em praticidade e melhor experiência de serviço.",
    icon: Grid2x2,
    image: "/products/utensilios-real.jpg",
    imagePosition: "center 52%",
    items: ["Buffet", "Vitrine", "Utensílios"],
    metrics: ["Agilidade", "Atendimento"],
    ctaMessage: "Olá, quero orçamento para linha de apoio e distribuição.",
  },
];

export const stats = [
  { value: "100%", label: "Experiência pensada para mobile, iPhone e desktop" },
  { value: "30+", label: "Produtos e combinações possíveis para cozinhas profissionais" },
  { value: "1", label: "Fluxo comercial focado em atendimento e orçamento" },
];

export const processSteps = [
  {
    step: "01",
    title: "Diagnóstico da operação",
    description: "Entendemos a rotina da cozinha e o volume de uso para indicar a configuração mais adequada.",
  },
  {
    step: "02",
    title: "Seleção de equipamentos",
    description: "Definimos linhas, medidas e composições com base em produtividade, higiene e fluxo operacional.",
  },
  {
    step: "03",
    title: "Projeto e orçamento",
    description: "Consolidamos a proposta comercial com orientação técnica e atendimento profissional.",
  },
];

export const segments = [
  {
    title: "Restaurantes e dark kitchens",
    description: "Estruturas para alta demanda, agilidade de preparo e padronização de operação.",
    icon: ChefHat,
    ctaMessage: "Olá, quero montar uma cozinha para restaurante ou dark kitchen.",
  },
  {
    title: "Hotéis e redes corporativas",
    description: "Soluções para produção contínua, apoio de serviço e operação profissional em escala.",
    icon: Users,
    ctaMessage: "Olá, quero orçamento para cozinha de hotel ou operação corporativa.",
  },
  {
    title: "Escolas e instituições",
    description: "Configuração técnica para preparo seguro, organização de fluxo e rotinas de alto volume.",
    icon: ClipboardList,
    ctaMessage: "Olá, quero orçamento para cozinha institucional.",
  },
  {
    title: "Indústria alimentícia",
    description: "Composição de linhas com foco em produtividade, higiene e confiabilidade operacional.",
    icon: Grid2x2,
    ctaMessage: "Olá, quero orçamento para operação de indústria alimentícia.",
  },
];

export const valuePillars = [
  {
    title: "Diagnóstico técnico comercial",
    description: "Levantamento objetivo do cenário da cozinha para indicar solução com melhor custo-benefício.",
    highlight: "Resposta orientativa em até 24h úteis",
  },
  {
    title: "Projeto com visão de operação",
    description: "Seleção de equipamentos e composições com base em fluxo real, produtividade e manutenção.",
    highlight: "Configuração sob medida para o seu tipo de serviço",
  },
  {
    title: "Atendimento direto no WhatsApp",
    description: "Contato rápido com consultor para ajustar proposta, tirar dúvidas e acelerar decisão.",
    highlight: "Caminho curto entre interesse e orçamento",
  },
];

export const faqItems = [
  {
    question: "Vocês atendem projetos de cozinha completa ou apenas equipamentos avulsos?",
    answer:
      "Atendemos os dois formatos. Podemos estruturar desde a cozinha completa até reforço pontual com equipamentos específicos.",
  },
  {
    question: "É possível receber orientação antes do orçamento final?",
    answer:
      "Sim. O time comercial realiza uma leitura inicial da operação para orientar categorias e linhas mais adequadas antes da proposta final.",
  },
  {
    question: "Qual o prazo para retorno após o envio do briefing?",
    answer:
      "Normalmente enviamos o retorno inicial em até 24h úteis, com direcionamento comercial e próximos passos para fechamento.",
  },
  {
    question: "Vocês atendem fora do Rio de Janeiro?",
    answer:
      "Sim. A cobertura depende do escopo e da composição do projeto. No primeiro contato já alinhamos viabilidade e logística.",
  },
];
