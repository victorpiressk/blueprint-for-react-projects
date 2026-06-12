import styled from 'styled-components'
import { colors, transitions } from '../../../styles/GlobalStyles'

export const FabButton = styled.button<{
  $bottom?: string
  $right?: string
  $top?: string
  $left?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  background-color: ${colors.primary};
  color: ${({ theme }) => theme.colors.text.reverse};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.primary};
  transition: ${transitions.fast};

  bottom: ${({ $bottom }) => $bottom ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
  top: ${({ $top }) => $top ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};

  &:hover {
    opacity: 0.9;
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.shadow.primary};
  }
`
