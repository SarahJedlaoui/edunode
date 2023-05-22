import React , {useState , useEffect}from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import seps from './hyperledger.png';
import { Button } from 'react-bootstrap';
import { Redirect, BrowserRouter, Link } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



export function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = (e) => {
    setOpen(false);
    window.location.href = '/courses/105/';


  };
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Select Course
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Hyperledger"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that you want to take this course?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ backgroundColor: '#6E59F7', color: 'white' }}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} style={{ backgroundColor: '#6E59F7', color: 'white' }} autoFocus>
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
}));

export default function Course5() {
  const [rating, setRating] = useState();
  const classes = useStyles();
  const courseId = '644bce41e1fec0f4f55a744f';

  useEffect(() => {
    // Function to retrieve the average rate for the course
    const getCourseAverageRate = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/cours/courses/${courseId}/average-rating`);
        setRating(response.data.averageRating);
        console.log(response.data.averageRating)
       
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    getCourseAverageRate();
  }, []);
  useEffect(() => {
    console.log('Updated rating:', rating);
  }, [rating]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={seps} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  In this course you will learn about Hyperledger.
                </Typography>
                <p className="card-text">
          <small className="text-muted">
            Tags: Hyperledger
          </small>
        </p>
        <Stack spacing={1}>
        {typeof rating === 'number' && (
          <Rating name="size-small" defaultValue={rating} size="small"  precision={0.1} readOnly />
        )}
      
    </Stack>
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
                  {/* <Link to="#"> Select </Link> */}
                  <AlertDialog />
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
