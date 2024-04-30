// 'use client';
// import React from 'react';
// import Header from '@/app/components/Header';
// import ProductDetails from '@/app/components/ProductDetails';
// import clothingProducts from '../clothingData';

// export default function ClothingDetailsPage({ params }) {
//   let product = clothingProducts.find((entry) => entry.id === String(params.id));

//   return (
//     <div>
//       <Header />
//       <ProductDetails product={product} />
//     </div>
//   )
// }

import React from 'react';
import Header from '@/app/components/Header';
import ProductDetails from '@/app/components/ProductDetails';
import clothingProducts from '../clothingData';
import Artworks from '../../gallery/artworks-data/artworks';

export default function ClothingDetailsPage({ params }) {
  let product = clothingProducts.find(entry => entry.id === String(params.id));
  let artworkDescription = Artworks.find(artwork => artwork.collection.some(item => item.image === product.image))?.collection.find(item => item.image === product.image)?.description;

  return (
    <div>
      <Header />
      <ProductDetails product={product} artworkDescription={artworkDescription} />
    </div>
  );
}
