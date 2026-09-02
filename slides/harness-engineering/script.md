# Da Agent Engineering para Harness Engineering

## Slide 1 — Entramos na era da Harness Engineering

O salto atual não vem apenas de modelos maiores. Ele vem do software que organiza o trabalho ao redor deles. O modelo raciocina, o agente executa e o harness transforma essa capacidade em operação confiável.

## Slide 2 — LLM + software

A pergunta mudou. Em vez de olhar somente para qual modelo responde melhor, precisamos avaliar qual sistema faz um bom modelo trabalhar por horas ou dias com contexto correto, memória, ferramentas, validação e controle.

## Slide 3 — O novo stack

Modelo, agent, harness e skill não são sinônimos. O modelo gera e raciocina. O agent persegue um objetivo. A skill oferece uma capacidade reutilizável. O harness gerencia o ambiente no qual tudo isso opera.

## Slide 4 — Tese central

Quanto maior a autonomia, mais explícita precisa ser a governança codificada. Em ambiente enterprise, autonomia sem isolamento, memória, avaliação e auditoria é improviso rápido — não engenharia.

## Slide 5 — Harness-of-Harness

O paper organiza harnesses existentes em ciclos de planejamento, construção, teste, avaliação e aprendizado. Os resultados mostram ganho médio relativo de 52,25% após três iterações e uma execução com mais de 70 ciclos durante vários dias. O ponto central não é prescrever cada ação, mas exigir incrementos verificáveis.

## Slide 6 — HarnessDev

Aqui aparece uma fronteira nova: agentes criando e evoluindo o próprio harness. A ideia é poderosa, mas os resultados ainda são instáveis e ficam atrás de sistemas maduros construídos por humanos. É direção de pesquisa, não recomendação para produção bancária agora.

## Slide 7 — Context Engineering

Contexto deixou de ser só uma questão de capacidade. O problema arquitetural é decidir o que carregar, quando carregar e para qual agente. Isso conecta diretamente com progressive disclosure em skills e retrieval sob demanda.

## Slide 8 — Memória como estrutura

O Prospective Intention Store mostra que parte do que chamamos de memória é, na verdade, gerenciamento de estado. Quando tarefa, gatilho, condição e ação são tipados em software, até modelos pequenos melhoram dramaticamente.

## Slide 9 — Observabilidade da trajetória

Pass ou fail mede a entrega final. Não mede a qualidade da execução. Para operar agentes, precisamos observar arquivos explorados, comandos, tentativas, testes, reversões, tempo, custo e intervenções humanas.

## Slide 10 — Devin Desktop como harness

Devin Desktop deve ser lido arquiteturalmente como o harness. Ele conecta objetivo, repositório, shell, IDE, browser, skills e evidências. O modelo pode mudar; o contrato operacional precisa permanecer.

## Slide 11 — Convergência do mercado

Anthropic, OpenAI e Devin já materializam skills, ferramentas, ambientes e diferentes graus de orquestração. Isso não prova que implementaram papers específicos. Mostra convergência: pesquisa e produto estão atacando as mesmas limitações sistêmicas.

## Slide 12 — Implicação prática

Não precisamos começar por um meta-harness autônomo. Precisamos começar por um harness observável: contratos claros, trajetórias registradas e evals que comparem o resultado e o caminho usado para produzi-lo. Um piloto de PR Review Java/Kotlin é um recorte bom e mensurável.

## Slide 13 — Fechamento

O futuro não pertence apenas ao melhor modelo. Pertence ao melhor sistema para fazê-lo trabalhar. Esse é o deslocamento da Agent Engineering para Harness Engineering.
