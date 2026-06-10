import type { AddressDto } from './address.dto'
import { OrderStatus, PaymentMethod } from '../enums/order.enums'

export interface OrderItemDto {
  product_id: string
  name: string
  image_url: string
  price: number
  quantity: number
}

export interface OrderDto {
  id: string
  items: OrderItemDto[]
  total: number
  status: OrderStatus
  payment_method: PaymentMethod
  address: AddressDto
  created_at: string
}
