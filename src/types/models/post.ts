import type { Media } from './media'
import type { Tag } from './tag'
import type { User } from './user'
import { PostStatus } from '../enums/post.enums'

export interface Post {
  id: string
  author: User
  content: string
  media: Media[]
  tags: Tag[]
  likesCount: number
  commentsCount: number
  status: PostStatus
  createdAt: string
  updatedAt: string
}
