import React from "react";
import Map from "../Map";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import Container from "@mui/material/Container";

import NavBar from "../NavBar";
import kicon from "./keybaseicon.png";
import discord from "./discord.png";
import "./style.css";
import axios from 'axios';
import { useState, useEffect } from 'react';


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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



function Community() {
  const [projects, setProjects] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('https://edunode.herokuapp.com/api/project/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);
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
                Conferences, innitiatives, podcasts and meetups around
                the world.
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              ></Typography>
            </Container>
          </div>

          <br></br>
          <Typography gutterBottom variant="h4" component="h2">
            Community initiatives
          </Typography>




          <Grid container spacing={4}>


            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require('../Resources/stellarglobal.png')}
                  title="Stellar Global"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Stellar Global
                  </Typography>
                  <Typography>
                    A perfect source for the Stellar Network


                  </Typography>
                  <a href="https://keybase.io/team/stellar_global">
                    <img src={kicon} height={25} width={25} />
                  </a>
                  <a href="https://discord.gg/4FGf3UbuST">
                    <img src={discord} height={25} width={25} />
                  </a>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://stellar-global.org/"
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
                  image={require('../Resources/stellar11.PNG')}
                  title="Stellar Developers Discord"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Stellar Developers Discord
                  </Typography>
                  <Typography>
                    Stellar is an open financial network built for
                    speed and efficiency. With over 4 million accounts
                    and a 5-second ledger close time, Stellar is the
                    right choice for your financial service or
                    application.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://podcast.stellar.org/"
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
                  image={require('../Resources/stellarpodcast.PNG')}
                  title="Dev Google Group"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    The Stellar Podcast
                  </Typography>
                  <Typography>
                    Check out the Stellar Podcast
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://discord.gg/stellardev"
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
                  image={require('../Resources/publicnode1.PNG')}
                  title="Dev Google Group"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Public Node Podcast
                  </Typography>
                  <Typography>
                    Public Node community members discussing all
                    aspects of the Stellar ecosystem - from
                    brainstorming to developer interviews and
                    everything in between.
                  </Typography>
                  <br></br>
                  <a href="https://keybase.io/team/public_node">
                    <img src={kicon} height={25} width={25} />
                  </a>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://podcast.publicnode.org/1083677"
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
                  image={require('../Projects/stellarbattle1.PNG')}
                  title="StellarBattle"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    StellarBattle
                  </Typography>
                  <Typography>
                    Community funded Stellar Battles
                  </Typography>
                  <br></br>
                  <a href="https://keybase.io/team/stellar_battle">
                    <img src={kicon} height={25} width={25} />
                  </a>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://stellarbattle.com/"
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
                  image={require('../Projects/Lumenthropy.png')}
                  title="Lumenthropy"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Lumenthropy
                  </Typography>
                  <Typography>
                    Encouraging nonprofits to accept lumen donations
                    and inspiring people that hold lumens to donate to
                    worthy causes.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://lumenthropy.com/"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            {projects.map(project => (
              <Grid item xs={12} sm={6} md={4} key={project._id}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={project.link}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}






          </Grid>

          <h4>Communities of enthusiasts around the world.</h4>
          <br></br>
          <p>To open the links, please click for half a second</p>
          <div>

          </div>
          <br></br>
          <br></br>
          <p>
            Would you like us to add your community? feel free to
            contact us at hi@edunode.org
          </p>
        </main>
      </div>

    </>
  );
}

export default Community;
