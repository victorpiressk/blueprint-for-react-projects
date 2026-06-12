export type PopoverPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type PopoverProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  triggerRef: React.RefObject<HTMLElement | null>
  position?: PopoverPosition
  offset?: number
  matchTriggerWidth?: boolean
  strategy?: 'absolute' | 'fixed'
}