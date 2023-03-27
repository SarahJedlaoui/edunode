import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import orderbook from '../img/orderbook.gif';
import tut7 from '../img/tut7.PNG';
import tut8 from '../img/tut8.PNG';
import tut9 from '../img/tut9.PNG';
import tut10 from '../img/tut10.PNG';
import tut11 from '../img/tut11.PNG';
import tut12 from '../img/tut12.PNG';
import tut13 from '../img/tut13.PNG';
import security from '../cyber-security.png';
import lobstr from '../lobstr.png';
import stellarguard from '../stellarguard.png';
import me from '../me.jpg';
import freighter from '../freighter.PNG'
import kicon from '../keybaseicon.png';
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
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class Kelp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const shareUrl =
      'https://edunode.netlify.com/blog/herramientas-de-seguridad';
    const title =
      '¿Cómo mantener sus lúmenes seguros? | Consejos y herramientas de seguridad';
    const exampleImage = security;

    return (
      <div>
        <NavBar />

        <Container>
          <h2>
          ¿Cómo mantener sus lúmenes seguros? | Consejos y herramientas de seguridad
          </h2>
          <Image src={security} className="header-image" fluid />
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>
                Trying to keep your assets safe from “bad actors” is
                one of the main challenges that blockchain and
                cryptocurrencies face right now. This is why it is
                paramount, when dealing with cryptocurrencies, to
                learn and use the best tools to keep your funds safe.
              </p>

              <p>
                Lately, the community has been experiencing an
                increasing amount of these “bad actors” who have been
                trying to scam some members of the Stellar Community,
                for this reason, I have created this blog where I lay
                out some tips and security tools you can have in mind.
              </p>
              <p>
                As the community grows and more companies and
                individuals get aware of the network, there will be a
                small minority of people that will try to steal your
                Lumens. For example, a scammer might send you an
                e-mail spoofing SDF or a company that you trust,
                promising you a “stacking” or a “giveaway” offer. If
                you receive an e-mail asking for your secret key in
                order to claim lumens, it is certainly a scam.
                Remember that the SDF will never ask for your secret
                keys, always make sure to double-check the domain of
                the Email sender.{' '}
              </p>
              <p>
                Another way is by sending you “stroops” or small
                amounts of lumens, with a link attached to the memo of
                the transaction. Spoofing community members have also
                been one of the ways bad actors try to steal your
                funds by sending you messages via Discord or Keybase.
                If you are using Discord, make sure to check the
                user's profile and check that the user sending you the
                message is the person they say they are.
              </p>

              <p>
                <iframe
                  src="https://giphy.com/embed/TjvSaA58qr9XbFyV5n"
                  width="480"
                  height="254"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
              </p>

              <p>
                There are also some tips you can have in mind if you
                are currently developing an application on Stellar.
                For example: make sure to use always{' '}
                <a href="https://letsencrypt.org/docs/certificates-for-localhost/">
                  SSL for Localhost development
                </a>{' '}
                and make sure you use a password manager (like{' '}
                <a href="https://www.lastpass.com/">Lastpass</a>
                ). Using a hardware wallet is one of the best ways to
                keep your lumens safe, I recommend you to use{' '}
                <a href="https://www.ledger.com/start/">Ledger</a>,
                which is a really easy-to-use hardware wallet.
              </p>
              <p> </p>
              <br></br>
              <h4>Custodial vs Non-Custodial Wallets</h4>
              <p></p>
              <p>
                A Custodial wallet keeps your assets and sets measures
                to keep your assets safe. If you are a beginner in
                crypto, a Custodial Wallet will probably be the best
                option for you (For example:{' '}
                <a href="https://www.binance.com/">Binance</a>,
                <a href="https://www.coinbase.com/">Coinbase</a>,
                <a href="https://www.kraken.com/">Kraken</a>, etc).
              </p>

              <p>
                If you are looking for a trusted and secure Custodial
                Wallet, then LOBSTR is the right wallet for your.
              </p>
              <h4>LOBSTR Vault</h4>
              <br></br>
              <Image src={lobstr} fluid />
              <p>
                <a href="https://lobstr.co/">LOBSTR</a> allows you to
                easily add security measures like multi-sig to your
                stellar account. They offer a mobile app that can be
                accessed from Google Play or from the Apple Store.
              </p>
              <h4>Freighter</h4>
              <p>
                If you care alot about security, it makes sense to
                securely manage your assets using a Non-Custodial
                wallet, this way you have absolute control over the
                private key, and hence, your assets.
              </p>
              <p></p>
              <p>
                <a href="https://www.freighter.app/">Freighter </a>
                is a non-custodial wallet developed by the Stellar
                Development Foundation. It works similar to the way{' '}
                <a href="albedo.link/">Albedo</a> works, and it allows
                you to perform operations on the network, without
                exposing your private keys. If you would like to learn
                more about Albedo,{' '}
                <a href="https://edunode.org/blog/albedo">here</a> you
                can find a link to my previous blog.
              </p>
              <Image src={freighter} fluid />
              <p>
                Freighter is a non-custodial wallet extension that
                enables you to sign Stellar transactions via your
                browser. It's a safer alternative to copying and
                pasting private keys for use with web applications.
              </p>

              <br></br>
              <h4>StellarGuard</h4>
              <p>
                And lastly,{' '}
                <a href="https://stellarguard.me/">StellarGuard </a>{' '}
                provides a very easy to use Web platform where you can
                add security to your day-to-day transactions by adding
                multi-signature, and validation using an Authenticator
                App.
              </p>
              <br></br>
              <Image src={stellarguard} fluid />
              <br></br>
              <p>
                StellarGuard uses the Stellar's built in
                multi-signature technology to require a transaction to
                be signed both by you and by StellarGuard before it is
                considered valid.
              </p>

              <h4>Conclusion</h4>

              <p>
                I hope that you have enjoyed reading this blog post as
                much as I enjoyed writting it, and I hope it was
                helpful. Please keep in mind that this is not
                investment advise and if you have any question, please
                feel free to reach us on{' '}
                <a href="https://discord.gg/MCCEv2DU">Discord</a> or
                on{' '}
                <a href="https://twitter.com/edunodeorg">Twitter</a>.{' '}
              </p>
              <p></p>
              <br></br>
              <h3>Resources</h3>

              <p>
                [1] Stellar | Security Guide - How To Protect Yourself
                From Scammers:{' '}
                <a href="https://www.stellar.org/blog/stellar-security-guide-protect-scammers">
                  https://www.stellar.org/blog/stellar-security-guide-protect-scammers
                </a>{' '}
              </p>
              <p>
                [2] Albedo | a security-centric, developer-friendly,
                and easy-to-use delegated signer for Stellar Network
                From Scammers:{' '}
                <a href="https://stellar.expert/blog/introducing-albedo-delegated-signer">
                  https://stellar.expert/blog/introducing-albedo-delegated-signer
                </a>{' '}
              </p>
              <p>
                [3] Ledger | The original hardware wallet. Easily
                start your crypto journey: buy crypto, secure your
                assets and manage them in one single-app:
                <a href="https://www.ledger.com/">
                  https://ledger.com/
                </a>{' '}
              </p>
              <p>
                [4] freighter | A Stellar wallet for every website:
                <a href="https://www.freighter.app/">
                  https://www.freighter.app/
                </a>{' '}
              </p>
              <br></br>
              <br></br>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Card style={{ width: '9rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Body>
                  <Card.Title>Olvis Gil</Card.Title>
                  <Card.Text>
                    <p>
                      Economist, Entrepreneur and self-taught
                      Developer.
                    </p>
                  </Card.Text>
                  <a href="https://keybase.io/olvis_experio">
                    <img style={{ width: '25px' }} src={kicon} />
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Row>
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
                image={`${String(window.location)}/${exampleImage}`}
                className="Demo__some-network__share-button"
              >
                <VKIcon size={32} round />
              </VKShareButton>
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    );
  }
}