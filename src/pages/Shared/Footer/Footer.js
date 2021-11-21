import { Button, Container, Grid, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

const Footer = () => {

    return (
        <>
            <Box component="div" sx={{ bgcolor: '#051135', mt: 8 }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: 24 }}>
                                We are <Box component="span" sx={{ color: '#0079EF' }}>CleanMe!</Box>
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ color: '#bdbdbd', fontSize: 15, my: 3 }}>
                                We do hard work with a passion of taking challenges and creating new ones in advertising sector.
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: 15, mb: 1 }}>
                                Open Hours:
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ color: '#bdbdbd', fontSize: 13 }}>
                                Mon – Sat: 8 am – 5 pm, <br />
                                Sunday: CLOSED
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: 24 }}>
                                Company
                            </Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="About Us" sx={{ color: '#fff' }} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Leadership Team" sx={{ color: '#fff', mt: -1 }} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="News &amp; Media" sx={{ color: '#fff', mt: -1 }} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="How it Works" sx={{ color: '#fff', mt: -1 }} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Contact Us" sx={{ color: '#fff', mt: -1 }} />
                                    </ListItemButton>
                                </ListItem>
                            </List>

                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: 24 }}>
                                Official info:
                            </Typography>
                            <Box component="div" sx={{ display: 'flex', my: 2 }}>
                                <LocationOnIcon sx={{ color: '#006ECE', mr: 2 }} />
                                <Typography variant="body1" gutterBottom sx={{ color: '#bdbdbd', fontSize: 13 }}>
                                    30 Commercial Road <br /> Fratton, Australia
                                </Typography>
                            </Box>
                            <Box component="div" sx={{ display: 'flex', my: 2 }}>
                                <LocalPhoneIcon sx={{ color: '#006ECE', mr: 2 }} />
                                <Typography variant="body1" gutterBottom sx={{ color: '#bdbdbd', fontSize: 13 }}>
                                    1-888-452-1505
                                </Typography>
                            </Box>
                            <Box component="div" sx={{ display: 'flex', my: 2 }}>
                                <EmailIcon sx={{ color: '#006ECE', mr: 2 }} />
                                <Typography variant="body1" gutterBottom sx={{ color: '#bdbdbd', fontSize: 13 }}>
                                    cleanMe@gmail.com <br />
                                    sim@mail.com
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: 24 }}>
                                Newsletter
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ color: '#bdbdbd', fontSize: 13 }}>
                                Subscribe our newsletter to get our latest update &amp; news
                            </Typography>
                            <Box component="form" sx={{ display: 'inline-flex', bgcolor: '#fff', borderRadius: 2, my: 2 }}>
                                <TextField
                                    style={{ outline: 'none' }}
                                    placeholder="Email"
                                    variant="outlined" />
                                <Button variant="contained">Subs</Button>
                            </Box>
                            <Box component="div" sx={{ my: 1 }}>
                                <FacebookIcon sx={{ color: '#03A9F4', fontSize: 22, mr: 2 }} />
                                <TwitterIcon sx={{ color: '#03A9F4', fontSize: 22, mr: 2 }} />
                                <InstagramIcon sx={{ color: '#03A9F4', fontSize: 22, mr: 2 }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box component="div" sx={{ bgcolor: '#15265B', color: '#fff' }}>
                <Typography variant="body1" sx={{ color: '#bdbdbd', fontSize: 15, p: 2, textAlign: 'center' }}>
                    2021 © All rights reserved by <Box component="span" sx={{ color: '#0079EF', fontWeight: 600 }}>CleanMe!</Box>
                </Typography>
            </Box>
        </>
    );
};

export default Footer;