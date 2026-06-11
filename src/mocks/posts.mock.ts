import type { Post } from '../types/models/post'
import { PostStatus } from '../types/enums/post.enums'
import { mockUsers } from './users.mock'
import { mockMedias } from './medias.mock'
import { mockTags } from './tags.mock'

export const mockPosts: Post[] = [
  {
    id: '1',
    author: mockUsers[0],
    content:
      'Acabei de lançar meu novo design system em React com Styled Components. Foram meses de trabalho e estou muito satisfeita com o resultado!',
    media: [mockMedias[0]],
    tags: [mockTags[0], mockTags[3]],
    likesCount: 142,
    commentsCount: 28,
    status: PostStatus.Published,
    createdAt: '2024-04-10T09:00:00Z',
    updatedAt: '2024-04-10T09:00:00Z'
  },
  {
    id: '2',
    author: mockUsers[1],
    content:
      'TypeScript continua sendo minha principal ferramenta de trabalho. A tipagem estática evita tantos bugs em produção que não consigo imaginar voltar para JavaScript puro.',
    media: [],
    tags: [mockTags[1]],
    likesCount: 89,
    commentsCount: 15,
    status: PostStatus.Published,
    createdAt: '2024-04-12T14:30:00Z',
    updatedAt: '2024-04-12T14:30:00Z'
  },
  {
    id: '3',
    author: mockUsers[2],
    content:
      'Rascunho do meu próximo artigo sobre acessibilidade em interfaces modernas.',
    media: [],
    tags: [mockTags[3]],
    likesCount: 0,
    commentsCount: 0,
    status: PostStatus.Draft,
    createdAt: '2024-04-15T16:00:00Z',
    updatedAt: '2024-04-15T16:00:00Z'
  },
  {
    id: '4',
    author: mockUsers[0],
    content:
      'Explorando as novidades do Node.js 22. Muita coisa interessante chegando para o ecossistema backend JavaScript.',
    media: [mockMedias[0], mockMedias[1]],
    tags: [mockTags[2], mockTags[1]],
    likesCount: 210,
    commentsCount: 47,
    status: PostStatus.Archived,
    createdAt: '2024-03-01T11:00:00Z',
    updatedAt: '2024-04-01T11:00:00Z'
  }
]
