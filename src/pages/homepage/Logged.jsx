import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ImageSlider from './imageslider';

const HomeLogged = () => {
  console.log('TANGINA BAT GANTOO?');

  return (
    <Box sx={{ flexGrow: 1 }}> 
      <Header />
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to VKC Global
          </Typography>
          <ImageSlider />
          <br /><br />
          <Typography variant="h5" component="h2" sx={{ margin: 'auto' }} gutterBottom>
            A simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </Typography>
          <Button variant="contained" color="error">
            Learn More
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default HomeLogged;
