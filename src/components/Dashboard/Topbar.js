import React, {useState} from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import {Link} from "@mui/material"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logout from "../auth/Logout";
//import SubmitPost from "../SubmitPost/" 
import { Button, Modal } from "react-bootstrap";

export default function Topbar(props) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">EduNode</span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer " >
          <Navbar bg="white" expand="lg">

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
       
        

            <Nav className="mr-auto">
              <NavDropdown
                 title={<Settings />}
                id="basic-nav-dropdown"
              > 


<NavDropdown.Item>
                </NavDropdown.Item>
              
                <NavDropdown.Item>
                  <Logout />
                </NavDropdown.Item>
            
                 <NavDropdown.Divider /> 
              </NavDropdown> 
            </Nav>
          </Navbar.Collapse>
        </Navbar>



          
          </div>
 
        </div>
      </div>
    </div>
  );
}
