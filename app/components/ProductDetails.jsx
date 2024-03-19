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
  padding: 20px;

  @media (max-width: 780px) {
    padding: 0;
  }
`;

const SecondContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1370px) {
    height: 550px;
  }

  @media (max-width: 1040px) {
    flex-direction: column;
    display: block;
  }
`;

const ImageAndThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: 70vh;
  height: 100%;

  @media (max-width: 1040px) {
    display: flex;
    margin-bottom: 40px;
  }

  @media (max-width: 780px) {
    display: contents;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;

  @media (max-width: 1370px) {
    width: 500px;
  }

  @media (max-width: 1170px) {
    width: 400px;
  }

  @media (max-width: 1040px) {
    width: 550px;
  }

  @media (max-width: 780px) {
    height: 60vh;
  }

  img {
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
        <SecondContainer>
          <ImageAndThumbnailContainer>
            <ThumbnailGallery images={productImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            <ImageContainer>
              <img src={selectedImage} />
            </ImageContainer>
          </ImageAndThumbnailContainer>
          <div style={{ flex: 1 }}>TEST</div>
        </SecondContainer>
      </Container>
    </div>
  )
}
