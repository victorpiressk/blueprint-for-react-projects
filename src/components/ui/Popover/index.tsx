import { useEffect } from 'react'
import {
  useFloating,
  autoUpdate,
  offset as floatingOffset,
  flip,
  shift,
  size,
  type Placement
} from '@floating-ui/react'
import { createPortal } from 'react-dom'
import * as S from './styles'
import type { PopoverProps } from './types'

const Popover = ({
  isOpen,
  onClose,
  children,
  triggerRef,
  position = 'bottom',
  offset = 8,
  matchTriggerWidth = false,
  strategy = 'absolute'
}: PopoverProps) => {
  const getPlacement = (pos: string): Placement => {
    const map: Record<string, Placement> = {
      top: 'top',
      'top-right': 'top-start',
      'top-left': 'top-end',
      bottom: 'bottom',
      'bottom-right': 'bottom-start',
      'bottom-left': 'bottom-end',
      left: 'left',
      right: 'right'
    }
    return map[pos] || 'bottom'
  }

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (!open) onClose()
    },
    placement: getPlacement(position),
    strategy,
    whileElementsMounted: autoUpdate,
    middleware: [
      floatingOffset(offset),
      flip({
        fallbackPlacements: ['top', 'bottom', 'left', 'right']
      }),
      shift({ padding: 8 }),
      matchTriggerWidth &&
        size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`
            })
          }
        })
    ].filter(Boolean)
  })

  const { setFloating } = refs

  useEffect(() => {
    if (triggerRef.current) {
      refs.setReference(triggerRef.current)
    }
  }, [triggerRef, refs])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const floating = refs.floating.current
      const reference = triggerRef.current

      if (
        floating &&
        !floating.contains(e.target as Node) &&
        reference &&
        !reference.contains(e.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose, triggerRef, refs])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <S.PopoverContainer ref={setFloating} style={floatingStyles}>
      <S.PopoverContent>{children}</S.PopoverContent>
    </S.PopoverContainer>,
    document.body
  )
}

export default Popover