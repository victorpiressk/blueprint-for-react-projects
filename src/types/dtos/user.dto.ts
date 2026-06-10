import { UserRole, UserStatus } from '../enums/user.enums'

export interface UserDto {
  id: string
  name: string
  username?: string
  email: string
  avatar_url: string
  bio: string
  role: UserRole
  status: UserStatus
  created_at: string
}
