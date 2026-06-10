import { PaymentMethod } from '../enums/order.enums'

export interface CreateOrderRequest {
  items: {
    productId: string
    quantity: number
  }[]
  paymentMethod: PaymentMethod
  addressId: string
}
