import type { Address } from './address'

export interface Company {
  id: string
  name: string
  description: string
  logoUrl: string
  email: string
  phone?: string
  address?: Address
  createdAt: string
}
