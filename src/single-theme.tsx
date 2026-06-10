import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { light } from './styles/themes/light'

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
