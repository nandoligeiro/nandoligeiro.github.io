# SpecJam × AWS AI-DLC

**Duração:** 30–35 min + perguntas. **Audiência:** engenharia de software / arquitetura. **Base:** SpecJam README v0.5.0 e documentação oficial AWS AI-DLC consultados em 14/11/2026.

**Tese:** AI-DLC organiza o ciclo colaborativo. SpecJam oferece mecanismos próprios de orquestração auditável, memória governada, diagnóstico e replay. A integração entre os dois é uma hipótese de arquitetura, não capacidade já entregue.

## Slide 01 — AI-DLC × SpecJam

**Mensagem:** Uma metodologia para o ciclo. Um meta-harness para execução governada.

**Fala sugerida:** Abrir contextualizando: não estamos comparando duas IDEs ou dois geradores de código. AWS AI-DLC é metodologia e implementações de workflow; SpecJam é projeto de engenharia que coordena fluxos, sessões, memória e avaliação.

**Transição:** Próximo: O problema mudou de lugar.

## Slide 02 — O problema mudou de lugar.

**Mensagem:** Quando gerar código fica barato, coordenar intenção, decisões e evidências torna-se o gargalo.

**Fala sugerida:** A produtividade local de um agente pode aumentar sem melhorar a entrega. Contexto inconsistente, decisões invisíveis e falhas repetidas viram custo sistêmico.

**Transição:** Próximo: O que é AWS AI-DLC?

## Slide 03 — O que é AWS AI-DLC?

**Mensagem:** AI-Driven Development Life Cycle: IA propõe e executa; pessoas validam decisões críticas.

**Fala sugerida:** Mostrar os três momentos oficiais e a troca contínua: a IA planeja, pergunta e só executa etapas aprovadas. Não confundir AI-DLC com um produto único.

**Transição:** Próximo: A nova unidade de trabalho.

## Slide 04 — A nova unidade de trabalho.

**Mensagem:** Units of Work substituem Epics na terminologia; Bolts encurtam os ciclos de entrega.

**Fala sugerida:** Explicar a intenção da nomenclatura. Bolts não garantem performance: a qualidade do recorte e dos gates determina se o ciclo curto funciona.

**Transição:** Próximo: O loop humano + IA

## Slide 05 — O loop humano + IA

**Mensagem:** Plan → Clarify → Approve → Execute → Validate → Learn.

**Fala sugerida:** Em cada etapa, a IA identifica lacunas e propõe ações; a equipe mantém decisões de produto, domínio, segurança e arquitetura. Learning no último passo é extensão conceitual para conectar ao SpecJam, não nome obrigatório de estágio AI-DLC.

**Transição:** Próximo: O que é SpecJam hoje?

## Slide 06 — O que é SpecJam hoje?

**Mensagem:** Meta-harness instalável, neutro em relação ao agente, para fluxos duráveis e auditáveis.

**Fala sugerida:** Baseado no README do repositório SpecJam na versão 0.5.0. Separar o que existe do que ainda seria feito para conectar a um processo AI-DLC.

**Transição:** Próximo: Duas arquiteturas, níveis diferentes.

## Slide 07 — Duas arquiteturas, níveis diferentes.

**Mensagem:** AI-DLC define o método de colaboração. SpecJam implementa mecanismos de execução e aprendizado.

**Fala sugerida:** Não é um duelo para escolher um vencedor. A metodologia pode operar com muitos harnesses; o SpecJam poderia aplicar seus controles a atividades inspiradas no AI-DLC.

**Transição:** Próximo: Mapa de correspondência

## Slide 08 — Mapa de correspondência

**Mensagem:** A semelhança de objetivos não significa equivalência de workflows.

**Fala sugerida:** Assinalar a assimetria essencial: Discovery não é toda a Inception; Delivery não equivale a todos os estágios Construction; Postmortem não substitui Operations com deploy e operação contínua.

**Transição:** Próximo: SpecJam: fluxo de verdade

## Slide 09 — SpecJam: fluxo de verdade

**Mensagem:** Grafos declarativos, gates de artefatos e roteamento determinístico.

**Fala sugerida:** A função de roteamento é pura: não escreve arquivos nem chama LLM. Persistência no trail adapter. Isso ajuda a testar política sem simular rede ou agentes.

**Transição:** Próximo: Sessões são parte da arquitetura.

## Slide 10 — Sessões são parte da arquitetura.

**Mensagem:** Cada incremento pode receber implementação isolada, reviewers independentes e síntese controlada.

**Fala sugerida:** Mostrar estratégia new_per_increment e exemplos de reuse, isolated, parallel, exclusive. Não chamar isso de modelo oficial do AI-DLC.

**Transição:** Próximo: Contexto certo. Na hora certa.

## Slide 11 — Contexto certo. Na hora certa.

**Mensagem:** Recuperação híbrida, rastreável e proporcional ao trabalho.

**Fala sugerida:** SpecJam usa SQLite FTS5 e sqlite-vec quando instalado, com cosseno exato como fallback. Memórias vêm com proveniência. Reviewer não recebe o mesmo recall automaticamente.

**Transição:** Próximo: Memória não é verdade automática.

## Slide 12 — Memória não é verdade automática.

**Mensagem:** Experiência → avaliação → reflexão candidata → promoção → memória.

**Fala sugerida:** A memória semântica recebe critérios mais rigorosos. Uma resposta plausível não vira uma regra. Falar de proteção contra contaminação de contexto e de estado rebuildable do banco.

