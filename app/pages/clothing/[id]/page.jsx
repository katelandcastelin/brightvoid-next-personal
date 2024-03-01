'use client';
import React from 'react';
import Header from '@/app/components/Header';
import ProductDetails from '@/app/components/ProductDetails';
import clothingProducts from '../clothingData';

export default function ClothingDetailsPage({ params }) {
  let product = clothingProducts.find((entry) => entry.id === String(params.id));

  return (
    <div>
      <Header />
      <ProductDetails product={product} />
      TEST
    </div>
  )
}
