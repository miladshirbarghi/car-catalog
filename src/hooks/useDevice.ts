import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

type DeviceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

function useCheckSizeDown(size: DeviceSize): boolean {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down(size))
}

function useCheckSizeUp(size: DeviceSize): boolean {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.up(size))
}

export function useDevice() {
  const isMobile = useCheckSizeDown('sm')
  const isTablet = useCheckSizeDown('md')
  const isDesktop = useCheckSizeUp('lg')
  const isLargeDesktop = useCheckSizeUp('xl')

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  }
}
