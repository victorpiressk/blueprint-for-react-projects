import type { Notification } from '../types/models/notification'
import { NotificationType } from '../types/enums/notification.enums'

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    type: NotificationType.Like,
    title: 'Nova curtida',
    body: 'Carlos Lima curtiu sua publicação.',
    read: false,
    createdAt: '2024-04-15T10:00:00Z'
  },
  {
    id: '2',
    userId: '1',
    type: NotificationType.Comment,
    title: 'Novo comentário',
    body: 'Fernanda Rocha comentou na sua publicação.',
    read: false,
    createdAt: '2024-04-15T11:30:00Z'
  },
  {
    id: '3',
    userId: '1',
    type: NotificationType.Follow,
    title: 'Novo seguidor',
    body: 'Marcos Oliveira começou a seguir você.',
    read: true,
    createdAt: '2024-04-14T09:00:00Z'
  },
  {
    id: '4',
    userId: '1',
    type: NotificationType.Mention,
    title: 'Você foi mencionado',
    body: 'Carlos Lima mencionou você em uma publicação.',
    read: true,
    createdAt: '2024-04-13T16:00:00Z'
  },
  {
    id: '5',
    userId: '1',
    type: NotificationType.System,
    title: 'Atualização disponível',
    body: 'Uma nova versão da plataforma está disponível. Acesse para conferir as novidades.',
    read: false,
    createdAt: '2024-04-12T08:00:00Z'
  }
]
