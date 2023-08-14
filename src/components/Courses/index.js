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
import Navbar2 from '../Dashboard/Navbar2';
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
import Course5 from './Course5';
import Course6 from './Course6';
import Course7 from './Course7';
import Course8 from './Course8';
import Course9 from './Course9';
import Course10 from './Course10';
import learn from './learn.png'
import Navbar1 from '../Dashboard/Navbar1';

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
      courseData: [],
      user: [],
      email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
    };
  }

  componentDidMount() {
    const { email} = this.state;
    console.log('email', email)
    fetch(`https://edunode.herokuapp.com/api/users/user?email=${email}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ user: data });
      console.log('data', data)
     
    })
    .catch(error => {
      console.error(error);
    });

    console.log('user', this.state.user)



    // fetch data.json file here and set it to the courseData state
    try {
      fetch('./data.json')
        .then(response => response.json())
        .then(data => this.setState({ courseData: data }))
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
    const { user } = this.state;
    console.log('role',user.role)
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "";
    const id1 = '644bcdd1e1fec0f4f55a7447';
    const id2 = '644bcdeee1fec0f4f55a7449';
    const id3 = '644bce0be1fec0f4f55a744b';
    const id4 = '644bce24e1fec0f4f55a744d';
    const id5 = '644bce41e1fec0f4f55a744f';
    const id6 = '6464e2968aca412ed2d81bef';
    const id7 = '6464e2b48aca412ed2d81bf1';
    const id8 = '6464e2d58aca412ed2d81bf3';
    const id9 = '646b83386cea9a0294e65253';
    const id10 = '647603a1c8c864e8a6195e00';








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
            {/* <Grid item xs={12} sm={4} md={3}>
            <Item><Sidebar props={email}/></Item>
          </Grid> */}
            <Grid item xs={12} sm={8} md={20}>
            {user.role === 'Learner' && <Navbar2 />}
            {user.role === 'Teacher' && <Navbar1 />}
            {user.role === 'University' && <Navbar1 />}

              <div style={{ padding: '10px' }}>
                <br></br>
                
            
                <Course1 />
                <br></br>
               
                <Course2 />
                <br></br>

                <Course3 />
                <br></br>

                <Course4 />

                <Course5 />
                <br></br>

                <Course6 />
                <br></br>

                <Course7 />
                <br></br>

                <Course8 />
                <br></br>

                <Course9 />

                <br></br>
                <Course10 />

                <br></br>
                <br></br>
              </div>

            </Grid>
          </Grid>
        </Box>

      );
    }

    if (this.props.auth.courseOneDone) {
      return (

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            
            <Grid item xs={12} sm={8} md={20}>
           
           <Navbar1 />

            <div class="learn">

                <br></br>

                <Course1 />
                <br></br>

                <Course2 />
                <br></br>

                <Course3 />
                <br></br>

                <Course4 />
                <br></br>

                <Course5 />
                <br></br>

                <Course6 />
                <br></br>

                <Course7 />
                <br></br>

                <Course8 />
                <br></br>

                <Course9 />

                <br></br>
                <Course10 />

                <br></br>
              </div>
            </Grid>
          </Grid>

        </Box>

      );
    }


    if (isVerified && !courseOneDone) {
      return (
        <Box sx={{ flexGrow: 1, backgroundAttachment:learn}}>
          <Grid container spacing={2}>
            {/* <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar  props={email}/></Item>
        </Grid> */}
            <Grid item xs={12} sm={8} md={20}>
            <Navbar1 />


            <div class="learn">

                <br></br>

                <Course1 />
                <br></br>

                <Course2 />
                <br></br>

                <Course3 />
                <br></br>

                <Course4 />
                <br></br>

                <Course5 />
                <br></br>

                <Course6 />
                <br></br>

                <Course7 />
                <br></br>

                <Course8 />
                <br></br>

                 <Course9 /> 

                <br></br>
                <Course10 />

                <br></br>
              </div>
            </Grid>

          </Grid>

        </Box>
      );
    } else {
      return (
        <>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {/* <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar props={email}/></Item>
        </Grid> */}
              <Grid item xs={12} sm={8} md={20}>
              <Navbar1 />


            <div class="learn">

                  <a href={`/courseDetails/${id1}`} target="_blank" rel="noopener noreferrer">
                    <Course1 /></a>
                  <br></br>
                  <a href={`/courseDetails/${id2}`} target="_blank" rel="noopener noreferrer">
                    <Course2 /></a>
                  <br></br>
                  <a href={`/courseDetails/${id3}`} target="_blank" rel="noopener noreferrer">
                    <Course3 /></a>
                  <br></br>
                  <a href={`/courseDetails/${id4}`} target="_blank" rel="noopener noreferrer">
                    <Course4 /></a>
                  <br></br>
                  <a href={`/courseDetails/${id5}`} target="_blank" rel="noopener noreferrer">
                    <Course5 /></a>
                  <br></br>
                  <a href={`/courseDetails/${id6}`} target="_blank" rel="noopener noreferrer">
                    <Course6 /></a>
                  <br></br>
                  <a href={`/courseDetails/${id7}`} target="_blank" rel="noopener noreferrer">
                    <Course7 /></a>
                  <br></br>
                  <a href={`/courseDetails/${id8}`} target="_blank" rel="noopener noreferrer">
                    <Course8 /></a>
                  <br></br>
                  <a href={`/courseDetails/${id9}`} target="_blank" rel="noopener noreferrer">
                    <Course9 />
                  </a>
                  <br></br>

                </div>
              </Grid>

            </Grid>

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




