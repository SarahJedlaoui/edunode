import React from "react";
import "./sidebar.css";
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
import { Link } from "react-router-dom";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Logout from "../auth/Logout";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Sidebar(Email) {
  const [NotificationCount, setNotificationCount] = useState(0);
  
  const handleAlert = (message) => {
    alert(message);
  };


  async function Count(){
    const email = Email.props;
    if (!email) {
      console.log("Email not found.");
      return;
    }

    //console.log(props.auth);
    console.log('email in side bar',email);
   
      const response = await axios.get(`https://edunode.herokuapp.com/api/certificates/notification/count/${email}`);
      if (response.data.length > 0) {
        setNotificationCount(response.data[0].count);
        console.log('sidebar',response.data)
      }
    } 
  

  useEffect(() => {
    console.log('boooooooo');
    Count();
  });
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList"></ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/search" className="link">
              <li className="sidebarListItem">
                <SearchIcon className="sidebarIcon" />
                Search
              </li>
            </Link>
            <Link to="/account" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Account
              </li>
            </Link>
            <Link to="/courses" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Courses
              </li>
            </Link>
            <Link to="/membership" className="link">
              <li className="sidebarListItem">
                <CardMembershipIcon className="sidebarIcon" />
                Membership
              </li>
            </Link>
            <Link to="/feed" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feed
              </li>
            </Link>
            <Link to="/certificate" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Certificates
              </li>
            </Link>
            <li className="sidebarListItem">
              <PublishIcon className="sidebarIcon" />
              <Link to="/post">New Post</Link>
            </li>
            <li className="sidebarListItem">
              <PublishIcon className="sidebarIcon" />
              <Link to="/course">Add Course</Link>
            </li>
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              <button onClick={() => handleAlert("Coming soon")}>Mail</button>
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              <button onClick={() => handleAlert("Coming soon")}>
                Messages
              </button>
            </li>
            <li className="sidebarListItem">
              <div className="counter">{NotificationCount}</div>
              <NotificationsNoneIcon className="sidebarIcon" />
              
               <Link to='/notification'> Notifications</Link>
              
            </li>
            <li className="sidebarListItem">
              <SmartToyIcon className="sidebarIcon" />
              <Link to="/chat">Chat</Link>
            </li>
            <li className="sidebarListItem">
              <SmartToyIcon className="sidebarIcon" />
              <Link to="/historyChat">Chat History</Link>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              <button
                onClick={() => {
                  window.location.href =
                    "mailto:hi@ogtechnologies.co?subject=Reports";
                }}
              >
                Reports
              </button>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList"></ul>
          <ul className="sidebarList">
            <Logout />
          </ul>
        </div>
      </div>
    </div>
  );
}
