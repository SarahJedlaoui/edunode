import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import { resend, saveUsername, saveUsernameAlbedo } from "../../actions/authActions";
import { Field, reduxForm } from "redux-form";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress"
import "./style.css";
import withRouter  from '../../withRouter'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import NavBar from "../NavBar";
import {
  Redirect, Link
} from "react-router-dom";

const validate = values => {
  const errors = {};
  const requiredFields = ["firstName", "secondName"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.confirmationCode && values.confirmationCode.length < 1) {
    errors.confirmationCode = "Confirmation Code must be at least 1 characters";
  }
  return errors;
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationCode: "",
      username: "",
      description: "",
      isLoading: false,
      errors: {},
      results: {},
      values: {},
      isVerified: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    isVerified: PropTypes.bool,
  };


  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "VERIFICATION_FAIL") {
        this.setState({ msg: error.msg.msg });
        console.log(error.msg.msg)
      } else {
        this.setState({ msg: null });
      }
    }

  }

  renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

 

onSubmit = async (values) => {
  
  const pubkey = this.props.auth.user.pubkey;
const email = this.props.auth.user.email;
const username = values.username;

  if (!username) {
 const noUsername = ""
      const updUser = {
        email,
        noUsername,
      };

      this.props.saveUsername(updUser);
    
  }

if (pubkey) {
  const updateUser = {
    pubkey, username
  }
 
 this.props.saveUsernameAlbedo(updateUser)
  
} else {
  const updUser = {
    email, username
  }
  
  this.props.saveUsername(updUser)
  
}







};


skipName = () => {


  console.log("hi")


};



  render() {

    const { pristine, submitting } = this.props;
    const { isLoading, isVerified, isAuthenticated, hasUsername, isGranted,history } = this.props.auth

    

    if (isLoading) {

      return <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}> <CircularProgress 
      color="secondary"
       />
          </div>
    }


    if (hasUsername) {

   history.push('/dashbord')

    }

    
     
  

    if (isAuthenticated && isVerified) {

   
    return (
      <>
        <NavBar />
        <Container fluid>
          <Row>
            <Col xs={12} id="page-content-wrapper">
              <form
                id="form"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
                <div>
                  <Field
                    component={this.renderTextField}
                    value={this.state.username}
                    type="text"
                    label="Please enter your username"
                    name="username"
                    id="code"
                  />
                </div>
                <div>
                  <Button
                    variant="contained"
                    id="button"
                    type="submit"
                    disabled={pristine || submitting}
                  >
                    Continue
                  </Button>
           <button onClick={this.skipName} >Skip this step</button>
                </div>
                <div>
                  {/* <p>{this.props.error.msg.msg}</p>
        <p>{this.props.auth.message}</p> */}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
  history.push('/');
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Profile = connect(
  mapStateToProps, { saveUsername, clearErrors, saveUsernameAlbedo }
  )(Profile);

export default Profile = reduxForm({
  form: "profileForm",
  fields: ["username"],
  validate,
  clearErrors,
  saveUsername,
  saveUsernameAlbedo
})(withRouter(Profile));
