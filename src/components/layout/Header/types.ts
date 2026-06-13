import type { TabItem } from '../../ui/Tabs/types'

export type ProfileMenuItem = {
  label: string
  onClick: () => void
}

export type UserInfo = {
  name: string
  avatar?: string | null
  menuItems: ProfileMenuItem[]
}

export type HeaderProps = {
  logo: React.ReactNode
  navItems: TabItem[]
  user?: UserInfo
  onLogin?: () => void
  onRegister?: () => void
  loginLabel?: string
  registerLabel?: string
}