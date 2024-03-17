'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import clothingProducts from '../pages/clothing/clothingData';
import ThumbnailGallery from './ThumbnailGallery';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1500px;
  margin-top: 100px;
  display: flex;
`;

const ImageAndThumbnailContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  height: 70vh;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const productImages = clothingProducts.find(item => item.id === product.id)?.images || [];

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <Container>
      <ImageAndThumbnailContainer>
        <ThumbnailGallery images={productImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        <ImageContainer>
          <img src={selectedImage} />
        </ImageContainer>
      </ImageAndThumbnailContainer>
      <div style={{ flex: 1 }}>TEST</div>
    </Container>
    </div>
  )
}
