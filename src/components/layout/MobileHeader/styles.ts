import styled from 'styled-components'
import { breakpoints, transitions } from '../../../styles/GlobalStyles'

export const HeaderContainer = styled.header`
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 56px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  }
`

export const AvatarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transition: ${transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const RightPlaceholder = styled.div`
  width: 32px;
`