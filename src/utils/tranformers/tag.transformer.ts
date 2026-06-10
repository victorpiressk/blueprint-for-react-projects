import type { TagDto } from '../../types/dtos/tag.dto'
import type { Tag } from '../../types/models/tag'

export const tagDtoToModel = (dto: TagDto): Tag => ({
  id: dto.id,
  name: dto.name,
  slug: dto.slug
})
