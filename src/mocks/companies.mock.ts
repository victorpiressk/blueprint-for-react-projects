import type { Company } from '../types/models/company'
import { mockAddresses } from './addresses.mock'

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Tech Solutions Ltda',
    description:
      'Empresa especializada em desenvolvimento de software sob medida.',
    logoUrl: 'https://placehold.co/100x100?text=TS',
    email: 'contato@techsolutions.com.br',
    phone: '(11) 3456-7890',
    address: mockAddresses[0],
    createdAt: '2023-06-01T08:00:00Z'
  },
  {
    id: '2',
    name: 'Inova Comércio S.A.',
    description:
      'Distribuidora atacadista com atuação em todo o território nacional.',
    logoUrl: 'https://placehold.co/100x100?text=IC',
    email: 'vendas@inovacomercio.com.br',
    phone: '(21) 2345-6789',
    address: mockAddresses[1],
    createdAt: '2023-08-15T10:30:00Z'
  },
  {
    id: '3',
    name: 'Studio Criativo',
    description: 'Agência de design e branding focada em identidade visual.',
    logoUrl: 'https://placehold.co/100x100?text=SC',
    email: 'hello@studiocriativo.com.br',
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '4',
    name: 'Logística Rápida',
    description:
      'Operador logístico com entregas expressas para todo o Brasil.',
    logoUrl: 'https://placehold.co/100x100?text=LR',
    email: 'operacoes@logisticarapida.com.br',
    phone: '(41) 9876-5432',
    createdAt: '2024-03-22T14:00:00Z'
  }
]
