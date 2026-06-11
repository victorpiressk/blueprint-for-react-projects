import type { Cart } from '../types/models/cart'

export const mockCarts: Cart[] = [
  {
    id: '1',
    items: [
      {
        productId: '1',
        name: 'iPhone 15 Pro',
        imageUrl: 'https://placehold.co/300x300?text=iPhone+15+Pro',
        price: 8999.99,
        quantity: 1
      },
      {
        productId: '3',
        name: 'MacBook Pro 14"',
        imageUrl: 'https://placehold.co/300x300?text=MacBook+Pro',
        price: 19999.99,
        quantity: 1
      }
    ],
    total: 28999.98
  },
  {
    id: '2',
    items: [
      {
        productId: '2',
        name: 'Samsung Galaxy S24',
        imageUrl: 'https://placehold.co/300x300?text=Galaxy+S24',
        price: 6499.99,
        quantity: 2
      }
    ],
    total: 12999.98
  },
  {
    id: '3',
    items: [],
    total: 0
  }
]
