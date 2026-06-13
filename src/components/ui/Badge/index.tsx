import * as S from './styles'
import type { BadgeProps } from './types'

const Badge = ({
  variant = 'counter',
  status = 'primary',
  count,
  max = 99
}: BadgeProps) => {
  if (variant === 'dot') {
    return <S.Dot $status={status} />
  }

  const displayCount = count !== undefined && count > max ? `${max}+` : count

  return (
    <S.Counter $status={status}>
      {displayCount}
    </S.Counter>
  )
}

export default Badge