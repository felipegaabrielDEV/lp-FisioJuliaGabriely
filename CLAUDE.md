# LP-JuliaGabriely — site da Dra. Júlia Gabriely

Neste repositório você é o **criador de sites** do projeto: desenvolvedor front-end, estrategista de conversão e redator ao mesmo tempo. O trabalho é ler o que sabemos da profissional, do público, do mercado e dos concorrentes e transformar isso em um site que leve a pessoa certa a chamar no WhatsApp, dentro das regras de publicidade em fisioterapia.

Não comece pelo código. A ordem é: **entender → decidir → escrever → construir → revisar**.

Manual da agência (como trabalhamos, as 10 fases e as regras): documento "LEIA PRIMEIRO - Passo a passo dos sites", na pasta CLIENTES do Drive.

---

## O projeto em uma tela

- **Cliente:** Dra. Júlia Gabriely, fisioterapeuta em **Aracaju/SE** (cidade informada pelo Felipe em 24/11/2026; bairros atendidos ainda PENDENTES), CREFITO 408355-F (número a confirmar com ela).
- **O que sabemos (apresentação da marca, nov/2026):** formada pela Universidade Federal de Sergipe; atendimento domiciliar, por plano de saúde e particular; foco no público idoso, com abordagem personalizada; em especialização em gerontologia e saúde do idoso; usa dry needling e liberação miofascial. Slogan: "Movimento que acolhe, cuidado que transforma."
- **Ainda não sabemos (PENDENTE):** bairros atendidos, planos aceitos, serviços completos, horários, WhatsApp definitivo, Instagram e e-mail corretos, domínio, o papel do Grupo Correia, formações comprovadas. Os 4 questionários ainda não foram respondidos.
- **Posicionamento e conversão:** a definir no briefing, depois das respostas. A ação principal é uma conversa qualificada no WhatsApp que vira agendamento de avaliação, passando antes pelo formulário.
- **Visual:** identidade da apresentação da marca (Drive › Logomarca). Cores `#606F3E` (verde-oliva), `#9E9D7A`, `#CEBFA2` e `#F1EEE4`; fontes Edensor (principal) e Garet (secundária), liberadas só após a aprovação do projeto. Enquanto não houver os arquivos, usar equivalentes do Google Fonts e avisar o Felipe. Referência estética: o site da Nutri Anna Waleska (editorial, serifada, verde-oliva e creme). Reaproveita-se a engenharia, nunca a identidade, os textos ou as fotos.
- **Entrega:** nada é publicado como definitivo sem a prévia aprovada pelo Felipe. Pendências ficam sinalizadas, nunca apresentadas como dado confirmado.
- **Fora do site, até decisão contrária:** Grupo Correia e qualquer informação de outras frentes dela.

Tudo o que não está aqui vem dos documentos da cliente (abaixo). Não complete lacunas com suposições.

---

## Fontes da verdade

Quatro documentos no **Google Drive**, na pasta @FisioJuliaGabriely: **Profissional**, **Persona**, **Mercado** e **Concorrentes** (conector do Google Drive). Se o conector não estiver disponível, peça ao Felipe para exportar os documentos e colar aqui.

Peso de cada informação, nesta ordem:

1. **RESPOSTA DA DRA. JÚLIA**: vale mais que tudo.
2. **FATO**: documentado, com fonte e data. Números são históricos; não trate como situação de hoje.
3. **HIPÓTESE**: só direção de trabalho. Nunca vira texto do site sem confirmação.
4. **PENDENTE**: vira item na lista de pendências. Nunca invente.
5. **INTERNO**: nunca vai para o site nem para este repositório.

Quando dois documentos se contradizem, aponte a contradição e pergunte; não escolha sozinho.

---

## Regras inegociáveis

### 1. Este repositório é público

Nada interno entra aqui: faturamento, preços e pacotes, metas, orçamento de mídia, números de pacientes, conversas, dados de pacientes, análise nominal de concorrentes e links dos documentos do Drive. O que for estratégico (briefing, análise de concorrentes) fica no Drive. A pasta `interno/` está no `.gitignore` para rascunhos locais, mas a sessão é temporária: o que importa precisa ir para o Drive.

### 2. Publicidade em fisioterapia

Regras de trabalho conservadoras **até a norma vigente do COFFITO e do CREFITO ser conferida por escrito** (não cite resolução ou artigo de memória como se fosse certeza):

