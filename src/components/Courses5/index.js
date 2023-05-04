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
import courseData from './data.json';

// Import components
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import Welcome from './Welcome';
import Course1 from './Course1';
import Course1done from './Course1done';
import Course1doneclaim from './Course1doneclaim';
import Course2 from './Course2';
import Course3 from './Course3';
import Course4 from './Course4';
import Footer from '../Footer';

// Import styles
import './style.css';
import "./styles.css"

// Import PropTypes for type checking
import PropTypes from 'prop-types';




class Courses extends Component {
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

    if (this.props.auth.courseOneDone && this.props.auth.isupdated) {
      return (

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar /></Item>
        </Grid>
        <Grid xs={7} sm={8.5} md={10}>
          <Item><Topbar /></Item>
          <div className="myDiv">
       
          <br></br>
          <Course1doneclaim />
          <br></br>
          <Course2 />
          <br></br>
          <Course3 />
          <br></br>
          <Course4 />
          <br></br>
          <Footer />
        </div>
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
       
      );
    }

    if (this.props.auth.courseOneDone) {
      return (

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar /></Item>
        </Grid>
        <Grid xs={7} sm={8.5} md={10}>
          <Item><Topbar /></Item>
          <div className="myDiv">
          <Welcome />
          <br></br>
          <Course1done />
          <br></br>
          <Course2 />
          <br></br>
          <Course3 />
          <br></br>
          <Course4 />
          <br></br>
          <Footer />
        </div>
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
       
      );
    }
    
    
    if (isVerified && !courseOneDone) {
      return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar /></Item>
        </Grid>
        <Grid xs={7} sm={8.5} md={10}>
          <Item><Topbar /></Item>
          <div className="myDiv">
          <Welcome />
          <br></br>
          <Course1 />
          <br></br>
          <Course2 />
          <br></br>
          <Course3 />
          <br></br>
          <Course4 />
          <br></br>
          <Footer />
        </div>
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
      );
    } else {
      return (
        <>
          {/* <NavBar />
          <p>
            Please <a href="/login">Log In</a> to see the courses.
          </p>
          <Footer /> */}
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar /></Item>
        </Grid>
        <Grid xs={7} sm={8.5} md={10}>
          <Item><Topbar /></Item>
          <div className="myDiv">
          <Welcome />
          <br></br>
          <Course1 />
          <br></br>
          <Course2 />
          <br></br>
          <Course3 />
          <br></br>
          <Course4 />
          <br></br>
          <Footer />
        </div>
        </Grid>
        
      </Grid>
      {/* <Footer /> */}
    </Box>
        </>
      );
    }
  }



}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default (connect(mapStateToProps, null)(Courses));



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




