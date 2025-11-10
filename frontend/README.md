# Catálogo de Bolos

Um catálogo digital para confeitaria com lista de produtos, filtros, detalhes dos bolos e funcionalidade de carrinho de compras.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 4.1.17
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Zustand 5.0.8
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes UI reutilizáveis
│   └── lib/              # Bibliotecas e configurações
├── domain/               # Domínios de negócio (a implementar)
├── pages/                # Páginas da aplicação
│   ├── layouts/         # Layouts compartilhados
│   ├── Home/            # Página inicial
│   └── NotFound/        # Página 404
└── main.tsx             # Ponto de entrada
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

- ✅ Estrutura base configurada
- ⏳ Catálogo de produtos (a implementar)
- ⏳ Filtros de produtos (a implementar)
- ⏳ Detalhes do produto (a implementar)
- ⏳ Sistema de avaliações (a implementar)
- ⏳ Carrinho de compras (a implementar)
- ⏳ Dados mockados (a implementar)

## Licença

MIT