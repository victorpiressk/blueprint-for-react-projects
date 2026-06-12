import Avatar from '../../ui/Avatar'
import * as S from './styles'
import type { MobileHeaderProps } from './types'

const MobileHeader = ({
  logo,
  avatar,
  avatarAlt = 'User',
  onAvatarClick
}: MobileHeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.AvatarButton onClick={onAvatarClick} aria-label="Abrir menu">
        <Avatar src={avatar} alt={avatarAlt} size="small" />
      </S.AvatarButton>

      <S.LogoWrapper>{logo}</S.LogoWrapper>

      <S.RightPlaceholder />
    </S.HeaderContainer>
  )
}

export default MobileHeader