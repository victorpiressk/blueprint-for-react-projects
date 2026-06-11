import type { Order } from '../types/models/order'
import { OrderStatus, PaymentMethod } from '../types/enums/order.enums'
import { mockAddresses } from './addresses.mock'

export const mockOrders: Order[] = [
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
    total: 28999.98,
    status: OrderStatus.Delivered,
    paymentMethod: PaymentMethod.CreditCard,
    address: mockAddresses[0],
    createdAt: '2024-02-10T14:00:00Z'
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
    total: 12999.98,
    status: OrderStatus.Shipped,
    paymentMethod: PaymentMethod.Pix,
    address: mockAddresses[1],
    createdAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '3',
    items: [
      {
        productId: '4',
        name: 'Dell XPS 15',
        imageUrl: 'https://placehold.co/300x300?text=Dell+XPS+15',
        price: 14299.99,
        quantity: 1
      }
    ],
    total: 14299.99,
    status: OrderStatus.Confirmed,
    paymentMethod: PaymentMethod.Boleto,
    address: mockAddresses[2],
    createdAt: '2024-04-01T09:00:00Z'
  },
  {
    id: '4',
    items: [
      {
        productId: '1',
        name: 'iPhone 15 Pro',
        imageUrl: 'https://placehold.co/300x300?text=iPhone+15+Pro',
        price: 8999.99,
        quantity: 1
      }
    ],
    total: 8999.99,
    status: OrderStatus.Cancelled,
    paymentMethod: PaymentMethod.DebitCard,
    address: mockAddresses[3],
    createdAt: '2024-04-20T16:00:00Z'
  }
]
