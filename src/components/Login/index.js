/*global google*/
import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from "@mui/material/CircularProgress"
import { Link } from "react-router-dom"
import { clearErrors } from "../../actions/errorActions";
import "./style.css";
import albedologo from "./albedo.png"
import albedo from '@albedo-link/intent'
import { connect } from 'react-redux';
import { albedoAuth, metamaskAuth, login, googleLogin, verifyGoogleUser, verifyTwitterUser, webThreeAuth, freighterAuth, mozartAuth } from "../../actions/authActions";
import NavBar from "../NavBar";
import { Image } from 'react-bootstrap';
import { isConnected, getPublicKey } from "@stellar/freighter-api";
import flogo from "./flogo.png"
import mlogo from "./metamask.png"
import m2logo from "./metamask2.png"
import mozartlogo from "./mozartlogo.png"
//import gapi from 'gapi';
import { Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import GoogleLog from './Google'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';



const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    "password"
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
  return errors
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      user: {},
      errors: {},
      token: ''

    }
    this.handleCallBackResponse = this.handleCallBackResponse.bind(this);

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

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

  handleLoginSuccess = (tokenResponse) => {
    console.log(tokenResponse);
    // perform any other actions on successful login
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  }



  /*componentDidMount() {



    google.accounts.id.initialize({
      client_id:
        '249576166536-ctede4ekn8eipj22eucggedpbpirg6dc.apps.googleusercontent.com',
      callback: this.handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }
*/


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
  };


  onSubmit = async values => {

    const email = values.email
    const password = values.password

    // create user object
    const newUser = {
      email,
      password
    };


    try {

      await this.props.login(newUser)

      if (this.props.auth.user) {
        return (
          <Navigate to="/dashboard" />
        );
      }


    } catch (error) {
      console.log(error)
    }


  }

  render() {




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

    const handleMetamask = async (e) => {
      e.preventDefault()
      let provider;
      if (window.ethereum) {
        provider = window.ethereum;
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else {
        console.log(
          'Non-Ethereum browser detected. You should consider trying MetaMask!'
        );
      }

      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //  window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts)
        if (accounts !== undefined) {
          await this.props.metamaskAuth(accounts)

          return (
            <Navigate to="/dashboard" />
          );
        }

      } else {
        alert("Please install metamask")

      }



    }




    const freighterHandler = async () => {

      if (isConnected()) {

        const pkey = await getPublicKey();

        await this.props.freighterAuth(pkey)

        return (
          <Navigate to="/dashboard" />
        );

      }

      // alert("not conected")

    }



    const { pristine, submitting, token } = this.props
    const { isLoading, isAuthenticated, isVerified } = this.props.auth

    if (isLoading) {
      return <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>

        <CircularProgress
          color="secondary"
        />

      </div>

    }
    if (isAuthenticated && !isVerified) {
      //  <p class="loading">Loading...</p> <CircularProgress color="secondary" />

      return (
        <Navigate to="/" />
      );
    }
    if (isAuthenticated && isVerified) {
      //  <p class="loading">Lding...</p> <CircularProgress color="secondary" />

      return (
        <Navigate to="/dashboard" />
      );
    }

    return (
      <div>
        <NavBar />

        <form id="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>

            <Typography>
              Please choose your login method.
            </Typography>
          </div>


          <br></br>
          <div style={{ width: '300px' }}>
            <GoogleLogin
              type="standard"
              onSuccess={credentialResponse => {
                // axios post request to backend to store the token
                console.log(credentialResponse);
                console.log('login success')
                
                const token=credentialResponse.credential
                this.props.handleSubmit(this.handleCallBackResponse(token))
                console.log('token ', token )
                // auto_select
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            // useOneTap
            />
          </div>



          <br></br>
          
          <div>
          {/* <Button
              style={{ width: '300px' }}
              onClick={xBullWalletConnectHandle}
              variant="outlined"
            >

              Login with xBull
              
            </Button> */}
          </div>

          <br></br>
          
          <div>
            <Button
              style={{ width: '300px' }}
              onClick={handleMetamask}
              variant="outlined"
            >

              Login with metamask
              {/* <Image style={{ width: '25px', display: "inline-block", margin: "20px 20px" }} src={mlogo} /> */}
            </Button>

          </div>
          
          <br></br>
          <div>
            <Button
              style={{ width: '300px' }}
              onClick={freighterHandler}
              variant="outlined"
            >
              Login with freighter
              {/* <Image style={{ width: '85px', display: "inline-block", margin: "5px 5px" }} src={flogo} /> */}
            </Button>
          </div>
          <br></br>
          <div>
            <Button
              style={{ width: '300px' }}
              onClick={albedoHandler}
              variant="outlined"
            >
              Login with albedo{/* Login with <Image style={{ width: '95px', display: "inline-block", margin: "5px 5px", }} src={albedologo} /> */}

            </Button>
          </div>

          <br></br>
          <div>

          </div>
          <div>
            <Field
              name="email"
              type="text"
              label="Email"
              component={this.renderTextField}
              id="email"
              value={this.state.email}
            />
          </div>
          <div>
            <Field
              name="password"
              type="password"
              label="Password"
              component={this.renderTextField}
              id="password"

              value={this.state.password}
            />
          </div>

          <div>
            <Button
              variant="contained"
              id="button"
              type="submit"

              disabled={pristine || submitting}>

              Login
            </Button>
          </div>
          <div>
            <p>{this.props.error.msg.msg}</p>
          </div>
          <div>
            <Link to="/">
              Return
            </Link>
          </div>
          <div>
            <Link to="/forget_password">
              Forget your password?
            </Link>
          </div>
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

Login = connect(
  mapStateToProps, { login, googleLogin, verifyGoogleUser, verifyTwitterUser, clearErrors, albedoAuth, webThreeAuth, freighterAuth, mozartAuth, metamaskAuth }
)(Login)

export default Login = reduxForm({
  form: "LoginReduxForm",
  fields: ['email', 'password'],
  login,
  googleLogin,
  validate,
  clearErrors,
  verifyGoogleUser,
  albedoAuth,
  verifyTwitterUser,
  webThreeAuth,
  freighterAuth,
  mozartAuth,
  metamaskAuth
})(Login)

