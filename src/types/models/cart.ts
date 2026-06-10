export interface CartItem {
  productId: string
  name: string
  imageUrl: string
  price: number
  quantity: number
}

export interface Cart {
  id: string
  items: CartItem[]
  total: number
}
