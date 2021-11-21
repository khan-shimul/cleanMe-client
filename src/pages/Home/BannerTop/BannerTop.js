import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import bg from '../../../images/home/banner/3.jpg';
import PrimaryButton from '../../../StyledComponent/PrimaryButton';

const BannerTop = () => {
    const heroContainer = {
        backgroundImage: `url(${bg}), linear-gradient(to right, #1A213D, transparent)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 500,
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
    };

    return (
        <Box style={heroContainer}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="h6" gutterBottom sx={{ marginBottom: '-5px' }}>
                            We are CleanMe
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 75, lineHeight: 1.1, marginBottom: '5px' }}>
                            Best cleaning <br /> service in town!
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '15px', color: '#e8eaf6' }} gutterBottom>
                            We are a certified company. We provide the best cleaning services <br /> for you &amp; your company.
                        </Typography>
                        <PrimaryButton sx={{ fontWeight: 600, mt: 2, mb: 8 }}>Our Services</PrimaryButton>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BannerTop;