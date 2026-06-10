import { MediaType } from '../enums/media.enums'

export interface MediaDto {
  id: string
  url: string
  type: MediaType
  filename: string
  size: number
  created_at: string
}
