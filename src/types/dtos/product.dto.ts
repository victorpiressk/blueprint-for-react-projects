import type { CategoryDto } from './category.dto'

export interface ProductDto {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: CategoryDto
  stock: number
  created_at: string
}
