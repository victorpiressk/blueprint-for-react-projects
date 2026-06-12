import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../ui/Button'
import Badge from '../../ui/Badge'
import * as S from './styles'
import type { SidebarProps } from './types'

const Sidebar = ({ items, isOpen = false, onClose }: SidebarProps) => {
  const location = useLocation()
  const [isTabletExpanded, setIsTabletExpanded] = useState(false)

  const handleOverlayClick = () => {
    setIsTabletExpanded(false)
    onClose?.()
  }

  return (
    <>
      {(isOpen || isTabletExpanded) && (
        <S.Overlay onClick={handleOverlayClick} />
      )}

      <S.SidebarContainer $isOpen={isOpen} $isTabletExpanded={isTabletExpanded}>
        <S.ToggleButton
          onClick={() => setIsTabletExpanded((prev) => !prev)}
          aria-label={isTabletExpanded ? 'Recolher menu' : 'Expandir menu'}
        >
          <span />
          <span />
          <span />
        </S.ToggleButton>

        <S.Nav>
          {items.map((item) => (
            <S.NavItemWrapper key={item.path}>
              <Button
                type="link"
                to={item.path}
                variant="ghost"
                active={location.pathname === item.path}
                onClick={() => {
                  setIsTabletExpanded(false)
                  onClose?.()
                }}
              >
                <S.IconWrapper>
                  {item.icon}
                  {!!item.badge && item.badge > 0 && (
                    <Badge variant="counter" count={item.badge} status="primary" />
                  )}
                </S.IconWrapper>
                <S.NavLabel>{item.label}</S.NavLabel>
              </Button>
            </S.NavItemWrapper>
          ))}
        </S.Nav>
      </S.SidebarContainer>
    </>
  )
}

export default Sidebar