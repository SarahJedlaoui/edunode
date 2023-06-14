import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

import NavBar from '../../NavBar';
import me from "../me.jpg"
import nodes from "./nodes.PNG"
import economics from "./economics.png";
import MetaTags from 'react-meta-tags';
import kicon from "./keybaseicon.png"
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

export default class Stellarnomics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };



  }
  render() {

    const shareUrl = "https://edunode.netlify.com/blog/Stellarnomics"
    const title = "How to Issue assets on the Stellar Network"
    const exampleImage = economics

    return (
      <div>
      
      <MetaTags>
        {/* <title>Page 1</title> */}
        <meta id="meta-description" name="description" content="Monetary aspects of the Stellar Consensus Protocol and its steps towards decentralization" />
        <meta id="og-title" property="og:title" content="Stellarnomics: Monetary aspects of the Stellar Consensus Protocol" />
        <meta id="og-image" property="og:image" content="fd" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edunode.netlify.app/blog/stellarnomics" />
        <meta property="twitter:title" content="Stellarnomics" />
        <meta property="twitter:description" content="Monetary aspects of the Stellar Consensus Protocol and its steps towards decentralization" />
        <meta property="twitter:image" content="" />
      </MetaTags>

        <NavBar />
        <br></br>
        <Image src={economics} className="header-image" fluid />
        <br></br>
        <Container>
          <br></br>
          <h2>Stellarnomics: Monetary aspects of the Stellar Consensus Protocol</h2>
          <br></br>
          <Row>
            <Col xs={12} sm={8} className="main-section">


              <p> Since the invention of the Internet, our lives have started to experience radical changes in many areas such as; how we communicate, how we learn, and how we spend our free time.  Back in the 16th century, when gold was still the most predominant commodity in the world, the system of commodity money eventually evolved into a system of representative money, where the first issuing banks appeared in northern Europe. Now with the invention of technologies like <a href="https://www.stellar.org/">Stellar</a> , the way we transact has radically changed. The system is slowly but steadily evolving into a decentralized system where trust is ensured by mathematics and cryptography. </p>
              <p>In order to grasp the economic aspects of the Stellar Consensus Protocol -or how I like to refer to it, the “Stellarnomic” aspects- proper analizes of how consensus work are fundamental. Decentralized consensus reigns all the actions that take place in cryptoeconomic systems. Consensus can be defined as a decision-making process in which participants of a particular system (in this case: Nodes) agree to support (or not) a decision, in order to reach an agreement (concensus). </p>
              <p>The underlying consensus mechanism in which <a href="https://bitcoin.org/">Bitcoin</a> operates is called Proof-of-work (PoW), this consensus mechanism secures all transactions in the Bitcoin network and was the inspiration for the development of Stellar. The way it works is that users create cryptographically secure transactions and broadcast them to the network. Miners collect as many transactions as they can and fit them into a block, and then they have to solve highly complex mathematical algorithms which allows them to verify each block and move it to the list of historic blocks. This is key in order to make sure that there are not invalid or fraudulent transactions.</p>
              <Image src={nodes} fluid />
              <p>Nodes visualization by <a href="https://stellarbeat.io/">https://stellarbeat.io/</a> </p>
              <h3>
                <p>
                  "Understanding the behavior of the participants within decentralized systems (or networks) is vital not only for Stellar but for any blockchain or distributed ledger."
       </p>

              </h3>


              <br></br>
              <p>
                On the other hand, the Stellar Consensus Protocol is a decentralized global consensus, differentiates itself from the other consensus mechanisms (like POW) because the nodes which validate the transactions work without mining. Each validator or node defines sets of other nodes that it needs to agree with. These sets are called quorum slices and when you look at the quorum slices of all validator nodes they define a global network of trust relationships between these nodes (above you can see how the current relationships look like). For example, if the configuration for a quorum set is (α, β, γ) with a threshold of 2, then either (α, β), (β, γ) or (γ, α) must agree before the node can proceed. (α, β), (β, γ) or (γ, α) are all quorum slices. In the article <a href="https://medium.com/stellar-developers-blog/intuitive-stellar-consensus-protocol-d7fbf99a60ce">“Intuitive Stellar Consensus Protocol”</a>  by Marta Lokhava, she mentions that “everything begins with statements” and that distributed systems “need a consensus mechanism in order to agree on different statements”. This in particular is achieved via federated voting. We can also describe these models of behavior as Game Theory of distribuded systems.
       </p>
              <p>If you would like to know more about the Stellar Concensus Protocol, check out the <a href="https://www.stellar.org/papers/stellar-consensus-protocol">Whitepaper</a>, which was designed by David Mazières. This academic research is fundamental and constitutes a hugh step towards adoption.</p>
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
        
      </div>
    )
  }
}