# Fase 4 — Store e estado global

> Os slices dependem das entidades criadas na Fase 3.
> A store precisa existir antes das páginas e componentes, pois eles consomem o estado.

## 4.1 Criar a estrutura da store

1. Criar uma nova branch: `git checkout -b feature/store`
2. Dentro de `src/store/`, criar o diretório `slices/`
   - Em projetos pequenos, os arquivos de slice ficam diretamente em `store/slices/`
   - Em projetos maiores, organizar por domínio: `store/slices/auth/`, `store/slices/users/`, etc.
3. Criar e configurar o arquivo [index.ts](../src/store/index.starter.ts)
4. Criar e configurar o arquivo [hooks.ts](../src/store/hooks.ts)

---

## 4.2 Criar os mocks da aplicação

1. Criar o diretório `src/mocks/`
2. Para cada entidade criada na Fase 3, criar um arquivo de mock correspondente em `src/mocks/`
   - Os dados mockados devem refletir fielmente a estrutura dos models
   - Usar dados realistas para facilitar a validação visual nas páginas

> Caso precise de referência de estrutura ou queira comparar sua implementação com exemplos
> baseados nas entidades do catálogo da Fase 3, consulte o catálogo de mocks na seção 4.3.

---

## 4.3 Catálogo de mocks

> Este catálogo existe como material de apoio. Consulte quando precisar de referência de
> estrutura, exemplos de dados realistas ou queira comparar sua implementação com outras
> possibilidades. Os mocks são arrays prontos para uso em listagens e testes de componentes —
> para testes de componente individual, basta acessar um item do array diretamente.

- [mockUsers](../src/mocks/users.mock.ts)
  - **O que é:** array de usuários com dados realistas
  - **Para que serve:** testar listagens, perfis, avatares e componentes que consomem dados de usuário
  - **Arquivo:** [users.mock.ts](../src/mocks/users.mock.ts)

- [mockAddresses](../src/mocks/addresses.mock.ts)
  - **O que é:** array de endereços com dados realistas
  - **Para que serve:** testar formulários de checkout, perfil e cadastro
  - **Arquivo:** [addresses.mock.ts](../src/mocks/addresses.mock.ts)

- [mockCompanies](../src/mocks/companies.mock.ts)
  - **O que é:** array de empresas com dados realistas
  - **Para que serve:** testar catálogos de fornecedores, listagens organizacionais e cards de empresa
  - **Arquivo:** [companies.mock.ts](../src/mocks/companies.mock.ts)

- [mockCategories](../src/mocks/categories.mock.ts)
  - **O que é:** array de categorias com dados realistas
  - **Para que serve:** testar filtros, menus de navegação e agrupamentos de conteúdo
  - **Arquivo:** [categories.mock.ts](../src/mocks/categories.mock.ts)

- [mockTags](../src/mocks/tags.mock.ts)
  - **O que é:** array de tags com dados realistas
  - **Para que serve:** testar componentes de marcação, filtros e exibição de rótulos
  - **Arquivo:** [tags.mock.ts](../src/mocks/tags.mock.ts)

- [mockProducts](../src/mocks/products.mock.ts)
  - **O que é:** array de produtos com dados realistas
  - **Para que serve:** testar catálogos, cards de produto, listagens e páginas de detalhe
  - **Arquivo:** [products.mock.ts](../src/mocks/products.mock.ts)

- [mockCarts](../src/mocks/carts.mock.ts)
  - **O que é:** array de carrinhos com itens e totais realistas
  - **Para que serve:** testar o drawer do carrinho, resumo de compra e página de checkout
  - **Arquivo:** [carts.mock.ts](../src/mocks/carts.mock.ts)

- [mockOrders](../src/mocks/orders.mock.ts)
  - **O que é:** array de pedidos com status e itens realistas
  - **Para que serve:** testar histórico de pedidos, dashboard e páginas de detalhe de pedido
  - **Arquivo:** [orders.mock.ts](../src/mocks/orders.mock.ts)

- [mockMedias](../src/mocks/medias.mock.ts)
  - **O que é:** array de arquivos de mídia com dados realistas
  - **Para que serve:** testar galerias, uploads e componentes que exibem imagens e documentos
  - **Arquivo:** [medias.mock.ts](../src/mocks/medias.mock.ts)

- [mockPosts](../src/mocks/posts.mock.ts)
  - **O que é:** array de posts com autor, conteúdo e mídia realistas
  - **Para que serve:** testar feeds, cards de conteúdo e páginas de detalhe de post
  - **Arquivo:** [posts.mock.ts](../src/mocks/posts.mock.ts)

- [mockComments](../src/mocks/comments.mock.ts)
  - **O que é:** array de comentários com autor e conteúdo realistas
  - **Para que serve:** testar seções de comentários e interações em posts
  - **Arquivo:** [comments.mock.ts](../src/mocks/comments.mock.ts)

