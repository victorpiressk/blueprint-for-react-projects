import type { CategoryDto } from '../../types/dtos/category.dto'
import type { Category } from '../../types/models/category'

export const categoryDtoToModel = (dto: CategoryDto): Category => ({
  id: dto.id,
  name: dto.name,
  slug: dto.slug,
  description: dto.description,
  parentId: dto.parent_id
})
