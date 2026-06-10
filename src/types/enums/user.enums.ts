export const UserRole = {
  Admin: 'admin',
  User: 'user'
}

export const UserStatus = {
  Active: 'active',
  Inactive: 'inactive',
  Banned: 'banned'
}

export type UserRole = (typeof UserRole)[keyof typeof UserRole]
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]