**Transição:** Próximo: Diagnóstico, replay, benchmark.

## Slide 13 — Diagnóstico, replay, benchmark.

**Mensagem:** Quando falha, queremos explicar o que falhou — e comparar alternativas.

**Fala sugerida:** Destacar que diagnósticos são hipóteses, não causas confirmadas. Comparação usa linhagem replay_of, útil para avaliar harnesses e regressões.

**Transição:** Próximo: O papel das Skills

## Slide 14 — O papel das Skills

**Mensagem:** Capacidades versionadas e resolvidas com proveniência: não prompts invisíveis.

**Fala sugerida:** SpecJam seleciona skills conforme metadados, com limite configurado no fluxo Delivery. O material carregado participa do contexto rastreável e replay.

**Transição:** Próximo: E se uníssemos as abordagens?

## Slide 15 — E se uníssemos as abordagens?

**Mensagem:** AI-DLC como modelo operacional; SpecJam como camada de execução governada.

**Fala sugerida:** Este slide é uma proposta. Não existe garantia de adapter AI-DLC nativo no SpecJam v0.5.0. O desenho exigiria mapeamento de estágios, artefatos e aprovação humana.

**Transição:** Próximo: Case: reserva de limite

## Slide 16 — Case: reserva de limite

**Mensagem:** Exemplo fictício para ligar intenção, unidade, execução e evidência.

**Fala sugerida:** Propor endpoint POST /limit-reservations. Inception: clarificar idempotência e concorrência. Construction: contrato, política transacional e testes. Operations: métricas e rollback. SpecJam: sessões, memória de decisões e avaliações.

**Transição:** Próximo: Um Bolt, três responsabilidades.

## Slide 17 — Um Bolt, três responsabilidades.

**Mensagem:** O agente implementa; o humano decide; o sistema de avaliação exige provas.

**Fala sugerida:** A mesma feature precisa do mesmo critério de aceite independente de qual agente executa. Revisar mudanças e não deixar uma autoavaliação do agente ser a única prova.

**Transição:** Próximo: O que falta construir?

## Slide 18 — O que falta construir?

**Mensagem:** Onde a composição exigiria engenharia real, não só um diagrama bonito.

**Fala sugerida:** Ser explícito sobre lacunas. O SpecJam tem Postmortem mas isso não cobre Ops end-to-end. Integração com tracker, CI/CD e AWS precisa ser especificada e testada.

**Transição:** Próximo: Hipóteses a testar

## Slide 19 — Hipóteses a testar

**Mensagem:** Menos drift. Mais evidência. Menos repetição de falhas. Sem inventar porcentagens.

**Fala sugerida:** Piloto com problema equivalente, escopo controlado e métricas pré-definidas. Não assumir que mais processo melhora o resultado em mudanças triviais.

**Transição:** Próximo: Não é competir. É compor.

## Slide 20 — Não é competir. É compor.

**Mensagem:** O ciclo explica o que deve acontecer. O harness controla como, com quais evidências, e o que aprende.

**Fala sugerida:** Fechar com provocação: qual aprendizado de uma falha de hoje chega, com prova e proveniência, ao próximo Bolt? A proposta é fechar esse ciclo.

**Transição:** Próximo: Fontes e próximos passos

## Slide 21 — Fontes e próximos passos

**Mensagem:** Base oficial da AWS e estado público do SpecJam (README v0.5.0).

**Fala sugerida:** Referenciar a metodologia original AWS, docs de workflows, repositório SpecJam e material existente da talk Kiro.

**Transição:** Abrir discussão técnica.

## Demonstração prática sugerida

1. Solicitação fictícia: criar API Java 21 + Spring Boot para reserva de limite.
2. AI-DLC Inception: mob elaboration, critérios de aceite, Unit of Work e aprovação.
3. AI-DLC Construction: design e testes orientados por riscos, trabalho dividido em Bolt.
4. SpecJam Discovery: capturar incertezas; Delivery: SPEC → DESIGN? → BUILD → VALIDATE; revisão isolada.
5. Inspecionar trail de execução, contexto recuperado e fontes; simular falha e diagnóstico.
6. Após avaliação aceita, examinar candidato a reflexão e promoção governada. Não presumir integração automática com AI-DLC.

## Cuidados na conversa

- Metodologia AI-DLC e SpecJam são abstrações de níveis diferentes.
- Operations no AI-DLC não equivale a Postmortem no SpecJam; ainda faltam integração de deploy e ciclo operacional.
- Bolts e Units of Work são termos AI-DLC. Não são recursos nativos de SpecJam.
- Replay e memory promotion são capacidades documentadas no SpecJam; não são garantias de ganho de produtividade.
- O case financeiro é 100% fictício.

## Referências
- [AWS — AI-DLC original](https://aws.amazon.com/blogs/devops/ai-driven-development-life-cycle/)
- [AWS — Adoção e Bolts](https://aws.amazon.com/isv/resources/adopt-ai-in-software-development-practices-with-aws/)
- [AWS — AI-DLC Workflows](https://awslabs.github.io/aidlc-workflows/guide/00-introduction/)
- [AWS — Amazon Q + AI-DLC](https://aws.amazon.com/blogs/devops/building-with-ai-dlc-using-amazon-q-developer/)
- [SpecJam — README](https://github.com/nandoligeiro/SpecJam)
- [SpecJam — Architecture](https://github.com/nandoligeiro/SpecJam/blob/main/README.md)
