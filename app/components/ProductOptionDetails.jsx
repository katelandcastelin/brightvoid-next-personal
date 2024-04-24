import React, { useState } from 'react';
import styled from 'styled-components';

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
  cursor: pointer;
  width: 50px;
  padding: 10px 0;
  border-radius: 4px;

  &:hover {
    background-color: #bbb;
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

export default function ProductOptionDetails() {
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

  return (
    <Container>
      <h1>Product name</h1>
      <h3>Price</h3>
      <div>
        choose an option drop down
        <br />
        black / white options
      </div>
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
      <button style={{marginTop: '20px'}}>Add to basket</button>
    </Container>
  );
}
