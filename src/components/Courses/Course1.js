import React , {useState , useEffect}from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import basic from "./stellar.png"
import {
  Button,
} from 'react-bootstrap';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

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
           {"Basic Concepts"} 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that you want to take this course? <br></br>
            PS: please fill in your full name in the account so we can provide you with a certification 
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
    // background: 'grey',
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
  // drawerPaper: { background: 'grey' },
}));


function Course1(props) {
  const [rating, setRating] = useState();
  const classes = useStyles();
  const courseId = '644bcdd1e1fec0f4f55a7447';

  useEffect(() => {
    // Function to retrieve the average rate for the course
    const getCourseAverageRate = async () => {
      try {
        const response = await axios.get(`https://edunode.herokuapp.com/api/cours/courses/${courseId}/average-rating`);
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
                  the Stellar Network.
                </Typography>
                <p className="card-text">
          <small className="text-muted">
            Tags: Stellar
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
                >      </Typography>
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