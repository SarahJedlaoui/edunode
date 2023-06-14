import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

import NavBar from '../../../NavBar';
import me from '../../me.jpg';
import suave from '../../suave.gif';
import sc1 from '../../SC.png';
import Typography from '@mui/material/Typography';
import {
  FacebookShareCount,
  RedditShareCount,
  TumblrShareCount,
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
import { Helmet } from 'react-helmet-async'
import '../style.css';
import sg from "./stellarglobal.png"
import tag from "./tag.png"
import lite from "./lite.png"

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/learn-about-blockchain';
    const title = 'Workshop: Learn about Blockchain and how to apply it to your day-to-day business life';
    const exampleImage = suave;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          
          <meta
            name="description"
            content="Workshop: Learn about Blockchain and how to apply it to your day-to-day business life"
          />
        </Helmet>
        <NavBar />

        <Image width={450} src={suave} className="header-image centerimg" fluid />
        <Container flud>
        <Typography
                component="h1"
                variant="h4"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                Workshop: Learn about Blockchain, what are the most popular applications, and how you can apply them to make your day-to-day activities easier.
              </Typography>
    
          <Row>
          <b></b>
         <b></b>
         <b></b>
         <b></b>
         <p></p>
            <Col className="main-section">
     
             <h4>About this event</h4>
            <p>Business operations can be at times an organisational nightmare, especially if you are dealing with a lot of data. Having to trust third parties with your business data makes these processes even more difficult. Luckily, Blockchain has arrived to help us deal with all these challenges. In this in-person workshop, you will learn about what is Blockchain, what are the most popular applications, and how you can apply them to make your day-to-day activities easier.</p>
   <h4>In this workshop you will:</h4>
             {/* <Image src={sc} fluid /> */}
             <p>- Learn about how blockchain is changing the way we do business.</p>
             <p>- Learn about one of the most important building blocks of the new era of the internet.</p>
             <p>- Educate yourself about how you can make your business processes more efficient using blockchain technology.</p>
             <p>- Learn about how you can create, send, receive and verify transactions in an easy and trustworthy manner. </p>
             
             <h4>Main Takeaways:</h4>
             <p>- Understand the concept of Blockchain and how you can apply it in your business operations. </p>
             <p>- Reduce the need to trust third parties by recording your business data transparently using decentralised databases.</p>
             <p>- Ask any blockchain-related questions to an award-winning entrepreneur.</p>
             <h4>Registration</h4>
             <a href="https://www.eventbrite.com/e/learn-about-blockchain-and-how-to-apply-it-to-your-day-to-day-business-life-tickets-334911568517"><p>Magic Link</p></a>
             <h4>About the speaker:</h4>
             <p>Olvis Enrique Gil Ríos is Founder of OG Technologies EU.</p>
<p>He is Blockchain Entrepreneur, Economist, and self-taught developer.</p>


<h4>Location:</h4>
<a href="https://goo.gl/maps/DjN3cE8EivhBVvZh9"><p>Talent Garden Vienna
Liechtensteinstraße 111-115, 1090 Wien - Austria</p></a>
             <h4>Special thanks to our sponsors</h4>

             <br></br>
             <br></br>
 <a href="https://talentgarden.org/"><Image width={200} src={tag} fluid /> </a>
<br></br>
<br></br>
<p>With a community of more than 4500 pioneers across 18 campuses in 8 countries, Talent Garden offers an unprecedented combination of creative coworking campuses, an internal educational institution, and industry-driven events to connect tech talents. </p>

<br></br>
<br></br>
<a href="https://stellar-global.org/"><Image width={160} src={sg} fluid /></a>
<br></br>
<br></br>
<p>The Global community is multicultural, multinational and multiethnic. The Stellar Development Foundation’s mission is to help maintain Stellar’s codebase, support the technical and business communities around Stellar, and act as a speaking partner to regulators and institutions. However, behind the “nodes” and “anchors” is the most crucial component to making the dream of financial inclusion a reality: People.</p>

<br></br>
<br></br>
<a href="https://litemint.com/"><Image width={200} src={lite} fluid /></a>
<br></br>
<br></br>
<p>Litemint is a tech company that breaks barriers and creates innovative products to connect creators, collectors, crypto enthusiasts and gamers to unique experiences. Their platform is taking #gaming and #NFT to the future.</p>


             
             
           
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
              
            </Col>
            {/* <Col xs={12} sm={4} className="sidebar-section">
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Body>
                  <Card.Title>Olvis E. Gil Ríos</Card.Title>
                  <p>
                      Founder at OG Technologies EU
                    </p>
                  <Card.Text>
                  
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
      
      </div>
    );
  }
}
