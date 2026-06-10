import type { NotificationDto } from '../../types/dtos/notification.dto'
import type { Notification } from '../../types/models/notification'

export const notificationDtoToModel = (dto: NotificationDto): Notification => ({
  id: dto.id,
  userId: dto.user_id,
  type: dto.type,
  title: dto.title,
  body: dto.body,
  read: dto.read,
  createdAt: dto.created_at
})
