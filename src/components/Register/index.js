import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import {TextField} from '@mui/material'
import {Button} from "@mui/material"
import {CircularProgress} from "@mui/material"
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
      password: "",
      confirmPassword: "",
      isLoading: false,
      errors: {}
    }
    // this.handleEmailChange = this.handleEmailChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
   
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    register: PropTypes.func.isRequired,
    confirm: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired

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

    // create user object
    const newUser = {
      email,
      password,
    };
 
    const confirmUser = {
      email,
    }
console.log(newUser.password)
     // attempt to register

     try {
       await this.props.register(newUser)
      // await this.props.confirm(confirmUser)
      // if (this.props.auth) {
      //   console.log(this.props.auth)

      //   // this.props.history.push("/dashboard")
      // } else {
      //   alert("oops something went wrong")
      // }
     } catch (error) {
       console.log(error)
     }

    // this.setState({ isLoading: false })
    // console.log(this.props)

  }
  

  render() {
    
    // const handleCustomLogin = async (e) => {
    //   e.preventDefault()
    //   const user = await Moralis.authenticate({
    //     provider: "web3Auth",
    //      clientId: process.env.REACT_APP_WEBTHREEAUTH_CLIENT_ID,
    //   theme: "light",
    //   loginMethodsOrder: ["github", "twitter", "google", "discord", "facebook",  "reddit",  "twitch", "apple", "linkedin", "email_passwordless"]
       
    //    })
       
    //  const currentUser = Moralis.User.current();

    
    //    try {

    //    await this.props.webThreeAuth(currentUser)
  
  
    //   } catch (error) {
    //     console.log(error)
    //   }
    

    
      
    //   }
      
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
    const { isLoading, isAuthenticated, isVerified  ,history } = this.props.auth
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

      history.push('/verifyemail');
      
    }
    if (isAuthenticated && isVerified) {
      //  <p class="loading">Lding...</p> <CircularProgress color="secondary" />
      history.push('/dashboard');
    }
    return (
      <div>
        <NavBar />
 
      <form id="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
       <h3>Please Sign Up</h3> 
       
       <br></br>
          <div>
          {/* <Button
          
style={{ width: '300px' }}
onClick={handleCustomLogin}
variant="outlined"
>

  {" "}Login with <Image style={{ width: '75px' }, {display: "inline-block"}, {margin: "10px 40px"}, { width: '55px' }} src={wlogo} /> 
</Button> */}

</div>
<br></br>
          <div>
          <Button
style={{ width: '300px' }}
onClick={albedoHandler}
variant="outlined"
>
Login with <Image style={{width: '45px' ,display: "inline-block",margin: "5px 5px", width: '55px' }} src={albedologo} /> 
   
</Button>
          </div>
          <br></br>
          <div>
          <Button
style={{ width: '300px' }}
onClick={freighterHandler}
variant="outlined"
>
  Login with <Image style={{ width: '75px' ,display: "inline-block",margin: "5px 5px", width: '55px' }} src={flogo} /> 
</Button>
          </div>
          <br></br>
        <div>
          <Field
            name="email"
            type="email"
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
          <Field
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            component={this.renderTextField}
            id="confirmPassword"
            value={this.state.confirmPassword}
          />
        </div>
        <div>
          <Button
            variant="contained"
            id="button"
            type="submit"
            disabled={pristine || submitting}>
            Register
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
  mapStateToProps, { register, confirm, clearErrors, webThreeAuth }
)(Register)

export default Register = reduxForm({
  form: "RegisterReduxForm",
  fields: ['email', 'password', "confirmPassword"],
  register,
  confirm,
  validate,
  clearErrors,
  webThreeAuth
})(Register)


