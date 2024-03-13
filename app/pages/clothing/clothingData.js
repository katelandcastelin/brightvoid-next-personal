import clothingGallery from "./clothingGallery";

const clothingProducts = [
  {
    id: 'C1',
    image: '/clothing/bt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,
  },
  {
    id: 'C2',
    image: '/clothing/wt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 200,
  },
  {
    id: 'C3',
    image: '/clothing/bt.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 160,
  },
  {
    id: 'C4',
    image: '/clothing/wt-models1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 100,
  },
  {
    id: 'C5',
    image: '/clothing/wt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 100,
  },
  {
    id: 'C6',
    image: '/clothing/bt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 180,
  },
  {
    id: 'C7',
    image: '/clothing/wt-model3.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 180,
  },
];

export default clothingProducts;
