
import { Box, Button, Container, TextField, Typography, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeaderTwo from '../../components/header/headerTwo';
import Footer from '../../components/footer';

const Signup = () => {
  const navigate = useNavigate();
  const handleLogInClick = () => {
      navigate('/login');}

  return (
  <Box>
      <HeaderTwo/>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
        >
          <Typography component="h1" variant="h5" sx={{color:'#DAA520'}}>
            Sign Up
          </Typography>
          <Box component="form" 
                sx={{ mt: 3, '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', 
                  },
                  '&:hover fieldset': {
                    borderColor: '#DAA520', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#DAA520', 
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#DAA520',
                },}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="fname"
              autoFocus
              sx={{
                
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#DAA520',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#B8860B',
                },
              }}
            >
              Sign Up
            </Button>
            <Button sx={{ color: '#DAA520', textTransform: 'none' }} onClick={handleLogInClick} >
              Already have an account? Sign in
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
};

export default Signup;
