import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { ReactNode } from 'react'
import { theme } from '../../styles/theme'

type ThemeProviderProps = {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
