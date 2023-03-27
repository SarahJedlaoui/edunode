import React, { Component } from 'react'
import {
  Form,
  Input,
  Alert
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import Logout from '../auth/Logout';
import "./style.css"

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
   password: ""
  }

  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
}
static propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
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


onChange = e => {
  this.setState({ [e.target.name]: e.target.value });
};

onSubmit = e => {
e.preventDefault();

const {email, password} = this.state;

const user = {
  email,
  password
}
/// attempt to login

this.props.login(user)

// window.location.href = "/dashboard"
// .then(
 const pushIt = () => {
this.props.history.push("/dashboard")




}
 pushIt()

}





    render() {
      const { pristine, submitting } = this.props


      return (
        <div>
         
<Form id="form" onSubmit={this.onSubmit}>
{this.props.msg ? <Alert color="danger">{this.props.msg}</Alert> : null}

        <Input
            type="email"
            name="email"
            id="email"
            placeholder="add Email"
            className="mb-3"
            onChange={this.onChange}
        />
    
        <Input
            type="password"
            name="password"
            id="password"
            placeholder="add Password"
            className="mb-3"
            onChange={this.onChange}
        />
        <Button 
        variant="contained"
        id="button"
        type="submit"
        disabled={pristine || submitting}>
            Login
      
        </Button>
    <div>
      <Link to="/">
     Return
     </Link>
     </div>
   
</Form>
                  
        </div>
    );
    }
 
  }
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  error: state.error
});


export default withRouter(connect(mapStateToProps,
  { login, clearErrors })(Login))

// Login = connect(
//     mapStateToProps, { login, clearErrors }
//   )(Login)


// export default Login = reduxForm({
//     form: "LoginReduxForm",
//     fields: ['email', 'password'],
//     validate,
//     clearErrors
//   })(Login)
  