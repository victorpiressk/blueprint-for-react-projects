import type { OrderDto, OrderItemDto } from '../../types/dtos/order.dto'
import type { Order, OrderItem } from '../../types/models/order'
import { addressDtoToModel } from './address.transformer'

export const orderItemDtoToModel = (dto: OrderItemDto): OrderItem => ({
  productId: dto.product_id,
  name: dto.name,
  imageUrl: dto.image_url,
  price: dto.price,
  quantity: dto.quantity
})

export const orderDtoToModel = (dto: OrderDto): Order => ({
  id: dto.id,
  items: dto.items.map(orderItemDtoToModel),
  total: dto.total,
  status: dto.status,
  paymentMethod: dto.payment_method,
  address: addressDtoToModel(dto.address),
  createdAt: dto.created_at
})
