'use client';
import React from 'react';
import { useRouter } from 'next/router';
import clothingProducts from '../pages/clothing/clothingData';

export default function ProductDetails({ product }) {
  return (
    <div>
      Product detalis page
      <p>
        R {product.price}
      </p>
    </div>
  )
}
