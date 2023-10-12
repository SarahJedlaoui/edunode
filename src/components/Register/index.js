import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button,TextField, Typography, Box } from '@mui/material';

import { CircularProgress } from "@mui/material"
import "./style.css";
import { connect } from 'react-redux'
import {
  Link
} from "react-router-dom";
import { isConnected, getPublicKey } from "@stellar/freighter-api";
import NavBar from "../NavBar"
import albedo from '@albedo-link/intent'
import { Image } from 'react-bootstrap';
import albedologo from "./img/albedo.png"
import flogo from "./img/flogo.png"
//import { ConstructionOutlined } from '@mui/icons-material'
import { clearErrors } from "../../actions/errorActions";
import { register, confirm, webThreeAuth } from "../../actions/authActions";
import { Navigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import {  googleLogin, verifyGoogleUser} from "../../actions/authActions";




const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    "password",
    "confirmPassword"
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  if (values.password && values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match'
  }
  return errors
}

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name:'',
      password: "",
      confirmPassword: "",
      isLoading: false,
      user: {},
      errors: {},
      token: '',
      showError: false ,
      errorMsg: null
    }
    // this.handleEmailChange = this.handleEmailChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleCallBackResponse = this.handleCallBackResponse.bind(this);

  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    register: PropTypes.func.isRequired,
    confirm: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired

  }

  async handleCallBackResponse(token) {
    console.log('encoded JWT ID Token :' + token);
    const userObject = jwt_decode(token);
    console.log(userObject);

    const email = userObject.email;
    const name = userObject.name;
    const image =userObject.picture;
    console.log(email);
    console.log(name);



    const { user } = this.state;

    try {
      const newUser = {
        email,
        name,
        image
      }
      await this.props.googleLogin(newUser);
      console.log('googlelogin executed');
      if (this.props.user) {
        this.props.navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      console.log('googlelogin failed');
    }


    if (this.props.user && typeof google !== 'undefined') {
      this.props.navigate('/dashboard');
    }


  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
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
  )

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)

  };

  onSubmit = async (values) => {
    this.setState({ errors: {}, isLoading: true })

    const email = values.email
    const password = values.password
    const name = values.name

    // create user object
    const newUser = {
      email,
      password,
      name
    };

    const confirmUser = {
      email,
    }
    console.log(newUser.password)
    // attempt to register
    const { error } = this.props;
    try {
      await this.props.register(newUser)
      if (this.props.auth.user) {
        return (
          <Navigate to="/dashboard" />
        );
      }
      // await this.props.confirm(confirmUser)
      // if (this.props.auth) {
      //   console.log(this.props.auth)

      //   // this.props.history.push("/dashboard")
      // } else {
      //   alert("oops something went wrong")
      // }

    } catch (error) {

      this.setState({ errorMsg: error.response.data.msg });
      console.log(error);

    } finally {
      this.setState({ isLoading: false });
    }
    if (this.state.errorMsg) {
      alert(this.state.errorMsg);
      alert(this.state.errorMsg);

      ;
    }
    // this.setState({ isLoading: false })
    // console.log(this.props)

  }


  render() {

    const freighterHandler = async () => {
      if (isConnected()) {
        const publicKey = await getPublicKey();
        console.log(publicKey)
      }

      // alert("not conected")

    }

    const albedoHandler = () => {

      albedo.publicKey({

      })
        .then(res => {
          const intent = res.intent
          const pubkey = res.pubkey
          const signature = res.signature
          const signed_message = res.signed_message
          const userName = ""
          const newAlbedoUser = {
            intent,
            pubkey,
            signature,
            signed_message,
            userName,

          }

          this.props.albedoAuth(newAlbedoUser)

        })
    }

    const { pristine, submitting } = this.props
    const { isLoading, isAuthenticated, isVerified } = this.props.auth
    if (isLoading) {

      return <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}> <CircularProgress
          color="secondary"
        />
      </div>
    }
    if (isAuthenticated && !isVerified) {

      return (
        <Navigate to="/login" />
      );

    }
    if (isAuthenticated && isVerified) {
      return (
        <Navigate to="/login" />

      );

    }
    return (
      <div>
        <NavBar />

        <form id="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom>
              Sign Up
            </Typography>
{/** 
            <Button
              variant="outlined"
              onClick={albedoHandler}
              style={{ width: '300px', marginBottom: '16px' }}
            >
              Login with <Image style={{ width: '45px', marginLeft: '8px' }} src={albedologo} />
            </Button>
            <Button
              variant="outlined"
              onClick={freighterHandler}
              style={{ width: '300px', marginBottom: '16px' }}
            >
              Login with <Image style={{ width: '75px', marginLeft: '8px' }} src={flogo} />
            </Button>
            <br></br>*/}
   <div >
            <GoogleLogin
              type="standard"
              onSuccess={credentialResponse => {
                // axios post request to backend to store the token
                console.log(credentialResponse);
                console.log('login success')
                
                const token=credentialResponse.credential
                this.props.handleSubmit(this.handleCallBackResponse(token))
                console.log('token ', token )
                
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              style={{ width: '300px', marginBottom: '16px' }}
            />
          </div>
          <br></br>

            <div>
              <Field
                name="name"
                type="text"
                label="Full Name"
                component={props => this.renderTextField(props)}
                id="name"
                value={this.state.name}
                style={{ width: '300px', marginBottom: '16px' }}
              />
            </div>
            <div>
              <Field
                name="email"
                type="email"
                label="Email"
                component={props => this.renderTextField(props)}
                id="email"
                value={this.state.email}
                style={{ width: '300px', marginBottom: '16px' }}
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                label="Password"
                component={props => this.renderTextField(props)}
                id="password"
                value={this.state.password}
                style={{ width: '300px', marginBottom: '16px' }}
              />
            </div>
            <div>
              <Field
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                component={this.renderTextField}
                id="confirmPassword"
                value={this.state.confirmPassword}
                style={{ width: '300px', marginBottom: '16px' }}
              />
            </div>
            <div>
            <Button
              variant="contained"
              color="primary"
              id="button"
              type="submit"
              disabled={pristine || submitting}
              style={{ width: '300px', marginBottom: '16px' }}
            >
              Register
            </Button>
            </div>

            {/**  <div className="alert alert-danger">{this.state.errorMsg}</div>*/}

            <div>

              <p>{this.props.error.msg.msg}</p>
              <p>{this.props.msg}</p>
            </div>
            <div>
              <Link to="/">
                Return
              </Link>
            </div>
          </Box>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth
})

Register = connect(
  mapStateToProps, { register, verifyGoogleUser, googleLogin,confirm, clearErrors, webThreeAuth }
)(Register)

export default Register = reduxForm({
  form: "RegisterReduxForm",
  fields: ['email', 'password', "confirmPassword"],
  register,
  confirm,
  googleLogin,
  verifyGoogleUser,
  validate,
  clearErrors,
  webThreeAuth
})(Register)