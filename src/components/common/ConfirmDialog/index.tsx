import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import * as S from './styles'
import type { ConfirmDialogProps } from './types'

const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  confirmVariant = 'danger',
  loading = false
}: ConfirmDialogProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="small" showOverlay>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Actions>
          <Button
            type="button"
            variant={confirmVariant}
            onClick={onConfirm}
            loading={loading}
          >
            {confirmLabel}
          </Button>
          <Button type="button" variant="outline" onClick={onClose}>
            {cancelLabel}
          </Button>
        </S.Actions>
      </S.Content>
    </Modal>
  )
}

export default ConfirmDialog