import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  Button,
} from 'react-bootstrap';

// Import components

import Welcome from './Welcome';
import Course1 from './Course1';


import Navbar1 from '../../Dashboard/Navbar1';

// Import styles
import './style.css';
import "./styles.css"

// Import PropTypes for type checking
import PropTypes from 'prop-types';




class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      courseData: []
    };
  }

  componentDidMount() {
    // fetch data.json file here and set it to the courseData state
   try {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => this.setState({courseData: data}))
    .catch(err => console.log(err))
   } catch (error) {
    console.log("there was an error!! ;/" + error)
   }
    }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }
  render() {

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    
    const email= this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "";
    const id1 ='644bcdd1e1fec0f4f55a7447';

    const {
      isLoading,
      isAuthenticated,
      isVerified,
      hasUsername,
      googleProfilePic,
      isGranted,
      isFirstCourseSelected,
    courseOneDone,
    } = this.props.auth;

    
      return (
        <>
         
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar props={email}/></Item>
        </Grid> */}
        <Grid item xs={12} sm={8} md={20}>
     <Navbar1 />
     
          <div className="myDiv">
          <br></br>
          <Course1 />
          <br></br>
          
          
          
        </div>
        </Grid>
        
      </Grid>
     
    </Box>
        </>
      );
    }
  }


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default (connect(mapStateToProps, null)(Challenge));



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
  // 

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
          {"Basic Concepts Course"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that you want to take this course?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ backgroundColor: 'red', color: 'white' }}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="blue" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}




