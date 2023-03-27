import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import { 
  Button,
  Form,
  FormGroup,
  FormControl,
  FormCheck,
  Label,
  Input
} from 'react-bootstrap';
import "./style.css"


toast.configure()

class RegisterForm extends Component {
   // let loggedIn = false
  // const token = localStorage.getItem("token")
  
 // this.onChange = this.onChange.bind(this)
 // this.onSubmit = this.onSubmit.bind(this)
 state = {
  name: '',
  email: '',
  password: '',
  msg: null,
  isLoading: false
}

 static propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  isVerified: PropTypes.bool,
}

componentDidUpdate(prevProps) {
  const { error } = this.props;
  if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
          this.setState({ msg: error.msg.msg });
      } else {
          this.setState({ msg: null });
      }
  }
}







 onChange = e => {
   this.setState({[e.target.name]: e.target.value})
 }

 onSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true})
    const { name, email, password } = this.state


  // if (email || password == "") {
  //   alert("all fields must be filled out");
  //   return false;
  // }
    

    fetch(`http://localhost:5000/api/confirm`, {
      method: 'post',
      headers: {
        accept: 'application/json', 
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email })
    }).then(res => res.json())
    .then(data => {
      this.setState({ sendingEmail: false})
      console.log(data)
     // this.form.reset()
    }) 

    
    
    register()

    
    


    }
    notify = () => {
      toast.info("email sent", {
        position: toast.POSITION.BOTTOM_CENTER,
        pauseOnHover: true
      })
    }
    

    render() {

      
      
        return (
          <>

<Form className="register-form" onSubmit={this.onSubmit}>
  Create an account
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username address</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={this.notify} variant="primary" type="submit">
    Submit
  </Button>
</Form>
          {/* <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
              <Label htmlFor="name">Name</Label>
              <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="add name"
                  className="mb-3"
                  onChange={this.onChange}
              />
              <Label htmlFor="email">E-mail</Label>
              <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="add email"
                  className="mb-3"
                  onChange={this.onChange}
              />
              <Label htmlFor="password">password</Label>
              <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="add password"
                  className="mb-3"
                  onChange={this.onChange}
              />
              <Button onClick={this.notify} color="dark" style={{ marginTop: "2rem" }} block>
                  Register
          </Button>

      </Form> */}
      <Link to="/">
      Return
      </Link>
      </> 
            )
    }
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(RegisterForm);