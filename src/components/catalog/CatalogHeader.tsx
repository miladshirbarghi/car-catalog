import { Box } from '@mui/material'
import { Gem } from 'lucide-react'
import { Brand, CatalogHeaderRoot, HeaderNote } from './catalog.styled'

export default function CatalogHeader() {
  return (
    <CatalogHeaderRoot>
      <Brand href='/'>
        <Gem className='brand__mark' size={34} aria-hidden='true' />
        <Box component='span'>
          اتوگالری<Box component='small'>AUTO GALLERY</Box>
        </Box>
      </Brand>
      <HeaderNote>مجموعه‌ای برای سلیقه شما</HeaderNote>
    </CatalogHeaderRoot>
  )
}
