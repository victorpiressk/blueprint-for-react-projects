import styled, { css } from 'styled-components'
import { colors, fontSizes, fontWeights } from '../../../styles/GlobalStyles'
import type { TagSize } from './types'

const sizes = {
  sm: css`
    padding: 4px 8px;
    font-size: ${fontSizes.xs};
  `,
  md: css`
    padding: 6px 12px;
    font-size: ${fontSizes.sm};
  `,
}

export const TagContainer = styled.div<{ $size: TagSize }>`
  display: inline-block;
  border-radius: 9999px;

  background-color: ${colors.primary};
  color: ${({ theme }) => theme.colors.text.reverse};
  font-weight: ${fontWeights.bold};

  ${({ $size }) => sizes[$size]}
`