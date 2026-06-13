import * as S from './styles'
import type { FooterProps } from './types'

const Footer = ({ sections, socialLinks, copyright }: FooterProps) => {
  return (
    <S.FooterContainer>
      {sections && sections.length > 0 && (
        <S.FooterSections>
          {sections.map((section, index) => (
            <S.FooterSection key={index}>
              {section.title && (
                <S.SectionTitle>{section.title}</S.SectionTitle>
              )}
              <S.LinkList>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <S.FooterLink
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </S.FooterLink>
                  </li>
                ))}
              </S.LinkList>
            </S.FooterSection>
          ))}
        </S.FooterSections>
      )}

      {socialLinks && socialLinks.length > 0 && (
        <S.SocialLinks>
          {socialLinks.map((link) => (
            <S.SocialLink
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </S.SocialLink>
          ))}
        </S.SocialLinks>
      )}

      {copyright && <S.Copyright>{copyright}</S.Copyright>}
    </S.FooterContainer>
  )
}

export default Footer