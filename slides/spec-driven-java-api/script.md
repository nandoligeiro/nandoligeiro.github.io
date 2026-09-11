# Spec-Driven AI Engineering — case Java + Spring

Roteiro de apoio para uma apresentação técnica a engenheiros de software.

**Duração sugerida:** 22 a 28 minutos, mais perguntas.

**Objetivo:** demonstrar como o Spec-Driven Development transforma intenção, regras e critérios em uma implementação Java + Spring Boot rastreável.

**Case:** API fictícia para ajuste do limite de compra de um cartão. O exemplo não representa sistemas ou decisões de nenhuma empresa.

**Mensagem principal:** a IA acelera a construção; especificações executáveis preservam a intenção e limitam suposições.

---

## Slide 1 — Da intenção ao código sem pular o design

### Fala sugerida

“Esta apresentação não é sobre fazer a IA gerar mais código. Código ela já gera — às vezes até demais, naquele entusiasmo de estagiário com acesso ao teclado.

O ponto é outro: como garantir que o código produzido represente a intenção correta, respeite as regras do projeto e deixe evidências para revisão?

Vamos percorrer o Spec-Driven Development usando um case backend: uma API Java e Spring Boot para alterar o limite de compra de um cartão. A ideia é sair de uma frase vaga e chegar a uma implementação com contrato, arquitetura, tarefas, testes e rastreabilidade.”

### Transição

“Para isso, precisamos reconhecer uma diferença básica: uma ideia de produto ainda não é uma API.”

---

## Slide 2 — Ideia não é API

### Fala sugerida

“Quando escrevemos ‘crie uma API de limite’, existem dezenas de decisões escondidas.

O ajuste é síncrono ou assíncrono? Pode reduzir o limite abaixo do valor utilizado? O que acontece com um cartão bloqueado? Como tratamos duas requisições iguais? E duas requisições diferentes com a mesma chave? Existe evento? Em que momento ele é publicado?

Se não respondemos, o agente responde por nós. Cada lacuna vira uma suposição plausível, e suposição plausível é um jeito elegante de dizer risco não governado.

O problema do vibe coding não é velocidade. É comprimir descoberta, design e implementação em um único prompt.”

### Ponto de ênfase

Prompt descreve um pedido. Especificação estabelece um contrato verificável.

### Transição

“O Spec-Driven Development muda o papel dessa especificação.”

---

## Slide 3 — A especificação governa a implementação

### Fala sugerida

“Durante muito tempo, especificação foi tratada como andaime: ajudava no começo e depois era abandonada quando o código, supostamente a verdade, aparecia.

No Spec-Driven Development, a especificação participa da execução. Ela alimenta o plano, gera tarefas, orienta o código e volta na validação.

Isso não significa escrever um documento gigantesco antes de aprender. Significa tornar explícitas as decisões que já conhecemos, registrar perguntas que ainda precisam de resposta e evoluir os artefatos junto com o produto.

O humano mantém responsabilidade por intenção e trade-offs. O agente ganha um caminho mais estreito, porém muito mais seguro.”

### Transição

“Vamos dar um problema concreto para esse fluxo.”

---

## Slide 4 — O case da API de limite

### Fala sugerida

“Nosso case é fictício: um endpoint `PUT /cards/{cardId}/purchase-limit` recebe o novo limite e uma chave de idempotência.

O cartão precisa estar ativo. O valor precisa pertencer à faixa permitida. A moeda é BRL. Uma retentativa legítima não pode gerar uma segunda alteração. Depois do commit, queremos disponibilizar um evento de limite alterado.

Na resposta, retornamos a decisão tomada e um correlation ID. Assim conseguimos observar a requisição e conectar logs e eventos sem expor dados sensíveis.

Parece simples. Mas já temos negócio, contrato HTTP, consistência transacional, persistência, mensageria, segurança e observabilidade. É um case pequeno com dentes.”

### Aviso

O exemplo é didático e não descreve uma implementação real de nenhuma instituição.

### Transição

“Em vez de saltar para o controller, vamos percorrer os artefatos que reduzem essas incertezas.”

---

## Slide 5 — O pipeline de decisões

### Fala sugerida

“O fluxo começa na constitution, com princípios permanentes do projeto.

Depois, specify descreve o comportamento e clarify resolve ambiguidades relevantes. Plan converte o quê em como. Tasks organiza a execução. Analyze cruza os artefatos antes de alterar o código. Implement executa as tarefas e converge compara a implementação com a intenção até o fluxo declarar convergência.

Isso não é waterfall disfarçado. Os artefatos são versionados e podem evoluir. A diferença é que a mudança fica explícita. Se uma descoberta altera o comportamento, voltamos ao spec, propagamos a decisão e preservamos o rastro.”

### Observação de versão

O fluxo do slide está alinhado ao Spec Kit 1.0. `clarify` e `analyze` são comandos opcionais; `converge` fecha o ciclo entre implementação e artefatos.

### Transição

“O primeiro artefato não fala da feature. Ele fala da identidade técnica do projeto.”

---

## Slide 6 — Constitution: regras inegociáveis

