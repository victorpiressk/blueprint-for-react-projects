import styled from 'styled-components'
import { fontSizes } from '../../../styles/GlobalStyles'
import type { AvatarSize } from './types'

const containerSizes = {
  small: '40px',
  medium: '64px',
  large: '133px',
}

const placeholderFontSizes = {
  small: fontSizes.sm,
  medium: fontSizes.lg,
  large: fontSizes['3xl'],
}

export const AvatarContainer = styled.div<{ $size: AvatarSize }>`
  position: relative;
  width: ${({ $size }) => containerSizes[$size]};
  height: ${({ $size }) => containerSizes[$size]};
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AvatarPlaceholder = styled.div<{ $size: AvatarSize }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ $size }) => placeholderFontSizes[$size]};
  font-weight: 600;
  text-transform: uppercase;
`