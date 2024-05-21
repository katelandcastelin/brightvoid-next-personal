import clothingGallery from "../pages/clothing/clothingGallery";

// Artists data
const artists = {
  CelestiaLumina: {
    name: 'Celestia Lumina',
    about: 'Celestia Lumina, a contemporary artist, is celebrated for her mystical and astrological themed works that invite introspection and cosmic contemplation. Her latest piece, “Arcane Circles of Enlightenment,” embodies her vision of the universe’s infinite cycles and hidden truths. Lumina’s art resonates with those seeking deeper understanding of the celestial.'
  },
  ElenaRodriguez: {
    name: 'Elena Rodriguez',
    about: 'Astra Vortex, the enigmatic artist behind the captivating “Cosmic Mechanism” and the mystical Ocominauty collection, remains shrouded in mystery. Their work seamlessly blends intricate geometric patterns, celestial symbolism, and steampunk aesthetics. Astra’s creations evoke ancient wisdom and cosmic order, inviting viewers to explore the depths of vision and enlightenment. Whether through cosmic maps or mandalas, Astra Vortex weaves a tapestry of wonder that transcends time and space.'
  },
  FionaMatel: {
    name: 'Fiona Matel',
    about: 'Fiona Matel draws inspiration from ancient observatories, forgotten manuscripts, and the whispers of nebulae. Their studio, nestled atop a moonlit peak, resonates with the hum of distant quasars. Each stroke of their brush echoes the cosmic symphony—the birth of galaxies, the collapse of stars, and the eons-old dance of celestial bodies.'
  },
  IsadoraMarlowe: {
    name: 'Isadora Marlowe',
    about: 'Isadora Marlowe, a recluse with storm-tossed eyes, weaves her existence into her art. She once sailed with pirates, danced with mermaids, and whispered secrets to the wind. Her studio, perched on Cornwall’s cliffs, overlooks the restless ocean—a canvas for celestial musings. Isadora’s scent blends salt spray, old books, and stardust. She communicates through tide-washed bottles, cryptic notes inviting kindred souls to decipher her coded messages.'
  },
  ElowenThistledown: {
    name: 'Elowen Thistledown',
    about: 'Elowen Thistledown, a wanderer between worlds, collects echoes. Her studio, nestled in a forgotten attic, smells of old books and rain-soaked earth. She wears silver rings adorned with moonstone and weaves spells into her ink. Elowen’s voice, when she speaks, carries the weight of forgotten ages. She communicates through dreams, leaving cryptic symbols on dew-kissed windows. Seek her at twilight, where the veil thins.'
  },
};

