# Spec Kit: Discovery & Delivery

Talk de 20–25 minutos · novembro de 2026

## Slide 1 — Spec Kit: antes da primeira linha de código

**Mensagem:** Atualização de novembro de 2026 · v1.4.0

**Fala:** Abra perguntando: quantas vezes começamos a especificar uma solução antes de entender se o problema merece investimento? A extensão assess formaliza essa investigação.

## Slide 2 — O problema não é gerar código lento.

**Mensagem:** Discovery reduz incerteza; Delivery reduz risco de execução.

**Fala:** SDD organiza a entrega, mas não valida sozinho a necessidade de negócio. Discovery testa a premissa antes de comprometer recursos.

## Slide 3 — O que mudou no Spec Kit?

**Mensagem:** Discovery precede novembro; a evolução recente amplia a composição.

**Fala:** Diferencie datas: o assess já existia em julho. Em 10 de novembro a versão 1.4.0 adicionou filtros customizados e mapeamento de reasoning/contexto para integrações.

## Slide 4 — Do problema à entrega

**Mensagem:** Fluxo ilustrativo: etapas podem ser opcionais ou iterativas.

**Fala:** O upstream avalia a ideia; o downstream especifica e constrói. Clarify e Analyze são verificações úteis, não uma sequência obrigatória universal. A constituição fornece princípios transversais.

## Slide 5 — Intake + Research

**Mensagem:** Evidência antes de convicção.

**Fala:** Exemplo fictício: criar uma API de consulta de faturas. Antes de escolher tecnologia, investigar chamados, tempo de resposta e fontes de dados. Não inventar métricas.

## Slide 6 — Define + Shape

**Mensagem:** Definir é escolher o problema; modelar é explorar caminhos.

**Fala:** No caso fictício, comparar otimizar a consulta atual com criar uma API dedicada. Definir métricas de latência e erros a partir de baseline real. Define pode começar diretamente da demanda.

## Slide 7 — Decide: o gate de investimento

**Mensagem:** decision.md · A IA recomenda; a organização responde pela decisão.

**Fala:** Não confundir parecer do comando com autorização organizacional. O bundle assess adiciona um gate de revisão. Um kill fundamentado também gera valor.

## Slide 8 — Como começar na prática

**Mensagem:** Sintaxe ilustrada para Copilot em modo skills; outros agentes variam.

**Fala:** A extensão roda dentro de projeto inicializado, mesmo sem código. Artefatos ficam em .specify/assessments/&lt;slug&gt;/. Consulte o quickstart para passar o slug e realizar cada etapa.

## Slide 9 — Case fictício: API de faturas

**Mensagem:** Sem dados suficientes: needs-clarification.

**Fala:** Não afirmar que latência é a causa sem dados. Se confirmada a hipótese e aprovada uma alternativa, produzir especificação funcional e só então planejar Java/Spring ou outra stack apropriada.

## Slide 10 — De assess para SDD

**Mensagem:** Handoff preserva intenção e critérios; não elimina revisão humana.

**Fala:** O comando decide não implementa. O handoff fornece insumos para Specify. Evals aqui é uma prática recomendada de engenharia, não um comando oficial do núcleo.

## Slide 11 — Novembro: workflows mais componíveis

**Mensagem:** v1.4.0 · 10/11/2026; bundles são uma capacidade já existente.

**Fala:** O avanço não é só um comando novo: o ecossistema fica mais componível. MCP de inspeção e bundles têm histórico anterior; não atribua toda a evolução ao release de novembro.

## Slide 12 — Spec Kit × SpecJam

**Mensagem:** Comparação conceitual, não auditoria de implementação.

**Fala:** Discovery deixa de ser diferencial isolado. A tese do SpecJam é um meta-harness que preserva evidências e aprendizado entre sessões. Interoperabilidade pode ser melhor que duplicar comandos.

## Slide 13 — Acelerar a execução não basta.

**Mensagem:** Ligeiro Mindware · Fernando Costa

**Fala:** Feche com a distinção: velocidade de implementação e qualidade da decisão são capacidades diferentes. O valor está em conectar as duas.

## Fontes oficiais

- https://github.github.com/spec-kit/guides/assessment.html
- https://github.github.com/spec-kit/reference/agentic-assessment.html
- https://github.com/github/spec-kit/releases/tag/v1.4.0
- https://github.com/github/spec-kit/blob/main/bundles/assess/README.md
- https://github.com/github/spec-kit/blob/main/newsletters/2026-July.md
- https://github.com/github/spec-kit/blob/main/docs/overview/history.md
