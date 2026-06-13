import * as S from './styles'
import type { FabProps } from './types'

const Fab = ({
  onClick,
  icon,
  label,
  position = { bottom: '24px', right: '24px' }
}: FabProps) => {
  return (
    <S.FabButton
      onClick={onClick}
      aria-label={label}
      $bottom={position.bottom}
      $right={position.right}
      $top={position.top}
      $left={position.left}
    >
      {icon}
    </S.FabButton>
  )
}

export default Fab