# Engenharia além do código

Duração sugerida: 20–25 minutos, incluindo interação. Público: engenheiros e arquitetos.

Fonte de inspiração: [Elemar Jr. — vídeo](https://youtu.be/vQ838t80VNY). Adaptação editorial a partir do resumo fornecido; não é transcrição verificada.

## Slide 1 — Engenharia além do código

**Fala sugerida (2 minutos):**

Abra perguntando: se um agente escreveu todo o código, quem responde quando o sistema falha? Nosso trabalho é entregar valor sustentável. A automação muda o modo de executar, não a obrigação de responder pelas consequências.

**Transição:** Vamos conectar essa ideia ao próximo tema: Código nunca foi o objetivo.

## Slide 2 — Código nunca foi o objetivo

**Fala sugerida (2 minutos):**

Compare duas entregas: uma com milhares de linhas e outra com uma mudança pequena que elimina retrabalho. Qual criou mais valor? Antes de medir volume de código, precisamos entender o problema e o resultado esperado.

**Transição:** Vamos conectar essa ideia ao próximo tema: O modelo 10–80–10.

## Slide 3 — O modelo 10–80–10

**Fala sugerida (2 minutos):**

Apresente os percentuais como uma heurística, não uma medição. Humanos definem objetivos e limites; agentes executam tarefas; humanos verificam resultados. Em alto risco, a supervisão pode ocorrer em todas as etapas.

**Transição:** Vamos conectar essa ideia ao próximo tema: A escala destrói sonhos.

## Slide 4 — A escala destrói sonhos

**Fala sugerida (2 minutos):**

Use a detecção de URLs como exemplo conceitual. Uma consulta remota depende de rede; uma lista local cresce; um Bloom filter permite verificar pertencimento aproximado, com falsos positivos que exigem confirmação. Não atribua números ou arquitetura atual ao Chrome sem verificar. O repertório permite questionar as alternativas.

**Transição:** Vamos conectar essa ideia ao próximo tema: A fábrica de código legado.

## Slide 5 — A fábrica de código legado

**Fala sugerida (2 minutos):**

Imagine um incidente em uma aplicação produzida por agentes. O time consegue explicar o fluxo, localizar a falha e corrigir com segurança? Se não, a velocidade inicial esconde um custo futuro. A entrega inclui conhecimento compartilhado e capacidade de manutenção.

**Transição:** Vamos conectar essa ideia ao próximo tema: As novas dívidas.

## Slide 6 — As novas dívidas

**Fala sugerida (2 minutos):**

Dívida técnica inclui escolhas de arquitetura e manutenção, não apenas formatação. Dívida cognitiva é a lacuna de compreensão; dívida de intenção é a perda das razões e trade-offs. Documente decisões, revise invariantes e peça ao time que explique o comportamento antes de aprovar.

**Transição:** Vamos conectar essa ideia ao próximo tema: Governar sem impedir.

## Slide 7 — Governar sem impedir

**Fala sugerida (2 minutos):**

Áreas de negócio podem criar soluções para demandas reprimidas. Proibir não resolve a necessidade. Ofereça caminhos seguros, acesso mínimo, revisão proporcional ao risco e verificações automáticas de segredos e dependências. Explique como escalar uma solução quando ela se torna crítica.

**Transição:** Vamos conectar essa ideia ao próximo tema: O arquiteto como curador.

## Slide 8 — O arquiteto como curador

**Fala sugerida (2 minutos):**

O arquiteto não precisa aprovar cada linha. Precisa tornar a intenção explícita, definir limites e criar mecanismos para verificar resultados. Specs, ADRs, testes e observabilidade ajudam agentes e humanos a trabalhar sobre a mesma realidade.

**Transição:** Vamos conectar essa ideia ao próximo tema: O próximo nível de abstração.

## Slide 9 — O próximo nível de abstração

**Fala sugerida (2 minutos):**

Compiladores e garbage collectors reduziram tarefas manuais, mas não eliminaram a necessidade de entender desempenho e falhas. Agentes elevam a abstração novamente. Formar iniciantes exige prática de diagnóstico, fundamentos e validação, não apenas habilidade de pedir código.

**Transição:** Vamos conectar essa ideia ao próximo tema: Responsabilidade intransferível.

## Slide 10 — Responsabilidade intransferível

**Fala sugerida (2 minutos):**

Feche retomando a pergunta inicial. A IA pode apoiar decisões, mas a responsabilidade ética e organizacional precisa permanecer identificável. Proponha três perguntas antes de aprovar uma entrega: sabemos o que resolve, sabemos como funciona e temos evidências de que atende aos critérios? Abra para perguntas.

**Transição:** Convide o público a compartilhar um exemplo real de delegação e validação.
