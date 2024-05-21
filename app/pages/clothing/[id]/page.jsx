'use client';
import React from 'react';
import Header from '@/app/components/Header';
import ProductDetails from '@/app/components/ProductDetails';
import artAndAristData from '../../../backend/data';

export default function ClothingDetailsPage({ params }) {
  let product = artAndAristData.find((entry) => entry.id === String(params.id));

  return (
    <div>
      <Header />
      <ProductDetails product={product} />
    </div>
  )
}
