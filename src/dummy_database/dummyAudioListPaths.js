const dummyData1 = [
  {
    id: 100000,
    name: "Fly Me to the Moon",
    singer: "The Macarons Project",
    cover:
      "https://e-cdns-images.dzcdn.net/images/cover/f0bc5ad6c844e59f7e832b1b4085ec4b/500x500-000000-80-0-0.jpg",
    musicSrc: () => {
      return Promise.resolve(
        "https://cdns-preview-c.dzcdn.net/stream/c-c2a6681b22273c0b5266a0c969574142-6.mp3"
      );
    },
  },
  {
    id: 100001,
    name: "C'est Si Bon",
    singer: "Lisa Ono",
    cover:
      "https://e-cdns-images.dzcdn.net/images/artist/3acac82be11a17763d8c434a0a8b8518/500x500-000000-80-0-0.jpg",
    musicSrc:
      "https://cdns-preview-7.dzcdn.net/stream/c-7d7bd0dcb0c3dcc790c46aea855aba38-5.mp3",
  },
  {
    id: 1000002,
    name: "Who Can I Turn To?",
    singer: "Katharine McPhee",
    cover:
      "https://e-cdns-images.dzcdn.net/images/artist/05fbe36e427817f0b5b4e60565a81298/500x500-000000-80-0-0.jpg",
    musicSrc:
      "https://cdns-preview-5.dzcdn.net/stream/c-508490507ed9702a317939cc8bf18bda-8.mp3",
  },
];

const dummyData2 = [
  {
    id: 10000003,
    name: `Solar Sect of Mystic Wisdom ~ Nuclear Fusion (From "Touhou 11")`,
    singer: "FalKKonE",
    cover:
      "https://e-cdns-images.dzcdn.net/images/cover/5c6dffe7d0c6f655bd259373642bec64/500x500-000000-80-0-0.jpg",
    musicSrc:
      "https://cdns-preview-e.dzcdn.net/stream/c-e2b854a79f9936186f758d023d53783a-4.mp3",
  },
  {
    id: 10000004,
    name: "Lucid Traveler（feat. NAGISA）",
    singer: "A-One",
    cover:
      "https://e-cdns-images.dzcdn.net/images/cover/aca1f9b1ba24ab1ac62ac8fc7588e116/500x500-000000-80-0-0.jpg",
    musicSrc:
      "https://cdns-preview-1.dzcdn.net/stream/c-152e9c4d20ebb16df82bebfd820935f0-3.mp3",
  },
  {
    id: 1000005,
    name: "Loreilei's Melody",
    singer: "Takahito Rute Koshida",
    cover:
      "https://e-cdns-images.dzcdn.net/images/cover/8043299a9639876e12e9aa65f52278e6/500x500-000000-80-0-0.jpg",
    musicSrc:
      "https://cdns-preview-8.dzcdn.net/stream/c-87726436d6fb70416ac42df1088760a9-3.mp3",
  },
];

const dummyData3 = [
  {
    id: 1000006,
    name: "Bedtime Stories",
    singer: "Jay Chou",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
    musicSrc:
      "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3",
  },
  {
    id: 10000007,
    name: "Dorost Nemisham",
    singer: "Sirvan Khosravi",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc: () => {
      return Promise.resolve(
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3"
      );
    },
  },
  {
    id: 10000008,
    name: "Despacito",
    singer: "Luis Fonsi",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
    musicSrc:
      "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
  },
];

export { dummyData1, dummyData2, dummyData3 };
