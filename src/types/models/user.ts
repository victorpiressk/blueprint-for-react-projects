import { UserRole, UserStatus } from '../enums/user.enums'

export interface User {
  id: string
  name: string
  username?: string
  email: string
  avatarUrl: string
  bio: string
  role: UserRole
  status: UserStatus
  createdAt: string
}
