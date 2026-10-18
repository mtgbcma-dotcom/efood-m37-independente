# eFood — M37 | EBAC

Projeto independente baseado na M36 (`efood-m36-corrigido`). Preserva a listagem e os cardápios da API, a modal de produto e os recursos visuais da M35/M36. O carrinho foi migrado de Context para **Redux Toolkit**, com **React Redux**.

## Requisitos implementados

- Carrinho lateral e página própria em `/carrinho`.
- Produtos adicionados e removidos por ações Redux.
- Contador e total derivados do estado global.
- Total calculado em centavos como soma de todos os produtos.
- Duas unidades do mesmo produto podem ser adicionadas; cada linha tem um identificador próprio para remoção individual.
- Persistência exclusiva da M37 com a chave `efood-m37-cart`.
- Estados de carrinho vazio, carregamento da API e erro com nova tentativa.
- Fechamento do painel por botão, Escape ou clique no fundo, com controle de foco.
- Layout responsivo e configuração de rotas da Vercel.

O fluxo de entrega, pagamento e envio de pedido pertence à próxima etapa. Nesta versão, “Continuar comprando” retorna às compras.

## Como executar

Use Node.js 22 LTS ou mais recente. Abra esta pasta no VS Code e execute:

```sh
npm ci
npm start
```

Abra o endereço informado no terminal. Para parar, use Ctrl+C.

```sh
npm test
npm run build
```

## Organização

- `src/store/cartSlice.js`: estado, ações e cálculo do total.
- `src/store/index.js`: configuração da store e persistência.
- `src/hooks/useCart.js`: integração dos componentes com Redux.
- `src/components/Cart/`: apresentação do carrinho lateral e da página.
- `src/pages/Cart.jsx`: rota `/carrinho`.
- `src/context/RestaurantsContext.jsx`: API preservada da M36.

O contexto dos restaurantes não controla o carrinho. Todo o estado do carrinho é mantido no Redux.

## Referências

- Base: https://github.com/mtgbcma-dotcom/efood-m36-corrigido
- Layout: https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood?type=design&node-id=0-1&mode=design
- API: https://api-ebac.vercel.app/api/efood/restaurantes
- Redux Toolkit: https://redux-toolkit.js.org/api/configureStore

## Publicação posterior

Hospedagem escolhida: Vercel. Framework Vite; comando de build `npm run build`; saída `dist`. O arquivo `vercel.json` permite abrir diretamente `/carrinho` e `/restaurante/:id`.

Esta cópia não contém `.git`, dependências instaladas ou vínculo com repositório remoto. A criação do novo repositório, a publicação e a entrega à EBAC serão feitas pelo estudante, após a revisão local. Veja `PASSO_A_PASSO.md`.
