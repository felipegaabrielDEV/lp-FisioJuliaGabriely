# Dra. Júlia Gabriely — Landing Page | Fisioterapia

> 🚧 **Prévia 1 em construção (estrutura e visual).** Sem domínio e sem publicação: a prévia é um arquivo único privado, gerado por `python3 ferramentas/gerar-previa-privada.py` em `interno/` (fora do repositório). Toda página leva `noindex, nofollow`.

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
| Topo | Título e abertura em rascunho; foto do ensaio, cartão com CREFITO e faixa com 4 fatos confirmados |
| Para quem é | 4 situações em rascunho (hipótese da agência) e aviso de que a avaliação médica faz parte quando necessário |
| Como funciona | 4 etapas em rascunho, com duração e frequência pendentes |
| Cuidados | Fisioterapia para idosos, liberação miofascial e dry needling (explicações em rascunho); demais serviços pendentes |
| No dia a dia | 2 vídeos curtos (sem som) e 8 fotos de atendimento, com ampliação. Mídias de pacientes ficam fora do repositório (`assets/atendimento/` no `.gitignore`); só entram na prévia privada |
| Sobre | Frase da Júlia (arte do Instagram), formação UFS, gerontologia em especialização, CREFITO; trajetória pendente |
| Atendimento | Plano de saúde, particular e região; planos, bairros e horários pendentes |
| Perguntas frequentes | 6 perguntas em rascunho, 3 com resposta pendente |
| Chamada final e rodapé | Slogan da marca, contato a confirmar e CREFITO |

Os marcadores `rascunho` e `[PENDENTE]` aparecem na página e somem com o botão "ocultar marcadores" da faixa da prévia.
Formulário antes do WhatsApp, aviso de cookies, GTM, política de privacidade, 404 e dados para o Google entram na prévia 2.

## Estrutura

```
├── index.html       # Página única (prévia 1)
├── styles.css       # Identidade (tokens no :root) e layout responsivo
├── script.js        # Menu, WhatsApp por origem, perguntas frequentes, revelar ao rolar e botão da prévia
├── assets/          # marca/ (símbolo JG recortado dos JPEG da apresentação) e profissional/ (fotos do ensaio, WebP)
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
- [PENDENTE] Autorização escrita para fotos e vídeos de pacientes (o Felipe informou em 24/11/2026 que já existe; guardar os documentos no Drive e conferir a norma do COFFITO antes de publicar)
- [PENDENTE] Papel do Grupo Correia no site
- [PENDENTE] Arquivos das fontes Edensor e Garet (ou aprovação de equivalentes)
- [PENDENTE] Confirmar com a Júlia a marca do site (pessoal JG, decisão provisória) e a liberação de uso pela designer
- [PENDENTE] Arquivos da marca pessoal (logo principal, variação, pattern e PDF leve)
- [PENDENTE] Domínio (Registro.br, em nome da cliente)
- [PENDENTE] Conferir por escrito as normas do COFFITO e do CREFITO
