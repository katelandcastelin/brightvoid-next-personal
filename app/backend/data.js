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
    title: '',
    artist: '',
    year: '2022',
    aboutTheArtist: '',
    collectionName: '',
    initialDescription: '',
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
        collectionArtworkId: 1,
        description: 'The Ocomiinrauy way.',
      },
      {
        collectionArtworkId: 2,
        description: 'Description 2.',
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
        collectionArtworkId: 1,
        description: 'Wheel of Speares.',
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
    image: '/artworks/1.jpeg',
    productImage: '/clothing/wt-model3.png',
    images: clothingGallery.find(item => item.id === 'C4').images,
    price: 220,

    artworkId: 'A5',
    title: 'Celestial Compass',
    artist: 'Isadora Marlowe',
    year: '2022',
    aboutTheArtist: 'Isadora Marlowe, a recluse with storm-tossed eyes, weaves her existence into her art. She once sailed with pirates, danced with mermaids, and whispered secrets to the wind. Her studio, perched on Cornwall’s cliffs, overlooks the restless ocean—a canvas for celestial musings. Isadora’s scent blends salt spray, old books, and stardust. She communicates through tide-washed bottles, cryptic notes inviting kindred souls to decipher her coded messages.',
    initialDescription: `The Celestial Compass emerged from Isadora Marlowe’s midnight reveries, where constellations danced with forgotten memories. The aged parchment, once a ship’s log, cradles the silver ink etchings—a cosmic cartography of secrets. Each cardinal point whispers its tale:
    North: A forgotten constellation, its name lost to time, guides wanderers toward uncharted realms. Isadora believes it harbors the echoes of ancient stardust.
    East: Dawn’s birthplace, where possibilities bloom like dew-kissed petals. The compass needle trembles, urging dreamers to embrace new beginnings.
    South: Solar winds carry melodies—half-remembered songs from distant shores. Isadora swears she hears mermaids singing in this quadrant.
    West: Twilight cradles memories like fragile seashells. Here, the compass reveals glimpses of other lives—parallel existences or past incarnations, perhaps. The central gray square? A portal, veiled in mystery. Some say it leads to Isadora’s lost love, while others claim it connects to the moon itself.`,
    collectionName: 'Navigating Dreams',

    collection: [
      {
        description: '',
      }
    ]
  },
  {
    id: 'C6',
    productId: 'C6',
    image: '/artworks/3.jpeg',
    productImage: '/clothing/wt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A6',
    title: 'Black void awaits',
    artist: 'Sam Joe',
    year: '2019',
    aboutTheArtist: 'Sam Joe is an emerging contemporary artist known for his abstract expressions and bold use of colors. Based in London, his works explore themes of existentialism and cosmic philosophy, drawing heavily from personal experiences and historical contexts. Sam has exhibited in various galleries across Europe and is fast gaining recognition in the international art scene.',
    collectionName: 'Ethereal Expressions',

    collection: [
      {
        collectionImageId: 1,
        collectionImage: '/artworks/2.jpeg',
        description: 'This early piece showcases the transition from realism to abstract, capturing the tension in form and hue.',
      },
      {
        collectionImageId: 4,
        collectionImage: '/artworks/ai2.png',
        description: 'Test.',
      },
      {
        collectionImageId: 2,
        collectionImage: '/artworks/3.jpeg',
        description: 'This artwork invites viewers into a surreal and metaphysical landscape, where the boundaries between the earthly and the celestial blur. At the center, a monolithic doorway opens to a cosmic vista, with a radiant star casting its light upon an expanse of space. The foreground features an enigmatic figure draped in robes, standing at the threshold of this interstellar gateway. This figure serves as both guardian and traveler, poised at the juncture of known reality and infinite possibility. Surrounding this central scene are intricate borders filled with esoteric symbols and celestial bodies, suggesting a universe rich with hidden knowledge and cosmic connections. The meticulous detail in every element—from the textured fields to the individual stars—creates a tapestry that is both hypnotic and thought-provoking. This image captivates with its stark black-and-white contrast, drawing attention to the fine linework that constructs this otherworldly scene. It is interesting for its blend of mysticism with astronomical themes, evoking contemplation on humanity’s place within the vast cosmos. The artwork’s relevance lies in its ability to resonate on both an aesthetic level and as an allegory for exploration—be it internal or through the stars.',
      },
      {
        collectionImageId: 3,
        collectionImage: '/artworks/4.jpeg',
        description: '',
      },
    ]
  },
  {
    id: 'C7',
    productId: 'C7',
    image: '/artworks/2.jpeg',
    productImage: '/clothing/wt-models1.png',
    images: clothingGallery.find(item => item.id === 'C7').images,
    price: 220,

    artworkId: 'A7',
    title: 'The Cosmic Pilgrimage',
    artist: 'Sam Joe',
    year: '2023',
    aboutTheArtist: 'about the artist number C7',
    collectionName: 'Collection Sam Joe',

    collection: [
      {
        collectionImageId: 2,
        collectionImage: '/artworks/3.jpeg',
        description: '',
      }
    ]
  },
];

export default artAndAristData;