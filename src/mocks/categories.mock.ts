import type { Category } from '../types/models/category'

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Tecnologia',
    slug: 'tecnologia',
    description: 'Produtos e conteúdos relacionados à tecnologia e inovação.'
  },
  {
    id: '2',
    name: 'Smartphones',
    slug: 'smartphones',
    description: 'Celulares e acessórios.',
    parentId: '1'
  },
  {
    id: '3',
    name: 'Notebooks',
    slug: 'notebooks',
    description: 'Computadores portáteis e acessórios.',
    parentId: '1'
  },
  {
    id: '4',
    name: 'Moda',
    slug: 'moda',
    description: 'Roupas, calçados e acessórios de moda.'
  }
]
