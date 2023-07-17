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
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class NavBar1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
      user: [],
      NotificationCount:0,
      messageCount: 0,
    };

  }


  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  static defaultProps = {
    isAuthenticated: false
  }

  componentDidMount() {
    const { email } = this.state;
    fetch(`https://edunode.herokuapp.com/api/users/user?email=${email}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data });
      })
      .catch(error => {
        console.error(error);
      });

    }

    componentDidMount() {
      const { email } = this.state;
      fetch('https://edunode.herokuapp.com/api/messages/countAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // You can pass any required data in the request body if needed
        body: JSON.stringify({ sender: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the received message count
          this.setState({ messageCount: data.count });
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error state here
        });
    }



    /** async  Count(){
      const { email } = this.state;
      //console.log(props.auth);
      console.log('email in side bar',email);
     
        const response = await axios.get(`https://edunode.herokuapp.com/api/certificates/notification/count/${email}`);
        if (response.data.length > 0) {
          (response.data[0].count);
          console.log('sidebar',response.data)
        }
      } */
  render() {
    const { isAuthenticated } = this.props.auth;
    const { user } = this.state;
    const { messageCount } = this.state;
  if (user.role !== 'Teacher' && user.role !== 'University') {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <a href="/" className="brand-name">
            EduNode
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/feed">Feed</Nav.Link>
            <Nav.Link href="/certificate">Certificates</Nav.Link>
            <Nav.Link href="/chat">Chat</Nav.Link>
              <Nav.Link href="/historyChat">Chat History</Nav.Link>
              <Nav.Link href="/badges">Badges</Nav.Link>
            <Nav.Link href="/challenges">Challenges</Nav.Link>
            <Nav.Link href="/challengeGame"> Game Challenges</Nav.Link>
          
          </Nav>
          
          <Nav>
            {isAuthenticated ? (
              <NavDropdown title="Account" id="account-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/account">Profile Setting</NavDropdown.Item>
                <NavDropdown.Item href="/messages">Messages
                {messageCount > 0 && (
                <span
                  style={{
                    marginLeft: '5px',
                    padding: '2px 5px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    color: 'white',
                  }}
                >
                  {messageCount}
                </span>
              )}
                
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  window.location.href = "mailto:hi@ogtechnologies.co?subject=Reports";
                }}>
                  Report
                </NavDropdown.Item>
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
    );
  }


  if (user.role === 'Teacher') {
    return (
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
              <Nav.Link />
            </Nav>
           
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/feed">Feed</Nav.Link>
              <Nav.Link href="/certificate">Certificates</Nav.Link>
              <Nav.Link href="/post">New Post</Nav.Link>
              <Nav.Link href="/course">Add Course</Nav.Link>
              <Nav.Link href="/chat">Chat</Nav.Link>
              <Nav.Link href="/historyChat">Chat History</Nav.Link>
              <Nav.Link href="/badges">Badges</Nav.Link>
              <Nav.Link href="/challenges">Challenges</Nav.Link>
              <Nav.Link href="/validCertificate">Add Certificate</Nav.Link>
              <Nav.Link href="/challengeGame"> Game Challenges</Nav.Link>
            </Nav>
            <NavDropdown title="Game Challenges" id="account-dropdown">
             <NavDropdown.Item href="/challengeGame">Game Challenges</NavDropdown.Item>
             <NavDropdown.Item href="/challengeGame/leaderBoard">Challenge LeaderBoard</NavDropdown.Item>
             <NavDropdown.Item href="/addGame">Add Game Challenge</NavDropdown.Item>
           </NavDropdown>
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
        </Navbar>   );
  }
  if (user.role === 'University') {
    return (
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
              <Nav.Link href="/course">Add Course</Nav.Link>
              <Nav.Link href="/chat">Chat</Nav.Link>
              <Nav.Link href="/historyChat">Chat History</Nav.Link>
              <Nav.Link href="/badges">Badges</Nav.Link>
              <Nav.Link href="/challenges">Challenges</Nav.Link>
              <Nav.Link href="/validCertificate">Add Certificate</Nav.Link>
              
            </Nav>
            <Nav>
            <NavDropdown title="Game Challenges" id="account-dropdown">
             <NavDropdown.Item href="/challengeGame">Game Challenges</NavDropdown.Item>
             <NavDropdown.Item href="/challengeGame/leaderBoard">Challenge LeaderBoard</NavDropdown.Item>
             <NavDropdown.Item href="/addGame">Add Game Challenge</NavDropdown.Item>
           </NavDropdown>
           </Nav>
            <Nav>
              {isAuthenticated ? (
                <NavDropdown title="Account" id="account-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/account">Profile Setting</NavDropdown.Item>
                  <NavDropdown.Item href="/AdminDashboard">University Dashboard</NavDropdown.Item>
                  <NavDropdown.Item href="/messages">Messagesss
                  
                  
                  
                  
                  </NavDropdown.Item>
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
        </Navbar>);
  }
   
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(NavBar1);