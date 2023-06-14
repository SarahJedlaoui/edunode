import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

import NavBar from '../../../NavBar';
import creator from './creator.png';
import suave from '../../suave.gif';
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




export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/the-web3-revolution';
    const title = 'The Web3 Revolution And The New Creator Economy';
    const exampleImage = suave;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />

          <meta
            name="description"
            content="The Web3 Revolution And The New Creator Economy"
          />
        </Helmet>
        <NavBar />

        <Image width={450} src={creator} className="header-image centerimg" fluid />
        <div>
        <Typography
            component="h1"
            variant="h4"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            The Web3 Revolution And The New Creator Economy
              </Typography>
        <h5>“The world is maintained by change – in the elements and in the things they compose. That should be enough for you; treat it as an axiom.” Marcus Aurelius</h5>

<h4>Introduction</h4>
<p>Changes are an important part of our lives, and for creators, this is particularly true. Being able to adapt and evolve harmoniously to the new imperatives of the market is vital in the face of these challenges. The impact of the web on our daily activities is quite substantial, and being able to learn new technologies that make our daily activities more efficient, is crucial, especially in times of political and financial dubiety. These challenges are forcing many companies, households, and individuals to reinvent themselves in order to adapt to the market and to be able to properly face upcoming challenges. In this blog post, we will talk about how the web has changed over the years, how it led to where we are right now, and what it means for the creator economy.</p>

<p>Before we can actually understand what Web3.0 means, it is essential to understand what Web1.0 and Web2.0 are. </p>
<h4>What is Web1.0?</h4>
<p>At the beginning of the internet, there was not really much going on compared to nowadays. That was until 1989, at CERN, Geneva, when Tim Berners-Lee created what was later to be known as the first web server, pioneering the initial phase of the internet as we know it (World Wide Web). From 1991 to 2002 the internet was mainly composed of simple static pages, and it was mainly built using “open protocols” like HTTP, SMTP, and FTP. </p>
<p>This meant that the information displayed was not dynamic, and the data was stored in centralized servers. Most of the early internet was like a huge hyperlinked set of databases where you were only able to read and observe but not interact with the displayed data, which is why it is known to be a “read-only” version of the internet.</p>
<p>The introduction of new technologies like JavaScript (1995) and Flash (1996) allowed more flexibility for data displaying and interesting new features. This, of course, meant that the main way of monetization was mainly via advertising.  Then on the 23rd of September 2002, Netscape gives birth to one of the most important well-known internet companies, the Mozilla Browser was released.</p>
<h4>What is the Web2.0? </h4>
<p>From around 2004 (also known as the read and write era), the internet was more interactive and users were able to interact with websites in a more dynamic way. Users were finally able to generate and share content over the internet. This allowed social networks (like Google, Facebook, Amazon, Apple Twitter, YouTube, and Discord), search engines (Like Google, Bing, and DuckDuckGo), and valuable creators tools like Blender and GIMP to emerge on the internet. </p>
<p>However, it is important to notice that these new platforms started to collect our personal information to serve specialized content. It also allowed these centralized companies to sell our personal data to third parties with and even without our consent. This is one of the main reasons Web2 companies have received a considerable amount of criticism. </p>

<h4>What is Web3.0?</h4>
<p>This leads us to the era we are in right now (also known as the read-write-own era), where more and more products using decentralized technology are being built. The term "Web3" was coined in 2014 by Ethereum co-founder Gavin Wood. And it is usually defined as a new iteration of the World Wide Web which includes concepts such as blockchains, cryptography, decentralization, distributed ledgers, and token-based economies.</p>
<p>Many industries like Gaming, Music, Art, and Payments are currently being disrupted, especially in Art, where artists and creators are able to leverage this technology in the shape of NFTs (check out to learn more about NFTs <a href="https://edunode.org/blog/minting-nfts">here</a>). Digital signatures, decentralized social networks, “play-to-earn” video games that reward players with crypto tokens, and NFT platforms are just some examples of the use cases for Web3. </p>
<h4>The emergence of DAOs.</h4>
<p>Decentralized Autonomous Organizations also known as DAOs, are one of the most fascinating ideas rising up from Web3 technology. DAOs are member-owned communities without centralized leadership. This means that creators are finally able to participate in a whole new, fully automated, and decentralized economy, where finally they are the owners of their content. Recently, a decentralized lending platform, called Solend, went viral after members of the community voted to take over a whale's wallet in order to mitigate a collective risk and avoid liquidations. This of course was an undesired effect of decentralization, however, even though the decision was later overruled by the community it shows how powerful these decentralized organizations are.</p>

<h4>Decentralized Identifiers (DID)</h4>

<p>Decentralized Identifiers (DID) are usually a URL that allows you to identify something. Participating in a new decentralized economy does not mean a lack of user responsibility, on the contrary, decentralization should empower participants to choose which data they wish to share. This data could be anything, from a diploma to an invoice, personal ID, or even a driving license.  Unlike current ways of performing identifications, where your data is stored on centralized servers, DIDs aim to provide a self-sovereign identity solutions, where the verification does not rely on vendors. Some projects developing include <a href="https://trustoverip.org/">Trust Over IP Foundation</a> and <a href="https://www.hyperledger.org/use/aries">Hyperledger Aries</a>.</p>

<h4>Conclusion</h4>

<p>Web3 has set a new paradigm, where creators have actual ownership over their content, and this is great because it helps them achieve their individual goals. However, with great power comes great responsibility and even though Web3 is still in its infancy,  we call all agree that Web3 technology is here to stay, and everyday we notice how new use cases in countless industries are being developed, taking us to a time where the web has a deeper and meaningful role on our daily activities.</p>
<p>If you enjoyed this blog post, please share it with your friends!</p>

<p>By Olvis E. Gil Ríos</p>
<p>Founder of edunode.org</p>
<h4>Further read</h4>
<p> [1] Introduction to Web3{' '}
  <a href="https://ethereum.org/en/web3/">
  https://ethereum.org/en/web3/
  </a>{' '}
</p>
<p> [2] The New Creator Economy - DAOs, Community Ownership, and Cryptoeconomics{' '}
  <a href="https://dev.to/dabit3/the-new-creator-economy-daos-community-ownership-and-cryptoeconomics-lnl">
  https://dev.to/dabit3/the-new-creator-economy-daos-community-ownership-and-cryptoeconomics-lnl
  </a>{' '}
</p>

<p> [3] What Is Web 2.0? {' '}
  <a href="https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html">
  https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html
  </a>{' '}
</p>

<p> [4] Crypto, web3, and the Metaverse {' '}
  <a href="https://www.bennettinstitute.cam.ac.uk/wp-content/uploads/2022/03/Policy-brief-Crypto-web3-and-the-metaverse.pdf">
  https://www.bennettinstitute.cam.ac.uk/wp-content/uploads/2022/03/Policy-brief-Crypto-web3-and-the-metaverse.pdf
  </a>{' '}
</p>
<p> [5] How to Win the Future: An Agenda for the Third Generation of the Internet {' '}
  <a href="https://a16z.com/wp-content/uploads/2022/01/WEB3-Policy-Handbook-PxP.pdf.pdf">
  https://a16z.com/wp-content/uploads/2022/01/WEB3-Policy-Handbook-PxP.pdf.pdf
  </a>{' '}
</p>


<p>Photo by justicon at Flaticon</p>
        </div>
        
        <Container flud>
          

          <Row>
            <b></b>
            <b></b>
            <b></b>
            <b></b>
            <p></p>
            <Col className="main-section">

              
              

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