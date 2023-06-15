import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import MetaTags from 'react-meta-tags';
import { Helmet } from 'react-helmet-async'

import NavBar from '../../../NavBar';
import me from '../../me.jpg';
import amm from './AMMs.png';
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
// import { Helmet } from 'react-helmet';
import '../style.css';
import aqua from "./aquaimg.png"


export default class AMM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
   
  const author = "Olvis E. Gil Ríos"
  const datePublished = "13/12/2021"
  const description = 'What are AMMs? Why are they useful? And how they are being used in decentralized finance.'
    const shareUrl = 'https://edunode.org/blog/automated-market-maker';
    const title = 'DeFi Explained: What is an Automated Market Maker?';
    const exampleImage = amm;
     const sc = "https://media0.giphy.com/media/idKeY3nvmdIsM/giphy.gif?cid=ecf05e47m4lxujqwiffgwaoopcey55b4lmhv4xtu24r1cev3&rid=giphy.gif&ct=g"
     const off = "https://media0.giphy.com/media/SEWEmCymjv8XDbsb8I/giphy.gif"
     const ammy = "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/2JYSUKBZKJDLPAOVBQT2EH2IHI.png"
    //  const jsonLdData = {
    //   '@context': 'https://schema.org',
    //   '@type': 'BlogPosting',
    //   headline: title,
    //   datePublished: datePublished,
    //   // dateModified: dateModified,
    //   author: {
    //     '@type': 'Person',
    //     name: author,
    //   },
    //   description: description,
    //   // articleBody: content,
    //   image: amm,
    // };
    return (
      <div>
        
      <MetaTags>
      <title>{title}</title>
      <meta name="description" content="DeFi Explained: What is an Automated Market Maker?" />
      <meta property="og:title" content="DeFi Explained: What is an Automated Market Maker?" />
        <meta property="og:image" content={amm} />
        <meta property="og:image" content="https://i.imgur.com/LvD6RFi.png" />
        <meta property="twitter:image" content={amm}></meta>
        
      </MetaTags>

        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          <meta name="description" content="What are AMMs? Why are they useful? And how they are being used in decentralized finance." />
          <meta property="og:title" content="DeFi Explained: What is an Automated Market Maker?" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://i.imgur.com/LvD6RFi.png" />
<meta property="og:url" content="https://edunode.org/blog/automated-market-maker" />
<meta property="og:image" key="og:image" content={amm}/> 
<meta property="twitter:image" content="https://i.imgur.com/LvD6RFi.png"></meta>
      
        </Helmet>
        <NavBar />

        <Image src={amm} className="header-image centerimg" fluid />
        <Container>
        <Typography
                component="h1"
                variant="h4"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                DeFi Explained: What is an Automated Market Maker?
              </Typography>
      

          <Row>
          <b></b>
         <b></b>
         <b></b>
         <b></b>
         <p></p>
            <Col xs={12} sm={8} className="main-section">
     
              <p>One of the most interesting ideas in DeFi is the concept of AMMs, so I thought it would be a good idea to talk about; What are AMMs? Why are they useful? And how they are being used in decentralized finance.  </p>
             <h4>What are AMMs?</h4>
            <p>AMM stands for “Automated Market Maker” and we can describe them as a tool used to provide liquidity to decentralized applications.</p>
            <p>AMMs are basically a “<a href="https://edunode.org/blog/smart-contracts">Smart Contracts</a>” where the supply and the demand of the assets involved, are determined by a mathematical algorithm.</p>
             
             <Image src={sc} fluid />
             <b></b>
             <p>An AMM allows traders to buy and sell certain assets or tokens using an algorithm that dictates how expensive something should be, based on how much of it, there is. As someone buys one asset, it gets more expensive, because there is less of it. And as they give it another asset, it gets cheaper, because of course, there is more of it.  This way of facilitating trades differs from the classical order book way of handling trades.</p>
             
             <Image src={ammy} fluid />
             <b></b>
             <p>This is unlike traditional Market Makers, which are usually managed by one person or a group of people. </p>
             <Image src={off} fluid />
              <br>
          </br>
          <br></br>
             <h4>State of the Art</h4>
             <p>There are several popular decentralized and permission-less exchanges that allow the trading of tokens, such as Uniswap and Aave. Uniswap in particular,  was one of the first widely used DApps that implemented AMMs for the trade of ERC-20 tokens. Uniswap and other DeFi Exchanges, use a simple x*y=k equation to set the mathematical relationship between the particular assets held in the liquidity pools. <a href="https://defipulse.com/">Here</a> you can find details about the DApps with the most locked Value.</p>

<p></p>


             <h4>AMMs on Stellar</h4>
             <p>The release of protocol 18 on November 3rd, brought the long-awaited AMM functionality to the Stellar network. This release is particularly exciting because it is a new way to bring liquidity by leveraging liquidity pools on the network.</p> 
             
             <p>Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool and are accumulated in real time. Fees can be claimed by withdrawing your liquidity. You can find more details in <a href="https://stellar.org/blog/introducing-automated-market-makers-on-stellar"> this blog post </a> written by Justin Rice.</p>
             <p>AMMs are being used significantly, and one of the projects leveraging this new functionality on Stellar is called StellarX. On this <a href="https://medium.com/stellarxhq/amms-on-stellarx-b0f9c493936c">blog post</a>, written by Dima from the StellarX team, you can learn how you can create liquidity pools.</p>
<p>Another project leveraging AMMs on Stellar is Aquarius, a liquidity management layer for the Stellar Network. Aquarius is designed to supercharge trading on Stellar, bring more liquidity and give control over how it is distributed across various market pairs. It adds incentives for SDEX traders ("market maker rewards") and rewards for AMM liquidity providers. Aquarius also allows the community to set rewards for selected markets through on-chain voting. You can find more details of their Website: <a href="https://aqua.network/">https://aqua.network/</a></p>
<Image src={aqua} fluid />
             <p></p>
             
           
            <h4>Conclusion</h4>

             <p>AMMs are one of the most popular applications in decentralized finance and it has proven to work as one of the best ways of generating liquidity in a great range of DeFi projects. We look forward to the future of AMMs, specially on the Stellar Network, where it seems that it has begun to gain momentum.</p>

             <p>If you enjoy this blog post, feel free to share it with your friends and if you wish you are welcome to join our Discord server: <a href="https://discord.gg/pcenYYjPmd">https://discord.gg/pcenYYjPmd</a></p>
             <h4>Resources</h4>
             <p> [1] Introducing Automated Market Makers on Stellar{' '}
                <a href="https://stellar.org/blog/introducing-automated-market-makers-on-stellar">
                https://stellar.org/blog/introducing-automated-market-makers-on-stellar
                </a>{' '}
              </p>
              <p> [2] AMMs on StellarX{' '}
                <a href="https://medium.com/stellarxhq/amms-on-stellarx-b0f9c493936c">
                https://medium.com/stellarxhq/amms-on-stellarx-b0f9c493936c
                </a>{' '}
              </p>
              <p> [3] What Is an Automated Market Maker?{' '}
                <a href="https://www.coindesk.com/learn/2021/08/20/what-is-an-automated-market-maker/">
                https://www.coindesk.com/learn/2021/08/20/what-is-an-automated-market-maker/
                </a>{' '}
              </p>
              <p> [4] AMMs in the Stellar Ecosystem{' '}
                <a href="https://stellar.org/blog/amms-in-the-stellar-ecosystem">
                https://stellar.org/blog/amms-in-the-stellar-ecosystem
                </a>{' '}
              </p>
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
            <Col xs={12} sm={4} className="sidebar-section">
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Body>
                  <Card.Title>Olvis E. Gil Ríos</Card.Title>
                  <Card.Text>
                    <p>
                      Founder at OG Technologies EU
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
