# Fase 3 — Entidades do projeto

> Definir as entidades antes de qualquer slice ou componente evita que interfaces
> sejam criadas inline e duplicadas ao longo da aplicação.

## 3.1 Mapear a regra de negócio

1. Criar uma nova branch: `git checkout -b feature/entities`
2. Acessar o [diagrams.net](https://app.diagrams.net)
3. Criar um fluxograma cobrindo todos os fluxos da aplicação:
   - Quais entidades existem
   - Como elas se relacionam
   - Quais dados cada entidade precisa conter
   - Quais fluxos geram requisições para o backend

> Não avançar para os próximos passos sem ter o fluxograma finalizado.
> É ele que determina o que será criado nas etapas seguintes.

---

## 3.2 Criar a estrutura de diretórios

1. Dentro de `src/types/`, criar os diretórios:
   - `src/types/models`
   - `src/types/dtos`
   - `src/types/requests`
   - `src/types/responses`
2. Dentro de `src/utils/`, criar o diretório:
   - `src/utils/transformers`

---

## 3.3 Criar os enums (quando necessário)

1. Quando uma entidade possuir valores categóricos fixos (ex: métodos de pagamento, status, tipos):
   - Criar o diretório `src/types/enums/`
   - Criar um arquivo por domínio de enum

---

## 3.4 Selecionar as entidades do catálogo

Analisar o projeto e selecionar as entidades necessárias a partir do catálogo disponível.
Para cada entidade selecionada, copiar os arquivos correspondentes para os diretórios adequados dentro de `src/types/` e `src/utils/transformers/` e adaptar conforme a necessidade do projeto.

> As entidades do catálogo são genéricas por definição. Os campos representam uma base inicial e cobrem os cenários mais comuns do mercado.
> Ajustes pontuais são esperados conforme as páginas e integrações forem implementadas ao longo das fases seguintes.
> Quando isso ocorrer, registrar as alterações com commits `fix:` ou `refactor:` referenciando o contexto. Por exemplo: `refactor: ajuste no model User após integração com a página de perfil`
> O domínio da aplicação é responsabilidade do desenvolvedor.

**Identidade e acesso**

- [User](../src/types/models/user.ts)
  - **O que é:** entidade central de qualquer aplicação autenticada
  - **Para que serve:** representa o usuário da plataforma — base para perfis, autores, participantes e variações como administrador
  - **Arquivos:** [model](../src/types/models/user.ts) · [dto](../src/types/dtos/user.dto.ts) · [transformer](../src/utils/transformers/user.transformer.ts) · [requests](../src/types/requests/user.requests.ts) · [enums](../src/types/enums/user.enums.ts)

- [Address](../src/types/models/address.ts)
  - **O que é:** endereço físico associado a usuários, empresas ou pedidos
  - **Para que serve:** reutilizável em checkout, perfil e cadastro
  - **Arquivos:** [model](../src/types/models/address.ts) · [dto](../src/types/dtos/address.dto.ts) · [transformer](../src/utils/transformers/address.transformer.ts)

**Autenticação**

- [LoginRequest](../src/types/requests/auth.requests.ts)
  - **O que é:** dados enviados na autenticação do usuário
  - **Para que serve:** padrão em qualquer aplicação com login
  - **Arquivos:** [requests](../src/types/requests/auth.requests.ts) · [responses](../src/types/responses/auth.responses.ts)

- [RegisterRequest](../src/types/requests/auth.requests.ts)
  - **O que é:** dados enviados no cadastro de novo usuário
  - **Para que serve:** complementar ao `LoginRequest` — presente em qualquer aplicação com cadastro
  - **Arquivos:** [requests](../src/types/requests/auth.requests.ts) · [responses](../src/types/responses/auth.responses.ts)

- [AuthResponse](../src/types/responses/auth.responses.ts)
  - **O que é:** resposta da autenticação contendo token e dados do usuário autenticado
  - **Para que serve:** estrutura padrão retornada pelo backend após login ou cadastro bem-sucedido
  - **Arquivos:** [responses](../src/types/responses/auth.responses.ts)

**Organização e comércio**

- [Company](../src/types/models/company.ts)
  - **O que é:** representa qualquer organização — loja, restaurante, fornecedor, instituição
  - **Para que serve:** base genérica para entidades organizacionais de qualquer domínio
  - **Arquivos:** [model](../src/types/models/company.ts) · [dto](../src/types/dtos/company.dto.ts) · [transformer](../src/utils/transformers/company.transformer.ts)

- [Category](../src/types/models/category.ts)
  - **O que é:** agrupamento genérico para produtos, conteúdos ou qualquer entidade categorizável
  - **Para que serve:** recorrente em e-commerce, portais e feeds
  - **Arquivos:** [model](../src/types/models/category.ts) · [dto](../src/types/dtos/category.dto.ts) · [transformer](../src/utils/transformers/category.transformer.ts)

- [Tag](../src/types/models/tag.ts)
  - **O que é:** rótulo genérico para categorizar ou marcar conteúdo
  - **Para que serve:** generalização de hashtags e marcadores — aplicável em qualquer domínio
  - **Arquivos:** [model](../src/types/models/tag.ts) · [dto](../src/types/dtos/tag.dto.ts) · [transformer](../src/utils/transformers/tag.transformer.ts)

- [Product](../src/types/models/product.ts)
  - **O que é:** item comercializável, físico ou digital
  - **Para que serve:** base para catálogos, cardápios e lojas de qualquer domínio
  - **Arquivos:** [model](../src/types/models/product.ts) · [dto](../src/types/dtos/product.dto.ts) · [transformer](../src/utils/transformers/product.transformer.ts)

- [Cart](../src/types/models/cart.ts)
  - **O que é:** estado do carrinho de compras
  - **Para que serve:** representa os itens selecionados antes da finalização do pedido
  - **Arquivos:** [model](../src/types/models/cart.ts) · [dto](../src/types/dtos/cart.dto.ts) · [transformer](../src/utils/transformers/cart.transformer.ts) · [enums](../src/types/enums/order.enums.ts)

- [Order](../src/types/models/order.ts)
  - **O que é:** pedido finalizado
  - **Para que serve:** representa a compra concluída com status, itens e pagamento
  - **Arquivos:** [model](../src/types/models/order.ts) · [dto](../src/types/dtos/order.dto.ts) · [transformer](../src/utils/transformers/order.transformer.ts) · [requests](../src/types/requests/order.requests.ts) · [enums](../src/types/enums/order.enums.ts)

**Mídia**

- [Media](../src/types/models/media.ts)
  - **O que é:** arquivo de mídia associado a qualquer entidade
  - **Para que serve:** representa imagens, vídeos ou documentos — base para uploads e galerias
  - **Arquivos:** [model](../src/types/models/media.ts) · [dto](../src/types/dtos/media.dto.ts) · [transformer](../src/utils/transformers/media.transformer.ts) · [enums](../src/types/enums/media.enums.ts)

**Conteúdo e engajamento**

- [Post](../src/types/models/post.ts)
  - **O que é:** unidade de conteúdo publicável com autor, data e mídia
  - **Para que serve:** base para feeds, blogs, notícias e redes sociais
  - **Arquivos:** [model](../src/types/models/post.ts) · [dto](../src/types/dtos/post.dto.ts) · [transformer](../src/utils/transformers/post.transformer.ts) · [requests](../src/types/requests/post.requests.ts) · [enums](../src/types/enums/post.enums.ts)

- [Comment](../src/types/models/comment.ts)
  - **O que é:** resposta ou reação textual associada a outro conteúdo
  - **Para que serve:** reutilizável em qualquer contexto com interação entre usuários
  - **Arquivos:** [model](../src/types/models/comment.ts) · [dto](../src/types/dtos/comment.dto.ts) · [transformer](../src/utils/transformers/comment.transformer.ts) · [requests](../src/types/requests/comment.requests.ts)

- [Like](../src/types/models/like.ts)
  - **O que é:** registro de reação positiva a um conteúdo
  - **Para que serve:** reutilizável em redes sociais, feeds e sistemas de avaliação
  - **Arquivos:** [model](../src/types/models/like.ts) · [dto](../src/types/dtos/like.dto.ts) · [transformer](../src/utils/transformers/like.transformer.ts)

- [Notification](../src/types/models/notification.ts)
  - **O que é:** evento gerado pelo sistema para informar o usuário sobre ações relevantes
  - **Para que serve:** base para centrais de notificação e alertas em tempo real
  - **Arquivos:** [model](../src/types/models/notification.ts) · [dto](../src/types/dtos/notification.dto.ts) · [transformer](../src/utils/transformers/notification.transformer.ts) · [enums](../src/types/enums/notification.enums.ts)

**Busca**

- [SearchParams](../src/types/requests/search.requests.ts)
  - **O que é:** parâmetros enviados em requisições de busca
  - **Para que serve:** reutilizável em qualquer página com filtro ou pesquisa
  - **Arquivos:** [requests](../src/types/requests/search.requests.ts)

- [SearchResult](../src/types/models/searchResult.ts)
  - **O que é:** item individual retornado em uma busca
  - **Para que serve:** estrutura genérica para exibição de resultados de múltiplos tipos
  - **Arquivos:** [model](../src/types/models/searchResult.ts) · [dto](../src/types/dtos/searchResult.dto.ts) · [transformer](../src/utils/transformers/searchResult.transformer.ts) · [responses](../src/types/responses/search.responses.ts)

**Respostas compartilhadas**

- [PaginatedResponse](../src/types/responses/common.ts)
  - **O que é:** estrutura genérica de resposta paginada
  - **Para que serve:** reutilizável em qualquer listagem que retorne dados paginados do backend
  - **Arquivos:** [responses](../src/types/responses/common.ts)

---

## 3.5 Criar os arquivos de entidades específicas do projeto

A partir do fluxograma, para cada entidade identificada que não esteja coberta pelo catálogo:

1. Criar o model em `src/types/models/` — representa a entidade no frontend (camelCase)
2. Criar o DTO em `src/types/dtos/` — representa o contrato vindo do backend (snake_case)
3. Criar o transformer em `src/utils/transformers/` — converte o DTO para o model
4. Criar o request em `src/types/requests/` — quando a entidade gerar formulários ou envio de dados para a API

---

## 3.6 Criar o arquivo de responses compartilhadas

1. Criar o arquivo `src/types/responses/common.ts` contendo estruturas genéricas de resposta da API, como `PaginatedResponse` — já documentada no catálogo da Seção 3.4

---

## 3.7 Verificação e finalização da Fase 3

1. Confirmar que todas as entidades do fluxograma foram criadas
2. Confirmar que todo campo snake_case do backend tem correspondência camelCase no model
3. Confirmar que os transformers cobrem todos os campos dos DTOs
4. Confirmar que `npm run dev` roda sem erros de tipagem
5. Realizar os commits das etapas:
   - `feat: criação dos modelos de entidade da aplicação`
   - `feat: criação dos contratos de entidade da aplicação`
   - `feat: criação dos transformers da aplicação`
   - `feat: criação dos requests da aplicação`
   - `feat: criação dos responses da aplicação`
   - `feat: criação dos enums da aplicação` (se aplicável)
6. Criar a branch remota no GitHub: `git push origin HEAD`
7. Realizar o merge da branch:
   - Atribuir a branch para revisão
   - Validar se todas as informações estão corretas
   - Realizar o merge
   - Voltar localmente para a branch `main`: `git checkout main`
   - Atualizar os dados mergeados: `git pull`
