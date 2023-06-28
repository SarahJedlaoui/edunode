import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from '@mui/material';
import Logout from '../auth/Logout';
import favicon from "./favicon.png"
import "./style.css"
import { NavDropdown } from 'react-bootstrap';



class NavBar1 extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  static defaultProps = {
    isAuthenticated: false
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <a href="/" className="brand-name">
              EduNode
            </a>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* Add an empty Nav.Link to push the NavLinks to the right */}
              <Nav.Link />
            </Nav>

            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/feed">Feed</Nav.Link>
              <Nav.Link href="/certificate">Certificates</Nav.Link>
              <Nav.Link href="/post">New Post</Nav.Link>
              <Nav.Link href="/chat">Chat</Nav.Link>
              <Nav.Link href="/historyChat">Chat History</Nav.Link>
              <Nav.Link href="/badges">Badges</Nav.Link>
              <Nav.Link href="/challenges">Challenges</Nav.Link>
            </Nav>

            <Nav>
              {isAuthenticated ? (
                <NavDropdown title="Account" id="account-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/account">Profile Setting</NavDropdown.Item>
                  <NavDropdown.Item href="/messages">Messages</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {
                    window.location.href =
                      "mailto:hi@ogtechnologies.co?subject=Reports";
                  }}>
                    Report</NavDropdown.Item>
                  <NavDropdown.Item href="/notification">Notifications</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Logout />
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <div>
                  <Button variant="outlined" href="/login">
                    Log In
                  </Button>
                  <Button variant="contained" href="/register">
                    Sign Up
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(NavBar1);