### Fala sugerida

“A constitution guarda princípios que todas as features devem respeitar.

No nosso exemplo: Java 21 e Spring Boot 3; domínio independente do framework; OpenAPI como contrato público; idempotência para comandos mutáveis; testes unitários e de integração; e proibição de dados sensíveis nos logs.

Essas regras não devem ser slogans genéricos como ‘usar clean code’. Uma regra útil muda o plano ou gera uma verificação.

Se a constitution exige domínio sem framework, o plan não pode colocar anotação JPA dentro da entidade de domínio sem justificar uma exceção. Se exige idempotência, tasks e testes precisam cobrir isso.”

### Pergunta para o time

“Quais decisões hoje repetimos em toda revisão porque ainda não viraram regra do projeto?”

### Transição

“Com as regras globais definidas, descrevemos a feature sem escolher solução.”

---

## Slide 7 — Specify: comportamento antes da tecnologia

### Fala sugerida

“O spec fala do que o usuário ou consumidor consegue observar.

No cenário principal, um cartão ativo recebe um novo limite permitido e a alteração é confirmada. Na retentativa, mesma chave e mesmo payload retornam a decisão anterior sem novo efeito. No conflito, mesma chave e payload diferente retornam 409 e preservam o estado original.

Percebam que não falamos de controller, JPA ou Kafka. Isso é intencional. Essas são escolhas do plano.

O spec precisa incluir critérios de aceite, cenários de borda e requisitos não funcionais que alteram o comportamento. Ele não precisa conhecer nomes de classes.”

### Ponto de ênfase

O spec separa valor e comportamento de implementação.

### Transição

“Mesmo um bom spec contém decisões que ainda não foram tomadas. É aí que entra o clarify.”

---

## Slide 8 — Clarify: perguntar antes de inventar

### Fala sugerida

“Uma pergunta sobre idempotência parece detalhe, mas muda várias camadas.

Se a mesma chave chegar com o mesmo payload, retornamos exatamente a decisão já persistida. Não recalculamos a regra e não publicamos outro evento.

Se a chave chegar com payload diferente, temos conflito semântico. Retornamos HTTP 409 com o código `IDEMPOTENCY_CONFLICT` e não alteramos o estado.

Essa resposta modifica contrato, modelo de dados, transação, tarefas e testes. Por isso ela entra no `spec.md`; não fica perdida na conversa com o agente.

Clarify funciona como um Product Manager técnico: procura ambiguidades de alto impacto antes de escrever código.”

### Transição

“Agora temos informação suficiente para escolher a arquitetura.”

---

## Slide 9 — Plan: transformar regras em arquitetura

### Fala sugerida

“É no plan que entram Java, Spring e as decisões arquiteturais.

Podemos organizar o projeto em Ports & Adapters: controller no adapter de entrada, caso de uso como porta de entrada, domínio independente, JPA na saída de persistência e outbox na saída de eventos.

O `research.md` registra trade-offs como publicação direta versus outbox, lock otimista e estratégia de idempotência. O `data-model.md` define entidades e objetos de valor. `contracts/` guarda OpenAPI, erros e exemplos.

Essa separação importa porque o mesmo comportamento poderia receber outro plano: Quarkus reativo, DynamoDB ou processamento assíncrono. O spec preserva a intenção; o plan registra uma arquitetura para realizá-la.”

### Cuidado arquitetural

Ports & Adapters deve proteger regras e dependências. Não deve criar vinte interfaces cerimoniais para um endpoint simples.

### Transição

“Depois da arquitetura, precisamos transformar o plano em unidades executáveis.”

---

## Slide 10 — Tasks: trabalho sequencial e paralelo

### Fala sugerida

“Tasks decompõe o plano em trabalho observável.

Na fase de contrato, criamos OpenAPI, modelo de erro e testes de contrato. Em paralelo, podemos construir objetos de valor e invariantes do domínio. Depois, adapters conectam REST, persistência, idempotência e outbox.

Uma tarefa boa informa o recorte, a dependência e o arquivo esperado. Por exemplo: T02 pode criar o `ErrorResponse` em paralelo. T08, que implementa o controller, depende do contrato T01.

Isso ajuda agentes e humanos. Fica claro o que pode ser feito simultaneamente, o que exige ordem e qual evidência demonstra conclusão.”

### Transição

“Antes de executar a lista, fazemos um check-up barato.”

---

## Slide 11 — Analyze: sanidade antes do patch

### Fala sugerida

“Analyze lê spec, plan e tasks sem modificar a implementação.

Ele pode encontrar que o spec exige idempotência, mas nenhuma tarefa persiste a chave. Pode detectar que o contrato responde 202 enquanto o cenário promete confirmação síncrona. Também pode confirmar que a regra de não registrar dados sensíveis aparece no plano e nos testes.

O valor não está em uma tabela colorida. Está em deslocar o erro para um momento em que a correção ainda é barata.

O diagnóstico não substitui revisão humana, mas entrega ao revisor um mapa objetivo de lacunas, inconsistências e cobertura.”

### Transição

“Com os artefatos coerentes, finalmente autorizamos a implementação.”

