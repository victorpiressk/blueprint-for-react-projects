import type { ProductDto } from '../../types/dtos/product.dto'
import type { Product } from '../../types/models/product'
import { categoryDtoToModel } from './category.transformer'

export const productDtoToModel = (dto: ProductDto): Product => ({
  id: dto.id,
  name: dto.name,
  description: dto.description,
  price: dto.price,
  imageUrl: dto.image_url,
  category: categoryDtoToModel(dto.category),
  stock: dto.stock,
  createdAt: dto.created_at
})
