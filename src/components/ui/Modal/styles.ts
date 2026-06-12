import styled, { keyframes } from 'styled-components'
import type { ModalSize } from './types'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const getModalWidth = (size: ModalSize) => {
  switch (size) {
    case 'small': return '320px'
    case 'medium': return '600px'
    case 'large': return '800px'
    case 'fullscreen': return '100vw'
  }
}

export const Overlay = styled.div<{ $showOverlay: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ $showOverlay, theme }) =>
    $showOverlay ? theme.colors.background.modalBlur : 'transparent'};
  animation: ${fadeIn} 0.2s ease-out;
`

export const ModalContainer = styled.div<{ $size: ModalSize }>`
  position: relative;
  width: ${({ $size }) => getModalWidth($size)};
  max-width: ${({ $size }) => ($size === 'fullscreen' ? '100vw' : '90vw')};
  max-height: ${({ $size }) => ($size === 'fullscreen' ? '100vh' : '90vh')};
  height: ${({ $size }) => ($size === 'fullscreen' ? '100vh' : 'auto')};
  transform: translateY(32px);
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ $size }) => ($size === 'fullscreen' ? '0' : '16px')};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.3s ease-out;
`

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior-y: none;
`