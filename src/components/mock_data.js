const baseball_glove = require('../img/baseball_glove.jpg');
const baseball = require('../img/baseball.jpg');
const card = require('../img/card.jpg');
const vettel = require('../img/vettel.jpg');


export const products = [
    {
      id: 1,
      name: 'Baseball Glove',
      color: 'Used',
      price: '$85',
      priceInt: 85,
      href: '/create-checkout-session/',
      imageSrc: baseball_glove,
      imageAlt: 'Baseball Glove',
      priceId: 'price_1KtWwmDVw81LB5d84zzvBYLp',
      leadTime: '3-5 days'
    },
    {
      id: 2,
      name: 'Baseball',
      color: 'Used',
      price: '$35',
      priceInt: 35,
      href: '/create-checkout-session/',
      imageSrc: baseball,
      imageAlt: 'Baseball',
      priceId: 'price_1KtWreDVw81LB5d8Gn3Q8HFn',
      leadTime: '3-5 days'
    },
    {
      id: 3,
      name: 'Card',
      color: 'Mint',
      price: '$70',
      priceInt: 70,
      href: '/create-checkout-session/',
      imageSrc: card,
      imageAlt: 'Baseball Card',
      priceId: 'price_1KtWtyDVw81LB5d8y8mjEZvh',
      leadTime: '3-5 days'
    },
    {
      id: 4,
      name: 'F1 Helmet',
      color: 'Mint',
      price: '$100',
      priceInt: 100,
      href: '/create-checkout-session/',
      imageSrc: vettel,
      imageAlt: 'F1 Miniature Helmet',
      priceId: 'price_1KtWuODVw81LB5d8QfAhVzff',
      leadTime: '3-5 days'
    },
  ]