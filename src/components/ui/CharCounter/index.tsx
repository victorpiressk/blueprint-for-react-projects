import * as S from './styles'
import type { CharCounterProps } from './types'

const CharCounter = ({ currentLength, maxLength }: CharCounterProps) => {
  const isNearLimit = currentLength >= maxLength * 0.9

  if (currentLength === 0) return null

  return (
    <S.CounterContainer>
      <S.Counter $isNearLimit={isNearLimit}>
        {currentLength}/{maxLength}
      </S.Counter>
    </S.CounterContainer>
  )
}

export default CharCounter