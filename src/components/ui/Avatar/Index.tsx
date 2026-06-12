import * as S from './styles'
import type { AvatarProps } from './types'

const Avatar = ({ src, alt = 'User', size = 'medium', onClick }: AvatarProps) => {
  const getInitial = () => alt.charAt(0).toUpperCase()

  return (
    <S.AvatarContainer $size={size} onClick={onClick}>
      {src ? (
        <S.AvatarImage src={src} alt={alt} />
      ) : (
        <S.AvatarPlaceholder $size={size}>{getInitial()}</S.AvatarPlaceholder>
      )}
    </S.AvatarContainer>
  )
}

export default Avatar