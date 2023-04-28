import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { googleLogin } from "../../actions/authActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { useNavigate } from 'react-router-dom';

class GoogleLog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };

    this.handleCallBackResponse = this.handleCallBackResponse.bind(this);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  }


  async handleCallBackResponse(response) {
    console.log('encoded JWT ID Token :' + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    this.setState({ user: userObject });
  }

  componentDidMount() {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '249576166536-ctede4ekn8eipj22eucggedpbpirg6dc.apps.googleusercontent.com',
      callback: this.handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('googlelogin pre');
    const { user } = this.state;
    const email = user.email;
    const name = user.name;

    async function loginWithGoogle() {
      try {
        await this.props.googleLogin({ email, name });
        console.log('googlelogin executed');
        if (user) {
          this.props.navigate('/dashboard');
        }
      } catch (error) {
        console.log(error);
        console.log('googlelogin failed');
      }
    }

    if (user && typeof google !== 'undefined') {
      loginWithGoogle();
    }
  }

  render() {
    return (
      <div>
        <div id='signInDiv'></div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    auth: state.auth
  })
  
  GoogleLog = connect(
    mapStateToProps, { googleLogin }
  )(GoogleLog)
  
  export default GoogleLog = reduxForm({
    form: "GoogleLoginReduxForm",
    fields: ['email', 'name'],
   
    googleLogin,
    
  })(GoogleLog)