---

## Slide 12 — Implement e Converge

### Fala sugerida

“Agora o agente cria o controller, o caso de uso, o domínio e os adapters seguindo a ordem das tarefas.

O trecho de controller no slide é deliberadamente pequeno. A lógica não deveria morar ali. Ele valida o contrato HTTP, transforma o request em comando, executa o caso de uso e mapeia o resultado.

Os testes de unidade cobrem invariantes. Testes de integração cobrem transação, idempotência e outbox. Testes de contrato verificam OpenAPI. Um teste de arquitetura pode proteger as dependências.

Depois, converge compara o repositório com spec, plan e tasks. Se houver lacunas, acrescenta o trabalho restante. O agente não termina apenas porque compilou ou porque afirmou que terminou.”

### Ponto de ênfase

Implement gera código. Converge demonstra que o código representa o sistema especificado.

### Transição

“O resultado mais valioso não é só o endpoint funcionando; é a cadeia de explicação que permanece.”

---

## Slide 13 — Rastreabilidade da regra ao teste

### Fala sugerida

“A regra SPEC-03 diz que a retentativa não duplica alteração.

A tarefa T10 implementa o registro de idempotência e sua validação. O teste IT-07 executa duas chamadas e verifica uma única mudança de estado e um único evento.

Essa cadeia permite responder por que o código existe e como sabemos que ele funciona. Ela melhora revisão, auditoria, manutenção e onboarding.

O ganho não é produzir mais Markdown. É reduzir decisões invisíveis e dependência da memória da conversa. Em brownfield, isso é ainda mais importante: a especificação pode começar reconstruindo o comportamento atual antes de propor mudança.”

### Pergunta para o time

“Hoje, quanto tempo levamos para sair de uma regra de negócio e encontrar o teste que realmente a protege?”

### Transição

“Então, qual é um começo realista?”

---

## Slide 14 — A IA acelera; a especificação preserva a intenção

### Fala sugerida

“O recado final é simples: a IA acelera a construção, mas velocidade não preserva intenção sozinha.

Spec-Driven Development organiza as decisões que precisam sobreviver ao prompt, à sessão do agente e à primeira versão do código.

Não precisamos começar com um programa inteiro. Podemos escolher uma API, uma regra crítica e construir uma cadeia completa: spec, plano, tarefa, código e teste.

Quando o agente sabe o que não pode inventar, ele ganha espaço para fazer aquilo que realmente faz bem: executar com velocidade.”

### Encerramento sugerido

“Qual regra crítica do nosso próximo endpoint merece virar especificação antes que vire código?”

### Referências

- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [Documentação do Spec Kit](https://github.github.io/spec-kit/)
- [Playlist usada como fonte do material original](https://youtube.com/playlist?list=PL4cUxeGkcC9h9RbDpG8ZModUzwy45tLjb)
- PDF de referência: `Spec_Driven_AI_Engineering.pdf`, fornecido para esta apresentação.

---

## Respostas rápidas para perguntas prováveis

### Isso não é waterfall com Markdown?

Não. O fluxo aceita refinamento e convergência. A diferença é que decisões mudam por meio de artefatos versionados e verificáveis, em vez de permanecerem apenas em conversas ou na memória do agente.

### O spec substitui histórias no Jira?

Não necessariamente. Jira pode continuar como sistema de trabalho compartilhado. O spec é o contrato detalhado que orienta arquitetura e execução. Integração e nível de duplicação precisam ser decididos pelo time.

### Precisamos versionar `.specify/` e `specs/`?

Em projetos consumidores, a política deve ser explícita. Artefatos de feature que sustentam rastreabilidade normalmente precisam sobreviver à sessão e ser revisáveis. Já scaffolding gerado, integrações específicas de agente e saídas efêmeras podem seguir outra política. O próprio repositório do Spec Kit não versiona todos os artefatos usados no dogfooding; isso não vira regra universal para produtos consumidores.

### Constitution não vira um arquivo enorme?

Vira, se receber toda preferência da organização. Mantenha apenas princípios globais, testáveis e de alto impacto. Padrões detalhados podem viver em referências, templates, linters, testes de arquitetura ou skills carregadas sob demanda.

### É obrigatório usar todos os comandos em toda mudança?

Não. O fluxo completo serve bem a features com decisão e risco relevantes. Correções triviais podem usar um caminho mais curto, desde que o time preserve diagnóstico e evidência adequados.

### Onde entram DDD e Clean Architecture?

No plan e na constitution, quando forem úteis para proteger o domínio e as dependências. O Spec Kit não determina a arquitetura; ele torna a escolha explícita e verificável.

### O agente pode alterar o spec durante a implementação?

Pode propor uma alteração, mas mudança de comportamento deve ser tratada como decisão de produto ou arquitetura. Atualize o artefato correto, revise o impacto e regenere ou ajuste as etapas dependentes.

### Isso garante código correto?

Não. Melhora a qualidade das entradas, a coerência entre artefatos e a rastreabilidade. Ainda precisamos de revisão, testes, observabilidade, segurança e julgamento de engenharia.
