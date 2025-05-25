import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppHeader from '../components/AppHeader'

export default function MainLayout() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: "column"}}>
        <AppHeader />
        <Box>
          <Drawer />
          <Box>
            Page
          </Box>
        </Box>
      </Box>
    </>
  )
}