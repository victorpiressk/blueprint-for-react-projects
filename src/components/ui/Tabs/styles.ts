import styled, { css } from 'styled-components'
import { breakpoints, colors, fontSizes, fontWeights, transitions } from '../../../styles/GlobalStyles'
import type { TabVariant } from './types'

// ============================================
// VARIANTES DE ABA
// ============================================

const tabVariants = {
  underline: css<{ $active?: boolean }>`
    background-color: transparent;
    color: ${({ theme, $active }) =>
      $active ? theme.colors.text.primary : theme.colors.text.secondary};
    border-radius: 0;
    border-bottom: 2px solid transparent;
    padding: 16px;
    font-weight: ${({ $active }) =>
      $active ? fontWeights.bold : fontWeights.medium};
    position: relative;

    ${({ $active }) =>
      $active &&
      css`
        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 4px;
          background-color: ${colors.primary};
          border-radius: 9999px;
        }
      `}

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.hover.secondary};
    }
  `,

  pill: css<{ $active?: boolean }>`
    background-color: ${({ theme, $active }) =>
      $active ? colors.primary : theme.colors.background.secondary};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.text.reverse : theme.colors.text.secondary};
    border-radius: 9999px;
    padding: 8px 16px;
    font-weight: ${fontWeights.medium};

    &:hover:not(:disabled) {
      background-color: ${({ theme, $active }) =>
        $active ? colors.primary : theme.colors.hover.secondary};
      opacity: ${({ $active }) => ($active ? 0.9 : 1)};
    }
  `,

  card: css<{ $active?: boolean }>`
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.background.primary : theme.colors.background.secondary};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.text.primary : theme.colors.text.secondary};
    border-radius: 8px 8px 0 0;
    padding: 10px 20px;
    font-weight: ${({ $active }) =>
      $active ? fontWeights.bold : fontWeights.medium};
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-bottom: ${({ $active, theme }) =>
      $active
        ? `1px solid ${theme.colors.background.primary}`
        : `1px solid ${theme.colors.border.primary}`};
    margin-bottom: ${({ $active }) => ($active ? '-1px' : '0')};

    &:hover:not(:disabled) {
      background-color: ${({ theme, $active }) =>
        $active
          ? theme.colors.background.primary
          : theme.colors.hover.primary};
    }
  `,
}

// ============================================
// VARIANTES DE CONTAINER
// ============================================

const containerVariants = {
  underline: css`
    border-bottom: 2px solid ${({ theme }) => theme.colors.border.primary};
  `,
  pill: css`
    gap: 8px;
    padding: 4px;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border-radius: 9999px;
  `,
  card: css`
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  `,
}

// ============================================
// STYLED COMPONENTS
// ============================================

export const TabsWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const TabsContainer = styled.div<{
  $scrollable?: boolean
  $variant: TabVariant
}>`
  display: flex;

  ${({ $variant }) => containerVariants[$variant]}

  ${({ $scrollable }) =>
    $scrollable &&
    css`
      overflow-x: auto;
      scrollbar-width: none;
      scroll-behavior: smooth;
      &::-webkit-scrollbar {
        display: none;
      }
    `}
`

export const TabItem = styled.button<{
  $variant: TabVariant
  $active?: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-size: ${fontSizes.md};
  font-family: inherit;
  transition: ${transitions.fast};
  white-space: nowrap;
  flex-shrink: 0;

  ${({ $variant, $active }) =>
    tabVariants[$variant] &&
    css`
      ${tabVariants[$variant]}
    `}
`

export const ScrollButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => $position}: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.reverseBlur};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  transition: ${transitions.fast};

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.text.reverse};
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`