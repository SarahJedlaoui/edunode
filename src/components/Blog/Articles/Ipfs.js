import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import me from '../sara.jpg';
import sc from '../IPFS.png';
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

export default class IPFS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/ipfs';
    const title = 'What is IPFS and how you can use it?';
    const exampleImage = sc;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          
          <meta
            name="description"
            content="IPFS is a decentralized protocol and network for storing and sharing hypermedia in a peer-to-peer fashion. It allows users to store and access files in a distributed and decentralized manner."
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
                What is IPFS and how you can use it?
              </Typography>
      

          <Row>
          <b></b>
         <b></b>
         <b></b>
         <b></b>
         <p></p>
            <Col xs={12} sm={8} className="main-section">
            <p>  
            <h4>Introduction to IPFS</h4>
              
              <p>InterPlanetary File System (IPFS) is a distributed protocol and network for storing and sharing hypermedia in a peer-to-peer (P2P) fashion. IPFS is a decentralized alternative to the World Wide Web (WWW) and is built on top of it. The protocol was initially designed by Juan Benet, and it was first released in 2015.

IPFS allows users to store and access files in a distributed and decentralized manner, which means that files are not stored on a central server. Instead, files are broken down into smaller pieces, and each piece is stored on different nodes on the network. This makes it much more difficult for any individual or organization to censor or control access to the data.</p>
<br></br>
<h4>What is IPFS used for?</h4>

 <p>IPFS has several use cases, including:<br></br>

*File sharing: IPFS can be used to share files between users in a decentralized and secure manner. This means that users can share files without relying on centralized servers.<br></br>

*Decentralized websites: IPFS can be used to host websites in a decentralized manner. This means that websites can be accessed even if the server hosting them is offline or if there is no centralized server.<br></br>

*Decentralized applications: IPFS can be used as a storage layer for decentralized applications, allowing users to access data in a decentralized and secure manner.<br></br>

*Permanent storage: IPFS can be used to store files permanently, ensuring that they are always available and cannot be deleted.</p>
<br></br>

<h4>Features of IPFS</h4>
<p>Decentralization: IPFS is a decentralized protocol, which means that files are not stored on a central server. Instead, they are stored on multiple nodes on the network, making it much more difficult for any individual or organization to control access to the data.

Distributed storage: IPFS uses a distributed storage system, which means that files are broken down into smaller pieces, and each piece is stored on different nodes on the network. This makes it much more difficult for any individual or organization to delete or tamper with the data.

Content-addressed storage: IPFS uses content-addressed storage, which means that files are identified by their content rather than their location. This ensures that files can be accessed even if the location of the node storing them changes.

Versioning: IPFS supports versioning, which means that different versions of a file can be stored and accessed. This is useful for applications that need to store historical data or for users who want to access older versions of a file. </p>
<br></br>
<p><h4>Conclusion</h4></p>


<p>IPFS is a powerful and innovative protocol that allows users to store and access files in a decentralized and secure manner. It has several use cases, including file sharing, decentralized websites, decentralized applications, and permanent storage. IPFS is designed to be decentralized, distributed, content-addressed, and versioned. With its unique features, IPFS has the potential to revolutionize the way we store and share information online.</p>
<br></br>


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
                <Card.Title>Sarah Jedlaoui</Card.Title>
                <Card.Body>

                  <Card.Text>
                    <p>
                     Software Developer
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
