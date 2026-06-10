export interface CartItemDto {
  product_id: string
  name: string
  image_url: string
  price: number
  quantity: number
}

export interface CartDto {
  id: string
  items: CartItemDto[]
  total: number
}
