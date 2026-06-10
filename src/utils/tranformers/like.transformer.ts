import type { LikeDto } from '../../types/dtos/like.dto'
import type { Like } from '../../types/models/like'

export const likeDtoToModel = (dto: LikeDto): Like => ({
  id: dto.id,
  postId: dto.post_id,
  userId: dto.user_id,
  createdAt: dto.created_at
})
