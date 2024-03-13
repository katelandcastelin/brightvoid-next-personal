'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import clothingProducts from '../pages/clothing/clothingData';
import ThumbnailGallery from './ThumbnailGallery';

const ImageContainer = styled.div`
  height: 70vh;
  width: 600px;
  padding: 20px;

  img {
    height: 100%;
  }
`;

export default function ProductDetails({ product }) {

  const [selectedImage, setSelectedImage] = useState(product.image);

  useEffect(() => {
    window.scrollTo(0, 180);
    setSelectedImage(product.image);
  }, [product]);

  const productImages = clothingProducts.find(item => item.id === product.id)?.images || [];
  // const productImages2 = posterProducts.find(item => item.id === product.id)?.images || [];

  // const allProductImages = productImages.concat(productImages2);

  return (
    <div>
      <div>
        <ImageContainer>
          <img src={selectedImage} />
        </ImageContainer>
        <ThumbnailGallery images={productImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      </div>
        <p>R {product.price}</p>
    </div>
  )
}
