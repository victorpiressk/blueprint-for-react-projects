import { MediaType } from '../enums/media.enums'

export interface Media {
  id: string
  url: string
  type: MediaType
  filename: string
  size: number
  createdAt: string
}
