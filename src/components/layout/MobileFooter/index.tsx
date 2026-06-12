import { useLocation, useNavigate } from 'react-router-dom'
import Badge from '../../ui/Badge'
import * as S from './styles'
import type { MobileFooterProps } from './types'

const MobileFooter = ({ items }: MobileFooterProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <S.FooterContainer>
      {items.map((item, index) => {
        const isActive = location.pathname === item.path

        return (
          <S.FooterItem
            key={index}
            $active={isActive}
            onClick={() => navigate(item.path)}
            aria-label={item.path}
          >
            <S.IconWrapper>
              {item.icon}
              {!!item.badge && item.badge > 0 && (
                <Badge variant="counter" count={item.badge} status="primary" />
              )}
            </S.IconWrapper>
          </S.FooterItem>
        )
      })}
    </S.FooterContainer>
  )
}

export default MobileFooter