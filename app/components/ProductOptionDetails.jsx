import React, { useState } from 'react';
import styled from 'styled-components';
import artAndAristData from '../backend/data';

const Container = styled.div`
  max-height: 70vh;
  height: 100%;
  padding-left: 10px;
`;

const SizeOptions = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
`;

const SizeButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #aaa;
  background-color: ${props => props.isSelected ? '#ccc' : 'transparent'};
  color: ${props => props.isSelected ? '#000' : null};
  cursor: pointer;
  width: 50px;
  padding: 10px 0;
  border-radius: 4px;

  &:hover {
    background-color: #bbb;
    color: #000;
  }

  &:active {
    background-color: #9a9a9a;
  }
`;

const QuantityControl = styled.div`
  display: inline-flex;
  border: 1px solid #aaa;
  color: #868686;
  align-items: center;
`;

const Button = styled.button`
  color: #aaa;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:active {
    color: #868686;
  }
`;

const QuantityText = styled.span`
  padding: 5px 10px;
  min-width: 30px;
  text-align: center;
  border-right: 1px solid #aaa;
  border-left: 1px solid #aaa;
  width: 50px;
`;

const AddToCartButton = styled.button`
  margin-top: 20px;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: transparent;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow:
      0 0 5px rgba(9, 9, 121, 0.5),
      0 0 15px rgba(9, 9, 121, 0.5),
      0 0 25px #00d4ff7f,
      0 0 3px rgba(9, 9, 121, 0.5),
      0 0 5px rgba(9, 9, 121, 0.5),
      0 0 15px rgba(9, 9, 121, 0.5),
      0 0 25px rgba(0, 212, 255, 0.5),
      0 0 30px rgba(0, 212, 255, 0.5);

    box-shadow: 
      0 0 5px rgba(9, 9, 121, 0.2),
      0 0 10px rgba(9, 9, 121, 0.3),
      0 0 15px rgba(0, 212, 255, 0.3),
      0 0 60px rgba(0, 212, 255, 0.3);
  }

  &:active {
    border: 1px solid #00d4ff7f;
  }
`;

export default function ProductOptionDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const description = product.collection && product.collection.length > 0 ? product.collection[0].description : 'No description available';

  return (
    <Container>
      <h1>{product.title}</h1>
      <h4>{description}</h4>
      <h5>{product.artist}</h5>
      <h3>R {product.price}</h3>
      <SizeOptions>
        {['XS', 'S', 'M', 'L', 'XL'].map(size => (
          <SizeButton
            key={size}
            onClick={() => handleSizeSelect(size)}
            isSelected={selectedSize === size}
          >
            {size}
          </SizeButton>
        ))}
      </SizeOptions>
      <div style={{marginTop: '10px'}}>
        <QuantityControl>
          <Button onClick={handleDecrease}>-</Button>
          <QuantityText>{quantity}</QuantityText>
          <Button onClick={handleIncrease}>+</Button>
        </QuantityControl>
      </div>
      <AddToCartButton>Add to cart</AddToCartButton>
    </Container>
  );
}
