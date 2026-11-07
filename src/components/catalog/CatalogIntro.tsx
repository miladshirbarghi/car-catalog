import { Box } from '@mui/material'
import {
  CatalogDescription,
  Intro,
  IntroSide,
  SectionLabel,
} from './catalog.styled'
export default function CatalogIntro() {
  return (
    <Intro>
      <Box component='div'>
        <SectionLabel>
          <Box component='span' /> مجموعه خودروها
        </SectionLabel>
        <Box component='h1'>
          خودروی بعدی شما،
          <Box component='br' />
          <Box component='em'>اینجا منتظر است.</Box>
        </Box>
        <CatalogDescription>
          مجموعه‌ای منتخب از خودروها، برای تجربه‌ای متفاوت در هر مسیر.
        </CatalogDescription>
      </Box>
      <IntroSide>
        <Box component='span'>THE COLLECTION</Box>
        <Box component='strong'>
          01 <Box component='i'>/</Box> 10
        </Box>
        <Box component='p'>
          با دقت انتخاب شده،
          <Box component='br' />
          برای سلیقه شما.
        </Box>
      </IntroSide>
    </Intro>
  )
}
