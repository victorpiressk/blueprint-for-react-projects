import { createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

export type ThemeName = 'light' | 'dark'

const themes: Record<ThemeName, typeof light> = { light, dark }

type ThemeContextType = {
  themeName: ThemeName
  setTheme: (name: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType>({
  themeName: 'light',
  setTheme: () => {}
})

export const AppThemeProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as ThemeName | null

      if (saved === 'light' || saved === 'dark') return saved
    }
    return 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const setTheme = (name: ThemeName) => setThemeName(name)

  const currentTheme = themes[themeName] || light

  return (
    <ThemeContext.Provider value={{ themeName, setTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext
