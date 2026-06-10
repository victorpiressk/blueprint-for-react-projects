export const OrderStatus = {
  Pending: 'pending',
  Confirmed: 'confirmed',
  Shipped: 'shipped',
  Delivered: 'delivered',
  Cancelled: 'cancelled'
}

export const PaymentMethod = {
  CreditCard: 'credit_card',
  DebitCard: 'debit_card',
  Pix: 'pix',
  Boleto: 'boleto'
}

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]
