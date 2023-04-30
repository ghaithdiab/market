import React from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import { styled} from '@mui/material/styles';
import { IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { mainListItems} from './mainListItems';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Test } from '../../components/test/test';
export default function Dashboard() {
  const [open, setOpen] = React.useState(true);

  const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
const toggleDrawer = () => {
  setOpen(!open);
};
  return (
    <Box sx={{display:'flex'}}>
      <CssBaseline/>
      <AppBar position='absolute' open={open}>
        <Toolbar sx={{pr:'24px'}}>
          <IconButton
            edge="satrt"
            color='inherit'
            onClick={toggleDrawer}
            sx={{marginRight:'36px',...(open&&{display:'none'})}}         
          >
          <MenuIcon />
          </IconButton>
          <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              لوحة التحكم
            </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar sx={{display:'flex',alignItems:'center',justifyContent:'flex-end',px:[1]}}>
        <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
        </Toolbar>
        <Divider/>
        <List component="nav">
          {mainListItems}
        </List>
      </Drawer>
      <Box component='main'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar/>
        <Container maxWidth="lg" sx={{mt:4,mb:4}}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{p:2,display:'flex',flexDirection:'column', height:240}}>
                {/* <Test/> */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}