import { NotificationType } from '../enums/notification.enums'

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  body: string
  read: boolean
  createdAt: string
}
