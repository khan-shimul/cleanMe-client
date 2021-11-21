import { Container, Grid, Paper, SvgIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { serviceInfoData } from '../../../data/data';



const InfoServices = () => {
    return (
        <>
            <Container sx={{ mt: '-80px' }}>
                <Grid container spacing={2}>

                    {
                        serviceInfoData.map(({ title, description, Icon }) => <Grid item xs={12} sm={12} md={4}>
                            <Paper sx={{ p: 3 }}>
                                <Box component="div" sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Box component="div" sx={{ display: 'block', mr: 2, bgcolor: '#F0F1F3', p: 2, borderRadius: 16, height: '50%' }}>
                                        <Icon sx={{ fontSize: 50, textAlign: 'center', color: '#292C32' }} />
                                    </Box>
                                    <Box component="div">
                                        <Typography variant="h5" sx={{ color: '#082680', fontWeight: 600 }}>{title}</Typography>
                                        <Typography variant="subtitle2" sx={{ color: '#3A4268' }}>{description}</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>)
                    }


                </Grid>
            </Container>
        </>
    );
};

export default InfoServices;