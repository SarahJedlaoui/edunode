import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../Header';
import MainFeaturedPost from '../MainFeaturedPost';
import FeaturedPost from '../FeaturedPost';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import mb from "./mainblog.png"


export default class Article extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isAuthenticated: null,
    };


    
  }
  render() {

    return (
      <div>
       {/* <MainFeaturedPost /> */}
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Container>
          <h2>Title</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
            
              <p>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky. Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.</p>
       
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}