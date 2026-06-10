import { NotificationType } from '../enums/notification.enums'

export interface NotificationDto {
  id: string
  user_id: string
  type: NotificationType
  title: string
  body: string
  read: boolean
  created_at: string
}
