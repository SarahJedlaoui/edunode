  import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import kb1 from "../kb1.png"
import kb2 from "../kb2.png"
import kbt from "../keybase-stellar.7310fd97.png"
import me from "../me.jpg"                              
import kicon from "../keybaseicon.png"
import {
  FacebookShareCount,
  RedditShareCount,
  TumblrShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
} from "react-share";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HighLight = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};


export default class Keybase extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    const shareUrl = "https://edunode.netlify.com/blog/What-is-Keybase"
    const title = "How to Issue assets on the Stellar Network"
    const exampleImage = kbt

    return (
      <div>
        <NavBar />

        <Container>
          <h2>Keybase the secure communication tool with Stellar native integration</h2>
          <Image src={kbt} className="header-image" fluid />
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Many tech companies that offer messaging applications have realized that privacy is clearly a big concern for users, and that the implementation of mechanisms that allow them to be able to control and protect their personal data is key in order to create trust. However, most of them struggle to try to reach this goal, this is where Keybase excels.</p>
              <h3>Stellar built-in wallet</h3>
              <p>Keybase is the best privacy-focused messaging tool, which also has a built-in wallet with native a integration of the Stellar network.</p>
              <p>Stellar is an internet protocol that works as a decentralized order book, and which facilitates the exchange without borders of any type of assets, and cryptocurrencies.</p>
              <p>This means that Keybase users does not only enjoy the benefits of encryption to securely communicate with friends and peers, but also allows them to move value borderless for a very small fraction of a penny.</p>
              <h3>Keybase installation</h3>
              <p>Users are able to create an account by<a href="https://keybase.io/download"> downloading </a> the mobile or desktop app.</p>
              <p>Once the app is installed, users are able to login or to create a new account. Once logged in, they are able to enjoy of all the funtionalities that Keybase offers.</p>
              <p>For instance, user are able to link their own stellar account (by adding your private key) or to generate a new one. </p>
              <Image src={kb1} fluid />
              <h3>Crypto Feature</h3>
              <p>Another cool feature is the one called "Crypto", which allows anyone to encrypt and sign any type of data (e.g text files). Keybase will generate a hash of the information that can be securely sent and which allows the receiver to securely verify and unencrypt the data using the Keybase app. </p>
              <Image src={kb2} fluid />
              <h3>Keybase´s CLI</h3>
              <p>If you are a tech savy you can check their built in CLI command lines with some useful commands that you can execute from your own terminal. </p>
              <p><a href="https://book.keybase.io/docs/cli#basics">Here</a> you can find more information.</p>
              <h3>Conclusion</h3>
              <p>Keybase is without a doubt at the top when it comes to offering open source privacy-focused communication tools and thanks to this capabilities the company was recently acquired by Zoom, the world's leading video conferencing app, and this acquisition will surely help Zoom to improve the privacy of their services.</p>
{/* <HighLight /> */}
              <p></p>
              <p></p>
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
            <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
              {count => count}
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

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
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

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
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
            <RedditShareCount url={shareUrl} className="Demo__some-network__share-count" />
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
            image={`${String(window.location)}/${exampleImage}`}
            className="Demo__some-network__share-button"
          >
            <VKIcon size={32} round />
          </VKShareButton>

        </div>

      </div>

            </Col>
            <Col xs={12} sm={4} className="sidebar-section">

            <Card style={{ width: '9rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Body>
                  <Card.Title>Olvis Gil</Card.Title>
                  <Card.Text>
                    <p>Economist, Entrepreneur and self-taught Developer</p>
                  </Card.Text>
                  <a href="https://keybase.io/olvis_experio">
                  <img style={{ width: '25px' }} src={kicon} />
                  </a>
                </Card.Body>
                
              </Card>

            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    )
  }
}