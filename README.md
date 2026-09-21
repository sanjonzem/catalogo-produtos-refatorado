# Catálogo de Produtos (base para treinar CSS-in-JS)

Projeto propositalmente **sem estilização** — a estrutura React já está pronta
(componentes, dados, lógica do botão), e a estilização com **styled-components**
fica por sua conta, como treino.

## Como rodar

```bash
npm install
npm run dev
```

## Onde mexer

- `src/data/products.js` → dados fictícios dos produtos (pode adicionar/remover itens).
- `src/components/ProductCard.jsx` → cada card de produto. Tem comentários
  `👉 SUGESTÃO` indicando quais elementos viram styled-components.
- `src/App.jsx` → estrutura geral da página (header, grid de produtos).

## Passo a passo sugerido para o styled-components

1. Instalar a lib:
   ```bash
   npm install styled-components
   ```
2. Criar um arquivo `ProductCard.styles.js` (ou similar) com os componentes
   estilizados (`Card`, `ProductImage`, `ProductName`, `ProductPrice`, `AddButton`).
3. Importar esses componentes dentro de `ProductCard.jsx` e trocar as tags
   HTML puras (`div`, `img`, `h3`, `p`, `button`) pelos componentes estilizados.
4. Repetir o processo em `App.jsx` para `Container`, `Header` e `Grid`.

Os comentários `👉 SUGESTÃO` no código marcam exatamente onde fazer essa troca.
