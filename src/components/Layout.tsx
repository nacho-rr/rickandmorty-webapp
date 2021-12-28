import { ReactNode, useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, Typography, Checkbox, ListItemButton } from '@mui/material'
import { Menu, Person, PinDrop, VideoLibrary } from '@mui/icons-material'
import { COLORS } from '../theme'

const drawerWidth = 240

interface Props {
  window?: () => Window
  children?: ReactNode
}

const Layout = (props: Props) => {
  const { children, window } = props
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState('')

  const handleToggle = () => setShow(!show)
  const handleFilter = (label: string) => setFilter(label)

  const drawer = (
    <>
      <Toolbar>
        <Typography align='center' variant='h5' sx={{ color: 'white', fontWeight: 'Bold' }} >
          Rick and Morty
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary={'Filters'} primaryTypographyProps={{ variant: 'h5', color: 'white', fontWeight: 'Bold' }} />
        </ListItem>
        <ListItemButton onClick={() => handleFilter('characters')} >
          <Checkbox color="primary" checked={filter === 'characters'} onClick={() => handleFilter('characters')} />
          <ListItemText primary={'Characters'} primaryTypographyProps={{ variant: 'h6', color: 'white', fontWeight: 'Bold' }} />
          <ListItemIcon sx={{ color: 'white' }}>
            <Person />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => handleFilter('locations')} >
          <Checkbox color="primary" checked={filter === 'locations'} onClick={() => handleFilter('locations')} />
          <ListItemText primary={'Locations'} primaryTypographyProps={{ variant: 'h6', color: 'white', fontWeight: 'Bold' }} />
          <ListItemIcon sx={{ color: 'white' }}>
            <PinDrop />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => handleFilter('episodes')} >
          <Checkbox color="primary" checked={filter === 'episodes'} onClick={() => handleFilter('episodes')} />
          <ListItemText primary={'Episodes'} primaryTypographyProps={{ variant: 'h6', color: 'white', fontWeight: 'Bold' }} />
          <ListItemIcon sx={{ color: 'white' }}>
            <VideoLibrary />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: COLORS.primary
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={show}
          onClose={handleToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: COLORS.primary },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: COLORS.primary },
          }}
          PaperProps={{ color: COLORS.primary }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout
