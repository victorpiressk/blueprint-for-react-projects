export type MobileFooterItem = {
  path: string
  icon: React.ReactNode
  badge?: number
}

export type MobileFooterProps = {
  items: MobileFooterItem[]
}