import React, { Component } from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logout from '../auth/Logout';
import { Link } from "react-router-dom";
import {
  LineStyle,
  Storefront,
  PermIdentity,
  DynamicFeed,
  WorkOutline,
  MailOutline,
  ChatBubbleOutline,
  Timeline,
  Report,
} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import PublishIcon from "@mui/icons-material/Publish";
import SmartToyIcon from '@mui/icons-material/SmartToy';

class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
           <span className="logo">EduNode</span> 
          </div> 
          <div className="topRight">
            <Navbar bg="white" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  {/* <NavDropdown title={<Settings />} id="basic-nav-dropdown"> */}
                    <NavDropdown.Item>
                      <Link to="/" className="link">
                        <LineStyle className="sidebarIcon" />
                        Home
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/search" className="link">
                        <SearchIcon className="sidebarIcon" />
                        Search
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/account" className="link">
                        <PermIdentity className="sidebarIcon" />
                        Account
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/courses" className="link">
                        <Storefront className="sidebarIcon" />
                        Courses
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/feed" className="link">
                        <DynamicFeed className="sidebarIcon" />
                        Feed
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/certificate" className="link">
                        <WorkOutline className="sidebarIcon" />
                        Certificates
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/post" className="link">
                        <PublishIcon className="sidebarIcon" />
                        New Post
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/course" className="link">
                        <PublishIcon className="sidebarIcon" />
                        Add Course
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/chat" className="link">
                        <SmartToyIcon className="sidebarIcon" />
                        Chat
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/historyChat" className="link">
                        <SmartToyIcon className="sidebarIcon" />
                        Chat History
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <button
                        onClick={() => {
                          window.location.href = "mailto:hi@edunode.org?subject=Reports";
                        }}
                      >
                        <Report className="sidebarIcon" />
                        Reports
                      </button>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Logout />
                    </NavDropdown.Item>
            


                      <NavDropdown.Divider />
                    {/* </NavDropdown> */}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>



            </div>

          </div>
        </div>
 
    );
  }
}

export default Topbar;
