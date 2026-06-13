import { useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Avatar from '../../ui/Avatar'
import Button from '../../ui/Button'
import Popover from '../../ui/Popover'
import Tabs from '../../ui/Tabs'
import * as S from './styles'
import type { HeaderProps } from './types'

const Header = ({
  logo,
  navItems,
  user,
  onLogin,
  onRegister,
  loginLabel = 'Entrar',
  registerLabel = 'Cadastrar'
}: HeaderProps) => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileButtonRef = useRef<HTMLButtonElement>(null)

  const activeTab = navItems.find(
    (item) => item.path && location.pathname === item.path
  )?.key ?? ''

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LogoWrapper>{logo}</S.LogoWrapper>

        <S.NavWrapper>
          <Tabs
            tabs={navItems}
            activeTab={activeTab}
            variant="underline"
          />
        </S.NavWrapper>

        <S.Actions>
          {user ? (
            <>
              <S.AvatarButton
                ref={profileButtonRef}
                onClick={() => setIsProfileOpen((prev) => !prev)}
                aria-label="Menu do usuário"
              >
                <Avatar src={user.avatar} alt={user.name} size="small" />
              </S.AvatarButton>

              <Popover
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                triggerRef={profileButtonRef}
                position="bottom-left"
              >
                <S.ProfileMenu>
                  {user.menuItems.map((item, index) => (
                    <S.ProfileMenuItem
                      key={index}
                      onClick={() => {
                        item.onClick()
                        setIsProfileOpen(false)
                      }}
                    >
                      {item.label}
                    </S.ProfileMenuItem>
                  ))}
                </S.ProfileMenu>
              </Popover>
            </>
          ) : (
            <>
              {onLogin && (
                <Button type="button" variant="outline" onClick={onLogin}>
                  {loginLabel}
                </Button>
              )}
              {onRegister && (
                <Button type="button" variant="primary" onClick={onRegister}>
                  {registerLabel}
                </Button>
              )}
            </>
          )}

          <S.HamburgerButton
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </S.HamburgerButton>
        </S.Actions>
      </S.HeaderContent>

      <S.MobileNav $isOpen={isMenuOpen}>
        <Tabs
          tabs={navItems}
          activeTab={activeTab}
          variant="underline"
        />
      </S.MobileNav>
    </S.HeaderContainer>
  )
}

export default Header