// Collections data
const collections = {
  Ocominauty: [
    {
      collectionArtworkId: 1,
      collectionImage: '/artworks/Elena_Rodriguez-Ocominauty/Cosmic_Mechanism.jpeg',
      description: '',
    },
  ],
  NavigatingDreams: [
    {
      description: '',
    }
  ],
  VeilOfEchoes: [
    {
      collectionImageId: 1,
      collectionImage: '/artworks/Threshold_of_Remembrance.jpeg',
      description: 'This early piece showcases the transition from realism to abstract, capturing the tension in form and hue.',
    },
    {
      collectionImageId: 4,
      collectionImage: '/artworks/ai2.png',
      description: 'Threshold of Remembrance',
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
  ],
};

const artAndArtistData = [
  {
    id: 'C1',
    productId: 'C1',
    image: '/artworks/Arcane_Circles_of_Enlightenment.jpeg',
    productImage: '/clothing/bt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A1',
    artist: artists.CelestiaLumina.name,
    title: 'Arcane Circles of Enlightenment',
    initialDescription: 'This artwork is a testament to the quest for knowledge and the beauty of the unknown, urging onlookers to embrace the journey of self-discovery and cosmic exploration.',
    year: '2022',
    aboutTheArtist: artists.CelestiaLumina.about,
    collectionName: '',
  },
  {
    id: 'C2',
    productId: 'C2',
    image: '/artworks/Ocomiinrauy.png',
    productImage: '/clothing/wt-model1.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A2',
    artist: artists.ElenaRodriguez.name,
    title: 'Cosmic intricacy',
    initialDescription: '"Cosmic intricacy" emerges from the depths of celestial imagination.',
    year: '2022',
    aboutTheArtist: artists.ElenaRodriguez.about,
    collectionName: 'Ocominauty',
    collection: collections.Ocominauty,
  },
  {
    id: 'C3',
    productId: 'C3',
    image: '/artworks/Elena_Rodriguez-Ocominauty/Cosmic_Mechanism.jpeg',
    productImage: '/clothing/bt.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A3',
    artist: artists.ElenaRodriguez.name,
    title: 'Cosmic Mechanism',
    initialDescription: 'In the heart of the celestial tapestry, where stardust weaves its intricate threads, lies the Cosmic Nexus. An eye, ancient and all-seeing, gazes across the cosmic expanse. Its iris mirrors galaxies, while its pupil pierces the veil of reality. Geometric constellations spiral outward, revealing hidden pathways to distant realms. Gold and obsidian hues dance in harmonious tension, echoing the cosmic balance. Within this enigmatic artwork, whispers of forgotten knowledge beckon—a map to the universe’s secrets, waiting for those who dare to seek.',
    year: '2020',
    aboutTheArtist: artists.ElenaRodriguez.about,
    collectionName: 'Ocominauty',
    collection: collections.Ocominauty,
  },
  {
    id: 'C4',
    productId: 'C4',
    image: '/artworks/Fortune_Reverie.png',
    productImage: '/clothing/bt-model2.png',
    images: clothingGallery.find(item => item.id === 'C6').images,
    price: 220,

    artworkId: 'A4',
    artist: artists.FionaMatel.name,
    title: 'Fortune Reverie',
    initialDescription: 'I envisioned a harmonious blend of science and art. The central focus rests on two armillary spheres—an homage to celestial navigation and cosmic exploration. The left sphere, centered on Earth, symbolizes our quest for understanding our place in the universe. Its counterpart, centered on the Sun, alludes to the heliocentric model. Ornate stands elevate these spheres, emphasizing their dual role as scientific tools and aesthetic objects. Around them, floral patterns, stars, and cryptic inscriptions evoke curiosity and discovery. The dark background, studded with stars, reinforces the theme of astronomy. This artwork invites viewers to ponder our timeless fascination with the cosmos—a dance between reason and wonder.',
    year: '2021',
    aboutTheArtist: artists.FionaMatel.about,
  },
  {
    id: 'C5',
    productId: 'C5',
    image: '/artworks/Celestial_Compass.jpeg',
    productImage: '/clothing/wt-model3.png',
    images: clothingGallery.find(item => item.id === 'C4').images,
    price: 220,

    artworkId: 'A5',
    title: 'Celestial Compass',
    artist: artists.IsadoraMarlowe.name,
    year: '2022',
    aboutTheArtist: artists.IsadoraMarlowe.about,
    initialDescription: `The Celestial Compass emerged from Isadora Marlowe’s midnight reveries, where constellations danced with forgotten memories. The aged parchment, once a ship’s log, cradles the silver ink etchings—a cosmic cartography of secrets. Each cardinal point whispers its tale:
    North: A forgotten constellation, its name lost to time, guides wanderers toward uncharted realms. Isadora believes it harbors the echoes of ancient stardust.
    East: Dawn’s birthplace, where possibilities bloom like dew-kissed petals. The compass needle trembles, urging dreamers to embrace new beginnings.
    South: Solar winds carry melodies—half-remembered songs from distant shores. Isadora swears she hears mermaids singing in this quadrant.
    West: Twilight cradles memories like fragile seashells. Here, the compass reveals glimpses of other lives—parallel existences or past incarnations, perhaps. The central gray square? A portal, veiled in mystery. Some say it leads to Isadora’s lost love, while others claim it connects to the moon itself.`,
    collectionName: 'Navigating Dreams',
    collection: collections.NavigatingDreams,
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
    artist: artists.ElowenThistledown.name,
    year: '2019',
    aboutTheArtist: artists.ElowenThistledown.about,
    collectionName: 'Veil of Echoes',
    collection: collections.VeilOfEchoes,
  },
  {
    id: 'C7',
    productId: 'C7',
    image: '/artworks/Threshold_of_Remembrance.jpeg',
    productImage: '/clothing/wt-models1.png',
    images: clothingGallery.find(item => item.id === 'C7').images,
    price: 220,

    artworkId: 'A7',
    title: 'Threshold of Remembrance',
    artist: artists.ElowenThistledown.name,
    year: '2023',
    aboutTheArtist: artists.ElowenThistledown.about,
    collectionName: 'Veil of Echoes',
    collection: collections.VeilOfEchoes.slice(2), // Using slice to include specific items from the collection
  },
];

export default artAndArtistData;
