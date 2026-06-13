import * as S from './styles'
import type { BannerProps } from './types'

const Banner = ({ image, height = '280px', children }: BannerProps) => {
  return (
    <S.BannerContainer
      style={{ backgroundImage: `url(${image})` }}
      $height={height}
    >
      {children && <S.BannerContent>{children}</S.BannerContent>}
    </S.BannerContainer>
  )
}

export default Banner