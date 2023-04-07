import React from "react";
import  Card from '@mui/material/Card';
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
import Mozart from "../Projects/mozart.png";
import Litemint from "../Projects/litemint.png";
import Stellar from "./stellar.png";
import StellarBattle from "../Projects/stellarbattle1.PNG";
import PublicNode from "../Resources/publicnode1.PNG";
import StellarGlobal from "../Resources/stellarglobal.png";
import TalentGarden from "./tag.png";
import EdtechAustria from "./edtech.png";
import WIFIWien from "./wifi.png";
import Logos from "./logos.png";
import Slider from "react-slick";



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
      {/** 
        
         <Grid item xs={12} sm={6} md={4}>

        
                <Card  sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={Mozart}
                    title="Mozart"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Litemint}
                    title="Litemint"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Stellar}
                    title="Stellar"
                  />

                </Card>
               
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={StellarBattle}
                    title="StellarBattle"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={PublicNode}
                    title="Public Node"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={StellarGlobal}
                    title="Stellar Global"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={TalentGarden}
                    title="Talent Garden"
                  />

                </Card>
               
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={EdtechAustria}
                    title="Edtech Austria"
                  />

                </Card>
               
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={WIFIWien}
                    title="WIFI Wien"
                  />

                </Card>
               
              </Grid>

         </Container>
           <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

           <Slider {...settings}>
          <div>
            <h3><img src={Stellar}   alt="Stellar"/> 
            </h3>
          </div>
          <div>
            <h3><img src={Mozart}   alt="Stellar"/></h3>
          </div>
          <div>
            <h3><img src={Litemint}   alt="Stellar"/></h3>
          </div>
          <div>
            <h3><img src={StellarBattle}   alt="Stellar"/></h3>
          </div>
          <div>
            <h3><img src={PublicNode}   alt="Stellar"/></h3>
          </div>
          <div>
            <h3><img src={StellarGlobal}   alt="Stellar"/></h3>
          </div>
          <div>
            <h3><img src={TalentGarden}   alt="Stellar"/></h3>
          </div>
          <div>
            <h3><img src={EdtechAustria}   alt="Stellar"/></h3>
          </div>
          <div>
            <h3><img src={WIFIWien}   alt="Stellar"/></h3>
          </div>
        </Slider>

              
          </Container>
          <br></br>
          {/* <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
 */}
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