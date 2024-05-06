import clothingGallery from "../pages/clothing/clothingGallery";

const artAndAristData = [
  {
    id: 'C1',
    productId: 'C1',
    image: '/artworks/ai3.jpeg',
    productImage: '/clothing/bt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A1',
    title: 'Human Snake',
    artist: 'Aisha Patel',
    year: '2022',
    aboutTheArtist: 'Aisha Patel explores the delicate balance between chaos and serenity through her minimalist compositions. With a philosophy rooted in finding beauty and peace in the midst of disorder, Aisha’s work is a reflection of her journey towards mindfulness and tranquility. Her piece "Serenity in Chaos" exemplifies her mastery in using pastels to convey a sense of calm, inviting viewers into a meditative state amidst the complexities of modern life.',
    collectionName: '',

    collection: [
      {
        description: 'human snake description.',
      }
    ]
  },
  {
    id: 'C2',
    productId: 'C2',
    image: '/artworks/ai1.png',
    productImage: '/clothing/wt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A2',
    title: 'Ocomiinrauy',
    artist: 'Elena Rodriguez',
    year: '2022',
    aboutTheArtist: 'number 2',
    collectionName: '',

    collection: [
      {
        description: '',
      }
    ]
  },
  {
    id: 'C3',
    productId: 'C3',
    image: '/artworks/collection1/collection1.jpeg',
    productImage: '/clothing/bt.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A3',
    title: 'Spiral',
    artist: 'Marcus J. Thompson',
    year: '2020',
    aboutTheArtist: 'number 3',
    collectionName: '',

    collection: [
      {
        description: '',
      }
    ]
  },
  {
    id: 'C4',
    productId: 'C4',
    image: '/artworks/ai2.png',
    productImage: '/clothing/bt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A4',
    title: 'Fortune Teller',
    artist: 'Fiona Matel',
    year: '2021',
    aboutTheArtist: 'number 4',
    collectionName: '',

    collection: [
      {
        description: '',
      }
    ]
  },
  {
    id: 'C5',
    productId: 'C5',
    image: '/art-display/1.jpeg',
    productImage: '/clothing/wt-model3.png',
    images: clothingGallery.find(item => item.id === 'C4').images,
    price: 220,

    artworkId: 'A5',
    title: 'Humandala',
    artist: 'Kyle R. Spine',
    year: '2022',
    aboutTheArtist: 'number 5',
    collectionName: '',

    collection: [
      {
        description: '',
      }
    ]
  },
  // {
  //   id: 'C6',
  //   productId: 'C6',
  //   image: '',
  //   productImage: '',
  //   images: clothingGallery.find(item => item.id === 'C6').images,
  //   price: 220,

  //   artworkId: 'A6',
  //   title: '',
  //   artist: '',
  //   year: '2019',
  //   aboutTheArtist: 'number 6',
  //   collectionName: '',

  //   collection: [
  //     {
  //       description: '',
  //     }
  //   ]
  // },
  // {
  //   id: 'C7',
  //   productId: 'C7',
  //   image: '',
  //   productImage: '',
  //   images: clothingGallery.find(item => item.id === 'C7').images,
  //   price: 220,

  //   artworkId: 'A7',
  //   title: '',
  //   artist: '',
  //   year: '2023',
  //   aboutTheArtist: 'number 7',
  //   collectionName: '',

  //   collection: [
  //     {
  //       description: '',
  //     }
  //   ]
  // },
];

export default artAndAristData;