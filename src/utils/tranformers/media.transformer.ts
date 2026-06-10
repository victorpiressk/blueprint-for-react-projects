import type { MediaDto } from '../../types/dtos/media.dto'
import type { Media } from '../../types/models/media'

export const mediaDtoToModel = (dto: MediaDto): Media => ({
  id: dto.id,
  url: dto.url,
  type: dto.type,
  filename: dto.filename,
  size: dto.size,
  createdAt: dto.created_at
})
