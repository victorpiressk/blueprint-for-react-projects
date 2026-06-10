# Fase 2 — Estrutura, dependências e estilização global

> Os componentes dependem das variáveis do tema. Por isso, a estilização global
> é criada antes de qualquer componente ou página.
> Antes de iniciar essa fase, definir se a aplicação terá um único tema ou múltiplos temas,
> pois isso determina qual abordagem seguir.

## 2.1 Instalar as dependências do projeto

1. Criar uma nova branch: `git checkout -b feature/project-structure`
2. Instalar as dependências principais:
   - Styled Components: `npm install styled-components`
   - Tipagem do Styled Components: `npm install --save-dev @types/styled-components`
   - React Router: `npm install react-router-dom`
   - Redux Toolkit: `npm install @reduxjs/toolkit react-redux`

---

## 2.2 Criar a estrutura de pastas

1. Dentro de `src/`, criar as seguintes pastas:

```
src/
├── assets/        ← imagens, fontes e ícones estáticos
├── components/    ← componentes reutilizáveis (Button, Input, Modal...)
├── contexts/      ← contextos globais da aplicação (ToastContext, ...)
├── hooks/         ← custom hooks (useAuth, useFetch, useForm...)
├── pages/         ← uma pasta por página (Login/, Home/, Dashboard/...)
├── routes/        ← configuração de rotas e componente de rota protegida
├── store/         ← configuração do Redux (slices, store)
├── styles/        ← tema, variáveis globais e estilos base
├── types/         ← tipos e interfaces TypeScript compartilhados
└── utils/         ← funções utilitárias puras (formatadores, validadores...)
```

Comando para criar tudo de uma vez:

Unix:

```bash
mkdir -p src/assets src/components src/contexts src/hooks src/pages src/routes src/store src/styles src/types src/utils
```

PowerShell:

```bash
New-Item -ItemType Directory src/assets, src/components, src/contexts, src/hooks, src/pages, src/routes, src/store, src/styles, src/types, src/utils
```

---

## 2.3 Criar o tema light

1. Criar e configurar o arquivo [light.ts](../src/styles/themes/light.ts)

---

## 2.4 Criar a declaração de tipos do Styled Components

1. Criar e configurar o arquivo [styled.d.ts](../src/types/styled.d.ts) na pasta `src/types/`

---

## 2.5 Criar o reset e estilos globais

1. Criar e configurar o arquivo [GlobalStyles.ts](../src/styles/GlobalStyles.ts)

---

## 2.6 Aplicar o tema no App.tsx

1. Configurar o arquivo [App.tsx](../src/single-theme.tsx) com o `ThemeProvider` e o `GlobalStyles`

---

## 2.7 Extensão para múltiplos temas (quando necessário)

> Seguir esta etapa apenas se a aplicação precisar suportar troca de tema.
> Caso contrário, avançar diretamente para a verificação na etapa 2.8.

1. Criar e configurar o arquivo [dark.ts](../src/styles/themes/dark.ts) seguindo a mesma estrutura do `light.ts`
2. Criar e configurar o arquivo [ThemeContext.tsx](../src/contexts/ThemeContext.tsx)
3. Criar e configurar o arquivo [useTheme.ts](../src/hooks/useTheme.ts)
4. Substituir o conteúdo do [App.tsx](../src/App.tsx) pela versão com `AppThemeProvider`
   - O `AppThemeProvider` já engloba o `ThemeProvider` e o `GlobalStyles` internamente
   - A preferência de tema é persistida via `localStorage`
   - Para adicionar novos temas, criar o arquivo correspondente em `src/styles/themes/` e registrá-lo no objeto `themes` do `ThemeContext.tsx`

---

## 2.8 Verificação e finalização da Fase 2

1. Confirmar que `npm run dev` ainda roda sem erros
2. Confirmar que a estrutura de pastas está criada corretamente no VSCode
3. Acessar `http://localhost:5173`
   - Resultado esperado: página em branco sem erros no terminal
   - No DevTools (F12), inspecionar o `<body>` e confirmar que `margin: 0` está aplicado
4. Realizar os commits das etapas:
   - `chore: instalação das dependências principais`
   - `chore: criação do tema light`
   - `chore: criação da declaração de tipos do Styled Components`
   - `chore: criação dos estilos globais`
   - `chore: configuração do ThemeProvider no App.tsx`
   - realizar apenas se a etapa 2.7 foi seguida: `chore: criação do tema dark, ThemeContext e hook useTheme`
5. Criar a branch remota no GitHub: `git push origin HEAD`
6. Realizar o merge da branch:
   - Atribuir a branch para revisão
   - Validar se todas as informações estão corretas
   - Realizar o merge
   - Voltar localmente para a branch `main`: `git checkout main`
   - Atualizar os dados mergeados: `git pull`
