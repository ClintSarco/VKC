import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import './header.css';  

const HeaderTwo = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleSignupClick = () => {
    navigate('/signup');
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="appBar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton
              aria-label="vkc-global"
              onClick={handleHomeClick}
              sx={{ padding: 0 }}
            >
              <img src="/logo.jpeg" alt="VKC" className="logo" />
            </IconButton>
          </Typography>
          <Button
            variant="contained"
            class="headerTwoButton"
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button
            variant="contained"
            class="headerTwoButton"
            onClick={handleSignupClick}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderTwo;
