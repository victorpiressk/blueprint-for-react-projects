import type { SearchResultDto } from '../../types/dtos/searchResult.dto'
import type { SearchResult } from '../../types/models/searchResult'

export const searchResultDtoToModel = (dto: SearchResultDto): SearchResult => ({
  id: dto.id,
  type: dto.type,
  title: dto.title,
  description: dto.description,
  imageUrl: dto.image_url,
  url: dto.url
})
