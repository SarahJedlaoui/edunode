import React from "react";
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Grid } from '@mui/material';
import {Typography} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import {Container} from '@mui/material';
import Complex from "./Complex"
import "./style.css";
import CookieConsent from 'react-cookie-consent';
import ReactPlayer from 'react-player'



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3];


function Hometwo() {
  const classes = useStyles();



    return (
      <>
        <Container maxWidth="sm">
          <Typography
            component="h3"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            EduNodeeeee
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
       Learn Web3 and Blockchain skills and reach your developing goals.
          </Typography>
          {/* <section className="chatbot">
            <div className="chat-input-holder">

              <textarea className="chat-input-textarea" placeholder="type your message here">
                
              </textarea>



            </div>

          </section> */}
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item></Grid>
            </Grid>
          </div>
        </Container>
        <br></br>
         
        <br></br>
        <Container>
          <Complex />
          <br></br>
         
        <br></br>
          <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
       <ReactPlayer url='https://vimeo.com/712679632' />
         </Container>

         <br></br>
         
         <br></br>
         <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
         <h3>Partners</h3>


         <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/mozart.png')}
                    title="Mozart"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/litemint.png')}
                    title="Litemint"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./stellar.png')}
                    title="Stellar"
                  />

                </Card>
               
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/stellarbattle1.PNG')}
                    title="StellarBattle"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Resources/publicnode1.PNG')}
                    title="Public Node"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Resources/stellarglobal.png')}
                    title="Stellar Global"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./tag.png')}
                    title="Talent Garden"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./edtech.png')}
                    title="Edtech Austria"
                  />

                </Card>
               
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./wifi.png')}
                    title="WIFI Wien"
                  />

                </Card>
               
              </Grid>

         </Container>
           <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>



              
          </Container>
          <br></br>
          {/* <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

          </Container> */}
        </Container>
       
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </>
    );
}

export default Hometwo;