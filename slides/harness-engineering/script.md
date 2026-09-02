# Da Agent Engineering para Harness Engineering

Roteiro de apoio para apresentação técnica a engenheiros de software.

**Duração sugerida:** 18 a 22 minutos, mais perguntas.

**Objetivo:** mostrar por que o diferencial dos agentes está migrando do modelo isolado para o software que organiza sua execução.

**Mensagem principal:** o modelo fornece capacidade; o harness transforma essa capacidade em uma operação controlada, observável e repetível.

---

## Slide 1 — Entramos na era da Harness Engineering

### Fala sugerida

“Quero começar com uma mudança de perspectiva. Nos últimos anos, boa parte da conversa sobre inteligência artificial ficou concentrada no modelo: qual raciocina melhor, qual tem mais contexto, qual gera o melhor código.

Isso continua importante, mas já não explica sozinho a qualidade de um agente. Quando pedimos para um agente trabalhar em um repositório real, ele precisa encontrar arquivos, usar ferramentas, executar testes, manter estado, lidar com falhas e produzir evidências.

É aí que entra o harness. O modelo raciocina, o agente executa um objetivo e o harness fornece o sistema operacional dessa execução. Minha proposta é olharmos para essa camada como uma disciplina própria de engenharia.”

### Transição

“Para entender por que essa camada ganhou tanta importância, primeiro precisamos mudar a pergunta que fazemos.”

---

## Slide 2 — LLM + software

### Fala sugerida

“Até pouco tempo, a comparação era quase sempre: qual modelo responde melhor? Para tarefas agentic, essa pergunta é insuficiente.

Um modelo excelente pode falhar se receber contexto irrelevante, usar uma ferramenta errada ou não perceber que um teste quebrou. Um modelo um pouco menor pode entregar melhor se o ambiente selecionar o contexto certo, definir etapas verificáveis e interromper a execução no momento adequado.

Então a nova pergunta é: qual sistema consegue fazer um bom modelo trabalhar por horas ou dias com contexto correto, memória, ferramentas, avaliação e controle?”

### Ponto de ênfase

Não estamos reduzindo a importância do modelo. Estamos reconhecendo que o resultado final é uma propriedade do sistema inteiro.

### Transição

“Esse sistema fica mais claro quando separamos quatro responsabilidades que frequentemente são misturadas.”

---

## Slide 3 — O novo stack

### Fala sugerida

“Modelo, agent, harness e skill não são sinônimos.

O **modelo** oferece raciocínio e geração. O **agent** recebe um objetivo, toma decisões e percorre uma trajetória. A **skill** descreve uma capacidade reutilizável: por exemplo, revisar um contrato OpenAPI ou investigar uma falha de observabilidade.

O **harness** fica no meio dessas relações. Ele decide como o contexto chega ao modelo, quais ferramentas estão disponíveis, onde os comandos executam, como a memória é mantida e como o resultado é observado.

Essa separação também melhora o diagnóstico. Se uma execução falhou, podemos perguntar: faltou capacidade no modelo? O agent tomou uma decisão ruim? A skill tinha instruções incompletas? Ou o harness entregou contexto e ferramentas inadequados?”

### Transição

“Quando aumentamos a autonomia, essa separação deixa de ser apenas organização conceitual e vira uma exigência de segurança.”

---

## Slide 4 — Princípio central

### Fala sugerida

“O princípio central é simples: quanto mais autônomo o agente, mais explícito precisa ser o software que o governa.

Isso não significa colocar uma aprovação humana em cada passo. Se fizermos isso, eliminamos o benefício da autonomia. Significa codificar limites: permissões, condições de parada, isolamento, memória, validações e trilha de auditoria.

Autonomia segura não nasce da ausência de controle. Ela nasce de controles que já fazem parte do ambiente de execução. Em contexto enterprise, previsibilidade não é burocracia; é uma feature arquitetural.”

### Pergunta para o time

“Hoje, se um agente produzir uma alteração correta, conseguimos explicar como ele chegou até ela?”

### Transição

“Uma evidência recente dessa mudança aparece no trabalho Harness-of-Harness.”

---

## Slide 5 — Harness-of-Harness

### Fala sugerida

“O Harness-of-Harness não tenta substituir os coding harnesses existentes. Ele opera acima deles.

