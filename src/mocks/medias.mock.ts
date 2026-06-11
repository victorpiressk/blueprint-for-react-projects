import type { Media } from '../types/models/media'
import { MediaType } from '../types/enums/media.enums'

export const mockMedias: Media[] = [
  {
    id: '1',
    url: 'https://placehold.co/800x600?text=Imagem+1',
    type: MediaType.Image,
    filename: 'imagem-produto-1.jpg',
    size: 204800,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    url: 'https://placehold.co/800x600?text=Imagem+2',
    type: MediaType.Image,
    filename: 'imagem-produto-2.jpg',
    size: 184320,
    createdAt: '2024-02-10T11:00:00Z'
  },
  {
    id: '3',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: MediaType.Video,
    filename: 'video-apresentacao.mp4',
    size: 5242880,
    createdAt: '2024-03-05T14:00:00Z'
  },
  {
    id: '4',
    url: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/pdf-sample.pdf',
    type: MediaType.Document,
    filename: 'manual-do-produto.pdf',
    size: 1048576,
    createdAt: '2024-04-01T09:00:00Z'
  }
]
