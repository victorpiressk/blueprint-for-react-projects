import styled, { keyframes } from 'styled-components'
import { colors, fontSizes, fontWeights, transitions } from '../../../styles/GlobalStyles'
import type { ToastType } from './types'

const slideIn = keyframes`
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
`

const toastColors: Record<ToastType, string> = {
  success: colors.success,
  error: colors.error,
  warning: colors.warning,
  info: colors.info,
}

export const ToastItem = styled.div<{ $type: ToastType; $isClosing: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background-color: ${({ $type }) => toastColors[$type]};
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 400px;
  animation: ${({ $isClosing }) => ($isClosing ? slideOut : slideIn)} 0.3s ease-out;
  transition: ${transitions.fast};
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`

export const ToastMessage = styled.span`
  flex: 1;
  font-size: ${fontSizes.md};
  font-weight: ${fontWeights.medium};
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: ${transitions.fast};

  &:hover {
    opacity: 1;
  }

  svg {
    stroke: currentColor;
  }
`