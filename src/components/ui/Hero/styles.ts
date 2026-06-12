import styled from 'styled-components'
import { transitions } from '../../../styles/GlobalStyles'

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export const HeroViewport = styled.div`
  overflow: hidden;
  width: 100%;
`

export const HeroContainer = styled.div`
  display: flex;
  touch-action: pan-y;
`

export const HeroSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
`

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const HeroContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
`

export const ArrowButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => $position}: 16px;
  z-index: 2;

  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: ${transitions.fast};

  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #ffffff;
  }
`

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: 8px;
`

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '24px' : '8px')};
  height: 8px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: ${transitions.fast};
  background-color: ${({ $active }) =>
    $active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
`