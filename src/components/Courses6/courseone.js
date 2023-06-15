import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';
import { resend, verifyCode } from '../../actions/authActions';
import { Field, reduxForm } from 'redux-form';
import TextField from '@mui/material/TextField';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { withRouter } from 'react-router';
import { Redirect, BrowserRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  Button,
} from 'react-bootstrap';
import './style.css';
// import SideBar from './sidebar';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import keybase from './keybaseicon.png';
import createStellarIdenticon from 'stellar-identicon-js';
import SearchBox from '../SearchBox';
import Course1 from './Course1';
import Course2 from './Course2';
import Course3 from './Course3';
import Course4 from './Course4';
// import LinearWithValueLabel from './ProgressBar';
// import ActionsInAccordionSummary from './MultiSelection';
// import FloatingActionButtonZoom from './Floating';
// import CircularIntegration from './Check';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['confirmationCode'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.confirmationCode && values.confirmationCode.length < 4) {
    errors.confirmationCode =
      'Confirmation Code must be at least 5 characters';
  }
  return errors;
};

class Courses extends Component {
  render() {
    const {
      isLoading,
      isAuthenticated,
      isVerified,
      hasUsername,
      googleProfilePic,
      isGranted,
    } = this.props.auth;

    

    if (isVerified) {
      return (
        <div>
          <NavBar />
          <br></br>
          <Course1 />
          <br></br>
          <Course2 />
          <br></br>
          <Course3 />
          <br></br>
          <Course4 />
          <br></br>
          

          {/* <LinearWithValueLabel />
                <br></br>
                <ActionsInAccordionSummary />
                <br></br>
                <CircularIntegration /> */}
        </div>
      );
    }
    return <p>Please log in</p> 
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Courses = connect(mapStateToProps, { verifyCode, clearErrors })(
  Courses,
);

export default Courses = reduxForm({
  form: '',
  fields: [''],
  validate,
  clearErrors,
  verifyCode,
})(withRouter(Courses));





// import React, { Component } from 'react';
// import NavBar from '../NavBar';
// import Footer from '../Footer';
// import LinearWithValueLabel from './ProgressBar';
// import ActionsInAccordionSummary from './MultiSelection';
// import FloatingActionButtonZoom from './Floating';
// import CircularIntegration from './Check';
// import Course1 from './Course1';
// import Course2 from './Course2';
// import Course3 from './Course3';

// export default class index extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <br></br>
//         <Course1 />
//         <br></br>
//         <Course2 />
//         <br></br>
//         <Course3 />
//         <br></br>
//         

//         {/* <LinearWithValueLabel />
//                 <br></br>
//                 <ActionsInAccordionSummary />
//                 <br></br>
//                 <CircularIntegration /> */}
//       </div>
//     );
//   }
// }
