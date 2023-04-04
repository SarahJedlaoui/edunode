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
import { Field, reduxForm } from "redux-form";
import { BrowserRouter } from "react-router-dom";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import "./style.css"
import { updateAccount, saveUsernameAlbedo, pkeyGoogleUser } from "../../actions/authActions";
import { isConnected, getPublicKey } from "@stellar/freighter-api";


class Certificate extends Component {
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
    if(this.props.auth.user) {
      return (
      <>
      <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2} item={1} >
          <Item><Sidebar /></Item>
        </Grid>
     
        <Grid xs={7} sm={8.5} md={10}item={1}>
          <Item><Topbar /></Item>
          <div>
           <p><h3>Welcome to your Certifications</h3></p> 
        <br></br>

        
      <p>You currently have 0 certifications.</p>
        
</div>
          
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
        </div>
      </>
      )

    }
//     if (this.props.auth.user.granted) {

//       console.log(this.props.auth.user)
//       let publickey = this.props.auth.user.pubkey;
// let result = publickey.substring(50);
    
//     return (
//       <div>
//         <div>
//             <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid xs={5} sm={3.5} md={2}>
//           <Item><Sidebar /></Item>
//         </Grid>
     
//         <Grid xs={7} sm={8.5} md={10}>
//           <Item><Topbar /></Item>
//           <div>
         
//         <p><h3>Welcome to your Certifications</h3></p> 
//         <br></br>

        
//         <p>You currently have 1 certification for the following course:</p>
        
        
//         <p><b>Stellar Basics Course</b></p>
        
//         <br></br>
// <p>Issuing Account <b>...{result}</b></p>
//         <a href={'https://stellar.expert/explorer/testnet/account/' + this.props.auth.user.pubkey}><p>Check on Stellar Expert</p></a>
//         <p>For CID <b>...7fm7m</b></p>
//         <a href="https://bafybeib4n3x3f5wfe7lwyv4pry3pdnps6va7i6l4jmqfbymhd2dpg7fm7m.ipfs.dweb.link/leodiploma.png"><p>Check on IPFS</p></a>

        
// </div>
          
//         </Grid>
        
//       </Grid>
//       <Footer />
//     </Box>
//         </div>
        
//       </div>
//     )
//   }

//     if (this.props.auth.isAuthenticated) {

//       console.log(this.props.auth.user)
//       let publickey = this.props.auth.user.pkey;
// let result = publickey.substring(50);
    
//     return (
//       <div>
//         <div>
//             <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid xs={5} sm={3.5} md={2}>
//           <Item><Sidebar /></Item>
//         </Grid>
     
//         <Grid xs={7} sm={8.5} md={10}>
//           <Item><Topbar /></Item>
//           <div>
         
//           <p><h3>Welcome to your Certifications</h3></p> 
//         <br></br>

        
//         <p>You currently have 1 certification for the following course:</p>
        
        
//         <p><b>Stellar Basics Course</b></p>
        
//         <br></br>
// <p>For Stellar Account <b>...{result}</b></p>
//         <a href={'https://stellar.expert/explorer/testnet/account/' + this.props.auth.user.pkey}><p>Check on Stellar Expert</p></a>
//         <p>For Stellar Issuing Account <b>...{result}</b></p>
// <a href={'https://stellar.expert/explorer/testnet/account/' + this.props.auth.user.pkey}><p>Check on Stellar Expert</p></a>
//         <p>For CID <b>...7fm7m</b></p>
//         <a href="https://bafybeib4n3x3f5wfe7lwyv4pry3pdnps6va7i6l4jmqfbymhd2dpg7fm7m.ipfs.dweb.link/leodiploma.png"><p>Check on IPFS</p></a>

        
// </div>
          
//         </Grid>
        
//       </Grid>
//       <Footer />
//     </Box>
//         </div>
        
//       </div>
//     )
//   }

 
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
