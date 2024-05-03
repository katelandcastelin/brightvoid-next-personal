'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import ThumbnailGallery from './ThumbnailGallery';
import ProductOptionDetails from './ProductOptionDetails';
import artAndAristData from '../backend/data';

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
    justify-content: center;
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
    max-width: 90vw;
    width: 100%;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.productImage);
  const productImages = product.images || []; 

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Container>
        <SecondContainer>
          <ImageAndThumbnailContainer>
            <ThumbnailGallery images={productImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <ImageContainer>
                <img src={selectedImage} />
              </ImageContainer>
            </div>
          </ImageAndThumbnailContainer>
          <div style={{ flex: 1 }}>
            <ProductOptionDetails product={product} />
          </div>
        </SecondContainer>
      </Container>
    </div>
  )
}
