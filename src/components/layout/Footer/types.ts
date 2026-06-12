export type FooterLink = {
  label: string
  href: string
}

export type FooterSection = {
  title?: string
  links: FooterLink[]
}

export type FooterSocialLink = {
  label: string
  href: string
  icon: React.ReactNode
}

export type FooterProps = {
  sections?: FooterSection[]
  socialLinks?: FooterSocialLink[]
  copyright?: string
}