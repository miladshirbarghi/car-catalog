import AppRoutes from './providers/AppRoutes'
import ThemeProvider from './providers/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}
