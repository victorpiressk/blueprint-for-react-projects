import type { PostDto } from '../../types/dtos/post.dto'
import type { Post } from '../../types/models/post'
import { mediaDtoToModel } from './media.transformer'
import { tagDtoToModel } from './tag.transformer'
import { userDtoToModel } from './user.transformer'

export const postDtoToModel = (dto: PostDto): Post => ({
  id: dto.id,
  author: userDtoToModel(dto.author),
  content: dto.content,
  media: dto.media.map(mediaDtoToModel),
  tags: dto.tags.map(tagDtoToModel),
  likesCount: dto.likes_count,
  commentsCount: dto.comments_count,
  status: dto.status,
  createdAt: dto.created_at,
  updatedAt: dto.updated_at
})