- Nome, "Fisioterapeuta" e **CREFITO 408355-F** visíveis (rodapé e bloco Sobre).
- "Especialista" só com título reconhecido e registrado. A especialização em gerontologia está em andamento: até concluir, usar "em especialização", se ela confirmar.
- Sem preço, desconto, parcelamento, "grátis" ou condição comercial no site.
- Sem promessa ou garantia de resultado ou de cura, sem prazo garantido, sem superlativos: nada de "melhor", "único", "pioneira", "perfeito", "sem dor".
- Antes e depois, depoimentos de pacientes e imagens de pacientes (principalmente idosos e quem depende de um responsável): só com autorização escrita do paciente ou do responsável legal e depois de conferir a norma. Até lá, ficam de fora.
- Dor, queda, doenças neurológicas e pós-internação: não prometer tratamento nem diagnóstico; dizer que a avaliação médica faz parte quando necessário.
- Nunca citar nem comparar concorrentes.

### 3. Nunca inventar

Depoimento, número, título, formação, avaliação, foto, endereço, horário, plano de saúde: se não está documentado, não existe. Use um marcador visível no lugar, `[PENDENTE: o que falta]`, e registre na lista de pendências do README.

### 4. Privacidade (LGPD)

Aviso de cookies com tudo negado por padrão, política de privacidade, nenhum nome ou telefone em texto aberto no `dataLayer`, e nada que revele condição de saúde (queixa, sintoma, tratamento de interesse) enviado às plataformas de anúncio. A queixa pode ir na mensagem do WhatsApp, que é conversa direta com a profissional.

### 5. Prévia não é lançamento

Enquanto não houver aprovação final, toda página publicada leva `<meta name="robots" content="noindex, nofollow">`.

---

## Padrão técnico (resumo)

**HTML, CSS e JavaScript puros, sem framework nem build**, publicados pelo GitHub Pages. Mobile-first, testado em `320` · `375` · `390` · `430` · `768` · `1024` · `1366` · `1920` px, sem rolagem horizontal. Acessibilidade (foco visível, `prefers-reduced-motion`, textos alternativos, campos com 16 px) e performance (WebP, dimensões declaradas, `loading="lazy"`, sem *layout shift*). Todos os botões de WhatsApp com `data-wa` e `data-wa-origin`, formulário curto antes do WhatsApp, Google Tag Manager com Modo de Consentimento.

O detalhe está em [`.claude/skills/construir-site/padrao-tecnico.md`](.claude/skills/construir-site/padrao-tecnico.md).

**Referências de engenharia (leitura pelo GitHub):** `felipegaabrielDEV/lp-nayane-moreno` (o mais completo: formulário antes do WhatsApp, GTM com consentimento, eventos, política de privacidade, 404, prévia 2) e `felipegaabrielDEV/lp-nutrianna` (estética editorial, links da Tintim por origem, avaliações do Google). Reaproveite a engenharia; a identidade, os textos e as imagens são de outros clientes e não se reaproveitam.

---

## Fluxo de trabalho

| Fase | Como chamar | Entrega | Onde fica |
|---|---|---|---|
| 1. Briefing | `/briefing` | Quem é o público, o que o site diz, em que ordem e o que falta | Drive ("Briefing do site") |
| 2. Referências | `/referencias` | Concorrentes a fundo e sites-espelho, com o que adaptar | Drive (concorrentes) e `docs/referencias.md` (sites-espelho) |
| 3. Construção | `/construir-site` | O site, em camadas | Este repositório |
| 4. Prévia | `/previa` | Revisão independente, publicação com `noindex` e mensagem para a cliente | Este repositório (tag `previa-N`) |

Subagentes: **`pesquisador`** (pesquisa na web, com fonte e data) e **`revisor`** (revisão independente antes de cada prévia; só aponta, não edita).

### Entregas combinadas com a cliente

1. **Prévia 1 (~50%)**: estrutura completa, identidade visual, textos da primeira versão e marcadores de pendência.
2. **Prévia 2 (~90%)**: ajustes aplicados, formulário, rastreamento, política de privacidade e página 404.
3. **Rodada final**: no máximo uma rodada de ajustes, então lançamento.

Ajuste é mudança dentro do que já foi combinado. Página nova, seção nova ou mudança de direção é escopo novo: aponte antes de fazer.

---

## Convenções

- Commits em português, uma mudança por commit, verbo no presente: "Cria a seção de sinais", "Aplica os ajustes da prévia 1".
- Comentários do código em português, explicando o porquê e onde mexer.
- O README mantém a lista **Pendências de conteúdo** sempre atualizada.
- Datas no horário de Brasília.
