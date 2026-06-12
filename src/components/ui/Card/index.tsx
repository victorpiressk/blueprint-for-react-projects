import * as S from './styles'
import type { CardProps } from './types'

const Card = ({ children, onClick }: CardProps) => {
  return <S.CardContainer onClick={onClick}>{children}</S.CardContainer>
}

export default Card