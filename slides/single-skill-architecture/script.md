# Script de apresentação — Single Skill Architecture

## Slide 1 — Como empacotar conhecimento executável
O foco aqui não é mais explicar o que é uma skill. Agora queremos entender como ela é arquitetada por dentro.

A estrutura básica que vamos aprofundar é: `SKILL.md`, `scripts/`, `references/` e `assets/`.

Cada parte tem uma responsabilidade clara dentro do package.

**Transição:** primeiro precisamos parar de enxergar esse package como uma pasta qualquer.

## Slide 2 — O package é uma mini-arquitetura
Um package de skill não deve ser um conjunto solto de markdowns e scripts.

Ele precisa ter responsabilidades claras: quem coordena o fluxo, quem executa validações, onde ficam as regras de referência e quais artefatos podem ser reutilizados.

A ideia é manter o workflow visível e mover os detalhes para os arquivos certos.

**Transição:** vamos olhar o esqueleto dessa estrutura.

## Slide 3 — Blueprint
O package pode começar simples: `SKILL.md`, uma pasta `scripts`, uma pasta `references` e uma pasta `assets`.

O ponto importante não é a quantidade de pastas. É deixar claro o papel de cada uma.

A skill precisa continuar pequena o suficiente para ser compreendida e revisada pelo time.

**Transição:** começamos pela peça que coordena tudo.

## Slide 4 — SKILL.md
O `SKILL.md` coordena a execução.

Ele responde quando a skill deve ativar, qual resultado deve entregar, qual workflow seguir, quais recursos consultar e quando deve parar ou reportar uma falha.

Ele não precisa carregar todo o conhecimento do domínio. O fluxo principal deve ficar aqui; os detalhes ficam nos anexos adequados.

**Transição:** quando algo pode ser verificado objetivamente, saímos do texto e vamos para execução.

## Slide 5 — scripts/
A pasta `scripts/` concentra operações determinísticas.

Aqui entram build, testes, lint, validação OpenAPI, parsing, coleta de evidências, comparações e outros checks que não deveriam depender apenas da interpretação do modelo.

O modelo decide quando executar. O script executa e devolve evidência objetiva.

**Transição:** nem toda decisão é executável. Algumas dependem de regras e contexto.

## Slide 6 — references/
A pasta `references/` guarda conhecimento consultável.

Ela pode conter guidelines de API, padrões de arquitetura, observabilidade, segurança, tratamento de erro ou convenções de domínio.

A diferença para scripts é direta: reference responde “como devemos pensar sobre isso?”. Script responde “execute e verifique isso”.

**Transição:** além de regras e execução, também temos artefatos que queremos reutilizar.

## Slide 7 — assets/
A pasta `assets/` guarda artefatos reutilizáveis usados durante a execução.

Pode conter templates de PR review, exemplos de output, skeletons, snippets, diagramas e outros arquivos base.

Assets não serve apenas para formatar a saída. Serve para evitar que cada execução recrie artefatos que já têm um padrão conhecido.

**Transição:** com essas partes separadas, precisamos de uma regra simples de dependência.

## Slide 8 — Keep the Workflow Visible
O fluxo principal precisa permanecer explícito no `SKILL.md`.

Ele pode chamar scripts, consultar references e usar assets, mas o leitor deve conseguir entender a sequência principal sem navegar por vários arquivos.

Se precisamos abrir cinco arquivos para descobrir o que a skill realmente faz, o package ficou opaco.

**Transição:** podemos explicar essa divisão usando uma analogia conhecida por desenvolvedores.

## Slide 9 — Analogia com arquitetura de software
Podemos pensar no `SKILL.md` como orquestração, `scripts/` como adapters executáveis, `references/` como conhecimento e políticas e `assets/` como recursos reutilizáveis.

É apenas uma analogia para facilitar a comunicação. Não precisamos reproduzir Clean Architecture dentro de cada skill.

O objetivo é simplicidade com responsabilidades claras.

**Transição:** essa separação também melhora bastante o debug.

## Slide 10 — Debug Model
Quando uma skill falha, a arquitetura ajuda a localizar o problema.

Se não ativou, olhamos o `SKILL.md` e o routing. Se tomou decisão ruim, verificamos as referências e critérios. Se um check falhou, olhamos scripts e runtime. Se a saída ficou inconsistente, verificamos assets e templates.

Arquitetura boa deixa a falha localizável.

**Transição:** disso podemos extrair alguns princípios simples.

## Slide 11 — Quatro princípios
Primeiro: manter o workflow visível.

Segundo: usar determinismo onde ele realmente ajuda.

Terceiro: carregar conhecimento sob demanda.

Quarto: reutilizar artefatos em vez de reinventar a saída em cada execução.

Esses quatro princípios são suficientes para orientar a maior parte das skills sem criar uma metodologia pesada.

**Transição:** vamos aplicar isso num caso concreto.

## Slide 12 — PR Review Java/Kotlin
PR Review é um bom exemplo porque conseguimos mapear cada responsabilidade do package.

O `SKILL.md` coordena o review. Scripts rodam testes e validações. References orientam arquitetura, API e observabilidade. Assets definem o formato final do review.

É um caso pequeno, mensurável e fácil de testar.

**Transição:** antes do fechamento, falta uma camada importante: delegação.

## Slide 13 — Fechamento da arquitetura interna
A mensagem até aqui é que, na era da IA, package bem desenhado também é arquitetura.

Não basta ter conhecimento disponível. Precisamos organizar como ele é acionado, executado, consultado e reaproveitado.

**Transição:** quando a tarefa fica maior que uma única execução, entram os subagents.

## Slide 14 — Subagents
Subagent e skill têm responsabilidades diferentes.

A skill ensina como executar uma capacidade. O subagent recebe uma parte do problema e pode usar uma ou mais skills para resolvê-la.

Num PR Review maior, por exemplo, podemos ter um subagent de arquitetura, outro de contrato e outro de observabilidade. Cada um usa skills adequadas ao seu escopo.

Subagents fazem sentido quando há especialização, paralelismo ou isolamento de contexto. Para tarefas pequenas, não precisamos adicionar essa camada.

A hierarquia útil fica assim: parent agent → subagent → skill → scripts, references e assets.

**Transição:** por fim, as fontes usadas como base para essa arquitetura.

## Slide 15 — Referências e agradecimentos
As referências principais são a documentação de Custom Skills, o paper Workflow-to-Skill e materiais sobre delegação e sistemas multiagente.

As fontes fornecem os conceitos. A organização apresentada aqui é uma adaptação arquitetural para o nosso uso com Devin Local.

Obrigado. Perguntas, críticas e sugestões são bem-vindas.
