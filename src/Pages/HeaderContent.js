import {
    Grid, Button, Box, Card,
    Typography
} from '@mui/material'
import React from 'react'
import Picture from '../Components/Picture'
import ProcessusDeTravail from './ProcessusDeTravail';
import Temoignage from './Temoignage';
import Actualités from './Actualités';
import Technologies from './Technologies';
import About from './About';
import Footer from './Footer';
import Solutions from './Solutions';
import Header from './Header';
import NoServices from './NoServices';


export default function HeaderContent() {
    return (
        <><Card sx={{ maxWidth: 1390 }}>
            <Header />
            <Grid container margin='170px' sx={{ fontFamily: 'orelega-one' }}>
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="h3" sx={{ cursor: "default", marginRight: '75px', fontSize: '50px', fontWeight: 'Bold', fontFamily: 'Montsserat', lineSpacing: '55px' }}>Nos technologies, des solutions d'automatisations de vos processus métiers</Typography></Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Orelega One', cursor: "default", fontSize: '17px', lineSpacing: '24px', textTransform: 'titlecase', marginRight: '95px',
                        }}>Nous mettons avec vous des solutions sur-mesure pour faire face à vos défis commerciaux
                        </Typography>

                        <br /> <br />
                        <Button variant="contained" sx={
                            {
                                backgroundColor: "#003168", color: "white",
                                fontFamily: 'Montserrat', textTransform: 'lowercase', fontWeight: 'bold',
                                width: '30%', borderRadius: '5px', "&:hover": { backgroundColor: "#003168" }
                            }
                        }>J'ai Un Projet</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Picture />
                </Grid>
            </Grid>
            <Grid>
                <About />
            </Grid>
            <Grid>
                <NoServices />
            </Grid>
            <Grid><ProcessusDeTravail /></Grid>
            <Grid>
                <Solutions />
            </Grid>
            <Grid>
                <Temoignage />
            </Grid>
            <Grid>
                <Technologies />
            </Grid>
            <Grid>
                <Actualités />
            </Grid>
            <footer >
                <Footer />
            </footer>
        </Card>
        </>
    )
}  