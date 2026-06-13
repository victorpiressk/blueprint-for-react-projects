import styled from 'styled-components'
import { breakpoints } from '../../../styles/GlobalStyles'

export const InfobarContainer = styled.aside`
  position: sticky;
  top: 0;
  height: fit-content;
  width: 320px;
  flex-shrink: 0;
  padding: 16px 0 64px;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`