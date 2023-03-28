import React, { Component } from 'react'
import { connect } from "react-redux";
import withRouter from '../../withRouter';
//import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import Box from '@mui/material/Box';
import Grid from '@@mui/material/Grid';
import Paper from '@@mui/material/Paper';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import { TextField } from '@@mui/material';
import PropTypes from 'prop-types'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      location: "",
      bio: "",
      isLoading: false,
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

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

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
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

      console.log(values)
      console.log(this.props)
  
      const email = this.props.auth.user.email
      const name = values.name
      const age = values.age
      const bio = values.bio
      const location = values.location
    
      // create user object
      const updateAccount = {
        email,
        name,
        age,
        bio,
        location

      };

      try {

       await this.props.updateAccount(updateAccount)
       
        if (this.props.auth.user) {
   
          this.props.history.push("/dashboard")
        }
  
  
      } catch (error) {
        console.log(error)
      }

    }


  // render the form fields for the user's profile information
  renderProfileFields() {
    return (
      <>
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
<TextField name="name" type="text" placeholder="Name" fullWidth inputRef={input => this.nameInput = input} />
<TextField name="email" type="email" placeholder="Email" fullWidth inputRef={input => this.emailInput = input} />
<TextField name="age" type="number" placeholder="Age" fullWidth inputRef={input => this.ageInput = input} />
<TextField name="location" type="text" placeholder="Location" fullWidth inputRef={input => this.locationInput = input} />
<TextField name="bio" multiline rows={4} placeholder="Bio" fullWidth inputRef={input => this.bioInput = input} />
</div>

</>
    )
  }

  // handle form submission

  

  render() {
    const { isAuthenticated ,history} = this.props.auth
    if (!isAuthenticated) {
      return <div>Please log in to view this page.</div>;
    }

    return (
       <>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar /></Item>
        </Grid>
     
        <Grid xs={7} sm={8.5} md={10}>
          <Item><Topbar /></Item>
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {this.renderProfileFields()}
        <button type="submit">Submit</button>
      </form>
      </Grid>
        
        </Grid>
            <Footer />
            </Box>
            </>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

Account = connect(
  mapStateToProps,
)(Account);

export default Account = reduxForm({
  form: "ReduxForm",
  fields: ["name", "email", "age", "location", "bio"],
})(withRouter(Account));