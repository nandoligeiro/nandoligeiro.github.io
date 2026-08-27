# Script de apresentação — Skill Monorepo Architecture

## Slide 1 — Do Skill Package ao Monorepo de Skills
Nesta apresentação o foco muda. Já sabemos como uma skill pode ser organizada internamente com SKILL.md, scripts, references e assets. Agora a pergunta é como escalar isso para várias skills no mesmo repositório sem começar a duplicar tudo.

A recomendação é manter a skill como unidade de workflow e extrair somente os componentes que realmente merecem ser compartilhados.

**Transição:** primeiro precisamos entender os dois extremos que queremos evitar.

## Slide 2 — Duplicação versus shared caótico
Se cada skill for completamente isolada, rapidamente vamos repetir scripts, guidelines e templates. Isso aumenta manutenção e cria pequenas diferenças entre skills que deveriam seguir o mesmo padrão.

Mas o outro extremo também é ruim: criar um shared gigante onde tudo depende de tudo. Nesse cenário o fluxo real fica escondido e ninguém sabe mais o que uma skill precisa para funcionar.

A arquitetura precisa equilibrar autonomia e reutilização.

**Transição:** a nossa tese nasce exatamente desse equilíbrio.

## Slide 3 — Skill continua sendo o workflow
A unidade principal continua sendo a skill. Ela representa uma tarefa ou procedimento específico e precisa continuar legível por si só.

O reuso não precisa acontecer reaproveitando uma skill inteira. Pode acontecer em componentes menores: scripts compartilhados, referências compartilhadas e assets compartilhados.

Isso preserva contexto local e evita criar mega skills genéricas.

**Transição:** essa ideia aparece diretamente no formato do monorepo.

## Slide 4 — Layout recomendado do monorepo
Cada skill mantém seu package local: SKILL.md, scripts, references e assets. Isso mantém a arquitetura interna visível e deixa claro o que pertence àquele workflow.

Fora das skills existe um shared controlado. shared/scripts recebe execução realmente reutilizável. shared/references recebe padrões transversais. shared/assets recebe templates e artefatos reutilizáveis. tooling cuida da qualidade do ecossistema.

A regra principal é não promover tudo para shared. Só extrair quando existir repetição real e semântica realmente comum.

**Transição:** vamos olhar primeiro para a pasta skills.

## Slide 5 — skills/ guarda o workflow de negócio
A pasta skills contém os casos de uso concretos: PR review, revisão de API, investigação Kafka e assim por diante.

Uma skill pode ter arquivos locais quando eles são específicos daquele workflow. Se existe uma regra exclusiva de cartões para PR review, não há motivo para colocá-la no shared só porque estamos em um monorepo.

Autonomia conceitual significa que eu consigo abrir a skill e entender o que ela faz.

**Transição:** o primeiro tipo de reuso mais fácil de justificar é execução determinística.

## Slide 6 — shared/scripts concentra execução reutilizável
Scripts são bons candidatos a compartilhamento porque representam capacidades técnicas repetíveis. Rodar testes Maven, validar OpenAPI, coletar um Git diff ou verificar uma convenção de projeto pode ser útil para várias skills.

Só deve subir para shared quando realmente houver uso transversal. Um script exclusivo de uma skill continua no package daquela skill.

Isso reduz duplicação sem criar infraestrutura genérica antes da hora.

**Transição:** nem todo reuso é executável; também temos conhecimento e artefatos.

## Slide 7 — shared/references e shared/assets
shared/references guarda conhecimento transversal: guidelines de API, segurança, observabilidade ou padrões de engenharia que várias skills precisam consultar.

shared/assets guarda templates, exemplos e outros artefatos reutilizáveis, como um template padrão de PR review ou ADR.

O cuidado é o mesmo: shared/references não pode virar uma wiki infinita, e shared/assets não deve virar depósito de arquivos sem owner.

**Transição:** depois de compartilhar, precisamos preservar uma regra de dependência simples.

## Slide 8 — O fluxo principal precisa continuar explícito
O SKILL.md continua sendo o lugar onde o workflow principal fica visível. Ele pode chamar um script compartilhado, consultar uma referência compartilhada ou usar um asset comum, mas a intenção continua explícita na skill.

