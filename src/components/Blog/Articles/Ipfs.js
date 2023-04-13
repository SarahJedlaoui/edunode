import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import me from '../sara.jpg';
import sc from '../IPFS.png';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';
import seven from './7.png';
import eight from './8.png';
import nine from './9.png';
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
            <h4>Introduction to IPFS:</h4>
            <br></br>
              <p>InterPlanetary File System (IPFS) is a distributed protocol and network for storing and sharing hypermedia in a peer-to-peer (P2P) fashion. IPFS is a decentralized alternative to the World Wide Web (WWW) and is built on top of it. The protocol was initially designed by Juan Benet, and it was first released in 2015.

IPFS allows users to store and access files in a distributed and decentralized manner, which means that files are not stored on a central server. Instead, files are broken down into smaller pieces, and each piece is stored on different nodes on the network. This makes it much more difficult for any individual or organization to censor or control access to the data.</p>
<br></br>
<h4>What is IPFS used for?:</h4>
<br></br>
 <p>IPFS has several use cases, including:<br></br>

*File sharing: IPFS can be used to share files between users in a decentralized and secure manner. This means that users can share files without relying on centralized servers.<br></br>

*Decentralized websites: IPFS can be used to host websites in a decentralized manner. This means that websites can be accessed even if the server hosting them is offline or if there is no centralized server.<br></br>

*Decentralized applications: IPFS can be used as a storage layer for decentralized applications, allowing users to access data in a decentralized and secure manner.<br></br>

*Permanent storage: IPFS can be used to store files permanently, ensuring that they are always available and cannot be deleted.</p>
<br></br>

<h4>How to Upload Images on IPFS?:</h4>
<br></br>
<p>Uploading images on IPFS is a simple process that can be done in a few steps.<br></br>
*Step 1: Install IPFS<br></br>
To upload images on IPFS, you need to have IPFS installed on your computer. You can download IPFS from the official website and follow the installation instructions.<br></br>
*Step 2: Add Images to IPFS<br></br>
After installing IPFS, you can add images to IPFS using the following command in the terminal:
<Image src={one} fluid />
This will add the image to IPFS and return a unique hash that identifies the image. You can use this hash to access the image later.<br></br>
*Step 3: View Images on IPFS<br></br>
To view images on IPFS, you can use the unique hash generated in the previous step and append it to the IPFS gateway URL. For example, if the hash is "QmZdCt8J9ZntrhZamTy2g1Wn8pjArdyAbmBCwzLxjDcE8f", you can view the image by accessing the following URL in your browser:
<Image src={two} fluid />
<br></br>
And also you can use IPFS in your applications to store images in it and here are the steps:<br></br>
Before we begin, you will need to have the following installed on your computer:<br></br>
Node.js<br></br>
IPFS<br></br>
The ipfs-api Node.js library<br></br>
*Step 1: Initialize IPFS<br></br>
To begin, you need to initialize IPFS on your computer. Open a terminal window and run the following command:<br></br>
<Image src={three} fluid />
This will create the necessary configuration files for IPFS. Once you have initialized IPFS, start the daemon by running the following command:<br></br>
<Image src={four} fluid />
This will start the IPFS daemon, which will allow you to interact with the IPFS network from your Node.js application.<br></br>
*Step 2: Install the ipfs-api Library<br></br>
Next, you need to install the ipfs-api library. This is a Node.js library that provides a simple interface for interacting with IPFS from a Node.js application. To install the ipfs-api library, run the following command in your terminal:<br></br>
<Image src={five} fluid />
*Step 3: Set Up Your Node.js Application<br></br>
Create a new Node.js application and navigate to the project directory in your terminal. Next, create a new file called index.js and add the following code:<br></br>
<Image src={six} fluid />
This code sets up a connection to the local IPFS node using the ipfs-api library, and then retrieves a file from IPFS by its hash. Replace the 'fileHash' variable with the hash of the image file that you want to retrieve.<br></br>
*Step 4: Add Images to IPFS<br></br>
To add an image to IPFS, you first need to read the image file using the 'fs' module in Node.js. Add the following code to the 'index.js' file to read an image file:<br></br>
<Image src={seven} fluid />
Replace 'path/to/image.jpg' with the path to your image file.<br></br>
Next, add the following code to add the image to IPFS:<br></br>
<Image src={eight} fluid />
This code adds the image file to IPFS and logs the result to the console. The res variable contains information about the added file, including its IPFS hash.<br></br>
*Step 5: Retrieve Images from IPFS<br></br>
To retrieve an image from IPFS, you can use the IPFS hash that was generated when the image was added. Replace the fileHash variable in the code from Step 3 with the hash of the image that you want to retrieve.<br></br>
<Image src={nine} fluid />
<br></br>
</p>
<br></br>
<p><h4>Conclusion</h4></p>
<br></br>
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
