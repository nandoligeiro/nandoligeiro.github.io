# SDD além da ferramenta — Spec Kit × AWS Kiro

**Duração:** 20–25 minutos + perguntas.  **Público:** engenheiros de software.  **Case:** fictício, sem sistemas internos.

**Tese:** SDD é uma disciplina de explicitar intenção, arquitetura e evidências. Spec Kit é o baseline conhecido; Kiro serve como comparação e fonte de práticas, não como migração presumida.

## Slide 1 — SDD não começou com o Kiro.

**Fala sugerida:** Abertura: não vamos apresentar outra ferramenta de IA como se ela reinventasse o desenvolvimento. O ponto de partida é a prática atual com Spec Kit.

**Mensagem do slide:** Já trabalhamos com Spec Kit. A pergunta agora é: o que o Kiro muda — e o que vale incorporar?

**Transição:** Conectar com o próximo tema: Do prompt à intenção verificável.

## Slide 2 — Do prompt à intenção verificável.

**Fala sugerida:** Relembrar em um minuto o conceito. Não repetir a talk anterior; aproveitar o entendimento que o grupo já possui.

**Mensagem do slide:** Especificação não é documentação morta. É o contrato de trabalho entre pessoas, agentes e implementação.

**Transição:** Conectar com o próximo tema: O fluxo que já conhecemos.

## Slide 3 — O fluxo que já conhecemos.

**Fala sugerida:** Explicar que Clarify, Checklist e Analyze são gates opcionais. Converge avalia implementação contra specs/plan/tasks e acrescenta tarefas pendentes; não altera intenção para legitimar código.

**Mensagem do slide:** Constitution governa o projeto. Feature specs guiam a mudança. Gates ajudam a não esconder ambiguidades.

**Transição:** Conectar com o próximo tema: A proposta da AWS é integrar o percurso.

## Slide 4 — A proposta da AWS é integrar o percurso.

**Fala sugerida:** Kiro não deve ser apresentado como substituto automático do Spec Kit. Ele oferece experiência integrada e práticas específicas, incluindo análise de requisitos, Steering e Hooks.

**Mensagem do slide:** Feature Specs organizam requirements → design → tasks → implementação no ambiente agêntico.

**Transição:** Conectar com o próximo tema: Processo portável vs. experiência integrada.

## Slide 5 — Processo portável vs. experiência integrada.

**Fala sugerida:** Evitar ranking. A escolha tem implicações de contexto, governança, integração, adoção e modelo operacional.

**Mensagem do slide:** Mesma ambição: reduzir o salto entre intenção e código. Diferentes pontos de extensão.

**Transição:** Conectar com o próximo tema: Constitution ≠ Steering.

## Slide 6 — Constitution ≠ Steering.

**Fala sugerida:** Recomendação: manter princípios poucos e testáveis; padrões detalhados em documentação/regras/skills. Steering também pode usar AGENTS.md. Não presumir que um substitui o outro.

**Mensagem do slide:** Não são nomes diferentes para a mesma coisa. Um declara princípios; o outro injeta contexto operacional no agente.

**Transição:** Conectar com o próximo tema: Nem toda feature começa no requisito.

## Slide 7 — Nem toda feature começa no requisito.

**Fala sugerida:** Em APIs e plataformas reguladas, pode haver contrato, escalabilidade, disponibilidade e restrições de integração preexistentes. Design-first não dispensa validação de negócio.

**Mensagem do slide:** O Kiro explicita Requirements-First e Design-First. Em sistemas de alta restrição, o desenho técnico também é um ponto de partida legítimo.

**Transição:** Conectar com o próximo tema: Uma API. Dois percursos.

## Slide 8 — Uma API. Dois percursos.

**Fala sugerida:** O case é fictício, não representa solução interna de nenhuma instituição. Cenário: reservar limite disponível; retries não podem duplicar efeito; concorrência não permite saldo negativo; expor contrato e sinais de observabilidade.

**Mensagem do slide:** Case fictício: POST /limit-reservations com idempotency-key. Mesma regra de negócio, artefatos com formatos distintos.

**Transição:** Conectar com o próximo tema: A regra precisa sobreviver ao agente.

