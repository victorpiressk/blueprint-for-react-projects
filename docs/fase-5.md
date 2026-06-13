# Fase 5 — Componentes base

> Os componentes base precisam existir antes das páginas, pois as páginas os consomem.
> Nessa fase, os componentes são criados e validados progressivamente — cada componente
> implementado pode ser renderizado diretamente no `App.tsx` para validação visual imediata,
> sem depender de páginas ou rotas configuradas.
> Ao final da fase, o `App.tsx` deve ser limpo antes de avançar para a Fase 6.

## 5.1 Criar a estrutura de organização dos componentes

1. Criar uma nova branch: `git checkout -b feature/base-components`
2. Antes de criar os componentes, defina a identidade visual da aplicação no arquivo [GlobalStyles.ts](../src/styles/GlobalStyles.ts), preenchendo os valores de colors com as cores principais, de feedback e de hover que serão utilizadas ao longo do projeto.
3. Avalie se os temas disponibilizados pelo material estão alinhados à identidade visual da aplicação. Caso necessário, adapte as cores e estilos do arquivo [light.ts](../src/styles/themes/light.ts) e, se o projeto utilizar múltiplos temas, do [dark.ts](../src/styles/themes/dark.ts) também.
4. Para componentes que utilizam ícones, recomenda-se o uso da biblioteca lucide-react: `npm install lucide-react`
5. Dentro de `src/components/`, confirmar que os diretórios estão criados:
   - `src/components/ui/` — componentes puramente visuais e sem lógica de negócio
   - `src/components/common/` — componentes com lógica própria ou que consomem estado da aplicação
   - `src/components/layout/` — componentes que definem a estrutura visual da aplicação

---

## 5.2 Criar os componentes da aplicação

Analisar o projeto e criar os componentes necessários para a aplicação. À medida que cada componente for implementado, renderizá-lo no `App.tsx` para validar o comportamento visual antes de avançar para o próximo.

> Caso precise de referência de estrutura, exemplos de implementação ou queira comparar
> sua solução com outras possibilidades, consulte o catálogo de componentes na seção 5.3.

---

## 5.3 Catálogo de componentes

> Este catálogo existe como material de apoio. Consulte quando precisar de referência de
> estrutura, padrões de organização ou queira comparar sua implementação com outras
> possibilidades. Os componentes do catálogo são bases genéricas prontas para adaptação —
> o desenvolvedor é responsável por ajustá-los às necessidades do projeto.

**`ui/`** — componentes puramente visuais e sem lógica de negócio

_Elementos_

- [Button](../src/components/ui/Button/)
  - **O que é:** elemento de ação principal da interface
  - **Para que serve:** executar ações ou navegar entre páginas
  - **Como usar:** escolher a variante adequada ao contexto (`primary`, `secondary`, `outline`, `ghost`, `danger`), usar `loading` para indicar processamento e `type="link"` com `to` para navegação

- [Fab](../src/components/ui/Fab/)
  - **O que é:** botão de ação flutuante posicionado de forma fixa na tela
  - **Para que serve:** oferecer acesso rápido à ação principal da interface, seja em mobile ou desktop
  - **Como usar:** passar icon com o elemento visual do botão, onClick com a ação a ser disparada e label para acessibilidade; controlar o posicionamento via prop position com os valores de bottom, right, top e left — o padrão é canto inferior direito (bottom: 24px, right: 24px); a visibilidade em determinados viewports é controlada via CSS no contexto de uso

- [Input](../src/components/ui/Input/)
  - **O que é:** campo de entrada de texto para formulários
  - **Para que serve:** capturar dados do usuário em formulários estruturados com label e validação visual
  - **Como usar:** passar `name`, `value` e `onChange` obrigatoriamente; usar `error` para exibir mensagens de validação; usar `multiline` quando o campo precisar de múltiplas linhas com borda visível

- [Textarea](../src/components/ui/Textarea/)
  - **O que é:** área de composição de texto livre com auto-resize
  - **Para que serve:** capturar textos longos em contextos de composição como posts, comentários ou mensagens
  - **Como usar:** usar no lugar do `Input` quando o campo não precisar de label, borda ou validação visual — cresce automaticamente conforme o conteúdo

