import styled from 'styled-components'
import { transitions } from '../../../styles/GlobalStyles'

export const CardContainer = styled.div<{ onClick?: () => void }>`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.colors.shadow.primary} 0px 1px 3px;

  ${({ onClick }) =>
    onClick &&
    `
    cursor: pointer;
    transition: ${transitions.fast};
  `}

  ${({ onClick, theme }) =>
    onClick &&
    `
    &:hover {
      background-color: ${theme.colors.hover.primary};
    }
  `}
`