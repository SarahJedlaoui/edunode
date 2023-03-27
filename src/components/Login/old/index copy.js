import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Redirect } from "react-router-dom"
import { clearErrors } from "../../../actions/errorActions";
import "./style.css";
import { connect } from 'react-redux';
import { login } from "../../../actions/authActions";
import GoogleButton from 'react-google-button';
import NavBar from "../../NavBar"


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

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "", 
      isLoading: false,
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
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
  };

  onSubmit = async values => {

    const email = values.email
    const password = values.password

    // create user object
    const newUser = {
      email,
      password
    };

// this.setState({ errors: {}, isLoading: true })


// attempt to register
try {
  console.log(this.props)
  await this.props.login(newUser)
  console.log(this.props)
  if (this.props.auth.user) {
    console.log("there was no error")
    this.props.history.push("/dashboard")
  }
  console.log(this.props)

} catch (error) {
  console.log(error)
}






// this.props.clearErrors();

}


  render() {
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
      //  <p class="loading">Lding...</p> <CircularProgress color="secondary" />
      return <Redirect to="/verifyemail" />
      
    }
    if (isAuthenticated && isVerified) {
      //  <p class="loading">Lding...</p> <CircularProgress color="secondary" />
      return <Redirect to="/dashboard" />
    }
  
    return (
      <>
      <NavBar />
      <form id="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
       <h3>Please log in.</h3> 
        </div>

        <br></br>
        <GoogleButton
  onClick={() => 

    {
      window.location.href ="http://localhost:5000/api/auth/google"
      
    }
    
  
  }
/>
        <br></br>
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
        {/* <p>{this.props.error.msg.msg}</p> */}
        </div>
        <div>
          {/* <Link to="/">
            Return
     </Link> */}
        </div>
      </form>

      
</>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth
})

Login = connect(
  mapStateToProps, { login, clearErrors }
)(Login)

export default Login = reduxForm({
  form: "LoginReduxForm",
  fields: ['email', 'password'],
  login,
  validate,
  clearErrors
})(Login)


