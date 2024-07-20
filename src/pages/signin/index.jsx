import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const theme = createTheme({
  palette: {
    primary: {
      main: '#DAA520',
    },
  },
});

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signup');
  };
  const handleHomeClick = () => { 
    navigate('/homelogged');
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container maxWidth="sm">
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              backgroundColor: 'gray', 
              p: 4, 
              borderRadius: 5,
              boxShadow: 3
            }}
          >
            <Typography component="h1" variant="h5" gutterBottom>
              Login
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
                InputLabelProps={{ sx: { color: 'black' } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="outlined"
                InputLabelProps={{ sx: { color: 'black' } }}
              />
              <Button sx={{color:'white',textTransform:'none'}} >Forgot password?</Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleHomeClick}
              >
                Sign In
              </Button>
              <Button sx={{color:'white',textTransform:'none'}} onClick={handleSignupClick} 
                >Don't have an account?Create an Account
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
