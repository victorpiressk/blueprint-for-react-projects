export type AvatarSize = 'small' | 'medium' | 'large'

export type AvatarProps = {
  src?: string | null
  alt?: string
  size?: AvatarSize
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}