export type BadgeVariant = 'counter' | 'dot'

export type BadgeStatus = 'primary' | 'success' | 'warning' | 'error'

export type BadgeProps = {
  variant?: BadgeVariant
  status?: BadgeStatus
  count?: number
  max?: number
}