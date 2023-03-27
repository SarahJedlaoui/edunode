import React, { Component } from 'react'
import { withRouter } from 'react-router';
//import Avatar from '@mui/material/Avatar';
//import CssBaseline from '@mui/material/CssBaseline';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { clearErrors } from "../../../actions/errorActions";
import { resend, verifyCode } from "../../../actions/authActions";
import Box from '@mui/material/Box';
import Sidebar from "../../Dashboard/Sidebar";
import Topbar from "../../Dashboard/Topbar";
import {Grid} from '@mui/material';
import {Paper} from '@mui/material';
import Footer from '../../Footer';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { Redirect, useParams } from "react-router-dom";
import {Button} from "@mui/material"
import {TextField} from '@mui/material'
import PropTypes from 'prop-types'
import "./styles.css"
import MyData from "./Data"
import { updateAccount, saveUsernameAlbedo, pkeyGoogleUser } from "../../../actions/authActions";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

class Account extends Component {
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




  
  render() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    const { pristine, submitting } = this.props

    if (this.props.auth.isAuthenticated) {
      console.log(this.props)
      // return (
      //   <ThemeProvider theme={theme}>
      //     <Container component="main" maxWidth="xs">
      //       <CssBaseline />
      //       <Box
      //         sx={{
      //           marginTop: 8,
      //           display: 'flex',
      //           flexDirection: 'column',
      //           alignItems: 'center',
      //         }}
      //       >
      //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      //           <LockOutlinedIcon />
      //         </Avatar>
      //         <Typography component="h1" variant="h5">
      //           Sign up
      //         </Typography>
      //         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      //           <Grid container spacing={2}>
      //             <Grid item xs={12} sm={6}>
      //               <TextField
      //                 autoComplete="given-name"
      //                 name="firstName"
      //                 required
      //                 fullWidth
      //                 id="firstName"
      //                 label="First Name"
      //                 autoFocus
      //               />
      //             </Grid>
      //             <Grid item xs={12} sm={6}>
      //               <TextField
      //                 required
      //                 fullWidth
      //                 id="lastName"
      //                 label="Last Name"
      //                 name="lastName"
      //                 autoComplete="family-name"
      //               />
      //             </Grid>
      //             <Grid item xs={12}>
      //               <TextField
      //                 required
      //                 fullWidth
      //                 id="email"
      //                 label="Email Address"
      //                 name="email"
      //                 autoComplete="email"
      //               />
      //             </Grid>
      //             <Grid item xs={12}>
      //               <TextField
      //                 required
      //                 fullWidth
      //                 name="password"
      //                 label="Password"
      //                 type="password"
      //                 id="password"
      //                 autoComplete="new-password"
      //               />
      //             </Grid>
      //             <Grid item xs={12}>
      //               <FormControlLabel
      //                 control={<Checkbox value="allowExtraEmails" color="primary" />}
      //                 label="I want to receive inspiration, marketing promotions and updates via email."
      //               />
      //             </Grid>
      //           </Grid>
      //           <Button
      //             type="submit"
      //             fullWidth
      //             variant="contained"
      //             sx={{ mt: 3, mb: 2 }}
      //           >
      //             Sign Up
      //           </Button>
      //           <Grid container justifyContent="flex-end">
      //             <Grid item>
      //               <Link href="#" variant="body2">
      //                 Already have an account? Sign in
      //               </Link>
      //             </Grid>
      //           </Grid>
      //         </Box>
      //       </Box>
      //       <Copyright sx={{ mt: 5 }} />
      //     </Container>
      //   </ThemeProvider>
      // );
    return (
      <div>
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar /></Item>
        </Grid>
     
        <Grid xs={7} sm={8.5} md={10}>
          <Item><Topbar /></Item>
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <div>
         
          <Field
          disabled
          id="filled-disabled"
          label={this.props.auth.user.email}
          defaultValue="Hello World"
          variant="filled"
          component={this.renderTextField}
          value={this.props.auth.user.pubkey || this.props.auth.user.pkey}
        />
         
          </div>
          <br></br>
          <div>

          <Field
              variant="outlined"
              name="account"
              type="text"
              label="Public Key"
              component={this.renderTextField}
              id="pubkey"
              value={this.state.pubkey}
            />
          
          </div>
          <br></br>
          
                     <div>
                     <Button
                     variant="outlined"
                     >Save</Button>
                     </div> 
                     <MyData />
          {/* <div>
         

          <form  id="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div  className="centered">
            
          <Field
              name="userName"
              type="text"
              label="Username"
              component={this.renderTextField}
              id="userName"
              value={this.state.userName}
            />
          </div>
          <div  className="centered">
          <Field
              name="pkey"
              type="text"
              label="Public Key"
              component={this.renderTextField}
              id="pkey"
              value={this.state.pkey}
            />
         </div>
         <div className="centered">
            <Button
        
              variant="contained"
              id="button"
              type="submit"
              disabled={pristine || submitting}>
              Update
        </Button>
        </div>
        </form>
</div> */}
          
        </Grid>
        
      </Grid>
     {/* <DataTable /> */}
      <Footer />
    </Box>
        </div>
        
      </div>
    )
  }
  if (!this.props.auth.isAuthenticated) {
    return <Redirect to="/" />
  }
  
  
}

}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Account = connect(
  mapStateToProps, { updateAccount, saveUsernameAlbedo, pkeyGoogleUser, verifyCode, clearErrors }
)(Account);

export default Account = reduxForm({
  form: "ReduxForm",
  fields: ["name", "pkey"],
  clearErrors,
  updateAccount,
  saveUsernameAlbedo,
  pkeyGoogleUser
  
})(withRouter(Account));

