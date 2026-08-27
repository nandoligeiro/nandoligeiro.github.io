# Script de apresentação — Modern Agent Skills para desenvolvedores

## Slide 1 — Modern Agent Skills para desenvolvedores
A ideia desta apresentação é mostrar como trabalhar com skills de uma forma mais próxima de engenharia de software. Não estamos falando só de prompt. Estamos falando de criar um pacote que consiga ser acionado no momento certo, executar um fluxo conhecido, consultar contexto quando necessário e validar o resultado.

O ponto principal é adaptar esses conceitos ao Devin Local e ao nosso dia a dia de desenvolvimento. A pergunta é: como transformar práticas repetíveis do time em algo que o agente consiga operar de forma previsível?

**Transição:** antes de falar de estrutura, precisamos separar ferramenta de modelo operacional.

## Slide 2 — Não estamos copiando uma ferramenta
O objetivo não é reproduzir uma ferramenta externa dentro do banco. O que interessa são os padrões que fazem sentido para um harness de desenvolvimento: skills focadas, carregamento progressivo, scripts executáveis, referências e validação.

O Devin Local é o nosso runtime. Então qualquer conceito precisa funcionar no repositório real: ler código, rodar build, executar testes, validar contrato e produzir evidência.

**Transição:** com essa premissa, quais conceitos estão aparecendo na engenharia moderna de skills?

## Slide 3 — Skills modernas envolvem mais do que escrever instruções
Eu separo o ciclo de vida em alguns movimentos. Primeiro, criação: já conhecemos um procedimento e queremos transformá-lo em skill. Segundo, reconstrução: observamos execuções reais e tentamos recuperar o procedimento que estava implícito. Depois vêm decomposição, validação, replay e evolução.

Isso muda a conversa de prompt engineering para skill engineering. A skill deixa de ser texto estático e passa a ter ciclo de vida.

**Transição:** o primeiro conceito importante é controlar quanto contexto o agente carrega.

## Slide 4 — Progressive disclosure
A ideia é simples: o agente não precisa carregar tudo de uma vez. Primeiro ele precisa de informação suficiente para saber se a skill é relevante. Depois carrega o SKILL.md. Scripts, referências e outros arquivos entram somente quando o fluxo exige.

Isso reduz contexto inútil e deixa a execução mais previsível. Para o Devin Local, isso combina bem com trabalhar diretamente no repo: o agente consulta o mínimo necessário a cada etapa.

**Transição:** além de carregar menos, precisamos desenhar skills menores.

## Slide 5 — Skill boa é pequena o suficiente para ser testada
Uma mega skill de “arquitetura completa” tende a misturar muitos objetivos, ativar mal e ser difícil de corrigir. É melhor trabalhar com tarefas repetíveis e delimitadas: PR review, revisão de API, investigação de incidente, análise Kafka ou observabilidade.

A pergunta prática é: consigo descrever entrada, fluxo, checks e saída dessa skill? Se não, provavelmente ela ainda está grande demais.

**Transição:** quando o procedimento já existe no trabalho real, não precisamos começar do zero.

## Slide 6 — Trace-to-Skill
Muitas vezes o conhecimento já existe, só está espalhado. Pode estar em uma conversa, em um PR, nos comandos que alguém rodou, nos arquivos que consultou e nas verificações feitas até chegar à solução.

O trace vira matéria-prima. A ideia é extrair desse histórico o gatilho, os passos, decisões, branches, verificações e recursos usados. A partir disso podemos produzir um primeiro draft de skill.

**Transição:** para reconstruir bem, ajuda decompor a execução antes de escrever o package final.

## Slide 7 — Representação intermediária
Aqui usamos RWSA como lente de decomposição, não como uma especificação oficial de ferramenta. Routing pergunta quando a skill deve ativar. Workflow mostra a sequência. Semantics representa as regras que orientam decisões. Attachments representa recursos como scripts e referências.

O valor é operacional: quando algo dá errado, conseguimos discutir qual componente falhou em vez de reescrever tudo.

**Transição:** essa decomposição fica ainda mais útil quando pensamos em debug.

## Slide 8 — Skill debugging
Se a skill não ativou, provavelmente começamos pelo routing. Se ativou e pulou uma etapa, olhamos o workflow. Se seguiu o fluxo, mas tomou uma decisão ruim, investigamos as regras e referências. Se quebrou ao validar, olhamos script, runtime e dependências.

