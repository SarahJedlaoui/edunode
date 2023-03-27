import React, { Component } from 'react';
import RegisterModal from "../../components/auth/RegisterModal";
import Spinner from '../../utils/spinner'
import { store } from "../../store";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import {
  Button
} from "reactstrap";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import { syncHistoryWithStore } from 'react-router-redux';
import CircularProgress from "@mui/material/CircularProgress"
import { browserHistory } from 'react-router';
import Dashboard from '../Dashboard';
import Register from '../Register';
import "./style.css"
import NavBar from "../NavBar"


export class Landing extends Component {

  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      email: "",
      password: "",
      msg: null
    }
  }

  Login = () => {
    this.props.history.push("/login")
  }
  RegisterLink = () => {
    this.props.history.push("/register")
  }


  render() {
  const history = syncHistoryWithStore(browserHistory, store)

    
  const { isLoading } = this.props.auth

  if (isLoading) {

    return <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}> <CircularProgress 
    color="secondary"
     />
        </div>

  }


return (
  <>
      <NavBar />
      </>
)}
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth
});


export default withRouter(connect(mapStateToProps,
  { login, clearErrors })(Landing))