- [CharCounter](../src/components/ui/CharCounter/)
  - **O que é:** contador de caracteres para campos de texto
  - **Para que serve:** indicar visualmente ao usuário quantos caracteres foram digitados em relação ao limite definido
  - **Como usar:** usar em conjunto com o Textarea — o componente pai gerencia o value do campo, passa value.length como currentLength e define o mesmo valor de maxLength nos dois componentes; o contador fica oculto quando currentLength é zero; muda de cor para error quando o texto atinge 90% do limite

- [Tag](../src/components/ui/Tag/)
  - **O que é:** rótulo visual para categorizar conteúdo
  - **Para que serve:** indicar categoria, tipo ou atributo de um item
  - **Como usar:** passar o texto como `children` e escolher o tamanho via `size` (`sm` ou `md`)

- [Badge](../src/components/ui/Badge/)
  - **O que é:** indicador de estado ou quantidade
  - **Para que serve:** sinalizar notificações, status ou novidades sobreposto a outro elemento
  - **Como usar:** usar `variant="counter"` com `count` para exibir números (limitado pelo `max`, padrão `99`); usar `variant="dot"` para indicar apenas presença de estado; escolher `status` para definir a cor semântica

- [Avatar](../src/components/ui/Avatar/)
  - **O que é:** representação visual de um usuário
  - **Para que serve:** exibir a foto de perfil com fallback automático para a inicial do nome
  - **Como usar:** passar `src` com a URL da imagem e `alt` com o nome do usuário; quando `src` não estiver disponível, a inicial de `alt` é exibida automaticamente; escolher o tamanho via `size` (`small`, `medium`, `large`)

- [Skeleton](../src/components/ui/Skeleton/)
  - **O que é:** base reutilizável para estados de carregamento
  - **Para que serve:** indicar que um conteúdo está sendo carregado, preservando o espaço visual do elemento
  - **Como usar:** não usar diretamente nas páginas — compor skeletons específicos dentro do próprio componente que representam (ex: `PostCard/PostCardSkeleton.tsx`) utilizando as variantes `text`, `circle` e `rect` com dimensões configuráveis via `width`, `height` e `borderRadius`

- [Spinner](../src/components/ui/Spinner/)
  - **O que é:** indicador de carregamento inline em CSS puro, sem dependência externa
  - **Para que serve:** indicar que uma ação está em processamento dentro de outro componente
  - **Como usar:** usar dentro de componentes como o `Button` via prop `loading`; ajustar `size` e `color` conforme o contexto

- [Loader](../src/components/ui/Loader/)
  - **O que é:** indicador de carregamento de página inteira
  - **Para que serve:** substituir temporariamente o conteúdo de uma página enquanto os dados ainda não foram carregados
  - **Como usar:** instalar a dependência antes de usar — `npm install react-spinners`; renderizar o `Loader` no lugar do conteúdo da página enquanto o estado de carregamento for verdadeiro; trocar o `ClipLoader` pelo spinner desejado da biblioteca conforme a necessidade visual do projeto

- [Tabs](../src/components/ui/Tabs/)
  - **O que é:** componente de navegação por abas
  - **Para que serve:** organizar conteúdo em seções alternáveis sem mudança de rota
  - **Como usar:** passar tabs, activeTab e onTabChange — o estado da aba ativa é controlado por quem usa o componente; escolher a variante visual via variant (underline, pill, card); usar scrollable quando o número de abas puder ultrapassar a largura do container

- [SearchBar](../src/components/ui/SearchBar/)
  - **O que é:** campo de busca com entrada de texto
  - **Para que serve:** capturar termos de pesquisa do usuário
  - **Como usar:** passar value e onChange obrigatoriamente; onSubmit é opcional e é disparado ao submeter o formulário; o botão de limpar aparece automaticamente quando há valor e chama onChange('') internamente; a lógica de busca e filtragem fica fora do componente

