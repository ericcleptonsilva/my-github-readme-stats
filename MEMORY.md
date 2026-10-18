# MEMORY.md - my-github-readme-stats

## Contexto do Repositório
- **Repositório**: `ericcleptonsilva/my-github-readme-stats` (Fork de `anuraghazra/github-readme-stats`).
- **Ambiente Local**: Windows 11, Node.js `v22.18.0`, npm `11.9.0`, GitHub CLI `gh` autenticado como `ericcleptonsilva`.
- **Objetivo**: Modernizar e atualizar o projeto (dependências, segurança, runtime Vercel, novos temas, CI/CD GitHub Actions, testes Jest no Node 22, documentação e issues).

## Diagnóstico Realizado
1. **Dependências em `master`**: Muito desatualizadas (Jest 26, Axios 0.21 com CVEs, Husky 4, Dotenv 8).
2. **Branch Remota Existente**: `origin/update-dependencies-and-tests` possui tentativa prévia de atualização para Jest 29 / Axios 1.6 / Husky 9.
3. **CI/CD (.github/workflows)**: Workflows usando actions antigas (v2) e versões de Node depreciadas.
4. **Vercel Runtime**: Requer Node 20+ e cabeçalhos de cache otimizados (`stale-while-revalidate`).
5. **Comunidade (Pesquisa 2025/2026)**: Upstream original em manutenção reduzida; boas práticas atuais focam em auto-hospedagem facilitada na Vercel, suporte a múltiplos PATs para evitar rate-limit, temas modernos (Catppuccin, Tokyo Night, Rose Pine) e CI atualizado.

## Plano de Atualização (Etapas)
- [ ] Etapa 1: Criar Issues no GitHub documentando os problemas e melhorias planejadas.
- [ ] Etapa 2: Unificar/atualizar dependências para versões modernas compatíveis com Node 22 (Jest 29, Axios moderno, etc.) e corrigir suíte de testes.
- [ ] Etapa 3: Atualizar GitHub Actions workflows (.github/workflows) para v4 e Node 20/22.
- [ ] Etapa 4: Adicionar temas modernos (Catppuccin Mocha, Tokyo Night, Rose Pine, Synthwave 84).
- [ ] Etapa 5: Otimizar cache e tratamento de rate-limit nos endpoints da API.
- [ ] Etapa 6: Atualizar README.md com o passo a passo completo das melhorias e instruções de auto-hospedagem na Vercel.
- [ ] Etapa 7: Fechar as Issues criadas com notas de resolução e realizar commits semânticos no Git.
