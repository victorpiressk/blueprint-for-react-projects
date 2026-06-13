import styled from 'styled-components'
import { colors, fontSizes } from '../../../styles/GlobalStyles'

export const CounterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Counter = styled.span<{ $isNearLimit: boolean }>`
  font-size: ${fontSizes.sm};
  color: ${({ $isNearLimit }) => ($isNearLimit ? colors.error : colors.primary)};
`