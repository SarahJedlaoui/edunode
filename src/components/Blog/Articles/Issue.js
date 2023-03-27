import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import issue from "./issue.png"
import issue1 from "./issue1.PNG"
import me from "../me.jpg"
import lab from "./laboratory.PNG"
import trust from "./trust.PNG"
import sign from "./sign.PNG"
import sign2 from "./sign2.PNG"
import signed from "./signed.PNG"
import submitted from "./submitted.PNG"
import add from "./add.PNG"
import add2 from "./add2.PNG"
import newsign from "./newsign.PNG"
import newsign2 from "./newsign2.PNG"
import expert from "./expert.PNG"
import keybase from "./keybaseicon.png"
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
import {Helmet} from "react-helmet";
import "./style.css"

export default class Issue extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isAuthenticated: null,
    };

    
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/How-to-issue';
    const title = "How to issue assets on the Stellar Network"
    const exampleImage = issue

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          <meta name="title" content="How to issue assets on the Stellar Network" />
          <meta
            name="description"
            content="One of the advantages of the Stellar network is that can be used to track, hold, and transfer any type of asset: dollars, euros, bitcoin, stocks, gold, and other tokens of value. Assets on the Stellar network represent a credit from a particular issuer of the asset."
          />
        </Helmet>
        <NavBar />

        <Image src={issue} className="header-image" fluid />
        <Container>
          <h2>How to issue assets on the Stellar Network</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>
                One of the advantages of the Stellar network is that
                can be used to track, hold, and transfer any type of
                asset: dollars, euros, bitcoin, stocks, gold, and
                other tokens of value. Assets on the Stellar network
                represent a credit from a particular issuer of the
                asset.
              </p>
              <p>
                If you are planning to issue an asset on Stellar I
                have great news for you, creating an asset on the
                Stellar Network is as easy as performing a few
                operations, whether using the Stellar Laboratory,
                alternatively doing the calls directly using one of
                the currently available{' '}
                <a href="https://www.stellar.org/developers/reference/">
                  libraries
                </a>
                .{' '}
              </p>

              <h3>Creating issuer and distribution accounts</h3>

              <p>
                The first step when creating an asset is by generating
                a distribution account and an issuer account. You can
                achieve this using the{' '}
                <a href="https://laboratory.stellar.org/#account-creator?network=test">
                  Stellar Laboratory
                </a>{' '}
                , going to “Create Account” and by clickling on
                “generate keypair”.
              </p>
              <Image src={lab} fluid />
              <p>
                Once both accounts are created, make sure to fund the
                accounts with some lumens, since technically Stellar
                accounts does not exist until they have some lumens on
                it. If you are using the Stellar testnet, you can use
                the Friendbot, which will automatically generate
                10,000 XLM so you can easily start performing test
                operations.
              </p>

              <h3>Creating an asset</h3>
              <p>
                In order to create an asset, you need to open a
                trustline to the issuer account. To do this with the
                Laboratory, you will need to create a transaction
                coming from the "distribution account". You can leave
                out the “Base Fee” and Memo as default.{' '}
              </p>
              <Image src={issue1} fluid />
              <p>
                {' '}
                At the bottom, select the “Change Trust” in the
                Operation Type field. Select Asset 4 Alphanumeric and
                proceed to add the name of the asset (in our case we
                will create the test asset "XEDU"). Then add the
                Issuer Account in the "Issuer Account field".
              </p>
              <Image src={trust} fluid />
              <p>
                You can leave Trust Limit and Source Account fields as
                default and proceed to Sign in the transaction with
                the Transaction Signer.{' '}
              </p>
              <Image src={sign} fluid />
              <p>
                Then Add the Secret Key of the Distribuitor Account
                and submit it with the Transaction Submitter.
              </p>
              <Image src={sign2} fluid />
              <Image src={signed} fluid />
              <p>
                Then proceed to post the transaction with the
                Transaction Post endpoint. Now the transaction should
                have been created.{' '}
              </p>
              <Image src={submitted} fluid />
              <p>
                Now you need to add the Tokens created to the
                Distribution Account. To do this, you need to create a
                payment operation coming from the Issuer Account (you
                will need to fetch the “Transaction Sequence Number”
                once again).
              </p>
              <Image src={add} fluid />
              <p>
                Below you will need to add payment as Operation Type,
                then select the Distribution as the Destination, add
                the Asset name once again, the amount that you wish to
                "generate" and proceed to sign the transaction.
              </p>
              <Image src={add2} fluid />
              <Image src={newsign} fluid />
              <Image src={newsign2} fluid />
              <br></br>
              <p>
                Congratulations, you have succesfully created a new
                asset on the Stellar network. Almost instantly, you
                will be able to see the balance of the newly created
                asset on one of the Stellar Explorer. In this case, we
                will use{' '}
                <a href="https://stellar.expert/">Stellar.Expert</a>.{' '}
              </p>
              <Image src={expert} fluid />
              <p>
                As you can see the new test asset named "XEDU" was
                created and is available on the distribution account.
              </p>
              <p>
                If you found this article useful, please share it and
                follow us on social media
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
                      Economist, Entrepreneur and self-taught
                      Developer
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