import type { CommentDto } from '../../types/dtos/comment.dto'
import type { Comment } from '../../types/models/comment'
import { userDtoToModel } from './user.transformer'

export const commentDtoToModel = (dto: CommentDto): Comment => ({
  id: dto.id,
  postId: dto.post_id,
  author: userDtoToModel(dto.author),
  content: dto.content,
  createdAt: dto.created_at
})
