import CatalogHeader from '@components/catalog/CatalogHeader'
import { CatalogStyles } from '@features/catalog/styles/CatalogStyles'
import { Box, Button } from '@mui/material'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <CatalogStyles>
      <Box className='catalog'>
        <CatalogHeader />
        <Box
          component='main'
          sx={{
            minHeight: 'calc(100vh - 88px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            py: 8,
          }}
        >
          <Box
            component='span'
            aria-hidden='true'
            sx={{
              color: '#c2c8cb',
              fontSize: 'clamp(96px, 20vw, 180px)',
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            ۴۰۴
          </Box>
          <Box
            component='h1'
            sx={{ fontSize: 'clamp(24px, 4vw, 36px)', mb: 1 }}
          >
            صفحه پیدا نشد
          </Box>
          <Box
            component='p'
            sx={{ color: '#6c7883', lineHeight: 2, mt: 0, mb: 4 }}
          >
            صفحه‌ای که به دنبال آن هستید وجود ندارد یا آدرس آن تغییر کرده است.
          </Box>
          <Button
            component={Link}
            to='/'
            variant='contained'
            sx={{ px: 3, py: 1.5 }}
          >
            بازگشت به مجموعه
            <ArrowLeft size={18} aria-hidden='true' />
          </Button>
        </Box>
      </Box>
    </CatalogStyles>
  )
}
