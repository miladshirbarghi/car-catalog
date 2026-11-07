import { EmptyState } from '@components/catalog/catalog.styled'
import { Box } from '@mui/material'

export function CarNotFound() {
  return (
    <EmptyState>
      <Box component='h1'>خودرو پیدا نشد</Box>
      <Box component='p'>این خودرو در مجموعه موجود نیست.</Box>
    </EmptyState>
  )
}
