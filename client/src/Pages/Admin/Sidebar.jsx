import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

export default function Sidebar() {

  return (
    <Box sx={{ display: 'flex', position: 'relative', fontSize: '10px' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#E21ECA', letterSpacing: '0.5px' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Админ панель
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
       
          <List>
            <ListItem key={'Главная'} disablePadding>
                <Link to='/' className='link'>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <ListItemText primary={'Главная'} />
                  </ListItemButton>
                </Link>
                   <Divider />
                
              </ListItem>
              <ListItem key={'Все товары'} disablePadding>
                <Link to='/allProducts' className='link'>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <ListItemText primary={'Все товары'} />
                  </ListItemButton>
                </Link>    
              </ListItem>

              <ListItem key={'Добавить товар'} disablePadding>
                <Link to='/addProduct' className='link'>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <ListItemText primary={'Добавить товар'} />
                  </ListItemButton>
                </Link>
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem key={'Все категории'} disablePadding>
                <Link to='/allCategories' className='link'>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <ListItemText primary={'Все категории'} />
                  </ListItemButton>
                </Link>    
              </ListItem>

              <ListItem key={'Добавить категорию'} disablePadding>
                <Link to='/addCategory' className='link'>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <ListItemText primary={'Добавить категорию'} />
                  </ListItemButton>
                </Link>
              </ListItem>
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
       
      </Box> */}
    </Box>
  );
}