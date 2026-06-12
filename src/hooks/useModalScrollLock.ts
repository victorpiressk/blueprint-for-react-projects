import { useEffect } from 'react'

export const useModalScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    if (!isOpen) return

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])
}