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
`;

const SecondContainer = styled.div`
  height: 100vh;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  padding: 0 3rem;

  @media (max-width: 1040px) {
    flex-direction: column;
    padding: 3rem;
    height: 100%;
  }

  a {
    text-decoration: underline;

    :hover {
      color: #5b5b5b;
    }

    :active {
      color: #000;
    }
  }
`;

const ImageAndThumbnailContainer = styled.div`
  /* display: flex;
  max-width: 600px;
  width: 100%; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  @media (max-width: 1040px) {
    display: flex;
    margin-bottom: 40px;
  }

  @media (max-width: 780px) {
    display: contents;
  }
`;

const ImageContainer = styled.div`
  /* margin-left: 20px;
  height: 70vh;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; */
  display: flex;
  justify-content: center;
  height: 90%;
  width: 100%;
  width: 700px;
  margin: 0 10px;

  @media (max-width: 1290px) {
    width: 650px;
  }

  @media (max-width: 1190px) {
    width: 580px;
  }

  @media (max-width: 1140px) {
    width: 530px;
  }

  @media (max-width: 1095px) {
    width: 500px;
  }

  @media (max-width: 1040px) {
    width: 100%;
    height: 90vh;
  }

  @media (max-width: 780px) {
    height: 60vh;
    margin: 0 0 10px 0;
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
