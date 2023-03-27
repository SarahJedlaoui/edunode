import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import snft from './newnft1.png';
import lite from './litemintlogo.png';

import issue1 from './issue1.PNG';
import me from '../me.jpg';
import lab from './laboratory.PNG';
import trust from './trust.PNG';
import sign from './sign.PNG';
import sign2 from './sign2.PNG';
import signed from './signed.PNG';
import submitted from './submitted.PNG';
import add from './add.PNG';
import add2 from './add2.PNG';
import newsign from './newsign.PNG';
import newsign2 from './newsign2.PNG';
import expert from './expert.PNG';
import keybase from './keybaseicon.png';
import nft1 from './nft1.jpg';
import jack from './jackfirsttweet.jpeg';
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
} from 'react-share';
import { Helmet } from 'react-helmet';
import './style.css';

export default class Issue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/minting-nfts';
    const title = 'What are NFTs and how to mint them using the Stellar Network?';
    const exampleImage = snft;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          
          <meta
            name="description"
            content="Have you ever of NFTs? I would say probably, it is right now all over the internet"
          />
        </Helmet>
        <NavBar />

        <Image src={snft} className="header-image" fluid />
        <Container>
        <Typography
                component="h1"
                variant="h4"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                What are NFTs and how to mint them using the Stellar Network?
              </Typography>
      

          <Row>
          <b></b>
         <b></b>
         <b></b>
         <b></b>
            <Col xs={12} sm={8} className="main-section">
              <p>
              Have you ever heard of "NFTs"? I would say probably, it is right now all over the internet, and it is one of the most fascinating things that happened to the blockchain/crypto industry.</p>
              <p>
              The abbreviation "NFT" stands for "non-fungible token", and it represents a unit of data stored on a digital ledger, which is normally referred to as a blockchain. This ledger can be used as proof that certifies the ownership of a digital asset.</p>
              
              <p>
              This ability makes NFTs particularly attractive for artists looking into finding a market for their artworks because it allows them to prove and track the ownership of their paintings.</p>
              <Image src={nft1} fluid />
              <p>By pikisuperstar</p>
              <p>
              Almost everything can be turned into an NFT (paintings, gifs, images, music, etc), and there is currently a huge interest from companies, artists, and art collectors looking into creating, buying, and selling those amazing collectibles.</p>
              <h4>But then, what are fungible tokens?</h4>
<p>You might be wondering if NFTs are non-fungible, then which type of assets are fungible tokens?, regular fiat money is fungible, shares of a company are fungible (there is no difference between a share of the company and another share of the same company), and even Stellar Lumens are fungible (1 Lumen = 1 Lumen).</p>              
             <h4>Origins</h4>
              <p>
              NFTs are all over the place, and it is being used today to help artists find customers for their artworks. In June 2017, a crypto art project called CryptoPunks was created (by Larva Labs) and is considered as an inspiration for the ERC-721 standard for issuing NFTs on the Ethereum blockchain. Then in November 2017, CryptoKittes was released (by Dapper Labs), going immediately viral, and making them be known worldwide for their easy-to-use platform which allows anyone to easily buy, sell and breed virtual cats.</p>
        
              <p>More recently, big names like Jack Dorsey, Elon Musk, Mark Cuban, and Gary Vaynerchuk have jumped into the NFT rabbit hole. For example, Twitter CEO Jack Dorsey's first tweet sold for $2.9 million.
</p>


<Image src={jack} fluid />
<h4>How to mint your own NFTs using the Stellar Network</h4>
<Image src={lite} fluid />
<p>If you are looking for an easy-to-use platform for issuing your own NFTs on Stellar, <a href="https://litemint.com/">Litemint </a> is the platform you need. It leverages the advantages of the Stellar Network, allowing the issuance of NFTs in a fast, secure, and with near-zero fees.</p>

<p>In the case that you are a bit more technical and are interested in creating an NFT on the Stellar Network, feel free to check out the following <a href="https://www.reddit.com/r/Stellar/comments/m9mklm/stepbystep_creating_an_nft_on_stellar_network/">step-by-step guide </a> written by the Reddit user /u/citystates, about how you can easily create an NFT on Stellar using the Stellar Laboratory.</p>
<p>I hope that you enjoyed this blog post, if you liked it, please share it with your friends, and feel free to join us on <a href="https://discord.gg/Tv5Y5JW9fq">Discord </a>.</p>


<h4>Resources</h4>
<p> [1] NFTs on Stellar{' '}
                <a href="https://www.stellar.org/events/nfts-on-stellar">
                https://www.stellar.org/events/nfts-on-stellar
                </a>{' '}
              </p>
              <p> [2] Tradable, Breedable, Non-Fungible Tokens Now Available on Stellar with Litemint{' '}
                <a href="https://blog.litemint.com/tradable-breedable-non-fungible-tokens-now-available-on-stellar-with-litemint/">
                https://blog.litemint.com/tradable-breedable-non-fungible-tokens-now-available-on-stellar-with-litemint/
                </a>{' '}
              </p>
              <p> [3] This ethereum-based project could change how we think about digital art{' '}
                <a href="https://mashable.com/2017/06/16/cryptopunks-ethereum-art-collectibles/">
                https://mashable.com/2017/06/16/cryptopunks-ethereum-art-collectibles
                </a>{' '}
              </p>
              <p> [4] Twitter CEO Jack Dorsey’s first tweet NFT sells for $2.9 million{' '}
                <a href="https://www.cnbc.com/2021/03/22/twitter-ceo-jack-dorseys-first-tweet-nft-sells-for-2point9-million.html">
                https://www.cnbc.com/2021/03/22/twitter-ceo-jack-dorseys-first-tweet-nft-sells-for-2point9-million.html
                </a>{' '}
              </p>
              <p> [5] Step-By-Step: Creating an NFT on Stellar Network{' '}
                <a href="https://www.reddit.com/r/Stellar/comments/m9mklm/stepbystep_creating_an_nft_on_stellar_network/">
                https://www.reddit.com/r/Stellar/comments/m9mklm/stepbystep_creating_an_nft_on_stellar_network/
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
              <Card style={{ width: '9rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Body>
                  <Card.Title>Olvis Gil</Card.Title>
                  <Card.Text>
                    <p>
                      Founder at <a href="https://www.mozartpay.com/">
mozartpay.com                </a> and <a href="https://edunode.org/">
edunode.org                </a>
                    </p>
                  </Card.Text>
                  <a href="https://keybase.io/olvis_experio">
                    <img style={{ width: '25px' }} src={keybase} />
                  </a>
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
