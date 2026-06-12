import styled, { css } from 'styled-components'
import { breakpoints, colors, fontSizes, fontWeights, transitions } from '../../../styles/GlobalStyles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`

export const SidebarContainer = styled.aside<{
  $isOpen: boolean
  $isTabletExpanded: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width ${transitions.normal}, transform ${transitions.normal};

  width: 260px;
  transform: translateX(0);

  @media (max-width: ${breakpoints.desktop}) {
    width: ${({ $isTabletExpanded }) => ($isTabletExpanded ? '260px' : '72px')};
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 260px;
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`

export const ToggleButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 16px;
  align-self: flex-start;

  span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 2px;
    transition: ${transitions.fast};
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  flex: 1;
  overflow-y: auto;
`

export const NavItemWrapper = styled.div`
  width: 100%;

  a {
    width: 100%;
    justify-content: flex-start;
  }

  @media (max-width: ${breakpoints.desktop}) {
    a {
      justify-content: center;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    a {
      justify-content: flex-start;
    }
  }
`

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`

export const NavLabel = styled.span`
  font-size: ${fontSizes.md};
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`