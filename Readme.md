# Estrutura do Projeto

'''

nubank-ui-clone
├── api                         - configuração de conexões com apis externas
├── assets
├── components
│   ├── Header
│   │   ├── index.ts            - Mapeamento dos arquivos (boa prática)
│   │   ├── styles.ts           - Styles separados com styled components
│   │   ├── HeaderContainer.tsx - Reagras de negócio e lógicas (controller)
│   │   └── HeaderView.tsx      - Apenas recebe um props para renderizar o componente
│   ├── Tabs
│   │   ├── index.ts            - Mapeamento dos arquivos (boa prática)
│   │   ├── styles.ts           - Styles separados com styled components
│   │   ├── TabsContainer.tsx   - Reagras de negócio e lógicas (controller)
│   │   └── TabsView.tsx        - Apenas recebe um props para renderizar o componente
│   └── index.ts                - Mapeamento dos arquivos (boa prática)
├── hooks                       - Hooks personalizados
├── navigation
│   ├── MainNavigator.tsx       - Componente Stack Navigator
│   └── routes.ts               - mapeamento de screens em rotas
├── reducers                    - reducers personalizados (services para api)
├── screens
│   ├── Home
│   │   ├── index.ts            - Mapeamento dos arquivos (boa prática)
│   │   ├── styles.ts           - Styles separados com styled components
│   │   ├── HomeContainer.tsx   - Reagras de negócio e lógicas (controller)
│   │   └── HomeView.tsx        - Apenas recebe um props para renderizar o componente
│   ├── Screen2
│   │   ├── index.ts                - Mapeamento dos arquivos (boa prática)
│   │   ├── styles.ts               - Styles separados com styled components
│   │   ├── Screen2Container.tsx    - Reagras de negócio e lógicas (controller)
│   │   └── Screen2View.tsx         - Apenas recebe um props para renderizar o componente
│   └── index.ts                - Mapeamento dos arquivos (boa prática)
├── theme                       - pasta para armazinar componentes e estilos relacionados ao tema do app
│   ├── Container.ts
│   └── NubankContainer.ts
│   └── index.ts
├── utils -utilitários para o app
│   └── Router.ts
└── App.js

'''
