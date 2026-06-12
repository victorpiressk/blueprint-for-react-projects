import styled from 'styled-components'
import { fontSizes, fontWeights, transitions } from '../../../styles/GlobalStyles'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const FooterSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 100%;
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SectionTitle = styled.h4`
  font-size: ${fontSizes.md};
  font-weight: ${fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FooterLink = styled.a`
  font-size: ${fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: ${transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: underline;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

export const Copyright = styled.p`
  font-size: ${fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin: 0;
  text-align: center;
`