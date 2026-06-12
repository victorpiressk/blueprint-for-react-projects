import styled from 'styled-components'
import { fontSizes, fontWeights } from '../../../styles/GlobalStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  gap: 8px;
`

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`

export const Description = styled.p`
  font-size: ${fontSizes.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 400px;
  line-height: 1.5;
  margin: 0;
`