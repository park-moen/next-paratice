export const mockProducts = [
  {
    id: 1,
    name: '치킨',
    price: 18000,
    category: 'chicken',
    image: '/images/chicken.jpg',
    description: '맛있는 치킨',
    inStock: true,
    favorited: false,
    favoritesCount: 0,
  },
  {
    id: 2,
    name: '피자',
    price: 20000,
    category: 'pizza',
    image: '/images/pizza.jpg',
    description: '맛있는 피자',
    inStock: true,
    favorited: false,
    favoritesCount: 3,
  },
  {
    id: 3,
    name: '버거',
    price: 8000,
    category: 'burger',
    image: '/images/burger.jpg',
    description: '맛있는 버거',
    inStock: false,
    favorited: false,
    favoritesCount: 2,
  },
];

export const mockProduct = mockProducts[0];
