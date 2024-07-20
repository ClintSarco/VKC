import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import SideBar from './sidebar';
import './header.css';  
const Header = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/homelogged');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="appBar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className="headerIconButton"
          >
            <SideBar />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton
              aria-label="vkc-global"
              onClick={handleHomeClick}
              sx={{ padding: 0 }}
            >
              <img src="/logo.jpeg" alt="VKC" className="logo" />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
