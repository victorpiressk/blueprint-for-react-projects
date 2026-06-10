import type { CompanyDto } from '../../types/dtos/company.dto'
import type { Company } from '../../types/models/company'
import { addressDtoToModel } from './address.transformer'

export const companyDtoToModel = (dto: CompanyDto): Company => ({
  id: dto.id,
  name: dto.name,
  description: dto.description,
  logoUrl: dto.logo_url,
  email: dto.email,
  phone: dto.phone,
  address: dto.address ? addressDtoToModel(dto.address) : undefined,
  createdAt: dto.created_at
})
