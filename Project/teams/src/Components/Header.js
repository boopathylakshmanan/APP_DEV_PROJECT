import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, Box, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { purple } from '@mui/material/colors';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from "../workaholic.png";
import './Header.css'; // Ensure this file includes necessary styles


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  palette: {
    // primary: {
    //   main: '#b182f1',
    //   contrastText: '#330c68',
    //   dark: '#9454ec',
    //   light: '#ceb0f6',
    // },
    // secondary: {
    //   main: '#f1828a',
    //   contrastText: '#680c12',
    //   dark: '#ec545f',
    //   light: '#f6b0b5',
    // },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
    background: {
      default: '#efeaf5',
      paper: '#fbfafd',
    },
    text: {
      primary: '#241934',
      secondary: '#61428a',
    },
    success: {
      main: '#82f182',
      contrastText: '#0c680c',
    },
    warning: {
      main: '#f1f182',
      contrastText: '#68680c',
    },
    error: {
      main: '#f18282',
      contrastText: '#680c0c',
    },
  },
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [signupDialogOpen, setSignupDialogOpen] = useState(false);
  const location = useLocation();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

 


  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
     
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              component={RouterLink}
              to="/"
              sx={{ p: 0 }}
            >
              <img src={logo} alt="Logo" style={{ height: '80px' }} />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontFamily: 'Poppins',
            }}
          >
            Workaholic
          </Typography>
          <IconButton component={RouterLink} to="/" color="inherit">
            <HomeIcon />
          </IconButton>
          <IconButton component={RouterLink} to="/about" color="inherit">
            <InfoIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton onClick={handleAvatarClick} color="inherit">
            <Avatar alt="User Avatar" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
    <MenuItem component={RouterLink} to="/login">Login</MenuItem>
<MenuItem component={RouterLink} to="/signup">Signup</MenuItem>

          </Menu>
        </Toolbar>

      </AppBar>

     
    </>
  );
};

export default Header;
