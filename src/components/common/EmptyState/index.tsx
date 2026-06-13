import * as S from './styles'
import type { EmptyStateProps } from './types'

const EmptyState = ({ icon, title, description }: EmptyStateProps) => {
  return (
    <S.Container>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {title && <S.Title>{title}</S.Title>}
      {description && <S.Description>{description}</S.Description>}
    </S.Container>
  )
}

export default EmptyState