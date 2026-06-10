import type { UserDto } from '../../types/dtos/user.dto'
import type { User } from '../../types/models/user'

export const userDtoToModel = (dto: UserDto): User => ({
  id: dto.id,
  name: dto.name,
  username: dto.username,
  email: dto.email,
  avatarUrl: dto.avatar_url,
  bio: dto.bio,
  role: dto.role,
  status: dto.status,
  createdAt: dto.created_at
})
