import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import basic from "./basic.PNG"
import {
  Button,
} from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';
import { Redirect, BrowserRouter, Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { setCourseOne } from "../../actions/authActions"
import Chip from "./Chip.js"
import albedologo from "./albedo.png"
import albedo from '@albedo-link/intent'
import { Image } from 'react-bootstrap';

export function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   const handleConfirm = (e) => {
     setOpen(false);
     window.location.href = '/courses/101/';
   };

  return (
    <div>
      {/* <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Select Course
      </Button> */}
      <Button
   style={{ width: '207px', height: "40px" }}
            variant="contained"
        color="default"


            onClick={() => {

              albedo.publicKey({

              })
                .then(res => {
                  // console.log(res)
                  // const granted = res.granted
                  const intent = res.intent
                  // const network = res.network
                  const pubkey = res.pubkey
                  const signature = res.signature
                  const signed_message = res.signed_message

                  const userName = ""
                  

                  // const session = res.session
                  // const valid_until = res.valid_until

                  const newAlbedoUser = {

                    intent,
                    pubkey,
                    signature,
                    signed_message,
                    userName,
                  
                  }

                  this.props.albedoAuth(newAlbedoUser)

                })
            }}> Login with<Image style={{ width: '55px' }} src={albedologo} />
          </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that you want to take this course?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    background: 'white',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  drawerPaper: { background: 'blue' },
}));



function Course1(props) {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        // className={classes.drawerPaper}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={basic}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  In this course, you will learn the basic concepts of
                  the Stellar Network.!
                </Typography>
                <Typography variant="body2" gutterBottom></Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                ></Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ cursor: 'pointer' }}
                >
                  {/* <Button onClick={() => {
                    
                }}>Go</Button> */}
                  <AlertDialog />
                  {/* <Link to="/courses/101/"> Select </Link> */}
                  <Chip />
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Course1;