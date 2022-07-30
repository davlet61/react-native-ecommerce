import assets from './assets';
import { faker } from '@faker-js/faker';

const NFTData = [
  {
    id: 'NFT-01',
    name: 'Abstracto #312',
    creator: faker.name.findName(),
    price: 4.25,
    description:
      'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.',
    image: assets.nft01,
    bids: [
      {
        id: 'BID-11',
        name: faker.name.findName(),
        price: 4.25,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
      {
        id: 'BID-12',
        name: faker.name.findName(),
        price: 4.5,
        image: assets.person03,
        date: 'December 27, 2019 at 1:50 PM',
      },
      {
        id: 'BID-13',
        name: faker.name.findName(),
        price: 4.75,
        image: assets.person04,
        date: 'December 31, 2019 at 3:50 PM',
      },
    ],
  },
  {
    id: 'NFT-02',
    name: 'Green Coins',
    creator: faker.name.findName(),
    price: 7.25,
    description:
      'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.',
    image: assets.nft02,
    bids: [
      {
        id: 'BID-21',
        name: faker.name.findName(),
        price: 7.05,
        image: assets.person04,
        date: 'December 12, 2019 at 12:10 PM',
      },
    ],
  },
  {
    id: 'NFT-03',
    name: 'NFT coins race',
    creator: faker.name.findName(),
    price: 95.25,
    description:
      'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.',
    image: assets.nft03,
    bids: [
      {
        id: 'BID-31',
        name: faker.name.findName(),
        price: 95.25,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
      {
        id: 'BID-32',
        name: faker.name.findName(),
        price: 95.5,
        image: assets.person03,
        date: 'December 27, 2019 at 1:50 PM',
      },
    ],
  },
  {
    id: 'NFT-04',
    name: 'Nifty NFT',
    creator: faker.name.findName(),
    price: 54.25,
    description:
      'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.',
    image: assets.nft04,
    bids: [
      {
        id: 'BID-41',
        name: faker.name.findName(),
        price: 56.25,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
      {
        id: 'BID-42',
        name: faker.name.findName(),
        price: 54.25,
        image: assets.person03,
        date: 'December 27, 2019 at 1:50 PM',
      },
      {
        id: 'BID-43',
        name: faker.name.findName(),
        price: 55.15,
        image: assets.person04,
        date: 'December 31, 2019 at 3:50 PM',
      },
      {
        id: 'BID-44',
        name: faker.name.findName(),
        price: 54.15,
        image: assets.person02,
        date: 'December 31, 2019 at 3:50 PM',
      },
    ],
  },
  {
    id: 'NFT-05',
    name: 'Colorful circles',
    creator: faker.name.findName(),
    price: 10.25,
    description:
      'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.',
    image: assets.nft05,
    bids: [
      {
        id: 'BID-51',
        name: faker.name.findName(),
        price: 10.25,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
    ],
  },
  {
    id: 'NFT-06',
    name: 'Black box model',
    creator: faker.name.findName(),
    price: 20.25,
    description:
      'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.',
    image: assets.nft06,
    bids: [
      {
        id: 'BID-61',
        name: faker.name.findName(),
        price: 20.25,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
      {
        id: 'BID-62',
        name: faker.name.findName(),
        price: 20.5,
        image: assets.person03,
        date: 'December 27, 2019 at 1:50 PM',
      },
      {
        id: 'BID-63',
        name: faker.name.findName(),
        price: 20.75,
        image: assets.person04,
        date: 'December 31, 2019 at 3:50 PM',
      },
      {
        id: 'BID-64',
        name: faker.name.findName(),
        price: 21.25,
        image: assets.person02,
        date: 'December 31, 2019 at 3:50 PM',
      },
      {
        id: 'BID-65',
        name: faker.name.findName(),
        price: 7.25,
        image: assets.person02,
        date: 'December 31, 2019 at 3:50 PM',
      },
    ],
  },
  {
    id: 'NFT-07',
    name: 'Abstracto soulful art',
    creator: faker.name.findName(),
    price: 18.25,
    description:
      'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.',
    image: assets.nft07,
    bids: [],
  },
];

export { NFTData };
