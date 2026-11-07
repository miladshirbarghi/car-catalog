import { createTheme } from '@mui/material/styles'
import { catalogColors, colorsPalette } from './pallete'

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    ...colorsPalette,
    text: { primary: catalogColors.pageText },
    background: { default: catalogColors.pageBackground },
  },
  typography: {
    fontFamily: 'IRANSansX, sans-serif',
  },
})
