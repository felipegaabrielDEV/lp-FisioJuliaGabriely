# Dra. Júlia Gabriely — Landing Page | Fisioterapia

> 🚧 **Prévia 1 em construção (estrutura e visual).** Sem domínio e sem lançamento: a prévia é um arquivo único gerado por `python3 ferramentas/gerar-previa-privada.py` em `interno/` (fora do repositório). Toda página leva `noindex, nofollow`.

Landing page da **Dra. Júlia Gabriely**, fisioterapeuta (CREFITO 408355-F) em Aracaju/SE, com atendimento domiciliar e foco no público idoso: levar a pessoa certa a agendar a avaliação pelo WhatsApp.

## Situação

| Fase | Estado |
|---|---|
| 0. Preparação | Em andamento: kit copiado e adaptado, Drive organizado. Falta domínio |
| 1. Questionários | Enviados, aguardando as respostas da Júlia |
| 2. Roteiro | Depende das respostas |
| 3 em diante | Não iniciadas |

## Seções da prévia 1

| Seção | Situação |
|---|---|
| Topo | Título que aparece palavra por palavra, foto do ensaio com "fio do movimento" e cartões flutuantes (CREFITO e foto de atendimento); abertura em rascunho |
| Faixa de fatos e letreiro | 4 fatos confirmados e faixa corrida com os pilares do atendimento |
| Para quem é | 4 situações (hipótese da agência) com foto de atendimento em cada uma e aviso de que a avaliação médica faz parte quando necessário |
| Como funciona | 4 etapas ligadas por uma linha que acompanha a rolagem; duração e frequência pendentes |
| Cuidados | Fisioterapia para idosos, liberação miofascial e dry needling (explicações em rascunho); demais serviços pendentes |
| Cuidar também é celebrar | 3 fotos em formato de polaroide (festa junina, carnaval e uma boa conversa); texto em rascunho |
| No dia a dia | 2 vídeos curtos (sem som, um por vez) e 6 fotos de atendimento, com ampliação, setas e deslize |
| Sobre | Frase da Júlia (arte do Instagram), formação UFS, gerontologia em especialização, CREFITO; trajetória pendente |
| Atendimento | Plano de saúde, particular e região; planos, bairros e horários pendentes |
| Perguntas frequentes | 6 perguntas em rascunho, 3 com resposta pendente |
| Chamada final e rodapé | Slogan da marca, contato a confirmar e CREFITO |

Movimento: barra de progresso da leitura, botão do WhatsApp que pulsa, revelar ao rolar com atraso escalonado. Tudo respeita `prefers-reduced-motion`.

Os marcadores `rascunho` e `[PENDENTE]` aparecem na página e somem com o botão "ocultar marcadores" da faixa da prévia.
**Já construído para a prévia 2 (em teste, aguardando as respostas da Júlia):** formulário antes do WhatsApp (`lead-form.js`), aviso de cookies com tudo negado por padrão (`consent.js`), eventos para o GTM (`eventos.js`), política de privacidade (rascunho para revisão jurídica) e página 404. O GTM só carrega quando o ID for preenchido no `index.html`. Faltam os dados para o Google (`ld+json`, `canonical`, `og:*`), que dependem de endereço, horários e domínio.

## Estrutura

```
├── index.html       # Página única (prévia 1)
├── styles.css       # Identidade (tokens no :root) e layout responsivo
├── script.js        # Menu, WhatsApp por origem, perguntas frequentes, revelar ao rolar e botão da prévia
├── lead-form.js     # Formulário antes do WhatsApp (4 campos) e confirmação
├── eventos.js       # Eventos para o Google Tag Manager (dataLayer)
├── consent.js       # Aviso de cookies (LGPD) e Modo de Consentimento do Google
├── politica-de-privacidade.html · 404.html
├── docs/            # gtm-passo-a-passo.md (para o gestor de tráfego) e referencias.md (sites-espelho)
├── assets/          # profissional/ (fotos do ensaio, WebP) e atendimento/ (fotos e vídeos de atendimento, autorizados). marca/ (símbolo JG) fica fora do repositório até a designer liberar o uso
├── CLAUDE.md        # Regras do projeto (leia primeiro)
├── .claude/         # Skills (briefing, referencias, construir-site, previa) e agentes (pesquisador, revisor)
├── ferramentas/     # gerar-previa-privada.py e gerar-cartao.js
└── .gitignore
```

## Pendências de conteúdo

- [PENDENTE] Bairros atendidos em Aracaju/SE (a cidade já foi informada)
- [PENDENTE] Validar os textos marcados como rascunho (topo, para quem é, como funciona, técnicas e perguntas frequentes)
- [PENDENTE] Duração e o que inclui a avaliação; frequência e duração das sessões
- [PENDENTE] Lista completa de serviços e condições atendidas
- [PENDENTE] Trajetória, ano de formatura e instituição da especialização
- [PENDENTE] Símbolo JG em vetor (hoje recortado de JPEG) e logo completa
- [PENDENTE] Confirmar o uso do tratamento "Dra." junto ao CREFITO
- [PENDENTE] Respostas dos 4 questionários (Profissional, Mercado, Persona, Concorrentes)
- [PENDENTE] Confirmar o WhatsApp do site: (79) 9 9870-2192 ("Recepção JG", WhatsApp Business, nome comercial "Grupo Correia") ou (79) 9 9892-3963 (apresentação da marca)
- [PENDENTE] Instagram e e-mail definitivos
- [PENDENTE] Planos de saúde atendidos e autorização para usar as logos
- [PENDENTE] Diplomas, certificados e comprovante da especialização
- [PENDENTE] Documentos de autorização das fotos e vídeos de pacientes em `assets/atendimento/` (o Felipe informou em 24/11/2026 que a Júlia as liberou com autorização, e as mídias entraram no repositório por decisão dele). Guardar os documentos escritos no Drive e conferir a norma do COFFITO antes do lançamento
- [PENDENTE] Legendas das fotos e dos vídeos de atendimento (hoje são descrições neutras, sem nome de paciente nem promessa de resultado)
- [PENDENTE] Papel do Grupo Correia no site
- [PENDENTE] Arquivos das fontes Edensor e Garet (ou aprovação de equivalentes)
- [PENDENTE] Confirmar com a Júlia a marca do site (pessoal JG, decisão provisória) e a liberação de uso pela designer
- [PENDENTE] Arquivos da marca pessoal (logo principal, variação, pattern e PDF leve)
- [PENDENTE] Domínio (Registro.br, em nome da cliente)
- [PENDENTE] Conferir por escrito as normas do COFFITO e do CREFITO
- [PENDENTE] ID do Google Tag Manager (gestor de tráfego) e conferência das tags no painel, seguindo `docs/gtm-passo-a-passo.md`
- [PENDENTE] Política de privacidade: revisão jurídica, quem é o controlador (pessoa física ou empresa, CNPJ) e e-mail de contato
- [PENDENTE] Dados para o Google (`ld+json`, `canonical`, `og:*`, `sitemap.xml`): endereço de atendimento, horários e domínio final
- [PENDENTE] Resposta sobre pedido médico e sobre a família acompanhar as sessões (perguntas do FAQ com resposta pendente) e validação da frase da citação (arte do Instagram)
- [PENDENTE] Confirmar por escrito com o CREFITO-17 o uso de "Dra.", de "em especialização" e as regras sobre preço
- [PENDENTE] Símbolo JG: `assets/marca/` está fora do repositório, então a prévia publicada no GitHub Pages mostra imagens quebradas no lugar do monograma; use o arquivo privado ou libere o símbolo
