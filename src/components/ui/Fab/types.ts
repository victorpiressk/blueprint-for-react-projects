export type FabProps = {
  onClick: () => void
  icon: React.ReactNode
  label?: string
  position?: {
    bottom?: string
    right?: string
    top?: string
    left?: string
  }
}