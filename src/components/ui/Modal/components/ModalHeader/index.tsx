import { X } from 'lucide-react'
import * as S from './styles'
import type { ModalHeaderProps } from './types'

const ModalHeader = ({
  title,
  onClose,
  showCloseButton = true
}: ModalHeaderProps) => {
  return (
    <S.HeaderContainer>
      {showCloseButton && (
        <S.CloseButton onClick={onClose} aria-label="Fechar">
          <X size={20} strokeWidth={2} />
        </S.CloseButton>
      )}

      {title && (
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
      )}
    </S.HeaderContainer>
  )
}

export default ModalHeader