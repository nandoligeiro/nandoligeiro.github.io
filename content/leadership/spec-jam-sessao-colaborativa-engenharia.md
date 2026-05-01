---
title: "SPEC JAM: minha vivência como Tech Lead na era da IA"
slug: "spec-jam-lideranca-tecnica"
date: "2026-05-01"
type: "article"
tags: ["liderança técnica", "tech lead", "engenharia", "ia", "processos", "spec jam"]
excerpt: "Um relato prático de como passamos a usar SPEC JAM para alinhar contexto, hipótese, métricas e direção antes do código, reduzindo retrabalho no time."
cover: "/tech-notes/specjam.png"
coverAlt: "Infográfico do fluxo SPEC JAM com etapas, princípios e perguntas guia."
published: true
---

> Engenharia começa antes do código.

Pequeno disclaimer antes do post 😄

Esse é um dos meus primeiros conteúdos me expondo mais por aqui.

A ideia surgiu depois de algumas conversas e incentivos do meu gestor para compartilhar mais sobre engenharia, liderança e como estamos pensando o desenvolvimento de software nessa nova era da IA.

E sim... usei IA nesse processo também.
Inclusive a "LIA" 😄

Mas talvez essa seja justamente a parte mais interessante:

Hoje não criamos mais sozinhos.

A gente pensa junto.
Refina junto.
Questiona junto.
Constrói junto.

No fim, percebi que IA não substituiu a engenharia.

Ela mudou a forma como colaboramos.

Então resolvi começar a compartilhar um pouco dessa jornada e das ideias que estamos experimentando no time.

## O que é SPEC JAM?

Nos últimos meses, como Tech Lead, comecei a perceber uma mudança importante na engenharia de software.

O problema já não é mais só "conseguir construir".

Com IA, copilots e geração automática de código, implementar ficou muito mais rápido.

Mas isso trouxe outra dificuldade:

👉 estamos alinhando o problema certo antes de começar?

Foi aí que começamos a testar um novo flow no time: o SPEC JAM.

SPEC JAM é uma sessão colaborativa e leve de engenharia focada em:

- entender contexto
- alinhar hipóteses
- reduzir ambiguidade
- criar direção antes da implementação
- validar impacto, não apenas entrega

Não é um framework ágil pesado.
É uma sessão curta para gerar clareza, entendimento compartilhado e confiança de execução.

## Por que isso passou a importar mais agora

Muitas vezes o fluxo acaba virando:

**Jira → pega issue → código → PR → próxima.**

E no meio aparecem:

- dúvidas
- retrabalho
- mudanças de direção
- discussões arquiteturais tardias

Não porque o time é ruim.

Mas porque clareza virou o novo gargalo.

Com assistentes de IA, o custo de implementar caiu.
O valor de entender bem o problema subiu.

Talvez esse seja um dos maiores shifts da era da IA:

👉 código ficou mais barato
👉 entendimento ficou mais valioso

## Princípios centrais

### 1) Problema antes da solução

Antes de falar de framework, biblioteca ou arquitetura, precisamos alinhar:

- contexto
- dor
- impacto
- hipótese

### 2) Clareza antes do código

Clareza reduz:

- retrabalho
- confusão técnica
- desvio arquitetural
- implementação desnecessária

### 3) Colaboração antes de isolamento

As melhores decisões de engenharia surgem de entendimento compartilhado.

### 4) Impacto antes de output

Entregar tarefa não é o objetivo final.
O objetivo é resultado mensurável.

## Como esse flow entra na prática

A ideia era simples:

Antes do código, o time precisa responder:

- Qual problema estamos resolvendo?
- O que acreditamos que melhora isso?
- Como vamos medir impacto?
- O que pode dar errado?

O flow ficou algo próximo disso:

```text
Idea -> Review -> Epic -> SPEC JAM -> READY -> In Progress -> Review -> Done -> Validation
```

O mais interessante é que isso mudou bastante a dinâmica das conversas.

Menos:

- "qual framework usar?"
- "qual classe criar?"

Mais:

- "isso resolve o problema?"
- "como validamos sucesso?"
- "qual hipótese estamos testando?"

## Como funciona a sessão

A sessão de SPEC JAM acontece depois que a Epic já foi priorizada.

- Duração: 20 a 40 minutos
- Participantes: Tech Lead, engenheiros envolvidos e stakeholders quando necessário

O objetivo é transformar problema em direção executável.

A sessão deve produzir:

- clareza
- entendimento compartilhado
- hipótese
- métricas de sucesso
- direção técnica inicial

Uma estrutura simples que ajuda bastante é essa:

```md
# SPEC

## Intenção
Que problema estamos resolvendo?

## Contexto
O que acontece hoje?

## Hipótese
O que acreditamos que pode melhorar e por quê?

## Métricas
Como vamos medir sucesso?

## Riscos
O que pode dar errado?
```

## O que SPEC JAM não é

Uma das coisas que mais gostei é que o SPEC JAM não tenta ser mais um framework pesado.

Não é:

- planning infinito
- documentação excessiva
- arquitetura perfeita antes do tempo
- grooming de backlog
- debate profundo de implementação

É uma sessão curta e colaborativa para gerar clareza.

## READY de verdade

Uma issue está READY quando:

- o problema está claro
- existe hipótese
- as métricas estão definidas
- os riscos estão visíveis
- a implementação pode começar com confiança

Em termos práticos:

> outra pessoa engenheira consegue executar com autonomia.

## Depois da sessão

### In Progress

Começa a implementação com foco em execução e instrumentação.

### Review

Validar:

- qualidade técnica
- aderência à SPEC
- instrumentação de métricas
- visibilidade operacional

### Done

Done significa:

- deploy realizado
- operação ativa
- observabilidade disponível
- mensuração possível

Done não significa, automaticamente, sucesso.

### Validation

Depois do deploy, a pergunta volta a ser sobre impacto:

- a métrica melhorou?
- o comportamento mudou?
- a dor reduziu?
- ainda vale investir?

## Fechamento

No fim, percebi que engenharia moderna está cada vez menos ligada apenas à implementação...

...e cada vez mais ligada a:

- contexto
- decisão
- colaboração
- impacto

Porque código é implementação.

**Engenharia é direção.**

Na engenharia moderna, velocidade de implementação é só parte da equação.

A vantagem real está em:

- entender mais rápido
- alinhar melhor
- decidir com mais qualidade
- validar impacto continuamente

SPEC JAM existe para sustentar essa evolução.

#SoftwareEngineering #TechLead #Architecture #AI #Engineering #Leadership #SPECJAM
