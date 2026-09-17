# Script — Idempotência em Sistemas Distribuídos

Tom: informal, direto e técnico. A ideia é parecer conversa de engenharia, não aula de protocolo. Duração sugerida: 20–25 minutos.

## Slide 01 — O usuário clicou duas vezes

**Abertura**

“Quero começar com um bug que parece pequeno, mas pode virar um problemão: o usuário clicou duas vezes. Uma tela travou, a resposta não voltou, ele tentou de novo. A pergunta é: nosso sistema vai interpretar isso como duas intenções diferentes?”

“Idempotência é basicamente a arte de fazer o sistema dizer: calma, eu já entendi o que você queria da primeira vez.”

**Mensagem principal**

O problema não é existir retry. O problema é o retry gerar efeito de negócio duplicado.

**Transição**

“E aí começa a parte divertida dos sistemas distribuídos: o cliente quase nunca sabe exatamente o que aconteceu do outro lado.”

---

## Slide 02 — O caos real

“Imagina que a primeira request saiu. O servidor processou. Mas a resposta demorou, caiu no caminho ou chegou tarde.”

“Do ponto de vista do cliente aconteceu uma coisa só: silêncio.”

“Então ele manda de novo. E agora temos duas requests potencialmente válidas chegando para uma única intenção.”

**Ponto para reforçar**

Timeout não significa necessariamente falha de processamento. Pode significar apenas falha de comunicação da resposta.

**Gancho**

“Se retry é inevitável, então a arquitetura tem que aceitar isso como parte do jogo.”

---

## Slide 03 — Mesmo efeito final

“Idempotência parece palavra feita para assustar dev em entrevista, mas a ideia é bem simples.”

“Trancar uma porta uma vez ou dez vezes produz o mesmo estado final: porta trancada.”

“Apertar várias vezes o botão do elevador também não deveria materializar dez elevadores na sua frente. Ainda bem.”

**Mensagem principal**

O que importa é repetir a operação sem multiplicar o efeito final.

---

## Slide 04 — Resultado não é resposta HTTP

“Aqui tem uma pegadinha clássica.”

“Primeiro DELETE: removi o usuário, devolvo 204. Segundo DELETE: o usuário já não existe, talvez eu devolva 404.”

“As respostas foram diferentes. O estado final foi o mesmo.”

“Então idempotência não quer dizer copiar e colar a mesma resposta HTTP. Ela quer dizer preservar o efeito da operação.”

**Transição**

“E algumas operações já ajudam a gente nisso por natureza.”

---

## Slide 05 — Naturalmente idempotente

“POST normalmente fala: crie algo novo. Se eu repetir, posso criar outro.”

“PUT normalmente fala: quero que esse recurso específico termine nesse estado. Se eu repetir o mesmo PUT, a tendência é continuar no mesmo estado.”

“DELETE segue raciocínio parecido: depois que acabou, continuar pedindo para apagar não cria um novo efeito de negócio.”

**Mensagem principal**

Antes de inventar cache, token e mecanismo mirabolante, vale olhar a própria semântica da operação.

---

## Slide 06 — Idempotency-Key

“Agora entramos no caso mais interessante: preciso de POST, mas não quero duplicidade.”

“O cliente cria uma chave única para aquela intenção. Pode ser um UUID.”

“Chegou no servidor: eu procuro a chave. Nunca vi? Processo e guardo o resultado. Já vi? Não executo tudo de novo; devolvo o que já aconteceu.”

“O ponto mais importante aqui é: a chave precisa acompanhar a intenção original.”

“Se a cada retry o cliente criar outra chave, acabou a mágica. Para o servidor são ações novas.”

**Frase de impacto**

“Mesma intenção, mesma chave.”

---

## Slide 07 — Version-based

“Idempotência também aparece quando duas requisições disputam o mesmo estado.”

“Request A espera version zero, atualiza e vira version um.”

“Request B também esperava version zero. Só que chegou tarde. Agora aquela versão não existe mais como estado atual.”

“Em vez de sobrescrever silenciosamente, rejeitamos a operação — aqui o material usa 409 Conflict.”

**Mensagem principal**

Optimistic locking protege concorrência paralela usando a versão esperada como pré-condição.

---

## Slide 08 — Deduplicação por conteúdo

“E se eu não tiver uma chave explícita?”

“Uma alternativa apresentada no material é transformar o próprio conteúdo em identidade.”