## Slide 9 — A regra precisa sobreviver ao agente.

**Fala sugerida:** Mostrar rastreabilidade exemplar (IDs ilustrativos, não artefatos oficiais do Kiro ou Spec Kit). Isso é a ponte entre especificação e evidência.

**Mensagem do slide:** A mesma chave + o mesmo payload retorna a decisão anterior; chave igual com payload diferente gera conflito; concorrência não estoura o limite.

**Transição:** Conectar com o próximo tema: O diferencial não é gerar Markdown.

## Slide 10 — O diferencial não é gerar Markdown.

**Fala sugerida:** Kiro tem Analyze Requirements; Spec Kit tem Analyze e Converge. Nenhum deles substitui testes executados, revisão humana ou governança de produção.

**Mensagem do slide:** É descobrir inconsistências antes do patch e demonstrar correspondência depois do patch.

**Transição:** Conectar com o próximo tema: O que vale experimentar sem trocar o processo.

## Slide 11 — O que vale experimentar sem trocar o processo.

**Fala sugerida:** Propor piloto pequeno e mensurável, preservando Spec Kit como baseline. Não sugerir migração imediata nem afirmar ganhos quantitativos sem medições.

**Mensagem do slide:** A maturidade está nas práticas que sobrevivem às ferramentas.

**Transição:** Conectar com o próximo tema: Compare resultados, não promessas.

## Slide 12 — Compare resultados, não promessas.

**Fala sugerida:** Desenho de experimento: duas alterações equivalentes ou execução controlada, mesmas regras e critérios; observar os vieses de equipe e familiaridade.

**Mensagem do slide:** Uma mudança equivalente. Dois fluxos. Critérios iguais de qualidade e rastreabilidade.

**Transição:** Conectar com o próximo tema: SDD é a disciplina. Ferramentas são implementações.

## Slide 13 — SDD é a disciplina. Ferramentas são implementações.

**Fala sugerida:** Fechamento: qual prática do Kiro complementaria o Spec Kit que já usamos? Convide a equipe a experimentar e medir.

**Mensagem do slide:** O objetivo não é fazer o agente escrever mais código. É reduzir a distância entre intenção, decisão e evidência.

**Transição:** Conectar com o próximo tema: Documentação para aprofundar.

## Slide 14 — Documentação para aprofundar.

**Fala sugerida:** Indicar a talk anterior e as fontes oficiais. Confirmar versões antes de reapresentar o conteúdo, pois produtos evoluem.

**Mensagem do slide:** Conteúdo público, case fictício, sem referências a sistemas internos.

**Transição:** Abrir perguntas sobre práticas que podem ser testadas.

## Perguntas difíceis

**O Kiro substitui o Spec Kit?** Não necessariamente. Um organiza um processo portável; outro oferece um ambiente integrado. Podem coexistir e Spec Kit possui diferentes integrações.

**Steering é Constitution?** Não: Steering fornece contexto persistente ao agente; Constitution declara princípios que governam a execução.

**Converge garante correção?** Não. É uma avaliação dos artefatos e pode acrescentar tarefas pendentes. Testes, revisão e evidências executadas continuam necessários.

**Quando usar Design-First?** Quando restrições técnicas conhecidas, arquitetura existente ou NFRs rigorosos condicionam o espaço de soluções. Ainda é necessário validar intenção de negócio.

**Como medir?** Mesmo escopo e critérios de qualidade; comparar lacunas, defeitos, retrabalho, tempo total e revisão humana. Resultados não são presumidos.

## Fontes oficiais (verificadas em 06/11/2026)

- https://github.github.io/spec-kit/quickstart.html
- https://github.github.io/spec-kit/reference/agentic-sdd.html
- https://github.github.io/spec-kit/how-to/spec-persistence.html
- https://kiro.dev/docs/specs/feature-specs/
- https://kiro.dev/docs/specs/feature-specs/requirements-first/
- https://kiro.dev/docs/steering/
- https://kiro.dev/docs/hooks/management/
- https://kiro.dev/docs/specs/analyze-requirements/

Talk anterior: https://nandoligeiro.github.io/slides/spec-driven-java-api/
