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
| Em números | 4 dados públicos com fonte e contagem animada (IBGE e Ministério da Saúde), sem falar de resultado |
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

## Informações levantadas (24/11/2026)

Só o que é público e pode ficar no repositório. Análise de concorrentes, mercado de planos e respostas da cliente ficam no Drive. Tudo abaixo vale como **FATO com fonte**, exceto onde estiver marcado.

**Aracaju (IBGE, Censo 2022):** 602.757 moradores; 90.134 com 60 anos ou mais (14,95%); 12.873 com 80 anos ou mais; 14.094 casas com uma pessoa de 60+ morando sozinha. O IBGE registra 48 bairros (lista e bairros com mais idosos estão no Drive, para a Júlia marcar onde atende). Não há lista oficial de zonas.

**Quedas:** 20,9% dos idosos brasileiros relataram ao menos uma queda no último ano (Ministério da Saúde, 2026, ELSI-Brasil). Uso no site só com a fonte e sem prometer prevenção.

**Planos (ANS):** desde 01/08/2022 o Rol não limita o número de sessões de fisioterapia e a cobertura segue a prescrição do médico assistente. Atenção domiciliar **não** é cobertura obrigatória, salvo o que o contrato ou a operadora oferecer. Por isso o site não promete "o plano cobre" em casa: pede que a pessoa informe o plano e confirma as condições. "Agulhamento seco" consta no Rol.

**Normas do COFFITO (leitura da agência, não parecer jurídico; confirmar com o CREFITO-17):**
- Vigoram o Código de Ética (Resolução 424/2013) e a Resolução 532/2021 (divulgação de imagens, textos e áudios).
- Nome, profissão e número do CREFITO são obrigatórios na divulgação (art. 48).
- Foto, depoimento e antes e depois de paciente só com autorização formal prévia do paciente ou do responsável legal, em termo próprio (o termo do tratamento não vale), com material sem edição.
- Vedado prometer resultado infalível e usar sensacionalismo. "Especialista" só com título e RQE emitidos pelo COFFITO (Resolução 630/2025); pós-graduação em andamento não dá o título.
- Dry needling: reconhecido pelo Acórdão COFFITO 481/2016, com formação mínima de 30 horas (50% prática). Foi anulado pela Justiça em 2019 e reafirmado pelo TRF1 em 28/04/2026 (notícia do COFFITO; acórdão não lido, pode caber recurso). Sem norma específica achada para liberação miofascial.
- "Dra.": sem norma oficial achada; a forma segura é "Júlia Gabriely · Fisioterapeuta · CREFITO 408355-F".

**Público e canais (Cetic.br, TIC Domicílios 2025):** 59% das pessoas com 60+ usam internet e 83% delas usam mensagens instantâneas; cerca de 16 milhões de pessoas com 60+ no país não usam internet. Quem decide e contrata costuma ser familiar (HIPÓTESE). Por isso o site fala com o familiar e o formulário pergunta "Quem será atendido?".

**Presença digital da Júlia:** em buscas públicas não achamos site, Doctoralia nem Google Meu Negócio em nome dela; o Instagram bloqueou a consulta. Registro 408355-F não conferido em consulta pública.

**Aplicado no site:** seção "Em números" (dados do IBGE e do Ministério da Saúde, com fonte), textos de plano sem promessa de cobertura, aviso de avaliação médica na seção Cuidados e título dela sem promessa. Sites-espelho em `docs/referencias.md`.

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
