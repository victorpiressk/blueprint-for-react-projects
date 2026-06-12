import * as S from './styles'
import type { TagProps } from './types'

const Tag = ({ size = 'sm', children }: TagProps) => {
  return <S.TagContainer $size={size}>{children}</S.TagContainer>
}

export default Tag