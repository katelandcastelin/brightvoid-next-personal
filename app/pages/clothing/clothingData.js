import clothingGallery from "./clothingGallery";

const clothingProducts = [
  {
    id: 'C1',
    // name: 'Human snake',
    image: '/clothing/bt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,
    artworkId: '/artworks/ai2.png',
  },
  {
    id: 'C2',
    name: 'Sphere almanac',
    image: '/clothing/wt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 200,
    artworkId: '/artworks/ai1.png',
  },
  {
    id: 'C3',
    name: '',
    image: '/clothing/bt.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 160,
    artworkId: '/artworks/ai3.jpeg',
  },
  {
    id: 'C4',
    name: 'Bright silhouette',
    image: '/clothing/wt-models1.png',
    images: clothingGallery.find(item => item.id === 'C4').images,
    price: 100,
    artworkId: '',
  },
  {
    id: 'C5',
    name: 'Bright silhouette',
    image: '/clothing/wt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 100,
    artworkId: '',
  },
  {
    id: 'C6',
    name: 'Whispers of the Wind',
    image: '/clothing/bt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 180,
    artworkId: '/artworks/ai2.png',
  },
  {
    id: 'C7',
    name: 'Humandala',
    image: '/clothing/wt-model3.png',
    images: clothingGallery.find(item => item.id === 'C7').images,
    price: 180,
    artworkId: '',
  },
];

export default clothingProducts;
