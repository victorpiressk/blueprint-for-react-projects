import * as S from './styles'
import type { InfobarProps } from './types'

const Infobar = ({ children }: InfobarProps) => {
  return (
    <S.InfobarContainer>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.InfobarContainer>
  )
}

export default Infobar