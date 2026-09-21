import styled from 'styled-components'
import { useState } from 'react'


const Card = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;
  width: 200px;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 2px;
`;

const ProductName = styled.h3`
  margin: 12px 0 4px;
  font-size: 16px;
`;

const ProductPrice = styled.p`
  margin: 0 0 12px;
  font-weight: extra-small;
  color: #424040;
`;

const ProductButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => (props.adicionado ? '#198754' : '#6c757d')};
`;

export default function ProductCard({ product, onAddToCart }) {
  const [adicionado, setAdicionado] = useState(false)

  function handleClick() {
    onAddToCart(product)
    setAdicionado(true)
  }

  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
      <ProductButton adicionado={adicionado} onClick={handleClick}>
        {adicionado ? 'Adicionado ✓' : 'Adicionar ao carrinho'}
      </ProductButton>
    </Card>
  )
}