import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext'
import {useContext} from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.BLUE
        break
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.BLUE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }
    setTheme?.(newTheme)
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  }
}
