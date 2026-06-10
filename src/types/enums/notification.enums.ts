export const NotificationType = {
  Like: 'like',
  Comment: 'comment',
  Follow: 'follow',
  Mention: 'mention',
  System: 'system'
}

export type NotificationType =
  (typeof NotificationType)[keyof typeof NotificationType]
