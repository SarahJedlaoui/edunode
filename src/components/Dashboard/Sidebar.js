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
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Logout from "../auth/Logout";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
           
           
      <Link to={`/account/`} className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Account
              </li>
            </Link>
           
           
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Quick Menu</h3> */}
          <ul className="sidebarList">
            
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
          
        
            
          </ul>
        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
          <li className="sidebarListItem">
              <PublishIcon className="sidebarIcon" />
              <Link to="/post">New Post</Link>
            </li>
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              <button onClick={function(){
    alert("Coming soon")
}}>Mail</button>

            </li>
            
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              <button onClick={function(){
    alert("Coming soon")
}}>Messages</button>
            </li>

           

            
          </ul>

          <ul className="sidebarList">

          <li className="sidebarListItem">
            <div className="counter">0</div>
              <NotificationsNoneIcon className="sidebarIcon" /> 
              <button onClick={function(){
    alert("No new notifications")
}}>Notifications</button>
            </li>

          </ul>

        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
          
           <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
             
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              <button onClick={
                 () => {
                  window.location.href = 'mailto:hi@ogtechnologies.co?subject=Reports';
                  
                }} >Reports</button>
            </li>
            <li className="sidebarListItem">
         
             <Logout />
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  );
}