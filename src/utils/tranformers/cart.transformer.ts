import type { CartDto, CartItemDto } from '../../types/dtos/cart.dto'
import type { Cart, CartItem } from '../../types/models/cart'

export const cartItemDtoToModel = (dto: CartItemDto): CartItem => ({
  productId: dto.product_id,
  name: dto.name,
  imageUrl: dto.image_url,
  price: dto.price,
  quantity: dto.quantity
})

export const cartDtoToModel = (dto: CartDto): Cart => ({
  id: dto.id,
  items: dto.items.map(cartItemDtoToModel),
  total: dto.total
})
