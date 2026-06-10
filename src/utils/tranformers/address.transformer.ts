import type { AddressDto } from '../../types/dtos/address.dto'
import type { Address } from '../../types/models/address'

export const addressDtoToModel = (dto: AddressDto): Address => ({
  id: dto.id,
  street: dto.street,
  number: dto.number,
  complement: dto.complement,
  neighborhood: dto.neighborhood,
  city: dto.city,
  state: dto.state,
  country: dto.country,
  zipCode: dto.zip_code
})