O anti-pattern é transformar a execução numa caça ao tesouro entre arquivos e dependências indiretas.

Se precisamos abrir cinco arquivos só para descobrir o caminho principal, perdemos a arquitetura.

**Transição:** um exemplo concreto deixa essa regra mais clara.

## Slide 9 — PR Review usando shared controlado
A skill de PR Review pode declarar que precisa coletar diff, rodar testes e validar OpenAPI. Essas operações podem estar em shared/scripts.

Para decisão, ela pode consultar referências locais e compartilhadas. Para saída, usa um template reutilizável.

O importante é que a skill continua dizendo o que está acontecendo. O shared fornece componentes; não substitui o workflow.

**Transição:** quando temos várias skills consumindo componentes comuns, precisamos de governança técnica.

## Slide 10 — tooling é parte da arquitetura
Um monorepo de skills precisa de ferramentas próprias. validate-skills pode verificar frontmatter, estrutura, paths e dependências. replay-skill pode executar casos conhecidos para detectar regressão comportamental. package-skill pode preparar distribuição ou instalação.

Também precisamos saber impacto: se um script compartilhado muda, quais skills dependem dele? Essa rastreabilidade precisa aparecer antes do monorepo crescer demais.

**Transição:** a boa notícia é que não precisamos construir tudo no primeiro dia.

## Slide 11 — Plano de adoção
Começamos com uma skill real. Depois observamos o que se repetiu e extraímos shared/scripts. Só depois centralizamos references e assets que realmente têm uso transversal.

Quando o ecossistema começa a crescer, introduzimos tooling para validação e replay. É uma evolução guiada por necessidade, não uma plataforma desenhada antecipadamente no papel.

A frase importante é: não precisa nascer perfeito, precisa nascer governável.

**Transição:** agora conseguimos resumir a recomendação.

## Slide 12 — Reuso em componentes shared bem definidos
Num monorepo, a skill continua sendo a unidade de comportamento. Ela representa o workflow e mantém contexto local.

O reuso acontece em componentes menores: shared/scripts para execução, shared/references para conhecimento transversal e shared/assets para artefatos reutilizáveis. tooling governa tudo isso.

A recomendação é manter dependências explícitas e extrair shared somente depois de existir evidência de repetição.

**Transição:** falta uma camada importante quando começamos a trabalhar com workflows maiores: subagents.

## Slide 13 — Subagents no monorepo
Subagent e skill não são a mesma coisa.

A skill é uma unidade reutilizável de execução: ela ensina como uma tarefa deve ser feita. O subagent é uma unidade de delegação: recebe uma parte específica de um objetivo maior, normalmente com escopo, contexto e saída bem definidos.

Num PR Review mais complexo, por exemplo, um parent agent poderia delegar arquitetura, contratos e observabilidade para subagents diferentes. Cada subagent pode consumir skills e os mesmos componentes shared do monorepo.

Isso evita duplicar conhecimento por agente. O monorepo continua organizado por capacidades reutilizáveis, enquanto os subagents são consumidores dessas capacidades.

Também existe custo. Mais subagents significam mais coordenação, latência, contexto e possibilidade de trabalho duplicado. Por isso a recomendação é delegar apenas quando especialização, paralelismo ou isolamento de contexto trouxerem ganho real.

A hierarquia mental fica assim: Agent → Subagent → Skill → shared components → Tool/Runtime.

**Transição:** por fim, as referências usadas para chegar nessa proposta.

## Slide 14 — Referências e agradecimentos
A estrutura proposta combina o modelo de package com SKILL.md e recursos adicionais, o princípio de progressive disclosure, os conceitos de decomposição e reconstrução discutidos em Workflow-to-Skill e referências atuais sobre delegação em sistemas multiagente.

A organização de monorepo apresentada aqui é uma recomendação arquitetural nossa a partir desses conceitos; ela não é um layout oficial definido pelas fontes.

Links principais:
- Custom Skills: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
- Workflow-to-Skill: https://arxiv.org/pdf/2606.06893
- Anthropic — orientação sobre delegação/subagents em frameworks multiagente: https://docs.anthropic.com/it/docs/about-claude/models/migrating-to-claude-4

Obrigado. Perguntas, críticas e sugestões são bem-vindas.
