import React, { Component } from 'react'
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import { resend, verifyCode } from "../../actions/authActions";
import { Field, reduxForm } from "redux-form";
import TextField from "@mui/material/TextField"
import Alert from "@material-ui/lab/Alert";
import AlertTitle from '@material-ui/lab/AlertTitle';
import CircularProgress from "@mui/material/CircularProgress"
import withRouter from '../../withRouter'
//import {  BrowserRouter } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import SideBar from "../SideBar";
import NavBar from "../NavBar"
import Footer from "../Footer"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import "./style.css"

const validate = values => {
  const errors = {};
  const requiredFields = ["confirmationCode"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.confirmationCode && values.confirmationCode.length < 4) {
    errors.confirmationCode = "Confirmation Code must be at least 5 characters";
  }
  return errors;
};

class MyProfile extends Component {

  render() {
    const { isLoading, isAuthenticated, isVerified, hasUsername, googleProfilePic,history } = this.props.auth
    if (isAuthenticated && isVerified && hasUsername && this.props.auth.user.googleProfilePic) {


      return (
        <>
          <NavBar />
         
          <div className="div1">
            <ProSidebar>
              <Menu iconShape="square">
                <MenuItem icon={<PersonIcon />}>
                  My Profile
          <Link to="/dashboard/myprofile" />
                </MenuItem>
                <SubMenu title="Components">
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
          </div>
          <div className="div2">
            
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" style={{
              width: 96,
              height: 96
            }} src={this.props.auth.user.googleProfilePic} />
            <Card.Body>
              <Card.Title><b>{this.props.auth.userName}{this.props.auth.user.userName}</b></Card.Title>
              <Card.Text>
                <span></span>
              </Card.Text>

            </Card.Body>
          </Card>
          </div>
          
          <Alert className="text-center" severity="info">
            Welcome to EduNode! Please have in mind that we are currently in beta. Soon we will add more funtionality to the Dashboard. Your feedback will be highly appreciated.
                  </Alert>
        </>
      )

    }

    if (isAuthenticated && isVerified && hasUsername && !this.props.auth.user.googleProfilePic) {

      return (
        <>
          <NavBar />
          <div className="div1">
          <ProSidebar>
                  <Menu iconShape="square">
                    <MenuItem icon={<PersonIcon />}>
                      My Profile
          <Link to="/dashboard/myprofile" />
                    </MenuItem>
                    <SubMenu title="Components">
                      <MenuItem>Component 1</MenuItem>
                      <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                  </Menu>
                </ProSidebar>
                </div>
                <div className="div2">
                <Card style={{ width: '15rem' }}>

                  <Card.Body>
                    <Card.Title><b>{this.props.auth.userName}{this.props.auth.user.userName}</b></Card.Title>
                    <Card.Text>
                      <span></span>
                    </Card.Text>

                  </Card.Body>
                </Card>
                </div>
          <Container>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                
              </Col>
              <Col xs={12} sm={4} className="sidebar-section">
                
              </Col>
            </Row>
          </Container>
          
          <Alert className="text-center" severity="info">
            Welcome to EduNode! Please have in mind that we are currently in beta. Soon we will add more funtionality to the Dashboard. Your feedback will be highly appreciated.
                    </Alert>
        </>
      )
    }
    history.push('/');
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

MyProfile = connect(
  mapStateToProps, { verifyCode, clearErrors }
)(MyProfile);

export default MyProfile = reduxForm({
  form: "",
  fields: [""],
  validate,
  clearErrors,
  verifyCode
})(withRouter(MyProfile));
