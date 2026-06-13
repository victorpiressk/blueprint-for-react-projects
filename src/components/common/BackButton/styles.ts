import styled from 'styled-components'
import { transitions } from '../../../styles/GlobalStyles'

export const BackButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: none;
  cursor: pointer;
  transition: ${transitions.fast};
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.text.primary};
  }
`