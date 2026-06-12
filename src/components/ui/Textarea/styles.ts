import styled from 'styled-components'
import { fontSizes, fontWeights } from '../../../styles/GlobalStyles'

export const TextareaContainer = styled.div`
  width: 100%;
  position: relative;
`

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 28px;
  padding-top: 6px;

  font-family: inherit;
  font-size: ${fontSizes.md};
  font-weight: ${fontWeights.regular};
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: transparent;

  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`