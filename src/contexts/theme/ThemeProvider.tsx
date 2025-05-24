import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from '@/contexts/theme/theme-conext'

interface ThemeProviderProps {
  children: ReactNode
  storageKey: string
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  storageKey = 'app-theme',
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(storageKey) as Theme) || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
