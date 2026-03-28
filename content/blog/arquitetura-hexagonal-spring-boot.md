---
title: "Arquitetura Hexagonal na Prática com Spring Boot"
slug: "arquitetura-hexagonal-spring-boot"
date: "2026-03-20"
tags: ["arquitetura", "java", "spring-boot", "ddd"]
excerpt: "Como estruturar um projeto real com portas e adaptadores, evitando o acoplamento entre regras de negócio e infraestrutura. Um guia prático com exemplos em Java."
published: true
---

## O Problema do Acoplamento

Todo sistema começa simples. Uma `@RestController` que chama uma `@Service` que usa um `@Repository`. Funciona. Mas com o tempo, você descobre que a regra de negócio vazou para o controller, que o service depende do JPA, e que testar qualquer coisa isolada é impossível.

A Arquitetura Hexagonal (também chamada de *Ports & Adapters*) resolve isso com uma premissa simples: **o domínio não conhece o mundo externo**.

## Os Conceitos Centrais

### Domínio

É onde vivem suas regras de negócio — entidades, value objects, serviços de domínio. O domínio não importa nada do Spring, JPA ou HTTP. É Java puro.

```java
// Domínio — sem dependência de infraestrutura
public class ContaCorrente {
    private final ContaId id;
    private BigDecimal saldo;

    public void creditar(BigDecimal valor) {
        if (valor.compareTo(BigDecimal.ZERO) <= 0)
            throw new DomainException("Valor deve ser positivo");
        this.saldo = this.saldo.add(valor);
    }
}
```

### Portas (Ports)

São as **interfaces** que o domínio expõe ou consome. Existem dois tipos:

- **Inbound ports**: o que o mundo externo pode pedir ao domínio (ex: `TransferirDinheiroUseCase`)
- **Outbound ports**: o que o domínio precisa do mundo externo (ex: `ContaRepository`)

```java
// Inbound port
public interface TransferirDinheiroUseCase {
    void transferir(TransferirDinheiroCommand command);
}

// Outbound port
public interface ContaRepository {
    ContaCorrente buscarPorId(ContaId id);
    void salvar(ContaCorrente conta);
}
```

### Adaptadores (Adapters)

São as **implementações concretas** das portas — REST controllers, repositories JPA, clientes HTTP.

```java
// Adapter inbound — REST
@RestController
@RequestMapping("/transferencias")
public class TransferenciaController {
    private final TransferirDinheiroUseCase transferirDinheiroUseCase;

    @PostMapping
    public ResponseEntity<Void> transferir(@RequestBody TransferenciaRequest req) {
        transferirDinheiroUseCase.transferir(
            new TransferirDinheiroCommand(req.origem(), req.destino(), req.valor())
        );
        return ResponseEntity.ok().build();
    }
}

// Adapter outbound — JPA
@Component
public class ContaRepositoryAdapter implements ContaRepository {
    private final ContaJpaRepository jpa;

    @Override
    public ContaCorrente buscarPorId(ContaId id) {
        return jpa.findById(id.value())
            .map(ContaMapper::toDomain)
            .orElseThrow(() -> new ContaNaoEncontradaException(id));
    }
}
```

## Estrutura de Pacotes

```
com.empresa.conta
├── domain/
│   ├── model/          ← entidades, VOs
│   ├── service/        ← application services
│   └── port/
│       ├── in/         ← inbound ports (use cases)
│       └── out/        ← outbound ports (repositories, clients)
├── adapter/
│   ├── in/
│   │   └── web/        ← controllers REST
│   └── out/
│       ├── persistence/ ← JPA adapters
│       └── messaging/   ← Kafka producers
└── config/             ← Spring beans, configurações
```

## Por Que Vale o Esforço?

1. **Testabilidade**: o domínio pode ser testado com mocks simples, sem subir Spring
2. **Independência de framework**: trocar JPA por JDBC é só criar outro adapter
3. **Clareza de intenção**: onde está a regra de negócio nunca é ambíguo

Se o seu sistema tem regras de negócio complexas que precisam durar, a Arquitetura Hexagonal é um investimento que se paga.

> Um teste de unidade no domínio com `@ExtendWith(MockitoExtension.class)` roda em milissegundos. Um teste com `@SpringBootTest` pode levar 10 segundos. Multiplique isso por 500 testes.

A diferença importa.