- [Card](../src/components/ui/Card/)
  - **O que é:** contêiner visual genérico para agrupar informações relacionadas
  - **Para que serve:** servir de base para cards específicos do projeto ou agrupar conteúdo simples diretamente nas páginas
  - **Como usar:** passar o conteúdo via children; usar onClick quando o card precisar ser clicável — o cursor e o hover são aplicados automaticamente; quando o card tiver dados e lógica de domínio, criar um card específico em common/ que compõe o Card base

_Feedback e overlays_

- [Modal](../src/components/ui/Modal/)
  - **O que é:** camada de sobreposição que exibe conteúdo em foco sobre a página, renderizada via portal diretamente no document.body
  - **Para que serve:** exibir formulários, confirmações ou detalhes sem navegar para outra página
  - **Como usar:** controlar a visibilidade via isOpen e onClose; o conteúdo é passado via children; o ModalHeader é renderizado automaticamente quando title ou showCloseButton forem passados; o ModalFooter aparece quando footer for passado via prop; fechar ao clicar no overlay, no botão de fechar ou pressionar ESC; requer o hook [useModalScrollLock](../src/hooks/useModalScrollLock.ts) em src/hooks/

- [Toast](../src/components/ui/Toast/)
  - **O que é:** notificação temporária exibida na interface
  - **Para que serve:** informar o usuário sobre o resultado de uma ação sem interromper o fluxo
  - **Como usar:** adicionar o ToastProvider no App.tsx envolvendo a aplicação; disparar toasts via hook useToast chamando showToast(type, message, duration?); os tipos disponíveis são success, error, warning e info; some automaticamente após o tempo definido em duration (padrão: 3000ms); requer o [ToastContext](../src/contexts/ToastContext.tsx) e o hook [useToast](../src/hooks/useToast.ts)

- [Popover](../src/components/ui/Popover/)
  - **O que é:** camada flutuante ancorada a um elemento de referência
  - **Para que serve:** exibir informações contextuais ou ações secundárias próximas ao elemento que o disparou
  - **Como usar:** instalar a dependência antes de usar — npm install @floating-ui/react; passar isOpen, onClose e triggerRef com a referência do elemento âncora; o conteúdo é passado via children; controlar o posicionamento via position e a estratégia de scroll via strategy (absolute para acompanhar o scroll, fixed para posição fixa); fecha ao clicar fora ou pressionar ESC

_Mídia_

- [Banner](../src/components/ui/Banner/)
  - **O que é:** área de destaque visual geralmente no topo de uma página ou seção
  - **Para que serve:** exibir uma imagem de fundo com overlay e conteúdo sobreposto
  - **Como usar:** passar image com a URL da imagem e height para definir a altura (padrão: 280px); o conteúdo é passado via children e fica posicionado na parte inferior do banner; quando o banner precisar de dados ou elementos específicos da aplicação, criar um banner específico em common/ que compõe o Banner base

- [Hero](../src/components/ui/Hero/)
  - **O que é:** seção de destaque com slider de imagens e navegação
  - **Para que serve:** exibir múltiplas imagens em sequência com transição automática ou manual, geralmente no topo de uma página
  - **Como usar:** instalar as dependências antes de usar — npm install embla-carousel-react embla-carousel-autoplay; passar slides com o array de URLs das imagens; controlar o comportamento via autoplay, autoplayDelay, showArrows e showDots; o conteúdo sobreposto ao slider é passado via children; a altura do componente é definida via CSS no contexto de uso

- [Gallery](../src/components/ui/Gallery/)
  - **O que é:** grade de imagens exibidas em conjunto com visualização ampliada ao clicar
  - **Para que serve:** apresentar múltiplas imagens de forma organizada permitindo que o usuário visualize cada imagem em tamanho maior
  - **Como usar:** passar items com o array de objetos contendo url e alt opcional; controlar o número de colunas via columns (padrão: 4); ao clicar em uma miniatura, a imagem é aberta no componente Modal base — garantir que o Modal esteja disponível no projeto antes de usar o Gallery

