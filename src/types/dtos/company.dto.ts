import type { AddressDto } from './address.dto'

export interface CompanyDto {
  id: string
  name: string
  description: string
  logo_url: string
  email: string
  phone?: string
  address?: AddressDto
  created_at: string
}
