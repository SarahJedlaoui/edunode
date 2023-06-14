import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
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
import nine from './9.png'
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
import { Helmet } from 'react-helmet-async'
import './style.css';

export default class Soroban extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/soroban';
    const title = 'What is Soroban and how you can use it?';
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
                What is Soroban and how you can use it?
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
And also you can use IPFS in your applications to store images using 'web3.storage' library and here are the steps:<br></br>
*Step 1: Install the web3.storage library:<br></br>

<Image src={three} fluid />
This command installs the web3.storage library and its dependencies in your project.<br></br>

*Step 2: Import the necessary libraries:<br></br>
These lines import the create function from the ipfs-http-client library and the Web3Storage class from the web3.storage library.<br></br>
<Image src={four} fluid />
*Step 3: Connect to an IPFS node:<br></br>
This code creates an instance of an IPFS node using the create function from the ipfs-http-client library. The options passed to create specify the host, port, and protocol to use when connecting to the IPFS node. In this example, we're using the Infura IPFS gateway over HTTPS:<br></br>
<Image src={five} fluid />

*Step 4: Initialize the Web3Storage client:<br></br>
This code creates a new instance of the Web3Storage class from the web3.storage library, passing in your API key as a token:<br></br>
<Image src={six} fluid />

*Step 5: Convert the image to a Buffer object:<br></br>
This code uses the fs module to read the image file from disk and convert it to a Buffer object. You'll need to replace 'path/to/image.jpg' with the actual path to your image file:<br></br>
<Image src={seven} fluid />
<br></br>
*Step 6: Add the image to IPFS:<br></br>
This code adds the image to IPFS using the add method on the IPFS node instance. The result of the add method is an object containing the CID (content identifier) of the added file, which we extract using destructuring.<br></br>
<Image src={eight} fluid />
*Step 7: Store the CID on Web3Storage:<br></br>
This code stores the image on Web3Storage using the put method on the Web3Storage client instance. The put method takes the image buffer as its first argument and an options object as its second argument. In this example, we specify the name of the file and its content type. The result of the put method is an object containing the CID of the stored file, which we extract using destructuring.<br></br>
<Image src={nine} fluid />
That's it! You have now stored an image on IPFS using the web3.storage library.<br></br>
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
      
      </div>
    );
  }
}
