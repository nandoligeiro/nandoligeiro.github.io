# Script de apresentação — Modern Agent Skills

## Slide 1 — Modern Agent Skills para desenvolvedores
A ideia desta apresentação é mostrar como trabalhar com skills de uma forma mais próxima de engenharia de software. Não estamos falando só de prompt. Estamos falando de criar capacidades que possam ser acionadas no momento certo, executar um fluxo conhecido, consultar contexto quando necessário e validar o resultado.

O ponto principal é adaptar esses conceitos ao Devin Local e ao nosso dia a dia de desenvolvimento.

**Transição:** existem dois caminhos principais para chegar a uma skill útil.

## Slide 2 — Creation vs Reconstruction
O primeiro caminho é criação. O time já conhece bem um procedimento e decide torná-lo explícito como skill.

O segundo é reconstrução. O conhecimento já existe, mas está espalhado em conversas, PRs, comandos, logs e execuções anteriores. Nesse cenário, usamos essas evidências para reconstruir o procedimento.

Criação organiza um workflow conhecido. Reconstrução recupera conhecimento operacional que estava implícito.

**Transição:** independentemente do caminho, precisamos controlar quanto contexto o agente carrega.

## Slide 3 — Progressive Disclosure
A ideia é simples: o agente não precisa carregar tudo de uma vez.

Primeiro ele precisa de informação suficiente para descobrir se uma skill é relevante. Depois carrega o `SKILL.md`. Scripts, referências e assets entram somente quando o fluxo exige.

Isso reduz contexto inútil e deixa a execução mais previsível.

**Transição:** além de controlar contexto, precisamos decompor a execução de forma clara.

## Slide 4 — Decomposition
Antes de empacotar uma skill, ajuda separar quatro perguntas.

Routing: quando ativar?
Workflow: quais passos seguir?
Semantics: quais regras orientam as decisões?
Attachments: quais scripts, referências e assets serão usados?

Essa decomposição não precisa virar uma metodologia pesada. O valor está em deixar a skill explicável e corrigível.

**Transição:** essa separação fica ainda mais útil quando algo falha.

## Slide 5 — Skill Debugging
Se a skill não ativou, começamos pelo routing. Se ativou e pulou uma etapa, olhamos o workflow. Se seguiu o fluxo, mas tomou uma decisão ruim, investigamos regras e referências. Se quebrou ao validar, olhamos scripts, paths, permissões ou dependências do runtime.

O ganho é localizar a falha, em vez de reescrever a skill inteira.

**Transição:** até aqui falamos de uma skill. Agora entra a camada de delegação.

## Slide 6 — Subagents
Skill e subagent não são a mesma coisa.

A skill é uma unidade de execução reutilizável: ela descreve como fazer determinada tarefa.

O subagent é uma unidade de delegação: recebe uma parte específica do problema, trabalha com escopo próprio e pode consumir uma ou mais skills.

Subagents fazem sentido quando existe especialização, paralelismo ou necessidade de isolar contexto. Por exemplo, um PR Review pode delegar arquitetura, contratos e observabilidade para subagentes diferentes.

Mas não precisamos transformar cada skill em subagent. Para tarefas pequenas ou determinísticas, uma skill simples ou um script já é suficiente.

**Transição:** tudo isso precisa funcionar no nosso runtime real.

## Slide 7 — Adaptação para Devin Local
Uma skill útil para o Devin Local precisa saber operar no repositório.

Ela precisa entender estrutura do projeto, comandos de build, testes, contratos, arquivos e convenções relevantes ao fluxo. Quando houver subagents, o parent agent também precisa saber o que delegar, qual escopo passar e que resultado esperar de volta.

A saída precisa ser concreta: patch, parecer, finding, checklist, evidência ou próximos passos.

**Transição:** e precisamos provar que o comportamento continua correto.

## Slide 8 — Validation & Replay
Se uma regra pode ser checada por build, teste, lint, schema ou script, não faz sentido deixá-la somente para interpretação do modelo.

A validação pode ser dividida em três níveis: estrutural, executável e comportamental.

O replay é o teste final: pegamos tarefas conhecidas e verificamos se a skill continua produzindo o comportamento esperado.

Um bom resumo é: LLM interpreta, script verifica e replay prova.

**Transição:** agora conseguimos resumir o modelo mental completo.

## Slide 9 — Prompt, Skill, Subagent e Harness
Prompt é bom para exploração e pedidos abertos.

Skill é boa para operação repetível.

Subagent é útil para delegar partes independentes ou especializadas de uma tarefa maior.

Harness fornece runtime, ferramentas, permissões e limites.

A hierarquia que estamos propondo é simples: o harness executa, o agent coordena, o subagent recebe uma parte do trabalho e a skill ensina como aquela parte deve ser feita.

**Transição:** por fim, as referências usadas para chegar a essa visão.

## Slide 10 — Referências e agradecimentos
As principais referências são a documentação de Custom Skills, o paper Workflow-to-Skill e a documentação sobre sistemas multiagente e delegação.

Essas fontes servem como base conceitual. A adaptação para o Devin Local e a forma como organizamos nossa arquitetura são decisões de engenharia do nosso contexto.

Obrigado. Perguntas, críticas e sugestões são bem-vindas.
