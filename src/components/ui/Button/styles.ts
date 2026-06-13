import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { colors, fontSizes, fontWeights, transitions } from '../../../styles/GlobalStyles'
import type { ButtonVariant } from './types'

type StyledButtonProps = {
  $variant: ButtonVariant
  $active?: boolean
  $loading?: boolean
}

const baseStyles = css<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 8px 16px;
  border: none;
  cursor: pointer;

  font-size: ${fontSizes.md};
  font-weight: ${fontWeights.medium};

  transition: ${transitions.fast};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $loading }) =>
    $loading &&
    css`
      cursor: wait;
    `}
`

const variants = {
  primary: css`
    background-color: ${colors.primary};
    color: ${({ theme }) => theme.colors.text.reverse};
    border-radius: 9999px;

    &:hover:not(:disabled) {
      background-color: ${colors.hover.primary};
    }
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.colors.text.primary};
    color: ${({ theme }) => theme.colors.text.reverse};
    border-radius: 9999px;

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,

  outline: css<StyledButtonProps>`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.secondary};
    border-radius: 9999px;
    font-weight: ${fontWeights.bold};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.hover.secondary};
    }

    ${({ $active }) =>
      $active &&
      css`
        font-weight: ${fontWeights.bold};
      `}
  `,

  ghost: css<StyledButtonProps>`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 9999px;
    padding: 12px;
    font-weight: ${fontWeights.regular};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.hover.secondary};
    }

    ${({ $active }) =>
      $active &&
      css`
        font-weight: ${fontWeights.bold};
      `}
  `,

  danger: css`
    background-color: ${colors.error};
    color: ${({ theme }) => theme.colors.text.reverse};
    font-weight: ${fontWeights.bold};
    border-radius: 9999px;

    &:hover:not(:disabled) {
      background-color: ${colors.hover.error};
    }
  `,
}

export const ButtonContainer = styled.button<StyledButtonProps>`
  ${baseStyles}
  ${({ $variant }) => variants[$variant]}
`

export const ButtonLink = styled(Link)<StyledButtonProps>`
  ${baseStyles}
  ${({ $variant }) => variants[$variant]}
  text-decoration: none;

  &:visited,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`