“Eu calculo um hash, como SHA-256. Mesma mensagem, mesmo hash. Se eu já processei aquele hash, posso identificar uma duplicata.”

“Isso combina bem com mensageria e filas.”

**Atenção**

“Mas qualquer alteração de conteúdo muda o hash. Então é simples e útil, mas não é uma identidade semântica perfeita.”

---

## Slide 09 — Storage + TTL

“Agora aparece aquela parte menos glamourosa e muito importante: onde eu guardo essas chaves?”

“O material sugere um key-value store distribuído, como Redis ou DynamoDB. Nada de memória local do pod achando que o universo inteiro cabe naquela JVM.”

“E a chave não precisa viver eternamente. O PDF sugere uma janela de 24 horas a 7 dias, dependendo da regra do negócio.”

“Depois disso, auto-cleanup.”

**Mensagem principal**

TTL não é detalhe de infraestrutura; ele define por quanto tempo uma ação continua reconhecível como a mesma ação.

---

## Slide 10 — Status HTTP

“Se a API é idempotente, o contrato também precisa ajudar quem está operando e depurando.”

“201 pode marcar a primeira criação. 200 ou 204 podem representar o estado mantido. 202 quando ainda está processando. 409 quando existe conflito. 408 pode indicar que o cliente deve tentar de novo usando a mesma chave.”

“E tem uma ideia bem útil no material: devolver headers como Idempotency-Key ou X-Idempotent-Replayed para deixar claro o que aconteceu.”

**Transição**

“Porque sistema confiável sem observabilidade vira só esperança com dashboard bonito.”

---

## Slide 11 — Observabilidade

“Quatro coisas para observar.”

“Taxa de duplicação. Se disparou, talvez não seja backend; pode ser UX ou rede.”

“Tempo médio de lock. Lock longo vira gargalo.”

“Tamanho do storage. TTL mal calibrado vira custo e operação.”

“E erros por chave, principalmente timeout e 409.”

**Mensagem principal**

Métricas não entram só depois. Elas ajudam a decidir se a estratégia de idempotência está funcionando.

---

## Slide 12 — Consumer como guardião

“Em mensageria, o material assume uma coisa importante: duplicata pode chegar.”

“A responsabilidade do consumer é impedir que isso vire efeito duplicado.”

“Primeira mensagem: processa e registra a identidade. Segunda mensagem igual: reconhece, descarta e segue a vida.”

“Isso muda a pergunta de ‘como garantir que a fila nunca duplique?’ para ‘como garantir que meu negócio continue correto quando duplicar?’.”

**Frase curta**

“A fila pode repetir. O negócio não precisa repetir.”

---

## Slide 13 — Rollback vs compensação

“Num cenário simples com um único banco relacional, rollback pode desfazer tudo.”

“Mas quando a operação atravessa sistemas distribuídos, não existe um grande Ctrl+Z global.”

“O material traz a compensação: se uma ação já aconteceu, você executa outra ação que corrige o efeito, como um estorno.”

**Mensagem principal**

Em sistemas distribuídos, corrigir explicitamente costuma substituir a ideia de voltar magicamente no tempo.

---

## Slide 14 — Matriz de padrões

“Esse slide é meu mapa de bolso.”

“PUT e DELETE quando a operação já é naturalmente idempotente.”

“Chave quando estamos criando recurso e queremos reconhecer a intenção original.”

“Versão para concorrência.”

“Token para fluxos web controlados pelo servidor.”

“Timestamp quando tempo faz parte da regra — com cuidado por causa de clock skew.”

“Hash de conteúdo para mensageria e filas.”

“Não tem padrão universal. Tem padrão adequado ao problema.”

---

## Slide 15 — Checklist

“Para fechar, eu faria seis perguntas antes de colocar isso em produção.”

“A chave nasce no lado certo? O retry reutiliza a mesma chave? Existe TTL e limpeza? A API ajuda no troubleshooting? O banco controla concorrência onde precisa? E eu consigo enxergar duplicação no dashboard?”

“Se a resposta for não para metade disso, provavelmente não temos idempotência. Temos boa intenção.”

**Fechamento**

“Retry não é exceção. Rede falha, cliente repete, mensagem duplica. Idempotência é o que transforma essa bagunça normal de sistemas distribuídos em comportamento previsível.”

“E talvez essa seja a ideia mais importante: a gente não projeta esperando que tudo funcione. A gente projeta para continuar correto quando não funcionar.”
