import React, { Component } from "react";
import {
  BrowserRouter as Router,
  
  Route,
 
  Navigate,
  
} from "react-router-dom";
import { Provider } from "react-redux";
//import CookieConsent from 'react-cookie-consent';
import { Routes } from 'react-router-dom';
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { store } from "./store";

import Home from "./components/Home";



const withRouter = Component => props => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Component
      {...props}
      location={location}
      navigate={navigate}
      params={params}
    />
  );
};


class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router>
          <Routes>
             <Navigate from="*" to="/" />
             <Route exact path="/" element={Home} />
           
          </Routes>
        </Router>
        </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});


export default withRouter(connect(mapStateToProps)(App));
