import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box 
            component="footer" 
            sx={{ 
                p: 2, 
                mt: '200px', 
                backgroundColor: '#DAA520', 
                color: 'black',
                textAlign: 'center'
            }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} VKC Global. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
