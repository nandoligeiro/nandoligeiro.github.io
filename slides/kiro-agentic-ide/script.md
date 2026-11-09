# Kiro — SDD & Agentic IDE

Duração: 30–35 minutos. Case demonstrativo, sem sistemas internos. Os benefícios representam hipóteses de valor, não métricas comprovadas.

## Slide 1 — Kiro: a IDE orientada por especificações

**Mensagem:** Do problema ao software verificável: SDD, agentes e engenharia.

**Fala sugerida:** Abertura: Kiro não é somente autocomplete; é uma experiência integrada.

**Transição:** De geração de código a engenharia

## Slide 2 — De geração de código a engenharia

**Mensagem:** Código veloz sem intenção clara pode acelerar também o retrabalho.

**Fala sugerida:** Apresentar lacunas entre pedido, desenho, execução e evidência.

**Transição:** Uma IDE agêntica

## Slide 3 — Uma IDE agêntica

**Mensagem:** Base VS Code + chat contextual + Specs + ferramentas integradas.

**Fala sugerida:** Editor familiar, Open VSX, source control e recursos de agente.

**Transição:** Três formas de trabalhar

## Slide 4 — Três formas de trabalhar

**Mensagem:** Chat para explorar, Quick Spec para simplificar, Full Spec para controlar.

**Fala sugerida:** Proporcionalidade: nem toda tarefa exige um processo completo.

**Transição:** O ciclo SDD do Kiro

## Slide 5 — O ciclo SDD do Kiro

**Mensagem:** Requirements → Design → Tasks → Implementation → Verification.

**Fala sugerida:** Artefatos duráveis e gates de revisão; a validação operacional é da engenharia.

**Transição:** Requirements: intenção verificável

## Slide 6 — Requirements: intenção verificável

**Mensagem:** EARS reduz ambiguidades com condições e respostas observáveis.

**Fala sugerida:** WHEN evento; THE SYSTEM SHALL comportamento. Revisar casos-limite.

**Transição:** Design: decisões explícitas

## Slide 7 — Design: decisões explícitas

**Mensagem:** Componentes, interfaces, fluxos, NFRs e trade-offs em design.md.

**Fala sugerida:** A IA propõe arquitetura; o engenheiro assume as decisões.

**Transição:** Tasks: execução governada

## Slide 8 — Tasks: execução governada

**Mensagem:** Decompor o design em tarefas acompanháveis e eventualmente paralelas.

**Fala sugerida:** Execução em sequência ou paralelo conforme dependências; revisar cada entrega.

**Transição:** Requirements-First × Design-First

## Slide 9 — Requirements-First × Design-First

**Mensagem:** Começar no comportamento ou em restrições arquiteturais preexistentes.

**Fala sugerida:** Arquiteturas reguladas podem começar do design, mas validar intenção do negócio.

**Transição:** Steering: memória do projeto

## Slide 10 — Steering: memória do projeto

**Mensagem:** Padrões de código e arquitetura disponíveis entre sessões.

**Fala sugerida:** Arquivos .kiro/steering e AGENTS.md; regras específicas e contexto relevante.

**Transição:** Hooks: automação contextual

## Slide 11 — Hooks: automação contextual

**Mensagem:** Eventos podem disparar rotinas de testes, documentação e revisão.

**Fala sugerida:** Hooks automatizam ações, mas devem respeitar permissões e inspeção de diffs.

**Transição:** MCP, Powers, Skills e agentes

## Slide 12 — MCP, Powers, Skills e agentes

**Mensagem:** Ferramentas externas, conhecimento sob demanda e responsabilidades especializadas.

**Fala sugerida:** Powers empacotam ferramentas e contexto; MCP integra; Skills ensinam; subagentes delegam.

**Transição:** Recursos da IDE

## Slide 13 — Recursos da IDE

**Mensagem:** Inline diffs, diagnostics, checkpoints, rewind e agent focus mode.

**Fala sugerida:** O dev acompanha ações, inspeciona erros e controla alterações.

**Transição:** Verificação além do happy path

## Slide 14 — Verificação além do happy path

**Mensagem:** Analyze Requirements e property-based testing expandem a cobertura.

**Fala sugerida:** Teste por propriedades não é prova formal; execute também testes e CI.

**Transição:** Case Java + Spring Boot

## Slide 15 — Case Java + Spring Boot

**Mensagem:** Reserva fictícia de limite com idempotência, concorrência e contrato.

**Fala sugerida:** Endpoint POST /limit-reservations, integridade transacional e testes.

**Transição:** Da regra à evidência

## Slide 16 — Da regra à evidência

**Mensagem:** Requirement → Design → Task → Integration Test.

**Fala sugerida:** Exemplo: retry idempotente não pode criar segunda reserva.

**Transição:** Bugfix Specs

## Slide 17 — Bugfix Specs

**Mensagem:** Diagnóstico, correção direcionada e regressão como fluxo estruturado.

**Fala sugerida:** Bugfix Specs não são a mesma coisa que Feature Specs; usar quando o problema é defeito.

**Transição:** Autonomia com limites

## Slide 18 — Autonomia com limites

**Mensagem:** Permissões, kiroignore, segredos, checkpoints e revisão humana.

**Fala sugerida:** Agente executa ferramentas; segurança e governança não podem depender só do prompt.

**Transição:** Benefícios a avaliar

## Slide 19 — Benefícios a avaliar

**Mensagem:** Consistência, rastreabilidade, automação e onboarding.

**Fala sugerida:** Benefícios potenciais, não prometer ROI sem piloto e métricas.

**Transição:** Piloto de adoção

## Slide 20 — Piloto de adoção

**Mensagem:** Um caso pequeno, métricas iguais e critérios verificáveis.

**Fala sugerida:** Medir retrabalho, tempo total, defeitos e qualidade de revisão.

**Transição:** A ideia que fica

## Slide 21 — A ideia que fica

**Mensagem:** A IDE acelera execução. A especificação protege intenção.

**Fala sugerida:** Fechar: como provamos que o agente construiu o que realmente queríamos?

**Transição:** Perguntas e discussão

## Demo opcional

Abrir projeto Spring Boot, criar Feature Spec, revisar EARS, design e tasks, executar uma tarefa, revisar diff e rodar testes. Reforçar revisão humana e CI.

## Perguntas e cuidados

- Nem toda tarefa precisa de Full Spec; escolha conforme risco.
- Testes por propriedades não equivalem a prova formal.
- Agentes paralelos podem gerar conflitos e custo de revisão.
- Conferir políticas de dados, permissões, segredos, custos e disponibilidade por superfície.

## Fontes
- Kiro IDE: https://kiro.dev/docs/ide/
- Kiro Specs: https://kiro.dev/docs/specs/
- Feature Specs: https://kiro.dev/docs/specs/feature-specs/
- Steering: https://kiro.dev/docs/steering/
- How Kiro Works: https://kiro.dev/docs/how-kiro-works/
- Powers: https://kiro.dev/powers/
- Your First Project: https://kiro.dev/docs/getting-started/first-project/