import { Outlet } from 'react-router-dom'
import * as S from './styles'
import type { MainLayoutProps } from './types'

const MainLayout = ({ sidebar, infobar }: MainLayoutProps) => {
  return (
    <S.LayoutWrapper>
      {sidebar && <S.SidebarSection>{sidebar}</S.SidebarSection>}

      <S.MainSection>
        <Outlet />
      </S.MainSection>

      {infobar && <S.InfobarSection>{infobar}</S.InfobarSection>}
    </S.LayoutWrapper>
  )
}

export default MainLayout