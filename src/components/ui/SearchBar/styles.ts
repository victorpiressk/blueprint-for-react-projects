import styled from 'styled-components'
import { colors, fontSizes, transitions } from '../../../styles/GlobalStyles'

export const SearchBarContainer = styled.div`
  width: 100%;
`

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 9999px;
  padding: 10px 16px;
  gap: 8px;
  transition: ${transitions.fast};

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.background.primary};
    border-color: ${colors.primary};
  }
`

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    stroke: ${({ theme }) => theme.colors.text.tertiary};
  }
`

export const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: ${fontSizes.md};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`

export const ClearButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.fast};

  &:hover {
    opacity: 0.8;
  }

  svg {
    stroke: ${({ theme }) => theme.colors.background.primary};
  }
`