import { ReactNode, useState } from 'react';
import { Box, CssBaseline, Toolbar, Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, Checkbox, ListItemButton } from '@mui/material'
import { Person, PinDrop, VideoLibrary } from '@mui/icons-material'
import { COLORS, SIZE } from '../theme'

interface Props {
  window?: () => Window
  children?: ReactNode
  selector: string
  onChange: Function
}

const Layout = (props: Props) => {
  const { children, window, selector, onChange } = props
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  const handleFilter = (label: string) => onChange(label)

  const drawer = (
    <>
      <Toolbar>
        <Typography align='center' variant='h5' sx={{ color: 'white', fontWeight: 'Bold' }} >
          Rick and Morty
        </Typography>
      </Toolbar>
      <List>
        <ListItem>
          <ListItemText primary={'Filters'} primaryTypographyProps={{ variant: 'h5', color: 'white', fontWeight: 'Bold' }} />
        </ListItem>
        <ListItemButton onClick={() => handleFilter('characters')} >
          <Checkbox color="primary" checked={selector === 'characters'} onClick={() => handleFilter('characters')} />
          <ListItemText primary={'Characters'} primaryTypographyProps={{ variant: 'h6', color: 'white', fontWeight: 'Bold' }} />
          <ListItemIcon sx={{ color: 'white' }}>
            <Person />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => handleFilter('locations')} >
          <Checkbox color="primary" checked={selector === 'locations'} onClick={() => handleFilter('locations')} />
          <ListItemText primary={'Locations'} primaryTypographyProps={{ variant: 'h6', color: 'white', fontWeight: 'Bold' }} />
          <ListItemIcon sx={{ color: 'white' }}>
            <PinDrop />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => handleFilter('episodes')} >
          <Checkbox color="primary" checked={selector === 'episodes'} onClick={() => handleFilter('episodes')} />
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
      <Box
        component="nav"
        sx={{ width: { sm: SIZE.drawer }, flexShrink: { sm: 0 } }}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIZE.drawer, background: COLORS.primary },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIZE.drawer, background: COLORS.primary },
          }}
          PaperProps={{ color: COLORS.primary }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${SIZE.drawer}px)` } }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout
