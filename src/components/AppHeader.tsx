import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function AppHeader() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}