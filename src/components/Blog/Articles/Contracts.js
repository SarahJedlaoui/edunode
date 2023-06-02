import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import me from '../mepic.png';
import sc from '../smartcontract.png';
import sc1 from '../SC.png';
import Typography from '@material-ui/core/Typography';
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
import './style.css';

export default class Contract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/smart-contracts';
    const title = 'What are Smart Contracts and how you can build them on Stellar?';
    const exampleImage = sc;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          
          <meta
            name="description"
            content="A SC is basically a computer program which contains certain types of rules, actions and events which are intended to be automatically executed according to the terms agreed in that particular contract."
          />
        </Helmet>
        <NavBar />

        <Image src={sc1} className="header-image" fluid />
        <Container>
        <Typography
                component="h1"
                variant="h4"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                What are Smart Contracts and how you can build them on Stellar?
              </Typography>
      

          <Row>
          <b></b>
         <b></b>
         <b></b>
         <b></b>
         <p></p>
            <Col xs={12} sm={8} className="main-section">
            <p>  
              
              
              <p>A very relevant concept in the blockchain space, is the concept of Smart Contracts (SC). In the following blog post, we will talk about them, its early days, and how you can get started building SCs on the Stellar Network.</p>
<br></br>
<h4>What is a Smart Contract?</h4>

 <p>An SC is a computer program that contains certain types of rules, actions, and events that are intended to be automatically executed according to the terms agreed in that particular contract. An SC is like a regular contract (usually written on paper), with the difference that the contracts are stored on a digital ledger, which allows an easy audit of the transactions. </p>
<br></br>

<h4>Smart Contract Platform</h4>
<p>The term was first used in 1997 by computer scientist, lawyer, and cryptographer <a href="https://en.wikipedia.org/wiki/Nick_Szabo">Nick Szabo</a> (before the creation of <a href="https://wikipedia.org/wiki/Bitcoin">Bitcoin</a>). The term found mainstream recognition with the launch of <a href="https://en.wikipedia.org/wiki/Ethereum">Ethereum</a> (2015), a decentralized, open-source blockchain with smart contract functionality which uses a virtual machine to guarantee <a href="https://en.wikipedia.org/wiki/Turing_completeness">Turing Complete</a>  contract execution. This gave a lot of flexibility to developers building on top of the Network. However, the high use of the Ethereum <a href="https://en.wikipedia.org/wiki/Virtual_machine">virtual machine</a>, created scalability issues which are currently being translated into high transactions fees. </p>
<br></br>
<p><h4>Does Stellar support Smart Contracts?</h4></p>


<p>The short answer for that is not yet. However, Stellar offers several mechanisms which allow you to create "smart contract-like" functionalities. For more information about smart contracts on Stellar, check out the following blog post titled <a href="https://medium.com/stellar-community/understanding-stellar-smart-contracts-23ebe1568b6">"Understanding Stellar Smart Contracts"</a>. Projects like <a href="https://rabet.io/">Rabet</a> and <a href="https://pendulumchain.org/">Pendulum</a> are working to bridge the gap between Stellar and DeFi.</p>
<br></br>

<h4> Project Jump Cannon </h4>


<p>A very interesting project bringing Smart Contracts to the Stellar Network is called <b>Project Jump Cannon</b>. Project Jump Cannon is being built on a WebAssembly (WASM) runtime and aims to build native on-chain smart contracts for Stellar.  The project was named after Annie Jump Cannon, an astronomer whose cataloging work was instrumental in the development of contemporary stellar classification still used to this day. If you would like to learn more about the project, feel free to join the <a href="https://discord.gg/k7dkCeMJxx">Stellar Developers Discord server</a> where you will find their dedicated channel.</p>
<br></br>
<h4>Turrets</h4>


<p>Another interesting project trying to bring Smart Contracts on the Stellar Network is called <a href="https://tss.stellar.org/"> Turrets (Prev. TSS)</a>. Turrets aims to build a decentralized, Turing Complete network for the secure, cost-effective, creation and signing of Stellar transactions. 

Projects experimenting and researching Turrets include <a href="https://www.mozartpay.com/">MozartPay</a>, <a href="https://litemint.com/">Litemint</a>, <a href="https://www.script3.io/">Script3</a>, and <a href="https://answap.io/">AnSwap.</a> </p>




<br></br>
<h4>Technologies for building decentralized applications</h4>
<p>If you are looking into building a decentralized application that is compatible with DeFi blockchains, it is key to take into consideration technologies (particulary programming languages) that have proven to be high performer, safe and efficient when it comes down to handling complex systems. This is important in order to facilitate interoperability and compatibility with popular DeFi products like <a href="https://edunode.org/blog/minting-nfts">NFTs</a>, AMMs, and Liquidity Pools, which are currently being offered by smart contract providers (like Ethereum, Polkadot, Solana, etc). In general, you can build SCs with basically any programming language, popular programming languages for building decentralized applications are C++, Solidy, Rust, Typescript, GO, Java, and others.</p>
<p>I personally like <a href="https://en.wikipedia.org/wiki/Rust_(programming_language)">Rust</a>, which was developed by Graydon Hoare while at <a href="https://www.mozilla.org/">Mozilla</a>, and is currently being used in many blockchain protocols for the logic of their core functionality. Besides its robustness as a programming language, it is compatible with <a href="https://en.wikipedia.org/wiki/WebAssembly">WebAssembly</a> (an open standard that defines a portable binary-code format for executable programs), enabling high-performance applications on web pages and opening a new world of possibilities for building decentralized applications. This is a very fascinating topic, which we will discuss in more detail in future blog posts.</p>
             <p>I hope that you enjoyed this blog post, if you liked it, please share it with your friends, and feel free to join us on <a href="https://discord.gg/Tv5Y5JW9fq">Discord </a>.</p>


<h4>Resources</h4>
<p> [1] Stellar Turrets: Smart contract protocol for Stellar{' '}
                <a href="https://tss.stellar.org/">
                https://tss.stellar.org/
                </a>{' '}
              </p>
              <p> [2] Project Jump Cannon: Choosing WASM{' '}
                <a href="https://stellar.org/blog/project-jump-cannon-choosing-wasm?locale=en">
                https://stellar.org/blog/project-jump-cannon-choosing-wasm?locale=en
                </a>{' '}
              </p>
              <p> [3] Understanding Stellar Smart Contracts{' '}
                <a href="https://medium.com/stellar-community/understanding-stellar-smart-contracts-23ebe1568b6">
                https://medium.com/stellar-community/understanding-stellar-smart-contracts-23ebe1568b6
                </a>{' '}
              </p>
              <p> [4] The Idea of Smart Contracts by Nick Szabo{' '}
                <a href="https://nakamotoinstitute.org/the-idea-of-smart-contracts/">
                https://nakamotoinstitute.org/the-idea-of-smart-contracts/
                </a>{' '}
              </p>

              <p> [5] Distributed Trustless Workers with Stellar{' '}
                <a href="https://medium.com/lumenauts/distributed-trustless-workers-with-stellar-e197fd1b77f6">
                https://medium.com/lumenauts/distributed-trustless-workers-with-stellar-e197fd1b77f6
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
