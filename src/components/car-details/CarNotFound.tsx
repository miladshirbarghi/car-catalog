import { Box } from '@mui/material'

export function CarNotFound() {
  return (
    <Box component='div' className='empty-state'>
      <Box component='h1'>خودرو پیدا نشد</Box>
      <Box component='p'>این خودرو در مجموعه موجود نیست.</Box>
    </Box>
  )
}
