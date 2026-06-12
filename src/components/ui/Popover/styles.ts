import styled from 'styled-components'

export const PopoverContainer = styled.div`
  z-index: 3000;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 12px;
  box-shadow: 0px 4px 16px ${({ theme }) => theme.colors.shadow.primary};
  overflow: hidden;
`

export const PopoverContent = styled.div``