O sistema organiza a execução em ciclos: planejar, construir, testar, avaliar e aprender. Cada ciclo trabalha com incrementos pequenos e verificáveis. Além disso, a avaliação é separada dos testes usados pelo próprio agente, evitando que ele seja o único juiz do próprio trabalho.

Nos experimentos, a abordagem produziu ganho relativo médio de 52,25% depois de três iterações. Em uma execução de vários dias, passou de 70 ciclos construindo um software completo.

O aspecto mais importante não é o número isolado. É a mudança de controle: em vez de prescrever cada ação do agente, o sistema define entregas verificáveis, mantém histórico versionado e usa o resultado de cada ciclo para orientar o próximo.”

### Cuidado com os números

Os resultados pertencem aos benchmarks e configurações avaliadas no paper. Eles indicam potencial; não garantem o mesmo ganho em qualquer projeto.

### Transição

“Se uma camada pode melhorar o trabalho do harness, surge uma pergunta ainda mais radical.”

---

## Slide 6 — HarnessDev

### Fala sugerida

“O HarnessDev pergunta se um modelo consegue criar e evoluir a infraestrutura que será usada para resolver uma classe inteira de tarefas.

Hoje, normalmente um humano projeta o harness e o agente executa dentro dele. A possibilidade futura é o humano definir objetivos e restrições, enquanto o agente ajusta partes do ambiente de execução.

Mas aqui precisamos manter o pé no chão. Os harnesses criados automaticamente ainda ficam atrás de sistemas maduros construídos por humanos. Os ganhos são instáveis e nem sempre transferem entre modelos.

Portanto, isso é uma direção de pesquisa relevante, não um sinal para entregar a governança do runtime ao próprio agente em produção.”

### Ponto de ênfase

Pesquisa promissora não é automaticamente uma prática pronta para produção.

### Transição

“Enquanto a autoevolução ainda é uma fronteira, já existe um problema concreto que podemos atacar agora: a entrega de contexto.”

---

## Slide 7 — Contexto como parte do ciclo

### Fala sugerida

“Quando o meta-harness coordena execuções longas, contexto deixa de ser um pacote carregado uma única vez. Cada incremento precisa receber apenas o contexto necessário para planejar, construir, testar e avaliar aquela etapa.

Isso conecta diretamente o Harness-of-Harness à progressive disclosure das skills: o catálogo ajuda a escolher a capacidade, o `SKILL.md` orienta o trabalho e referências ou scripts entram quando a decisão exige.

A ideia central é simples: o meta-harness não despeja contexto; ele governa quando cada contexto entra.”

### Transição

“Se o trabalho atravessa vários ciclos e sessões, precisamos preservar o que já foi aprendido.”

---

## Slide 8 — Memória entre incrementos

### Fala sugerida

“Em uma execução de vários dias, memória significa continuidade operacional.

O meta-harness precisa manter objetivo, hipótese, evidência, decisão e próximo experimento. Também precisa versionar os artefatos produzidos em cada ciclo. Assim, uma nova sessão não começa do zero e não repete cegamente tentativas anteriores.

Essa memória não precisa ser uma narrativa infinita. Pode ser estado estruturado e auditável, conectado ao histórico dos incrementos.”

### Transição

“Mas guardar estado não basta. O ciclo só aprende se houver avaliação independente.”

---

## Slide 9 — Avaliação fecha o ciclo

### Fala sugerida

“O ponto mais forte do Harness-of-Harness é fechar o ciclo com avaliação.

Não basta o agente declarar que terminou. Cada incremento precisa produzir resultado, testes e evidências que possam orientar a próxima decisão. Resultado e trajetória importam: o patch pode passar, mas a execução pode ter sido cara, instável ou impossível de reproduzir.

O meta-harness usa essa avaliação para continuar, corrigir a rota, abrir uma nova sessão ou encerrar.”

### Ponto de ênfase

“Sem avaliação, repetição é apenas looping. Com avaliação, vira aprendizado operacional.”

### Transição

“Agora podemos aterrissar essa ideia em um coding harness real.”

---

## Slide 10 — Devin Desktop como coding harness

### Fala sugerida

“Arquiteturalmente, podemos tratar o Devin Desktop como o coding harness que executa cada incremento.

Na entrada, temos objetivo, restrições, `AGENTS.md`, skills e padrões do repositório. No meio, o Devin coordena planejamento, contexto, IDE, shell, browser e execução. Na saída, esperamos patch, testes, evidências e uma trajetória revisável.

