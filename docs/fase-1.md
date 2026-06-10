# Fase 1 — Criação e configuração do projeto

## 1.1 Criar o repositório no GitHub

1. Clicar em `New`
2. Escolher o nome do repositório
3. Adicionar uma descrição
4. Definir se o repositório será público ou privado
5. Adicionar um `README`
6. Criar o repositório

---

## 1.2 Clonar o repositório localmente

1. Clicar na opção `Code`
2. Copiar o link HTTPS do repositório
3. No terminal:
   - Clonar o projeto localmente: `git clone link-do-repositorio`
   - Entrar na pasta do projeto: `cd nome-do-repositorio`
   - Criar o projeto dentro da pasta: `npm create vite@latest .`
   - Escolher o framework: `React`
   - Escolher a variante: `TypeScript`
   - Instalar as dependências: `npm install`
   - Criar uma nova branch: `git checkout -b feature/project-setup`

---

## 1.3 Limpar o boilerplate gerado pelo Vite

1. Apagar o conteúdo de `src/App.tsx` (mantendo apenas a função vazia temporariamente)
2. Remover o arquivo `src/App.css`
3. Remover o arquivo `src/index.css`
4. Remover os arquivos de `src/assets/`
5. Remover os arquivos de `public/`
6. No `index.html`, remover a linha `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
7. Em `src/main.tsx`, remover o import de `./index.css`

---

## 1.4 Configurar a formatação do projeto

1. Criar e configurar o arquivo [.editorconfig](../.editorconfig)
2. Instalar e configurar o Prettier:
   - Instalar o Prettier: `npm install --save-dev --save-exact prettier`
   - Instalar o plugin que executa o Prettier como regra do ESLint: `npm install --save-dev eslint-plugin-prettier`
   - Instalar o plugin que desativa conflitos entre ESLint e Prettier: `npm install --save-dev eslint-config-prettier`
   - Criar e configurar o arquivo [.prettierrc](../.prettierrc)
3. Atualizar o arquivo [eslint.config.js](../eslint.config.js) seguindo o padrão de formatação do projeto

---

## 1.5 Configurar o VSCode para automatizar a formatação

1. Criar a pasta `.vscode/` na raiz do projeto
2. Criar o arquivo [settings.json](../.vscode/settings.json) dentro de `.vscode/`

> Confirmar que a pasta .vscode/ não está listada no .gitignore. O arquivo settings.json deve ser versionado para garantir que todos que clonarem o projeto utilizem a mesma configuração de formatação.

---

## 1.6 Verificação e finalização da Fase 1

1. Rodar o projeto no navegador: `npm run dev`
2. Acessar o servidor em: `http://localhost:5173`
   - Resultado esperado: sem erros no terminal
3. Realizar os commits das etapas:
   - `chore: inicialização do projeto com Vite`
   - `docs: atualização inicial do README do Vite`
   - `chore: limpeza do boilerplate gerado pelo Vite`
   - `chore: criação do arquivo .editorconfig`
   - `chore: configuração do ESLint no padrão do projeto`
   - `chore: instalação e configuração do Prettier`
   - `chore: configuração do VSCode para formatação automática`
4. Criar a branch remota no GitHub: `git push origin HEAD`
5. Realizar o merge da branch:
   - Atribuir a branch para revisão
   - Validar se todas as informações estão corretas
   - Realizar o merge
   - Voltar localmente para a branch `main`: `git checkout main`
   - Atualizar os dados mergeados: `git pull`
