
import { useState } from 'react'
import { products } from './data/products.js'
import ProductCard from './components/ProductCard.jsx'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #f4f4f4;
  }
`;

const Header = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #222;
  color: #fff;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 24px;
`;

export default function App() {
  const [cartCount, setCartCount] = useState(0)

  function handleAddToCart(product) {
    setCartCount((prev) => prev + 1)
    console.log('Produto adicionado:', product.name)
  }

  return (
    <>
      <GlobalStyle />
      <div>
        <Header>
          <h1>Catálogo de Produtos</h1>
          <span>Carrinho: {cartCount}</span>
        </Header>

        <Grid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </Grid>
      </div>
    </>
  )
}