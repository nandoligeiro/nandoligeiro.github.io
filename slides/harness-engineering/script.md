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

## Slide 7 — Context Engineering

### Fala sugerida

“Durante algum tempo, contexto foi tratado como uma questão de capacidade: quantos tokens cabem na janela? O problema real é arquitetural: qual informação deve entrar, em qual momento e para qual agente?

Despejar um repositório inteiro no contexto aumenta custo e ruído. O ACToR explora a recuperação de contexto em pontos críticos da geração, quando uma decisão depende de informação específica do repositório.

Isso conversa diretamente com progressive disclosure em skills. Primeiro carregamos metadados suficientes para decidir. Depois, o workflow. Referências e scripts entram somente quando a execução precisa deles.

Context engineering não é empilhar informação. É controlar sua entrega.”

### Exemplo

“Para revisar idempotência, o agente não precisa ler toda a documentação de observabilidade. Ele precisa do contrato, do fluxo de persistência e das regras específicas daquela decisão.”

### Transição

“A mesma lógica vale para memória: guardar mais não significa lembrar melhor.”

---

## Slide 8 — Memória como estrutura

### Fala sugerida

“Parte do que chamamos de memória de agentes é, na prática, gerenciamento de estado.

O Prospective Intention Store representa intenções futuras com campos como tarefa, gatilho, condição, prazo e ação. O ciclo de vida fica no software; o modelo atua apenas onde linguagem e interpretação são necessárias.

No experimento mostrado aqui, um modelo pequeno saiu de 4,2% sem o store para 66,2% com estado tipado. A mensagem não é que esses números se repetirão em qualquer domínio. A mensagem é que estrutura pode compensar capacidade de modelo.

Às vezes não precisamos de um modelo maior. Precisamos parar de pedir ao modelo para fazer o trabalho que o software tradicional faz melhor.”

### Transição

“Se contexto e memória viram componentes arquiteturais, também precisamos observar como esses componentes influenciam a execução.”

---

## Slide 9 — Observabilidade da trajetória

### Fala sugerida

“Nosso padrão atual de avaliação costuma terminar em pass ou fail. Isso informa se o resultado passou no teste, mas não explica a qualidade operacional.

Dois agentes podem produzir o mesmo patch correto. Um leu cinco arquivos, executou quatro comandos e acertou de primeira. O outro percorreu quarenta arquivos, fez dezenas de tentativas e chegou ao resultado por acaso. O outcome é igual; a trajetória não é.

Para operar agentes, precisamos observar arquivos explorados, comandos, ferramentas, tentativas, testes, reversões, tempo, custo e intervenções humanas.

Essa telemetria permite comparar versões do harness, encontrar desperdício de contexto e identificar onde a execução realmente se degrada.”

### Ponto de ênfase

Outcome mede entrega. Trajetória mede engenharia.

### Transição

“É aqui que o Devin Desktop deixa de parecer apenas uma interface e passa a ser visto como parte da arquitetura.”

---

## Slide 10 — Devin Desktop como coding harness

### Fala sugerida

“Arquiteturalmente, podemos tratar o Devin Desktop como um coding harness.

Na entrada, temos o objetivo, as restrições, o `AGENTS.md`, as skills e os padrões do repositório. No meio, o Devin coordena planejamento, contexto, IDE, shell, browser e execução. Na saída, esperamos patch, testes, pull request, evidências e uma trajetória que possa ser revisada.

Essa leitura é importante porque separa o contrato operacional do modelo usado por baixo. O modelo pode evoluir ou ser substituído. As regras de execução, segurança, validação e evidência precisam permanecer consistentes.

O valor não está apenas em gerar código. Está em fechar o ciclo entre intenção, alteração e prova.”

### Pergunta para o time

“Quais partes desse contrato hoje estão explícitas no repositório e quais ainda dependem de conhecimento informal?”

### Transição

“Essa arquitetura não está aparecendo em uma ferramenta isolada. Existe uma convergência no mercado.”

---

## Slide 11 — Convergência do mercado

### Fala sugerida

“Anthropic, OpenAI e Devin já implementam partes relevantes desse stack: skills, ferramentas, ambientes de execução, memória, contexto gerenciado e diferentes formas de orquestração.

É importante não afirmar que uma empresa implementou um paper específico sem evidência. O que podemos afirmar é que pesquisa e produto estão convergindo para os mesmos problemas.

As bases — skills, tool use e harnesses separados do modelo — já estão em produção. Memória e contexto ainda estão amadurecendo. Harnesses que evoluem automaticamente continuam principalmente no campo da pesquisa.

O mapa ajuda a distinguir o que podemos aplicar agora do que apenas devemos acompanhar.”

### Transição

“Diante disso, qual seria um passo responsável e mensurável para um time de engenharia?”

---

## Slide 12 — Implicação prática

### Fala sugerida

“Minha recomendação não é começar construindo um meta-harness autônomo. O primeiro passo é tornar o harness atual observável.

Isso envolve três frentes. Primeiro, contratos: entradas, permissões, outputs e condições de parada. Segundo, trajetórias: decisões, ferramentas, testes, custo e intervenção humana. Terceiro, evals: comparar não apenas se a tarefa passou, mas como ela foi resolvida.

Um piloto de PR Review Java ou Kotlin é um recorte interessante porque tem entrada clara, critérios técnicos conhecidos e saída verificável. Podemos comparar tempo, cobertura de problemas, falsos positivos, quantidade de intervenção e custo da trajetória.

O objetivo inicial não é autonomia máxima. É evidência suficiente para decidir onde aumentar autonomia com segurança.”

### Métricas possíveis

- Tempo total e tempo humano.
- Problemas relevantes encontrados.
- Falsos positivos.
- Arquivos e comandos utilizados.
- Reexecuções e intervenções.
- Custo por execução.

### Transição

“Com isso, chegamos à ideia que eu gostaria que ficasse depois da apresentação.”

---

## Slide 13 — Fechamento e referências

### Fala sugerida

“O futuro da engenharia com agentes não pertence apenas ao melhor modelo. Pertence ao melhor sistema para fazê-lo trabalhar.

O modelo oferece capacidade. A skill empacota conhecimento operacional. O agent conduz a trajetória. O harness entrega contexto, ferramentas, memória, isolamento, observabilidade e governança.

Essa é a passagem de uma discussão centrada no agente para uma disciplina de Harness Engineering.

Os links deste slide são as principais referências usadas. Minha sugestão é observar especialmente Harness-of-Harness, HarnessDev e os trabalhos sobre trajetória e memória estruturada, porque juntos eles descrevem partes diferentes do mesmo stack.”

### Encerramento sugerido

“A pergunta que eu deixo é: se o nosso agente já consegue escrever código, o que ainda falta no harness para confiarmos na forma como ele trabalha?”

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
