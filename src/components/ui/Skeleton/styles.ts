import styled, { keyframes } from 'styled-components'
import type { SkeletonVariant } from './types'

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`

export const SkeletonBase = styled.div<{
  $variant: SkeletonVariant
  $width?: string | number
  $height?: string | number
  $borderRadius?: string
}>`
  background: ${({ theme }) => theme.colors.border.primary};
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.border.primary} 0px,
    ${({ theme }) => theme.colors.hover.primary} 40px,
    ${({ theme }) => theme.colors.border.primary} 80px
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s infinite linear;

  ${({ $variant, $width, $height, $borderRadius }) => {
    const width = typeof $width === 'number' ? `${$width}px` : $width
    const height = typeof $height === 'number' ? `${$height}px` : $height

    if ($variant === 'circle') {
      const size = width || height || '40px'
      return `
        width: ${size};
        height: ${size};
        border-radius: 50%;
      `
    }

    if ($variant === 'text') {
      return `
        width: ${width || '100%'};
        height: ${height || '16px'};
        border-radius: 4px;
      `
    }

    return `
      width: ${width || '100%'};
      height: ${height || '100px'};
      border-radius: ${$borderRadius || '8px'};
    `
  }}
`