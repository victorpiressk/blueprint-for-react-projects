import type { SearchResult } from '../types/models/searchResult'

export const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    type: 'user',
    title: 'Ana Souza',
    description: 'Desenvolvedora frontend apaixonada por design systems.',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    url: '/usuarios/ana-souza'
  },
  {
    id: '2',
    type: 'product',
    title: 'iPhone 15 Pro',
    description:
      'Smartphone Apple com chip A17 Pro, câmera de 48MP e tela Super Retina XDR.',
    imageUrl: 'https://placehold.co/300x300?text=iPhone+15+Pro',
    url: '/produtos/iphone-15-pro'
  },
  {
    id: '3',
    type: 'post',
    title: 'Novo design system em React com Styled Components',
    description:
      'Acabei de lançar meu novo design system em React com Styled Components.',
    url: '/posts/1'
  },
  {
    id: '4',
    type: 'company',
    title: 'Tech Solutions Ltda',
    description:
      'Empresa especializada em desenvolvimento de software sob medida.',
    imageUrl: 'https://placehold.co/100x100?text=TS',
    url: '/empresas/tech-solutions'
  }
]