- [mockNotifications](../src/mocks/notifications.mock.ts)
  - **O que é:** array de notificações com tipos e estados variados
  - **Para que serve:** testar a central de notificações, badges e alertas
  - **Arquivo:** [notifications.mock.ts](../src/mocks/notifications.mock.ts)

- [mockSearchResults](../src/mocks/searchResults.mock.ts)
  - **O que é:** array de resultados de busca com tipos variados
  - **Para que serve:** testar páginas de resultados e componentes de busca global
  - **Arquivo:** [searchResults.mock.ts](../src/mocks/searchResults.mock.ts)

---

## 4.4 Criar os slices da aplicação

Para cada entidade que precisar de estado global, criar um slice seguindo a estrutura:

1. Tipo do state
2. `initialState` importando os dados do arquivo de mock correspondente
3. O slice contendo `name`, `initialState` e `reducers`
4. Exportar as `actions`
5. Exportar os `selectors`
6. Exportar o `reducer` como default
7. Registrar o reducer no [index.ts](../src/store/index.ts)

> Usar `createSelector` apenas quando houver derivação de dados combinando
> múltiplas partes do estado. Para acesso direto, selectors simples são suficientes.

> Caso precise de referência de estrutura ou queira comparar sua implementação com exemplos
> baseados nas entidades do catálogo da Fase 3, consulte o catálogo de slices na seção 4.5.

---

## 4.5 Catálogo de slices

> Este catálogo existe como material de apoio. Consulte quando precisar de referência de
> estrutura, padrões de organização ou queira comparar sua implementação com outras
> possibilidades. Os slices seguem a abordagem normalizada com `byId` e `allIds`, recomendada
> para aplicações com requisitos de controle de acesso, integridade de dados e operações
> concorrentes.

- [authSlice](../src/store/slices/authSlice.ts)
  - **O que é:** gerenciamento da sessão autenticada
  - **Para que serve:** armazena o usuário logado, o token de acesso e os estados de carregamento e erro da autenticação
  - **Arquivo:** [authSlice.ts](../src/store/slices/authSlice.ts)

- [userSlice](../src/store/slices/userSlice.ts)
  - **O que é:** gerenciamento do perfil de usuário visualizado
  - **Para que serve:** armazena o usuário sendo visualizado e o estado de carregamento do perfil
  - **Arquivo:** [userSlice.ts](../src/store/slices/userSlice.ts)

- [notificationSlice](../src/store/slices/notificationSlice.ts)
  - **O que é:** gerenciamento da central de notificações
  - **Para que serve:** armazena a listagem normalizada de notificações e a contagem de não lidas
  - **Arquivo:** [notificationSlice.ts](../src/store/slices/notificationSlice.ts)

- [cartSlice](../src/store/slices/cartSlice.ts)
  - **O que é:** gerenciamento do carrinho de compras
  - **Para que serve:** armazena os itens do carrinho, os totais calculados e o estado de visibilidade do drawer
  - **Arquivo:** [cartSlice.ts](../src/store/slices/cartSlice.ts)

- [productSlice](../src/store/slices/productSlice.ts)
  - **O que é:** gerenciamento da listagem de produtos
  - **Para que serve:** armazena os produtos normalizados, o item selecionado e os estados de paginação e carregamento
  - **Arquivo:** [productSlice.ts](../src/store/slices/productSlice.ts)

- [orderSlice](../src/store/slices/orderSlice.ts)
  - **O que é:** gerenciamento do histórico de pedidos
  - **Para que serve:** armazena os pedidos normalizados, o pedido selecionado e os estados de carregamento e erro
  - **Arquivo:** [orderSlice.ts](../src/store/slices/orderSlice.ts)

- [filterSlice](../src/store/slices/filterSlice.ts)
  - **O que é:** gerenciamento de busca e filtro transversal
  - **Para que serve:** armazena o termo de busca e o critério de filtro ativo — reutilizável em qualquer listagem da aplicação
  - **Arquivo:** [filterSlice.ts](../src/store/slices/filterSlice.ts)

---

## 4.6 Atualizar o main.tsx

1. Confirmar que o `Provider` da store já está configurado no [main.tsx](../src/main.tsx)

---

## 4.7 Verificação e finalização da Fase 4

1. Confirmar que `npm run dev` roda sem erros de tipagem
2. Confirmar que todos os slices estão registrados no `index.ts` da store
3. Realizar os commits das etapas:
   - `chore: configuração da store e hooks tipados`
   - `feat: criação dos mocks da aplicação`
   - `feat: criação dos slices da aplicação`
4. Criar a branch remota no GitHub: `git push origin HEAD`
5. Realizar o merge da branch:
   - Atribuir a branch para revisão
   - Validar se todas as informações estão corretas
   - Realizar o merge
   - Voltar localmente para a branch `main`: `git checkout main`
   - Atualizar os dados mergeados: `git pull`
