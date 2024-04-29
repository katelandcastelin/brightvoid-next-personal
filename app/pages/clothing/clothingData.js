import clothingGallery from "./clothingGallery";

const clothingProducts = [
  {
    id: 'C1',
    name: 'Human snake',
    image: '/clothing/bt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,
  },
  {
    id: 'C2',
    name: 'Sphere almanac',
    image: '/clothing/wt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 200,
  },
  {
    id: 'C3',
    name: 'Sphere spiral',
    image: '/clothing/bt.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 160,
  },
  {
    id: 'C4',
    name: 'Bright silhouette',
    image: '/clothing/wt-models1.png',
    images: clothingGallery.find(item => item.id === 'C4').images,
    price: 100,
  },
  {
    id: 'C5',
    name: 'Bright silhouette',
    image: '/clothing/wt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 100,
  },
  {
    id: 'C6',
    name: 'Fortune spiral',
    image: '/clothing/bt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 180,
  },
  {
    id: 'C7',
    name: 'Humandala',
    image: '/clothing/wt-model3.png',
    images: clothingGallery.find(item => item.id === 'C7').images,
    price: 180,
  },
];

export default clothingProducts;
