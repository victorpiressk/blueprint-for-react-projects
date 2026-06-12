export type SidebarItem = {
  label: string
  path: string
  icon: React.ReactNode
  badge?: number
}

export type SidebarProps = {
  items: SidebarItem[]
  isOpen?: boolean
  onClose?: () => void
} 