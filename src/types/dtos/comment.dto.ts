import type { UserDto } from './user.dto'

export interface CommentDto {
  id: string
  post_id: string
  author: UserDto
  content: string
  created_at: string
}
