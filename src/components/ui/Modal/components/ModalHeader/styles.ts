import styled from 'styled-components'
import { fontSizes, fontWeights, transitions } from '../../../../../styles/GlobalStyles'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  flex-shrink: 0;
`

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: ${transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }

  svg {
    stroke: ${({ theme }) => theme.colors.text.primary};
  }
`

export const TitleContainer = styled.div`
  flex: 1;
`

export const Title = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`