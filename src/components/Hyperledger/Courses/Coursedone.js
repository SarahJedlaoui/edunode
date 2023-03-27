import React, { Component } from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import CircularIntegration from './One/CheckFive';
import {
  Form,
  Row,
  Col,
  Image,
  Card,
  Modal,
  Button,
} from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {
  setCourseOne,
  setCourseOneGoogle,
  setCourseOneAlbedo
} from '../../actions/authActions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';
import { Field, reduxForm } from 'redux-form';
import Ediploma from "./NFT/Ediploma"

class Coursedone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  async componentDidMount() {
    // const googlePic = this.props.auth.user.googleProfilePic;
    // const pubkey = this.props.auth.user.pubkey;
    // console.log(this.props.auth.user)
    // if (pubkey) {
    //   const courseOneDone = true
    //   const email = this.props.auth.user.email;
    //   const emailObj = {
    //     email,
    //     courseOneDone,
    //   };
    //   await this.props.setCourseOneAlbedo(emailObj);
    // } 
    // if (pubkey) {
    //   const courseOneDone = true
    //   const email = this.props.auth.user.email;
    //   const emailObj = {
    //     email,
    //     courseOneDone,
    //   };
    //   await this.props.setCourseOneGoogle(emailObj);
    // } else {
    //   const email = this.props.auth.user.email;
    //   const courseOneDone = true
    //   const emailObj = {
    //     email,
    //     courseOneDone,
    //   };
    //   await this.props.setCourseOne(emailObj);
    // }



  };

  //       static propTypes = {
  //     isAuthenticated: PropTypes.bool,
  //     error: PropTypes.object.isRequired,
  //     clearErrors: PropTypes.func.isRequired
  //   }
//   onSubmit = (async) => {
//     const useremail = this.props.auth.user.email;
//     const email = {
//       useremail,
//     };


  render() {
    // setTimeout(function () {
    //   try {
    //   window.location.href = '/courses/';
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }, 2000);



    return (
      <>
    {/* <div>loading now..</div> */}
    <Ediploma />
    </>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});

Coursedone = connect(mapStateToProps, {
  setCourseOne,
setCourseOneGoogle,
  clearErrors,

})(Coursedone);

export default Coursedone = reduxForm({
  form: 'coursedone',
  // fields: ['email', 'password'],
  setCourseOne,
  setCourseOneGoogle,
  clearErrors,

})(Coursedone);