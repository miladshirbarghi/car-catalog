import Box from '@mui/material/Box'
import { BackToCatalog } from '@components/car-details/BackToCatalog'
import { DetailPage, EmptyState } from '@components/catalog/catalog.styled'

export default function NotFound() {
  return (
    <DetailPage>
      <BackToCatalog />
      <EmptyState>
        <Box component='h1'>صفحه پیدا نشد</Box>
      </EmptyState>
    </DetailPage>
  )
}
