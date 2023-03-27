import React, { Component } from 'react'
import { connect } from "react-redux";
import withRouter from '../../../withRouter';
//import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import "./styles.css"


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class UserProfilePage extends Component {

  // render the form fields for the user's profile information
  renderProfileFields() {
    return (
      <>
        <Field name="name" component="input" type="text" placeholder="Name" />
        <Field name="email" component="input" type="email" placeholder="Email" />
        <Field name="age" component="input" type="number" placeholder="Age" />
        <Field name="location" component="input" type="text" placeholder="Location" />
        <Field name="bio" component="textarea" placeholder="Bio" />
      </>
    )
  }

  // handle form submission
  onSubmit(formValues) {
    // send form values to the server to update the user's profile information
  }

  render() {
    const { isAuthenticated,history } = this.props.auth
    if (!isAuthenticated) {
      history.push('/');
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

UserProfilePage = connect(
  mapStateToProps,
)(UserProfilePage);

export default UserProfilePage = reduxForm({
  form: "userProfile"
})(withRouter(UserProfilePage));