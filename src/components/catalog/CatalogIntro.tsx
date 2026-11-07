import { Box } from '@mui/material'
import { ArrowDownLeft } from 'lucide-react'
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
          مسیر انتخاب خودروی دلخواهتان را از میان مجموعه ما آغاز کنید.
        </CatalogDescription>
        <a href='#collection'>
          مشاهده خودروها <ArrowDownLeft size={18} aria-hidden='true' />
        </a>
      </Box>
      <IntroSide>
        <Box component='span'>THE AUTO COLLECTION</Box>
        <Box component='strong'>
          DRIVE <Box component='i'>/</Box> DIFFERENT
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
