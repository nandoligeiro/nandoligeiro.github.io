# AI-DLC — Roteiro de apresentação

**Tema:** AI executa. Humanos decidem.

**Duração sugerida:** 25–35 minutos. **Público:** liderança, arquitetura e engenharia.

## Slide 1 — AI executa. Humanos decidem.

**Mensagem:** A engenharia muda quando a IA conduz o trabalho — e as pessoas preservam intenção, julgamento e responsabilidade.

**Roteiro:** Abra com a mudança central: não é produtividade de digitação. AI-DLC redesenha as interações e decisões em todo ciclo.

## Slide 2 — Mais código não significa mais valor.

**Mensagem:** Se a IA acelera a implementação, o gargalo passa a ser a qualidade das decisões e da validação.

**Roteiro:** Pergunte ao público: se o custo de produzir código cair, onde ficará nosso trabalho? Resposta: enquadramento, decisões, evidências.

## Slide 3 — Uma metodologia, não uma IDE.

**Mensagem:** AI-Driven Development Lifecycle: IA como colaboradora central para planejar, construir e operar software.

**Roteiro:** Diferencie claramente metodologia de ferramenta. Kiro e outros agentes podem apoiar sua execução.

## Slide 4 — Três fases. Um contexto contínuo.

**Mensagem:** O objetivo é evitar handoffs cegos e trazer aprendizado operacional ao novo planejamento.

**Roteiro:** Percorra da esquerda para a direita e feche o loop de operação para a próxima inception.

## Slide 5 — AI proposes → Human decides → AI executes

**Mensagem:** A IA elabora opções, evidencia trade-offs e pede validação antes de escolhas relevantes.

**Roteiro:** Esse é o slide âncora da palestra. A decisão não pode ficar implícita num prompt genérico.

## Slide 6 — Do pedido ambíguo ao problema verificável.

**Mensagem:** Mob Elaboration reúne negócio, produto, engenharia e QA para esclarecer intenção com IA.

**Roteiro:** Explique o mob como colaboração síncrona orientada por decisões, e não reunião longa para escrever documentação.

## Slide 7 — O que a equipe não delega à IA?

**Mensagem:** Mesmo com geração automática, o grupo precisa deliberar sobre o que vale construir.

**Roteiro:** Ilustre critérios funcionais e não funcionais, priorização e ambiguidades resolvidas antes da codificação.

## Slide 8 — Pronto para construir?

**Mensagem:** Um bolt só entra em Construction com intenção rastreável e riscos conhecidos.

**Roteiro:** Gate proposto como prática de governança; não apresentar como checklist normativo universal da AWS.

## Slide 9 — Entregas pequenas e aprendizado rápido.

**Mensagem:** Em vez de grandes lotes, unidades curtas de trabalho reduzem incerteza e antecipam validação.

**Roteiro:** Bolts são uma unidade de execução do AI-DLC. Duração não é promessa fixa; depende do contexto.

## Slide 10 — A IA produz. A engenharia dirige.

**Mensagem:** Mob Construction reúne decisões técnicas em tempo real; agente gera design, código e testes.

**Roteiro:** A arquitetura não some. Ela vira escolha explícita e restrição de execução.

## Slide 11 — Qual arquitetura merece aprovação?

**Mensagem:** A equipe escolhe trade-offs, limites transacionais, segurança, contratos e comportamento em falha.

**Roteiro:** Caso Java/Spring: discutir validação e idempotência antes de aceitar a implementação gerada.

## Slide 12 — Código gerado não é código aprovado.

**Mensagem:** A evidência deve acompanhar cada decisão — build verde é condição necessária, não suficiente.

**Roteiro:** Separar geração de validação. Verificar também observabilidade e padrões de arquitetura.

## Slide 13 — API de solicitação de segunda via.

**Mensagem:** Exemplo fictício e independente: POST /cards/{id}/replacement, com idempotência e auditoria.

**Roteiro:** Mostre um cenário bancário genérico sem detalhes internos. AI propõe alternativas; equipe decide semântica e prova.

## Slide 14 — A mesma intenção percorre o ciclo.

**Mensagem:** A trilha de decisão evita reexplicar o problema a cada mudança de etapa.

**Roteiro:** Fale sobre continuidade do contexto e decisões registradas — não apenas transferência de tickets.

## Slide 15 — O deploy não encerra o desenvolvimento.

**Mensagem:** Agentes podem apoiar IaC, pipelines, documentação, triagem e análise operacional.

**Roteiro:** Operações é fase explícita. A responsabilidade por produção permanece humana.

## Slide 16 — Quem autoriza o risco em produção?

**Mensagem:** Adoção empresarial requer checkpoints proporcionais ao impacto da mudança.

**Roteiro:** Diferenciar automação operacional de aprovação de mudanças críticas, especialmente em ambientes regulados.

## Slide 17 — Autonomia condicionada por evidências.

**Mensagem:** Guardrails acompanham todas as fases: contexto, controles, decisão e auditabilidade.

**Roteiro:** Evitar afirmar que AI-DLC sozinho garante conformidade. O modelo de controles depende da organização.

## Slide 18 — Menos handoff. Mais julgamento compartilhado.

**Mensagem:** O trabalho migra da produção isolada de artefatos para validação colaborativa de decisões.

**Roteiro:** A IA não assume accountability, e a metodologia não elimina especialidades.

## Slide 19 — Velocidade com qualidade, não volume.

**Mensagem:** Avalie um piloto com baseline e métricas de fluxo, eficácia e risco.

**Roteiro:** Não inventar percentuais. Comparar coortes equivalentes e controlar complexidade.

## Slide 20 — Comece com um bolt controlado.

**Mensagem:** Escolha um fluxo pequeno, defina decisões humanas e conecte avaliações ao resultado.

**Roteiro:** Proponha piloto de escopo controlado; evitar iniciar em mudanças de alto risco.

## Slide 21 — A IA escala execução. O time escala decisão.

**Mensagem:** AI-DLC só cria vantagem durável quando contexto, responsabilidade e evidências sobrevivem ao código.

**Roteiro:** Feche retomando a tese de abertura. A pergunta não é qual agente codifica mais rápido, mas qual sistema permite decidir melhor.

## Slide 22 — Para aprofundar com fontes primárias.

**Mensagem:** AWS AI-DLC · AWS for Financial Services · AWS Labs open-source workflows.

**Roteiro:** Fontes: https://aws.amazon.com/blogs/industries/ai-driven-development-lifecycle-for-financial-services/ ; https://github.com/awslabs/aidlc-workflows ; https://aws.amazon.com/blogs/awsforsap/sap-abap-application-development-with-ai-dlc-ai-driven-development-lifecycle/

## Referências

- https://aws.amazon.com/blogs/industries/ai-driven-development-lifecycle-for-financial-services/
- https://github.com/awslabs/aidlc-workflows
- https://aws.amazon.com/blogs/awsforsap/sap-abap-application-development-with-ai-dlc-ai-driven-development-lifecycle/
