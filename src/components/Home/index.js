import React, { Component } from "react";
import "./style.css";
import Hometwo from "./Hometwo";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import NavBar from "../NavBar"
import Helmet from "react-helmet"
import Footer from "../Footer"
import UploadCertificate from './uploadCertificate.js';
import MultipleSelect from "./Select" 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };

  }


  
  render() {
   
    const {  isAuthenticated, isVerified } = this.props.auth
    if (isAuthenticated && !isVerified) {

      return <Navigate to="/VerifyEmail" />
    }
    if (isVerified) {

      return <Navigate to="/dashboard" />
    }

  return (
    <>
      <Helmet>
        <title>EduNode</title>
        <meta name="Edunode" content="We help you become a Blockchain Developer" />
        <meta property="og:title" content="EduNode" />
        <meta property="og:image" content="path/to/image.jpg" />
      </Helmet>
      <NavBar />
      {/* <MultipleSelect /> */}

      <Hometwo/>
      
      <Footer/>

    </>
  );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Home)