O ganho é localizar a falha. Isso aproxima manutenção de skill da manutenção de software.

**Transição:** agora precisamos trazer tudo isso para o Devin Local.

## Slide 9 — Adaptação para o nosso harness
Uma skill útil para o Devin Local precisa saber operar no repositório. Precisa entender estrutura do projeto, comandos de build, testes, contratos, logs e convenções relevantes ao fluxo.

A saída também precisa ser concreta: patch, parecer, finding, checklist, evidência ou próximos passos. Não basta responder bem; precisa operar bem.

**Transição:** isso nos leva à estrutura interna do package.

## Slide 10 — Estrutura mínima de uma Skill
O SKILL.md coordena o fluxo. Scripts executam ou validam o que precisa ser determinístico. References guardam regras e contexto consultados sob demanda. Assets carregam templates, exemplos e artefatos reutilizáveis.

A ideia não é criar muitas pastas por cerimônia. É separar responsabilidades para manter o fluxo principal legível e os detalhes nos lugares certos.

**Transição:** existem dois caminhos para chegar a esse package: criação e reconstrução.

## Slide 11 — Criação de skill
Quando o processo já é conhecido, começamos pela tarefa repetível. Definimos resultado esperado, desenhamos workflow, identificamos branches e decidimos quais partes precisam virar script ou referência.

Depois testamos a skill num caso real. O objetivo do primeiro ciclo não é perfeição; é descobrir se a skill consegue repetir o procedimento com menos intervenção.

**Transição:** o outro cenário é quando o processo ainda está espalhado nas execuções.

## Slide 12 — Reconstrução de skill
Aqui começamos pelos traces. Coletamos execuções reais, procuramos padrões, separamos gatilho, workflow, regras e anexos e então geramos um draft.

O passo importante é replay: pegar tarefas conhecidas e verificar se a nova skill preserva o comportamento útil das execuções que serviram de base.

**Transição:** replay sozinho não basta; tudo que puder ser determinístico deve ser validado de forma executável.

## Slide 13 — Executable validation
Se uma regra pode ser checada por build, teste, lint, schema ou script, não faz sentido deixá-la somente para interpretação do modelo.

O modelo continua importante para entender contexto e tomar decisões. Mas a verificação objetiva deve produzir evidência objetiva. Um bom resumo é: LLM interpreta, script verifica e replay mostra se o comportamento continua correto.

**Transição:** num ambiente corporativo, essa execução também precisa de limites.

## Slide 14 — Segurança e operação
Skill não deve carregar segredo, token ou dado sensível. Também precisa deixar claro o que pode ler, escrever e executar, além de quando deve parar e pedir aprovação.

Governança aqui não é uma camada posterior. Ela faz parte do desenho da skill, principalmente quando o agente opera repositórios, ferramentas e ambientes internos.

**Transição:** para validar tudo isso, vale começar com um piloto pequeno e mensurável.

## Slide 15 — Piloto sugerido: PR Review Java/Kotlin
PR Review é um bom primeiro caso porque tem entrada clara, fluxo repetível e resultado verificável. Podemos testar arquitetura, contrato, testes, observabilidade, tratamento de erro e segurança.

A métrica não precisa ser sofisticada: tempo economizado, findings úteis, retrabalho evitado e consistência do review. Isso já mostra se a abordagem tem valor.

**Transição:** com isso, chegamos à mensagem principal.

## Slide 16 — Prompt explora. Skill opera. Harness controla.
Prompt continua ótimo para exploração e tarefas abertas. Skill é onde codificamos uma operação repetível. Harness é quem fornece runtime, ferramentas e limites.

A evolução que estamos propondo é tratar skills como assets internos de engenharia: versionáveis, revisáveis, testáveis e evolutivos.

**Transição:** no último slide, deixamos transparentes as referências usadas.

## Slide 17 — Referências e agradecimentos
As duas referências principais são a documentação de custom skills e o paper Workflow-to-Skill, que discute reconstrução de workflows, representação intermediária e replay comportamental.

Essas fontes não determinam a nossa arquitetura interna. Elas servem como base para os conceitos que estamos adaptando ao Devin Local e ao nosso contexto.

Obrigado. Perguntas, críticas e sugestões são bem-vindas.
