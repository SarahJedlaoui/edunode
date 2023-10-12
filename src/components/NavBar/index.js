import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from '@mui/material';
import Logout from '../auth/Logout';
import favicon from "./favicon.png";

class NavBar extends Component {
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
            <img src={favicon} alt="app-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="/resources">Resources</Nav.Link>
              <Nav.Link href="/community">Community</Nav.Link>
             
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/glossary">Glossary</Nav.Link>
              <Nav.Link href="/node">Stellar Nodes</Nav.Link>
            </Nav>

            <Nav >
              {isAuthenticated ? (
                <div>
                  <Logout />
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'right' }}>
                  <Button variant="outlined" href="/login">
                    Log In
                  </Button>
                  <Button variant="contained" href="/register" style={{ marginLeft: '5px' }}>
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

export default connect(mapStateToProps, null)(NavBar);
