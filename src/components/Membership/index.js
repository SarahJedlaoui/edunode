import React, { Component } from 'react'
import  withRouter  from '../../withRouter';
import { clearErrors } from "../../actions/errorActions";
import { resend, verifyCode } from "../../actions/authActions";
import Box from '@mui/material/Box';
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";  
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import "./style.css"
import { updateAccount, saveUsernameAlbedo, pkeyGoogleUser } from "../../actions/authActions";
import Pricing from "./Pricing"
import PayPal from "./paypal"
import { Navigate } from "react-router-dom";

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      pkey: "",
      pubkey: "",
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
  
      const email = this.props.auth.user.email
      const userName = values.userName
      const pkey = values.pkey
      
  
      // create user object
      const updateAccount = {
        email,
        userName,
        pkey
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

    onSubmitAlbedo = async values => {
  
      
      const userName = values.userName
      const pubkey = this.props.auth.user.pubkey
  
      // create user object
      const updateAccount = {
        userName,
        pubkey
        
      };
 

      try {

        await this.props.saveUsernameAlbedo(updateAccount)
    

        if (this.props.auth.user.pubkey) {
   
          // this.props.history.push("/dashboard")
          alert("Username is updated and will take effect of your next login")
        }
  
  
      } catch (error) {
        console.log(error)
      }

    }

    onSubmitGoogle = async values => {
  
      
      const email = this.props.auth.user.email
      const pkey = values.pkey
  
      // create user object
      const updateAccount = {
       email,
        pkey
        
      };
 

      try {

        await this.props.pkeyGoogleUser(updateAccount)


        if (this.props.auth.user.googleProfilePic) {
   
          // this.props.history.push("/dashboard")
          alert("Your public key has been updated and will take effect of your next login")
        }
  
  
      } catch (error) {
        console.log(error)
      }

    }
  
  render() {

   

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    const { pristine, submitting } = this.props

    const {
      isLoading,
      isAuthenticated,
      isVerified,
      hasUsername,
      googleProfilePic,
      isGranted,
      isFirstCourseSelected,
    courseOneDone,
    } = this.props.auth;
    const email=this.props.auth.user.email ? this.props.auth.user.email : '';
    if (isAuthenticated) {
     

      return ( 
  
        <>
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar props={email} /></Item>
        </Grid>
     
        <Grid xs={7} sm={8.5} md={10}>
          <Item><Topbar /></Item>
          <div>
         <Pricing />
      {/* <PayPal /> */}
</div>
          
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
        </div>
        </>
  
        )
      
    }


  if (!this.props.auth.isAuthenticated) {
    return (
      <Navigate to="/" />
    );
  }
  
  return (
    <Navigate to="/" />
  );
}

}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Membership = connect(
  mapStateToProps, { updateAccount, saveUsernameAlbedo, pkeyGoogleUser, verifyCode, clearErrors }
)(Membership);

export default Membership = reduxForm({
  form: "ReduxForm",
  fields: ["name", "pkey"],
  clearErrors,
  updateAccount,
  saveUsernameAlbedo,
  pkeyGoogleUser
  
})((Membership));
