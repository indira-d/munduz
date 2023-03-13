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


const drawerWidth = 200;

export default function Sidebar() {

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#f5f2f2', letterSpacing: '0.5px' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
               <Link to='/' className='link'>
                 <img src={'/uploads/logo.svg'} style={{height: '20px'}}/>
               </Link>
           
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
        <Box sx={{ overflow: 'auto', fontSize: 13, fontWeight: 600, letterSpacing: 0.5,paddingTop: '20px'}}>
       
          <List>
              <ListItem key={'Все заказы'} disablePadding>
                  <Link to='/allOrders' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                      <ListItemButton>
                          <ListItemIcon>
                              { <ModeEditIcon/> }
                          </ListItemIcon>
                          <div>Все заказы</div>
                      </ListItemButton>
                  </Link>
              </ListItem>

              {/*<ListItem key={'Добавить товар'} disablePadding>*/}
              {/*    <Link to='/addProduct' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>*/}
              {/*        <ListItemButton>*/}
              {/*            <ListItemIcon>*/}
              {/*                { <ModeEditIcon/> }*/}
              {/*            </ListItemIcon>*/}
              {/*            <div>Добавить товар</div>*/}
              {/*        </ListItemButton>*/}
              {/*    </Link>*/}
              {/*</ListItem>*/}
          {/*</List>*/}
            <Divider />
              <ListItem key={'Все товары'} disablePadding>
                <Link to='/allProducts' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <div>Все товары</div>
                  </ListItemButton>
                </Link>    
              </ListItem>

              <ListItem key={'Добавить товар'} disablePadding>
                <Link to='/addProduct' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <div>Добавить товар</div>
                  </ListItemButton>
                </Link>
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem key={'Все категории'} disablePadding>
                <Link to='/allCategories' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <div>Все категории</div>
                  </ListItemButton>
                </Link>    
              </ListItem>
              <ListItem key={'Все подкатегории'} disablePadding>
                <Link to='/allSubcategories' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <div>Все подкатегории</div>
                  </ListItemButton>
                </Link>    
              </ListItem>

              <ListItem key={'Добавить категорию'} disablePadding>
                <Link to='/addCategory' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                  <ListItemButton>
                    <ListItemIcon>
                      { <ModeEditIcon/> }
                    </ListItemIcon>
                    <div>Добавить категорию</div>
                  </ListItemButton>
                </Link>
              </ListItem>
          </List>
          <Divider />
              <List>
                <ListItem key={'Все услуги'} disablePadding>
                  <Link to='/allServices' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                    <ListItemButton>
                      <ListItemIcon>
                        { <ModeEditIcon/> }
                      </ListItemIcon>
                      <div>Все услуги</div>
                    </ListItemButton>
                  </Link>    
                </ListItem>

                <ListItem key={'Добавить услугу'} disablePadding>
                  <Link to='/addService' style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>
                    <ListItemButton>
                      <ListItemIcon>
                        { <ModeEditIcon/> }
                      </ListItemIcon>
                      <div>Добавить услугу</div>
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
    </Box>
  );
}