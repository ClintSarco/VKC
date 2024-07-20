
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Header from '../../components/header';
import Footer from '../../components/footer';

const ChangePassword = () => {

  return (
    <Box>
        <Header/>
        <Container maxWidth="sm">
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
            }}
        >
            <Typography component="h1" variant="h5">
            Change Password
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="currentPassword"
                label="Current Password"
                type="password"
                id="currentPassword"
                autoComplete="current-password"
                sx={{
                '& .MuiOutlinedInput-root': {
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
                },
                }}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                autoComplete="new-password"
                sx={{
                '& .MuiOutlinedInput-root': {
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
                },
                }}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm New Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                sx={{
                '& .MuiOutlinedInput-root': {
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
                },
                }}
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
                Change Password
            </Button>
            </Box>
        </Box>
        </Container>
        <Footer/>
    </Box>
  );
};

export default ChangePassword;
