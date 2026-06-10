import type { Address } from './address'
import { OrderStatus, PaymentMethod } from '../enums/order.enums'

export interface OrderItem {
  productId: string
  name: string
  imageUrl: string
  price: number
  quantity: number
}

export interface Order {
  id: string
  items: OrderItem[]
  total: number
  status: OrderStatus
  paymentMethod: PaymentMethod
  address: Address
  createdAt: string
}
