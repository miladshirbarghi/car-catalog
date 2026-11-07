import { Box } from '@mui/material'
import { Gem } from 'lucide-react'

export default function CatalogHeader() {
  return (
    <Box component='header' className='catalog__header'>
      <Box component='a' className='brand' href='/'>
        <Gem className='brand__mark' size={34} aria-hidden='true' />
        <Box component='span'>
          اتوگالری<Box component='small'>AUTO GALLERY</Box>
        </Box>
      </Box>
      <Box component='span' className='catalog__header-note'>
        انتخابی برای مسیر پیش رو
      </Box>
    </Box>
  )
}
