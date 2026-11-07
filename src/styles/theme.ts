import { createTheme } from '@mui/material/styles'
import { colorsPalette } from './pallete'

export const theme = createTheme({
  direction: 'rtl',
  palette: colorsPalette,
  typography: {
    fontFamily: 'IRANSansX, sans-serif',
  },
})
