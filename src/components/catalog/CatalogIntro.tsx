import { Box } from '@mui/material'
export default function CatalogIntro() {
  return (
    <Box component='section' className='catalog__intro'>
      <Box component='div'>
        <Box component='p' className='section-label'>
          <Box component='span' /> مجموعه خودروها
        </Box>
        <Box component='h1'>
          خودروی بعدی شما،
          <Box component='br' />
          <Box component='em'>اینجا منتظر است.</Box>
        </Box>
        <Box component='p' className='catalog__description'>
          مجموعه‌ای منتخب از خودروها، برای تجربه‌ای متفاوت در هر مسیر.
        </Box>
      </Box>
      <Box component='div' className='catalog__intro-side'>
        <Box component='span'>THE COLLECTION</Box>
        <Box component='strong'>
          01 <Box component='i'>/</Box> 10
        </Box>
        <Box component='p'>
          با دقت انتخاب شده،
          <Box component='br' />
          برای سلیقه شما.
        </Box>
      </Box>
    </Box>
  )
}
