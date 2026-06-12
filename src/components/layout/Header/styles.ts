import styled from 'styled-components'
import { breakpoints, fontSizes, fontWeights, transitions } from '../../../styles/GlobalStyles'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.blur};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 64px;
  gap: 24px;
`

export const LogoWrapper = styled.div`
  flex-shrink: 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavItem = styled.span<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius?.md || '8px'};
  font-size: ${fontSizes.md};
  font-weight: ${({ $active }) => ($active ? fontWeights.bold : fontWeights.regular)};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text.primary : theme.colors.text.secondary};
  transition: ${transitions.fast};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`

export const AvatarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: ${transitions.fast};

  &:hover {
    opacity: 0.85;
  }
`

export const ProfileMenu = styled.div`
  min-width: 200px;
  padding: 8px 0;
`

export const ProfileMenuItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${fontSizes.md};
  font-weight: ${fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: left;
  transition: ${transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }
`

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 2px;
    transition: ${transitions.fast};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`

export const MobileNav = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  padding: 8px 16px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};

  @media (max-width: ${breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }
`