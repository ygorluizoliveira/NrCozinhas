# NR Cozinhas

Base profissional em React para um site responsivo de exposicao de mercadorias com solicitacao de orcamento, sem checkout online.

Versao atual: 0.2.0

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deploy automatico (GitHub Actions -> HostGator)

Este projeto agora esta preparado para deploy direto pelo GitHub, sem abrir o cPanel a cada publicacao.

Workflow: [.github/workflows/deploy-hostgator.yml](.github/workflows/deploy-hostgator.yml)

### Como ativar

1. No GitHub do repositorio, abra `Settings > Secrets and variables > Actions`.
2. Crie os secrets abaixo:
	- `FTP_SERVER` (ex.: `ftp.seudominio.com`)
	- `FTP_USERNAME`
	- `FTP_PASSWORD`
	- `FTP_PROTOCOL` (`ftp` ou `ftps`)
	- `FTP_PORT` (normalmente `21`)
	- `FTP_SERVER_DIR` (ex.: `/public_html/`)
3. Garanta que sua branch de producao seja `main`.
4. Ao fazer push na `main`, o deploy roda automaticamente.

### Observacoes tecnicas

- O Next.js foi configurado para export estatico em [next.config.ts](next.config.ts).
- O build gera a pasta `out/`, que e enviada para o HostGator via FTP.
- Se quiser publicar por outra branch, altere o bloco `on.push.branches` no workflow.

## Objetivo desta base

Este projeto foi inicializado para servir como estrutura de um site com:

- catalogo de produtos
- formulario de orcamento
- layout responsivo para Android, iPhone e desktop
- base pronta para deploy em dominio proprio

## O que entrou na v0.2.0

- Novo design completo da home, header, hero e barra fixa de CTA
- Secao de catalogo redesenhada no estilo card comercial
- Subpaginas dinamicas por categoria (`/categorias/[slug]`)
- Nova secao de parceiros com logo consolidada
- Novo formulario de orcamento em duas colunas no estilo institucional
- Footer completo em quatro colunas, com contatos e links
- Atualizacao de assets visuais em `public/products`

## Changelog

Consulte [CHANGELOG.md](CHANGELOG.md) para os detalhes completos desta versao.
