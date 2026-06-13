export type TabItem = {
  key: string
  label: string
  path?: string
}

export type TabVariant = 'underline' | 'pill' | 'card'

export type TabsProps = {
  tabs: TabItem[]
  activeTab: string
  onTabChange: (tab: string) => void
  variant?: TabVariant
  scrollable?: boolean
}