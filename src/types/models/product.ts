import type { Category } from './category'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: Category
  stock: number
  createdAt: string
}
