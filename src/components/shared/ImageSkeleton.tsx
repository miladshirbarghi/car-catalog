import Skeleton from '@mui/material/Skeleton'

export default function ImageSkeleton() {
  return (
    <Skeleton
      component='div'
      variant='rectangular'
      animation='wave'
      aria-hidden='true'
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        '@media (prefers-reduced-motion: reduce)': {
          '&::after': { animation: 'none' },
        },
      }}
    />
  )
}
