import type { User } from '../models/user'

export interface AuthResponse {
  accessToken: string
  user: User
}
