import type { User } from './user'

export interface Comment {
  id: string
  postId: string
  author: User
  content: string
  createdAt: string
}
