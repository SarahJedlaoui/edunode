import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import me from '../mepic.png';
import sc from '../Dockerr.png';
import Typography from '@material-ui/core/Typography';
import {
  FacebookShareCount,
  RedditShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  VKShareButton,
  FacebookIcon,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  TwitterIcon,
  LinkedinIcon,
  VKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,

} from 'react-share';
import { Helmet } from 'react-helmet';
import './style.css';

export default class Docker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/docker';
    const title = 'What is Docker and how you can use it?';
    const exampleImage = sc;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          
          <meta
            name="description"
            content="Docker is a popular containerization platform that allows developers to package, distribute, and run their applications in a portable and scalable way."
          />
        </Helmet>
        <NavBar />

        <Image src={sc} className="header-image" fluid />
        <Container>
        <Typography
                component="h1"
                variant="h4"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                What is Docker and how you can use it?
              </Typography>
      

          <Row>
          <b></b>
         <b></b>
         <b></b>
         <b></b>
         <p></p>
            <Col xs={12} sm={8} className="main-section">
            <p>  
              
              
              <p>Docker is a popular containerization platform that allows developers to package, distribute, and run their applications in a portable and scalable way. Docker containers are lightweight, standalone, and executable packages that include all the necessary software, libraries, and dependencies to run an application.

In this blog, we'll explore what Docker is, how it can be used in blockchain, and a short example of how it can be used.</p>
<br></br>
<h4>What is Docker?</h4>

 <p>Docker is a containerization platform that allows developers to create and deploy applications in a containerized environment. Containers are lightweight and portable, making them ideal for running applications on multiple platforms and environments.

Docker containers are built from Docker images, which are essentially snapshots of an application's code, dependencies, and configuration files. Docker images can be shared and distributed through a Docker registry, such as Docker Hub, making it easy for developers to collaborate and deploy applications across different environments.

The main benefits of using Docker include:

Consistency: Docker ensures that applications run the same way in different environments, eliminating the "works on my machine" problem.
Portability: Docker containers can run on any platform that supports Docker, from laptops to data centers and cloud providers.
Scalability: Docker allows applications to scale horizontally by spinning up multiple instances of containers.
Security: Docker containers are isolated from each other and the host system, providing an extra layer of security.</p>
<br></br>

<h4>How Docker can be used in Blockchain?</h4>
<p>Blockchain is a decentralized technology that allows multiple parties to share a tamper-proof ledger of transactions. Docker can be used to create blockchain networks and deploy blockchain applications in a containerized environment.

Using Docker for blockchain offers several advantages, including:

Simplified deployment: Docker containers can be easily deployed to different nodes in a blockchain network, making it easy to set up and manage the network.
Consistent environment: Docker ensures that all nodes in the network are running the same software and configuration, ensuring consistency and reliability.
Scalability: Docker allows blockchain networks to scale horizontally by adding more nodes to the network.
Isolation: Docker containers are isolated from each other and the host system, providing an extra layer of security for blockchain networks. </p>
<br></br>
<p><h4>How it can be used?</h4></p>


<p>Let's consider a simple example of how Docker can be used in blockchain. Suppose we want to create a private blockchain network using Hyperledger Fabric, a popular blockchain platform for building enterprise-grade applications.

To create the network, we can use Docker to spin up multiple containers, each running a different component of the blockchain network, such as the orderer, peer, and client. Docker ensures that all containers are running the same version of the software and configuration, making it easy to set up and manage the network.

We can also use Docker to deploy and run blockchain applications in a containerized environment. This allows us to easily test and deploy blockchain applications across different environments, such as development, staging, and production.</p>
<br></br>

<h4> Conclusion </h4>


<p>Docker is a powerful containerization platform that offers many benefits for blockchain development and deployment. By using Docker, developers can easily create and manage blockchain networks, deploy and run blockchain applications, and ensure consistency and reliability across different environments.

Whether you're building a private blockchain network for enterprise applications or a decentralized application for a public blockchain, Docker can help simplify the development and deployment process, and ensure that your applications run consistently and reliably across different platforms and environments.</p>
<br></br>









             
              <div className="Demo__container">
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount
                      url={shareUrl}
                      className="Demo__some-network__share-count"
                    >
                      {(count) => count}
                    </FacebookShareCount>
                  </div>
                </div>

                <div className="Demo__some-network">
                  <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="521270401588372"
                    className="Demo__some-network__share-button"
                  >
                    <FacebookMessengerIcon size={32} round />
                  </FacebookMessengerShareButton>
                </div>

                <div className="Demo__some-network">
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <div className="Demo__some-network__share-count">
                    &nbsp;
                  </div>
                </div>

                <div className="Demo__some-network">
                  <TelegramShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>

                  <div className="Demo__some-network__share-count">
                    &nbsp;
                  </div>
                </div>

                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="Demo__some-network__share-button"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>

                  <div className="Demo__some-network__share-count">
                    &nbsp;
                  </div>
                </div>

                <div className="Demo__some-network">
                  <LinkedinShareButton
                    url={shareUrl}
                    className="Demo__some-network__share-button"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>

                <div className="Demo__some-network">
                  <RedditShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                    className="Demo__some-network__share-button"
                  >
                    <RedditIcon size={32} round />
                  </RedditShareButton>

                  <div>
                    <RedditShareCount
                      url={shareUrl}
                      className="Demo__some-network__share-count"
                    />
                  </div>
                </div>

                <div className="Demo__some-network">
                  <TumblrShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                  >
                    <TumblrIcon size={32} round />
                  </TumblrShareButton>
                </div>

                <div className="Demo__some-network">
                  <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className="Demo__some-network__share-button"
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>
                <div className="Demo__some-network">
                  <ViberShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                  >
                    <ViberIcon size={32} round />
                  </ViberShareButton>
                </div>

                <div className="Demo__some-network">
                  <WorkplaceShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                    <WorkplaceIcon size={32} round />
                  </WorkplaceShareButton>
                </div>

                <div className="Demo__some-network">
                  <LineShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                  >
                    <LineIcon size={32} round />
                  </LineShareButton>
                </div>

                <div className="Demo__some-network">
                  <VKShareButton
                    url={shareUrl}
                    image={`${String(
                      window.location,
                    )}/${exampleImage}`}
                    className="Demo__some-network__share-button"
                  >
                    <VKIcon size={32} round />
                  </VKShareButton>
                </div>
              </div>
              </p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Card style={{ width: '9rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Title>Olvis E. Gil Ríos</Card.Title>
                <Card.Body>

                  <Card.Text>
                    <p>
                      Founder of <a href="https://edunode.org/">edunode.org</a>
                    </p>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
