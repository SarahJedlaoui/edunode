import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import sor from './Oracle.png';
import { Button } from 'react-bootstrap';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
    window.location.href = '/courses/109/';


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
          {"Soroban"}
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

export default function Course9() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={sor} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  In this course you will learn Blockchain And Money.
                </Typography>
                <p className="card-text">
          <small className="text-muted">
            Tags:  Blockchain
          </small>
        </p>
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
