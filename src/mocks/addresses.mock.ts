import type { Address } from '../types/models/address'

export const mockAddresses: Address[] = [
  {
    id: '1',
    street: 'Rua das Flores',
    number: '123',
    complement: 'Apto 45',
    neighborhood: 'Jardim Paulista',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    zipCode: '01408-000'
  },
  {
    id: '2',
    street: 'Avenida Atlântica',
    number: '500',
    neighborhood: 'Copacabana',
    city: 'Rio de Janeiro',
    state: 'RJ',
    country: 'Brasil',
    zipCode: '22010-000'
  },
  {
    id: '3',
    street: 'Rua XV de Novembro',
    number: '210',
    complement: 'Sala 12',
    neighborhood: 'Centro',
    city: 'Curitiba',
    state: 'PR',
    country: 'Brasil',
    zipCode: '80020-310'
  },
  {
    id: '4',
    street: 'Alameda Santos',
    neighborhood: 'Cerqueira César',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    zipCode: '01419-001'
  }
]
