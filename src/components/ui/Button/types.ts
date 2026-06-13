export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'

export type ButtonProps = {
  type: 'button' | 'submit' | 'link'
  variant?: ButtonVariant
  title?: string
  to?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  disabled?: boolean
  active?: boolean
  loading?: boolean
}