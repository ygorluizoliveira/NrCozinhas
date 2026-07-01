# Changelog

## v0.2.0 - 2026-07-01

### Home e Estrutura
- Remodelacao completa da home com ajustes de hierarquia visual e blocos comerciais.
- Banner principal movido para o topo da pagina, logo abaixo do menu, em largura total.
- Atualizacao para novo banner de topo (`banner_logo_2.png`).
- Remocao da secao institucional dedicada e redistribuicao de conteudo para hero/fluxo principal.

### Header e Navegacao
- Refinamento do header com menor altura e espacamentos mais compactos.
- Ajustes de logo no topo (recorte/enquadramento e exibicao do simbolo central conforme iteracoes).
- Atualizacao de itens do menu para refletir estrutura atual de secoes.

### Hero e Titulacao
- Ajustes de titulacao principal com padrao bicolor da marca (azul/vermelho), incluindo variacoes de peso tipografico.
- Inclusao e refinamento de texto institucional no bloco principal da hero.

### Catalogo de Equipamentos
- Redesenho da secao de catalogo para cards minimalistas no estilo de vitrine profissional.
- Criacao de cards por categoria com icone, descricao e CTA visual por seta.
- Conversao dos cards para navegacao em paginas dedicadas por categoria.

### Subpaginas de Categorias
- Implementacao de rotas dinamicas em `src/app/categorias/[slug]/page.tsx`.
- Criacao de base de dados central de categorias (`src/data/catalog-categories.ts`).
- Layout de pagina de categoria no estilo institucional/comercial com:
  - bloco principal de destaque;
  - texto descritivo;
  - CTA para WhatsApp;
  - secoes de diferenciais e aplicacoes atendidas;
  - navegacao para outras categorias.
- Ajuste do link "Voltar para catalogo" para ancorar em `#catalogo` na home.

### Parceiros / Empresas Atendidas
- Reestruturacao da secao de clientes para formato de parceiros.
- Substituicao da grade textual por imagem dedicada de logos.
- Atualizacao para `logo_parceiros.png` e ajustes visuais de altura/proporcao do card.
- Ajustes de titulacao da secao para padrao do site e variacoes solicitadas (cor, peso, centralizacao, bicolor).

### Formulario de Orcamento
- Substituicao do formulario antigo por layout inspirado no print de referencia.
- Nova composicao em duas colunas (imagem lateral + formulario completo).
- Inclusao de campos: nome, email, telefone, segmento, descricao do projeto.
- Inclusao de selecao de tipo de projeto (2D/3D/2D e 3D) e consentimento.
- Integracao de envio via WhatsApp com payload textual estruturado.
- Atualizacao da imagem do formulario para `formulario2.png`.
- Reposicionamento da secao de orcamento para abaixo de parceiros.

### Barra Fixa de CTA
- Redesign completo da barra fixa inferior (texto + botoes, estilo de alto contraste).
- Ajustes sucessivos de tipografia, cor e icones (incluindo SVG customizado para WhatsApp).
- Aplicacao de animacao de pulso/sombra no CTA de WhatsApp para destaque.
- Ajustes de copy, bicolor e padrao cromatico conforme solicitacoes.

### Footer
- Criacao de novo footer em layout de 4 colunas no estilo institucional do print.
- Inclusao de blocos: institucional, cozinhas profissionais, unidades e fale conosco.
- Inclusao de contatos e links principais.
- Correcao de runtime no footer substituindo icones sociais indisponiveis por fallback estavel.

### Midia e Assets
- Inclusao/atualizacao de assets em `public/products/`:
  - `banner_logo.jpeg`
  - `banner_logo_2.png`
  - `formulario2.png`
  - `logo_parceiros.png`

### Correcoes Tecnicas
- Correcao de erros de runtime relacionados a componentes de icones indefinidos.
- Ajustes para estabilidade do ambiente de desenvolvimento com Webpack.
- Revisoes de links de ancora e consistencia de navegacao entre secoes.

### Notas de Versionamento
- Versao do projeto atualizada para `0.2.0` em `package.json`.
- Esta release consolida o reposicionamento visual/comercial do site para o fluxo de captacao de orcamentos.
