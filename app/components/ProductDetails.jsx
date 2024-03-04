'use client';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import clothingProducts from '../pages/clothing/clothingData';

const ImageContainer = styled.div`
  height: 70vh;
  width: 600px;

  img {
    height: 100%;
  }
`;

export default function ProductDetails({ product }) {
  return (
    <div>
      Product detalis page
      <ImageContainer>
        <img src={product.image} />
      </ImageContainer>
      <p>
        R {product.price}
      </p>
    </div>
  )
}
