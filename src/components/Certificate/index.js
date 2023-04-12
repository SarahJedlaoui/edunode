import withRouter from '../../withRouter';
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
import React, { Component } from 'react'
import { reduxForm } from "redux-form";
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import "./style.css";
import axios from 'axios';

import { updateAccount, saveUsernameAlbedo, pkeyGoogleUser } from "../../actions/authActions";
//import { isConnected, getPublicKey } from "@stellar/freighter-api";


class Certificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      userName: "",
      pkey: "",
      pubkey: "",
      isLoading: false,
      errors: {},
      certificateCount: 0,
      certificateUrls: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  componentDidMount() {
    const  email = this.props.auth.user.email;

    axios.get(`https://edunode.herokuapp.com/api/certificates/count/${email}`)
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ certificateCount: res.data[0].count });
        }
      })
      .catch(err => {
        console.error(err);
      });

    axios.get(`https://edunode.herokuapp.com/api/certificates/${email}`)
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ certificateUrls: res.data });
        }
      })
      .catch(err => {
        console.error(err);
      });
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
   
           this.props.history.push("/dashboard")
          alert("Your public key has been updated and will take effect of your next login")
        }
  
  
      } catch (error) {
        console.log(error)
      }

    }
  
  render() {
  
   console.log(this.props.auth.user)

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

    const { certificateCount, certificateUrls } = this.state;
    // Call the API to get the certificate count and URLs
    
    if(this.props.auth.user) {
      return (
        <>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={5} sm={3.5} md={2} item={1} >
                  <Item><Sidebar /></Item>
                </Grid>

                <Grid xs={7} sm={8.5} md={10} item={1}>
                  <Item><Topbar /></Item>
                  <div>
                    <p><h3>Welcome to your Certifications</h3></p>
                    <br></br>

                    {certificateCount > 0 && (
                      <p>You currently have {certificateCount} certifications:</p>
                    )}
                    {certificateCount === 0 && (
                      <p>You currently have 00000 certifications.</p>
                    )}
                    {certificateUrls.length > 0 && (
                      <>
                        <p>Here are your certificates:</p>
                        <ul>
                          {certificateUrls.map(url => (
                            <li key={url}> <a href={url} target="_blank" rel="noopener noreferrer"><img src={url} alt="Certificate" /></a></li>
                          ))}
                        </ul>
                      </>
                    )}
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
    return (<>Please <a href="https://edunode.org/login">login</a> to see this content</>)
  }
  console.log(this.props.auth)
  
  //this.props.history.push("/")
}

}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Certificate = connect(
  mapStateToProps, { updateAccount, saveUsernameAlbedo, pkeyGoogleUser, verifyCode, clearErrors }
)(Certificate);

export default Certificate = reduxForm({
  form: "ReduxForm",
  fields: ["name", "pkey"],
  clearErrors,
//   generateCertificate,

})(withRouter(Certificate));