A camada acima — nosso meta-harness — decide qual incremento executar, quando criar uma nova sessão, como avaliar a entrega e qual será o próximo ciclo.

O Devin faz o trabalho. O meta-harness governa a continuidade do trabalho.”

### Pergunta para o time

“Quais decisões hoje precisam de uma pessoa para ligar uma sessão à próxima?”

### Transição

“Essa separação também ajuda a distinguir o que já é aplicável do que ainda está na fronteira.”

---

## Slide 11 — Da pesquisa para a engenharia

### Fala sugerida

“As duas referências contam uma história coerente.

O Harness-of-Harness demonstra uma camada acima de coding harnesses existentes, coordenando incrementos verificáveis por vários ciclos. O HarnessDev empurra a fronteira e pergunta até onde o próprio harness pode ser criado ou evoluído por agentes.

A recomendação prática fica no meio: usar automação para coordenar sessões e avaliações, mas manter contratos, permissões e mudanças do harness versionados e governados.

Não precisamos vender autonomia mágica. Precisamos construir um sistema que aprende sem perder controle.”

### Transição

“Então qual é o primeiro recorte concreto?”

---

## Slide 12 — Implicação prática

### Fala sugerida

“O primeiro meta-harness não precisa ser uma plataforma enorme. Ele pode ser um ciclo explícito sobre o harness atual.

Primeiro, contratos: definir entrada, restrições, entregáveis e condição de parada. Segundo, continuidade: criar uma nova sessão por incremento necessário e carregar o estado mínimo. Terceiro, avaliação: validar resultado e trajetória antes de decidir o próximo passo.

Um piloto de PR Review Java ou Kotlin é um bom recorte. O meta-harness pode decompor a revisão, executar sessões especializadas, consolidar evidências e medir qualidade, tempo, custo e intervenção humana.

A ambição é Harness-of-Harness. O começo é um loop pequeno que conseguimos explicar.”

### Métricas possíveis

- Incrementos concluídos por sessão.
- Tempo total e tempo humano.
- Problemas relevantes e falsos positivos.
- Reexecuções, intervenções e custo.
- Evidências preservadas entre ciclos.

### Transição

“Com isso, chegamos à ideia que eu gostaria que ficasse depois da apresentação.”

---

## Slide 13 — Fechamento e duas referências

### Fala sugerida

“O futuro da engenharia com agentes não pertence apenas ao melhor modelo. Pertence ao melhor sistema para fazê-lo trabalhar por ciclos, sessões e incrementos verificáveis.

O Harness-of-Harness é nossa referência principal: uma camada acima organiza execução, avaliação e aprendizado contínuo. O HarnessDev é a referência complementar: explora a criação e a evolução do próprio harness.

A tese prática é esta: o coding harness executa; o meta-harness decide como o trabalho continua.”

### Referências

- [Harness-of-Harness — arXiv:2609.01481](https://arxiv.org/abs/2609.01481)
- [HarnessDev — arXiv:2609.01437](https://arxiv.org/abs/2609.01437)

### Encerramento sugerido

“Se o nosso agente já consegue escrever código, qual ciclo precisamos construir acima dele para que consiga aprender entre um incremento e outro?”

---

## Respostas rápidas para perguntas prováveis

### Harness é apenas outro nome para framework de agentes?

Não exatamente. Um framework pode ajudar a construir agentes. O harness é o sistema concreto que envolve a execução: contexto, ferramentas, runtime, memória, isolamento, políticas, observabilidade e avaliação.

### Skill e agent são a mesma coisa?

Não. Skill é uma capacidade reutilizável. Agent é o executor que seleciona e usa capacidades para perseguir um objetivo.

### Mais contexto resolve o problema?

Nem sempre. Contexto demais aumenta custo, latência e ruído. A questão principal é selecionar e entregar a informação correta no momento adequado.

### O harness pode se melhorar sozinho hoje?

Existem pesquisas iniciais, mas os resultados ainda são instáveis. Em produção, mudanças no harness devem continuar versionadas, avaliadas e governadas.

### Por que observar a trajetória se o teste passou?

Porque a trajetória revela eficiência, repetibilidade, risco e custo. Um resultado correto obtido por tentativas opacas pode não ser confiável em outra execução.
