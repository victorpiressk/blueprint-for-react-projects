import type { Product } from '../types/models/product'
import { mockCategories } from './categories.mock'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description:
      'Smartphone Apple com chip A17 Pro, câmera de 48MP e tela Super Retina XDR.',
    price: 8999.99,
    imageUrl: 'https://placehold.co/300x300?text=iPhone+15+Pro',
    category: mockCategories[1],
    stock: 12,
    createdAt: '2024-01-10T08:00:00Z'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    description:
      'Smartphone Samsung com inteligência artificial integrada e câmera de 50MP.',
    price: 6499.99,
    imageUrl: 'https://placehold.co/300x300?text=Galaxy+S24',
    category: mockCategories[1],
    stock: 25,
    createdAt: '2024-02-05T10:00:00Z'
  },
  {
    id: '3',
    name: 'MacBook Pro 14"',
    description:
      'Notebook Apple com chip M3 Pro, 18GB de memória unificada e SSD de 512GB.',
    price: 19999.99,
    imageUrl: 'https://placehold.co/300x300?text=MacBook+Pro',
    category: mockCategories[2],
    stock: 8,
    createdAt: '2024-03-01T09:00:00Z'
  },
  {
    id: '4',
    name: 'Dell XPS 15',
    description:
      'Notebook Dell com processador Intel Core i7, 16GB RAM e tela OLED 4K.',
    price: 14299.99,
    imageUrl: 'https://placehold.co/300x300?text=Dell+XPS+15',
    category: mockCategories[2],
    stock: 0,
    createdAt: '2024-03-20T11:00:00Z'
  }
]
