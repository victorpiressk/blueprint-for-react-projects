import styled from 'styled-components'
import { breakpoints, colors, fontWeights, transitions } from '../../../styles/GlobalStyles'

export const FooterContainer = styled.nav`
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.background.blur};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
    height: 56px;
  }
`

export const FooterItem = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: ${transitions.fast};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text.primary : theme.colors.text.secondary};
`

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`