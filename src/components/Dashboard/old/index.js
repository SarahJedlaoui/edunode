import  withRouter  from '../../../withRouter';
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
//import { Redirect, BrowserRouter } from "react-router-dom";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom";
class Dashboard extends Component {
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

  }
    render() {
      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const { pristine, submitting} = this.props

      if (this.props.auth.isAuthenticated) {

        return (
            <div>
                <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar /></Item>
        </Grid>
     
        <Grid xs={7} sm={8.5} md={10} item={10}>
          <Item><Topbar /></Item>
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
            <p>{this.props.error.msg.msg}</p>
          </div>
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
        </div>
            </div>
        )
    }else{
      return (
        <Navigate to="/" />
      );
    }
    
  }
   
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Dashboard = connect(
  mapStateToProps, { verifyCode, clearErrors }
)(Dashboard);

export default Dashboard = reduxForm({
  form: "",
  fields: [""],
  clearErrors,
  verifyCode
})(withRouter(Dashboard));