import styled from 'styled-components'
import { breakpoints } from '../../../styles/GlobalStyles'

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`

export const SidebarSection = styled.div`
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const MainSection = styled.main`
  flex: 1;
  min-width: 0;
`

export const InfobarSection = styled.div`
  flex-shrink: 0;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`