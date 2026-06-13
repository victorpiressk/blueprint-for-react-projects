import styled, { css } from 'styled-components'
import { colors, fontSizes, fontWeights } from '../../../styles/GlobalStyles'
import type { BadgeStatus } from './types'

const statusColors = {
  primary: css`
    background-color: ${colors.primary};
  `,
  success: css`
    background-color: ${colors.success};
  `,
  warning: css`
    background-color: ${colors.warning};
  `,
  error: css`
    background-color: ${colors.error};
  `,
}

export const Counter = styled.span<{ $status: BadgeStatus }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 9999px;

  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.reverse};

  ${({ $status }) => statusColors[$status]}
`

export const Dot = styled.span<{ $status: BadgeStatus }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 9999px;

  ${({ $status }) => statusColors[$status]}
`