import React from "react";
import "./style.css";
import {Button} from '@mui/material';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import {Card} from '@mui/material';
import {CardActions} from '@mui/material';
import {CardContent} from '@mui/material';
import {CardMedia} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {Grid} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import {Typography} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import {Container} from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import Link from '@mui/material/Link';
import Footer from "../Footer";
import NavBar from "../NavBar";
import kicon from "./keybaseicon.png"

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


function Projects() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className="resources">
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Community projects using the cutting edge technology
                that Stellar provides.
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              ></Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    {/* <Button variant="contained" href="https://www.stellar.org/developers">
                    Check the
                  </Button> */}
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End heo unit */}
            <Typography gutterBottom variant="h4" component="h2">
              Wallets
            </Typography>
            <br></br>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/LOBSTR.PNG')}
                    title="LOBSTR"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      LOBSTR
                    </Typography>
                    <Typography>
                      LOBSTR is a great way to get started with
                      Stellar. Simple, smooth and secure, it has all
                      what it takes to manage your Lumens wisely.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://lobstr.co/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/stellarx.png')}
                    title="StellarX"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      StellarX
                    </Typography>
                    <Typography>
                      A fast, free and decentralized crypto platform
                      with global fiat gateways. You can trade bitcoin
                      for Euros for Chinese Yuan on StellarX. That’s
                      not possible anywhere else.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://www.stellarx.com/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/vibrant1.PNG')}
                    title="vibrant"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Vibrant
                    </Typography>
                    <Typography>
                      With Vibrant, you're protected from the
                      uncertainty of unstable currencies. With the
                      freedom to hold USDX, you can finally save for a
                      brighter future.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://vibrant.cash/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/solar.PNG')}
                    title="Solar"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Solar
                    </Typography>
                    <Typography>
                      Simple and secure Stellar wallet
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://solarwallet.io/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/stellarport.png')}
                    title="Stellarport"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Stellarport
                    </Typography>
                    <Typography>
                      Discover and trade hundreds of crypto assets,
                      collectibles and NFT on Stellar.
                    </Typography>
                    <br></br>
                    <a href="https://keybase.io/team/stellarportio">
                      <img src={kicon} height={25} width={25} />
                    </a>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://solarwallet.io/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/saldo.png')}
                    title="Stellarport"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Saldo
                    </Typography>
                    <Typography>
                      Pay the bills of your family in Mexico with your
                      phone
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://saldo.mx/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/litemint.png')}
                    title="Litemint"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Litemint
                    </Typography>
                    <Typography>
                      Built on Stellar, Litemint is a crypto wallet
                      loaded with free instant games.
                    </Typography>
                    <br></br>
                    <a href="https://keybase.io/team/litemintio">
                      <img src={kicon} height={25} width={25} />
                    </a>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://litemint.com/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/dstoq.png')}
                    title="Litemint"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      DSTOQ
                    </Typography>
                    <Typography>
                      Invest into Global Stock Markets Get
                      unrestricted access to stocks, bonds, or ETFs.
                    </Typography>
                    <br></br>
                    <a href="https://keybase.io/team/dstoq">
                      <img src={kicon} height={25} width={25} />
                    </a>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://litemint.com/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
            <br></br>
            <Typography gutterBottom variant="h4" component="h2">
              Payment processing
            </Typography>

            <Grid container spacing={4}>
              

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/satoshipay.PNG')}
                    title="Satoshipay"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Satoshipay
                    </Typography>
                    <Typography>
                      Connecting the world through instant payments
                    </Typography>
                    <br></br>
                    <a href="https://keybase.io/team/satoshipay">
                      <img src={kicon} height={25} width={25} />
                    </a>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://satoshipay.io/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/coinqvest.png')}
                    title="Coinqvest"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Coinqvest
                    </Typography>
                    <Typography>
                      Enterprise Cryptocurrency Payment Processing
                    </Typography>
                    <br></br>
                    <a href="https://keybase.io/team/coinqvest.public">
                      <img src={kicon} height={25} width={25} />
                    </a>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://www.coinqvest.com/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/mozart.png')}
                    title="vibrant"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Mozart
                    </Typography>
                    <Typography>
                      Harmonize your day-to-day payments.
                    </Typography>
                    <br></br>
                    {/* <a href="https://keybase.io/team/experio">
                      <img src={kicon} height={25} width={25} />
                    </a> */}
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://www.moartpay.com/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            <Typography gutterBottom variant="h4" component="h2">
              Other ecosystem projects
            </Typography>

            <Grid container spacing={4}>
              

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/tempo2.png')}
                    title="tempo"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      TEMPO
                    </Typography>
                    <Typography>
                      Online Money Transfer
                    </Typography>
                    <br></br>
                   
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://tempo.eu.com/home"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/bitbond11.png')}
                    title="Bitbond"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Bitbond
                    </Typography>
                    <Typography>
                      Digital Assets and Tokenization Technology
                    </Typography>
                    <br></br>
           
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://www.bitbond.com/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../Projects/Akoin.png')}
                    title="vibrant"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Akoin
                    </Typography>
                    <Typography>
                    One Africa. One Koin.
                    </Typography>
                    <br></br>
                    {/* <a href="https://keybase.io/team/experio">
                      <img src={kicon} height={25} width={25} />
                    </a> */}
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://www.akoin.io/"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <PublishIcon
                style={{ width: '300px' }}
                />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Would you like to have your project listed? No problem, we will make it happen!
                      </Typography>
           
                    <br></br>
       
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="/submitproject"
                    >
                     Submit project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

          </Container>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Projects