- [ImageUpload](../src/components/ui/ImageUpload/)
  - **O que é:** input de arquivo oculto para seleção de imagens
  - **Para que serve:** permitir que o usuário selecione imagens do dispositivo com validação de tipo, tamanho e quantidade antes de emitir os arquivos
  - **Como usar:** passar onImagesChange para receber os arquivos válidos selecionados; usar inputRef para acionar o seletor a partir de um botão externo ao componente; definir maxImages para limitar a quantidade (padrão: 4); passar onError para receber mensagens de erro de validação e exibi-las conforme a necessidade do projeto; a lógica de preview e envio para o servidor fica fora do componente; o utilitário [formatFileSize](../src/utils/formatFileSize.ts) pode ser usado para exibir o tamanho dos arquivos selecionados na interface

**`common/`** — componentes com lógica própria ou que consomem estado da aplicação

_Navegação_

- [BackButton](../src/components/common/BackButton/)
  - **O que é:** botão de navegação para voltar à página anterior
  - **Para que serve:** permitir que o usuário retorne à rota anterior sem usar o botão do navegador
  - **Como usar:** usar no topo de páginas de detalhe ou formulários; utiliza useNavigate(-1) do React Router internamente; passar onClick quando precisar sobrescrever o comportamento padrão de navegação

_Conteúdo_

- [ConfirmDialog](../src/components/common/ConfirmDialog/)
  - **O que é:** modal de confirmação para ações que requerem validação explícita do usuário
  - **Para que serve:** solicitar confirmação antes de executar ações destrutivas ou irreversíveis como excluir, cancelar ou sair
  - **Como usar:** passar isOpen, onClose e onConfirm; definir title e description com a mensagem contextual da ação; confirmVariant é configurável (padrão: danger); confirmLabel e cancelLabel permitem personalizar os textos dos botões; usar loading quando a ação de confirmação envolver uma operação assíncrona; compõe o Modal base internamente — garantir que o Modal esteja disponível no projeto antes de usar

- [EmptyState](../src/components/common/EmptyState/)
  - **O que é:** componente para exibir estados vazios em listagens ou páginas sem conteúdo
  - **Para que serve:** comunicar ao usuário que não há dados para exibir, substituindo espaços em branco por uma mensagem contextual
  - **Como usar:** todas as props são opcionais — passar icon com qualquer elemento React (ex: ícone do lucide-react), title com o título principal e description com o texto explicativo; usar apenas as props necessárias para cada contexto; substitui a estrutura manual de styled-components repetida em cada página

**`layout/`** — componentes que definem a estrutura visual da aplicação

_Desktop_

- [Header](../src/components/layout/Header/)
  - **O que é:** barra de navegação principal no topo da aplicação
  - **Para que serve:** exibir logo, itens de navegação e ações do usuário — botões de login e cadastro para usuários não autenticados, ou avatar com menu de perfil para usuários autenticados
  - **Como usar:** passar logo com o elemento visual da marca, navItems com o array de itens de navegação (key, label, path, icon opcional); a navegação usa o componente Tabs internamente com detecção de rota ativa automática; quando o usuário estiver autenticado, passar user com name, avatar e menuItems para o dropdown de perfil — usa Avatar e Popover do catálogo internamente; quando não autenticado, passar onLogin e/ou onRegister para exibir os botões de acesso; menu mobile com hamburger é gerenciado internamente

- [Sidebar](../src/components/layout/Sidebar/)
  - **O que é:** painel lateral de navegação com suporte a múltiplos viewports
  - **Para que serve:** exibir a navegação principal da aplicação de forma persistente
  - **Como usar:** passar items com o array de itens de navegação (label, path, icon, badge opcional); em desktop permanece sempre expandida; em tablet começa recolhida exibindo apenas ícones e expande como drawer ao clicar no botão de toggle; em mobile fica oculta e é controlada externamente via isOpen e onClose; usa Button com type="link" do catálogo internamente para cada item de navegação

