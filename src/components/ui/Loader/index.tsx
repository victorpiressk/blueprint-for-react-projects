import { ClipLoader } from 'react-spinners'
import { colors } from '../../../styles/GlobalStyles'
import * as S from './styles'

const Loader = () => (
  <S.LoaderContainer>
    <ClipLoader color={colors.primary} size={40} />
  </S.LoaderContainer>
)

export default Loader