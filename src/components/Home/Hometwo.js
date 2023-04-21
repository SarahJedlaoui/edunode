import React from "react";

import  CardMedia  from '@mui/material/CardMedia';
import  Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import {Container} from '@mui/material';
import Complex from "./Complex"
import "./style.css";
import MediaCard from './card';
import CookieConsent from 'react-cookie-consent';
import ReactPlayer from 'react-player'
import Logos from "./logos.png";
  // import Slider from "react-slick";
  // import UploadCertificate from "./uploadCertificate";



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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

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
            EduNode
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
       <ReactPlayer url='https://www.youtube.com/watch?v=cHnlzwi7DuY' />
         </Container>

         <br></br>
      
         <br></br>
         <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
         <h3>Partners</h3>
      
          </Container>
           
            <h3><img src={Logos}   alt="Partners"/></h3>
        </Container>
      
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </>
    );
}

export default Hometwo;