- [Footer](../src/components/layout/Footer/)
  - **O que é:** rodapé global da aplicação
  - **Para que serve:** exibir links secundários, informações legais, redes sociais e créditos
  - **Como usar:** todas as props são opcionais — passar sections com arrays de links organizados por título, socialLinks com ícones e links de redes sociais, e copyright com o texto de direitos autorais; usar apenas as props necessárias para cada projeto

- [Infobar](../src/components/layout/Infobar/)
  - **O que é:** painel lateral secundário geralmente posicionado à direita
  - **Para que serve:** exibir informações complementares ao conteúdo principal como sugestões, tendências, estatísticas ou conteúdos relacionados
  - **Como usar:** passar o conteúdo via children — cada projeto monta os widgets necessários internamente; a estrutura sticky e a responsividade são gerenciadas pelo componente — some automaticamente em viewports menores que desktop; omitir em projetos que não precisarem de uma terceira coluna

- [MainLayout](../src/components/layout/MainLayout/)
  - **O que é:** componente de estrutura que organiza os elementos fixos da aplicação
  - **Para que serve:** envolver as páginas com Sidebar, conteúdo principal e Infobar em um layout de três colunas responsivo
  - **Como usar:** passar sidebar e infobar via props quando o projeto precisar dessas colunas; o conteúdo das páginas é renderizado via Outlet do React Router na coluna central; usar como element nas rotas do AppRoutes; Header e Footer são adicionados fora do MainLayout no App.tsx ou nas próprias rotas conforme a necessidade do projeto

_Mobile_

- [MobileHeader](../src/components/layout/MobileHeader/)
  - **O que é:** cabeçalho alternativo para experiências mobile com estrutura diferente do desktop
  - **Para que serve:** usado quando o mobile precisa de uma estrutura de cabeçalho completamente diferente do Header padrão — por exemplo, com avatar à esquerda abrindo um drawer de perfil e logo centralizado, em vez de logo à esquerda com navegação horizontal
  - **Como usar:** passar logo, avatar, avatarAlt e onAvatarClick para controlar a abertura da Sidebar em modo drawer; visível apenas em mobile via media query; usar apenas quando o Header padrão não atender à experiência mobile desejada — para a maioria dos projetos o Header já contempla o mobile

- [MobileFooter](../src/components/layout/MobileFooter/)
  - **O que é:** barra de navegação inferior para mobile
  - **Para que serve:** oferecer acesso rápido às seções principais em dispositivos móveis, substituindo a Sidebar como navegação principal
  - **Como usar:** passar items com o array de itens de navegação (path, icon, badge opcional); o estado ativo é detectado automaticamente via useLocation; visível apenas em mobile via media query; o badge numérico é controlado externamente — o projeto decide quando e como atualizar o valor

---

## 5.4 Limpar o App.tsx

1. Remover todos os componentes renderizados temporariamente no `App.tsx` durante a fase
2. Confirmar que o `App.tsx` está no estado limpo, pronto para receber o `BrowserRouter` e o `AppRoutes` na Fase 6

---

## 5.5 Verificação e finalização da Fase 5

1. Confirmar que `npm run dev` roda sem erros de tipagem
2. Confirmar que todos os componentes criados estão nos diretórios corretos
3. Realizar os commits dos componentes adicionados:
   - Se as cores e temas foram ajustados: `chore: definição da identidade visual da aplicação`
   - Se o `lucide-react` foi instalado: `chore: instalação do lucide-react`
   - `feat: criação dos componentes de UI`
   - `feat: criação dos componentes comuns`
   - `feat: criação dos componentes de layout`
   - Se o componente `Modal` for adicionado ao projeto: `feat: adição do hook useModalScrollLock`
   - Se o componente `Toast` for adicionado ao projeto: `feat: adição do ToastContext e hook useToast`
   - Se o componente `ImageUpload` for adicionado ao projeto: `feat: adição do utilitário formatFileSize`
4. Criar a branch remota no GitHub: `git push origin HEAD`
5. Realizar o merge da branch:
   - Atribuir a branch para revisão
   - Validar se todas as informações estás corretas
   - Realizar o merge
   - Voltar localmente para a branch `main`: `git checkout main`
   - Atualizar os dados mergeados: `git pull`
