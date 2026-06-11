import type { Comment } from '../types/models/comment'
import { mockUsers } from './users.mock'

export const mockComments: Comment[] = [
  {
    id: '1',
    postId: '1',
    author: mockUsers[1],
    content:
      'Parabéns pelo lançamento! O design system ficou incrível, já estou usando como referência.',
    createdAt: '2024-04-10T10:00:00Z'
  },
  {
    id: '2',
    postId: '1',
    author: mockUsers[2],
    content:
      'Adorei a abordagem com Styled Components. Você pretende publicar o repositório no GitHub?',
    createdAt: '2024-04-10T11:30:00Z'
  },
  {
    id: '3',
    postId: '2',
    author: mockUsers[0],
    content:
      'Totalmente de acordo. TypeScript transformou a forma como desenvolvo. Nunca mais volto para JS puro.',
    createdAt: '2024-04-12T15:00:00Z'
  },
  {
    id: '4',
    postId: '4',
    author: mockUsers[3],
    content:
      'Node.js 22 tem muita coisa boa. Mal posso esperar para usar em produção.',
    createdAt: '2024-03-01T12:00:00Z'
  }
]
