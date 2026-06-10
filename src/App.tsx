import { GlobalStyles } from './styles/GlobalStyles'
import { AppThemeProvider } from './contexts/ThemeContext'

const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyles />
    </AppThemeProvider>
  )
}

export default App
