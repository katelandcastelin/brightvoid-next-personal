import clothingGallery from "../pages/clothing/clothingGallery";

const artAndAristData = [
  {
    productId: 'C1',
    image: '/artworks/ai3.jpeg',
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
        image: '',
        description: '',
      }
    ]
  }
];

export default artAndAristData;