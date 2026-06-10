import type { MediaDto } from './media.dto'
import type { TagDto } from './tag.dto'
import type { UserDto } from './user.dto'
import { PostStatus } from '../enums/post.enums'

export interface PostDto {
  id: string
  author: UserDto
  content: string
  media: MediaDto[]
  tags: TagDto[]
  likes_count: number
  comments_count: number
  status: PostStatus
  created_at: string
  updated_at: string
}
