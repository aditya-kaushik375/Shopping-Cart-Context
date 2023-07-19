const productData = [
  {
    id: 1,
    title: 'Men Cotton Shirt',
    image:
      'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?w=826&t=st=1689672298~exp=1689672898~hmac=485dcb2d7a79a14fe95c52a685dceb39e593cae8a3f60225dce38ad9ebb0a6c6',
    price: 500,
    rating: 5,
    inStock: false,
    fastDelievery: false,
  },
  {
    id: 2,
    title: 'Woolen Crop Top',
    image:
      'https://img.freepik.com/free-photo/portrait-beautiful-smiling-brunette-model-dressed-summer-hipster-clothes-trendy-girl-posing-street-near-white-wall-funny-positive-woman-having-fun_158538-16142.jpg?w=826&t=st=1689743510~exp=1689744110~hmac=2a4081173167d32fdadc3990eaaea2896219309774242b339539700ac6d4813c',
    price: 1500,
    rating: 4,
    inStock: true,
    fastDelievery: false,
  },
  {
    id: 3,
    title: 'Embrodied Saree',
    image:
      'https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400880.jpg?w=900&t=st=1689743470~exp=1689744070~hmac=61ac2774def0aa65da3fe685ce82a9c986d0908bfd64aabeaa22a46952f01751',
    price: 2500,
    rating: 3,
    inStock: true,
    fastDelievery: false,
  },
  {
    id: 4,
    title: 'Anarkali Suits',
    image:
      'https://img.freepik.com/free-photo/young-woman-beautiful-yellow-dress_1303-17538.jpg?w=360&t=st=1689743441~exp=1689744041~hmac=becb621a06c24fc8cd75608a63ac4a609aa78cb90f7a429bbfd74de648b17bc7',
    price: 1000,
    rating: 2,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 5,
    title: 'Men 3-Piece Suit',
    image:
      'https://img.freepik.com/free-photo/portrait-handsome-businessman_329181-9105.jpg?w=360&t=st=1689743392~exp=1689743992~hmac=5c4f0c94bf4819482b483e654e0a6f9d0c13dabd09e1fbe11e2eb962786dd4ac',
    price: 900,
    rating: 5,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 6,
    title: 'Men Woolen Coat',
    image:
      'https://img.freepik.com/free-vector/man-suit-realistic-set-with-smart-jackets-neckties-shirts-different-colors-isolated-vector-illustration_1284-75786.jpg?w=996&t=st=1689743359~exp=1689743959~hmac=3b7923e011e3996777ac201d7f2a5419591cb8bcd49703d985121cd8a5fc83b9',
    price: 500,
    rating: 4,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 7,
    title: 'Water Purifier',
    image:
      'https://img.freepik.com/free-vector/water-filter-devices-realistic-poster-with-purification-system-vector-illustration_1284-76630.jpg?w=996&t=st=1689743325~exp=1689743925~hmac=989442e76f7c2802962834b8329bb4f637ffbe0898049a89111430a658dc1212',
    price: 800,
    rating: 3,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 8,
    title: 'Samsung Galaxy S-12',
    image:
      'https://img.freepik.com/free-vector/two-guys-sitting-sofa-with-book-smartphone-reading-device-couch-flat-vector-illustration-retro-digital-technology-concept-mobile-app-template_74855-12560.jpg?w=360&t=st=1689743284~exp=1689743884~hmac=37384b65c5754a1b8b140d1ceea4f6b8f83be2b01e30958895d7d0d6158d616e',
    price: 700,
    rating: 2,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 9,
    title: 'Oppo 12-pro',
    image:
      'https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?w=740&t=st=1689743258~exp=1689743858~hmac=99e92b57866bd9c3b49ff2e27a8e54fc57cd65cb981b9283b011fdeb775d5fa2',
    price: 300,
    rating: 1,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 10,
    title: 'MacBook 12',
    image:
      'https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422322.jpg?w=826&t=st=1689743229~exp=1689743829~hmac=afcf5f4c4dff15e80b302a4add68694226454941c58cb72a371752378c7e11d1',
    price: 400,
    rating: 5,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 11,
    title: 'Voltas 1 Ton A.C',
    image:
      'https://img.freepik.com/free-vector/climate-control-poster-with-air-conditioning-technology-symbols-realistic-illustration_1284-29136.jpg?w=740&t=st=1689743179~exp=1689743779~hmac=66e485e899e8dac93eae3ca7a0e4aeac3f1c4311f0135ab7509d162dd58730a9',
    price: 450,
    rating: 3,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 12,
    title: 'Kids Kurta',
    image:
      'https://img.freepik.com/free-photo/happy-caucasian-little-boy-isolated-white-studio-background-looks-happy-cheerful-sincere-copyspace-childhood-education-emotions-concept_155003-46038.jpg?w=360&t=st=1689743145~exp=1689743745~hmac=acd9fbb2acaf5afa6e675cc27259551abba2b5230ca26e22c48334b776515618',
    price: 1080,
    rating: 4,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 13,
    title: 'Himalayas FaceWash ',
    image:
      'https://img.freepik.com/free-photo/pleased-smiling-woman-washes-face-with-cleansing-gel-has-soap-complexion-keeps-eyes-shut-wears-wrapped-towel-head-has-naked-body_273609-33472.jpg?w=900&t=st=1689743114~exp=1689743714~hmac=e0ba0eb26105f0873827dca07a7a98f038a2933bf7186607e2db9a59abf9d99e',
    price: 1180,
    rating: 2,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 14,
    title: 'Neutrogena Hydro Gel',
    image:
      'https://img.freepik.com/free-photo/young-beautiful-blonde-girl-cares-face-skin-with-moisturizer-front-mirror_496169-939.jpg?w=900&t=st=1689743079~exp=1689743679~hmac=e59624b69524c54fa5dfc55a950dcad6ba02ccb35ca37872d80f6f3a01c44f79',
    price: 199,
    rating: 1,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 15,
    title: 'Derma Co Vitamin C Serum',
    image:
      'https://img.freepik.com/free-photo/close-up-smiley-woman-using-serum_23-2148888231.jpg?w=360&t=st=1689742994~exp=1689743594~hmac=44b3dc6f90f1e1e1d150d1ed3987bcc876b9f990e62b6914b58c990e35f79cf6',
    price: 275,
    rating: 1,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 16,
    title: 'Derma Co Sunscreen',
    image:
      'https://img.freepik.com/free-vector/realistic-sunscreen-bottle-promo_52683-62722.jpg?w=900&t=st=1689742955~exp=1689743555~hmac=47e7f1397421b026b6a536b6e29ad9829d1c81c673339bb6fa509aa7b8e3903c',
    price: 870,
    rating: 2,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 17,
    title: 'Cotton Bed-Sheets',
    image:
      'https://img.freepik.com/free-psd/realistic-modern-double-bedroom-with-furniture_176382-414.jpg?w=1060&t=st=1689742914~exp=1689743514~hmac=3aa88c10167ce5e4df3e44ca21a5b74de9f2cfd5882f788222a9fab9a8d41446',
    price: 542,
    rating: 3,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 18,
    title: 'Mac-Makeup Brushes',
    image:
      'https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg?w=900&t=st=1689742811~exp=1689743411~hmac=c49297ee3126d45dd1f15c5dfd9d3cb5e2ad46939e536094fab45590d9d1e3c2',
    price: 640,
    rating: 4,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 19,
    title: 'Silk Sarees',
    image:
      'https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400843.jpg?w=360&t=st=1689742780~exp=1689743380~hmac=6d93060f23660bfac7bb47a4716763a848236df8066170f748712b6151637298',
    price: 876,
    rating: 5,
    inStock: true,
    fastDelievery: true,
  },
  {
    id: 20,
    title: 'Tide 5Kg Detergent',
    image:
      'https://img.freepik.com/free-vector/power-wash-detergent-packaging-with-water-splash_1017-19517.jpg?w=900&t=st=1689742744~exp=1689743344~hmac=f6cc1ec53188f3d8d6f4033628809ff9aa181083b44465b26c10b784bbd9553d',
    price: 760,
    rating: 3,
    inStock: true,
    fastDelievery: true,
  },

  {
    id: 21,
    title: 'Dove Hair Care Shampoo',
    image:
      'https://img.freepik.com/free-photo/close-up-portrait-young-pretty-woman-taking-shower_186202-4166.jpg?w=900&t=st=1689742691~exp=1689743291~hmac=28361971a485fd2b5e900b779d61c00790fd360309792163c55511c966afc52b',
    price: 360,
    rating: 3,
    inStock: true,
    fastDelievery: true,
  },
]
export default productData
