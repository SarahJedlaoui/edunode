import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import orderbook from "../img/orderbook.gif"
import tut1 from "../img/tut1.png"
import tut2 from "../img/tut2.png"
import tut3 from "../img/tut3.png"
import tut4 from "../img/tut4.png"
import tut5 from "../img/tut5.png"
import tut6 from "../img/tut6.png"
import tut7 from "../img/tut7.PNG"
import tut8 from "../img/tut8.PNG"
import tut9 from "../img/tut9.PNG"
import tut10 from "../img/tut10.PNG"
import tut11 from "../img/tut11.PNG"
import tut12 from "../img/tut12.PNG"
import tut13 from "../img/tut13.PNG"
import kelp from "../img/kelp.png"
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
import { Helmet } from 'react-helmet';


const HighLight1 = () => {
  const codeString = 'Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const HighLight2 = () => {
  const codeString = 'wget https://golang.org/dl/go1.15.1.linux-amd64.tar.gz';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const HighLight3 = () => {
  const codeString = 'wget https://github.com/stellar/kelp/releases/download/v1.9.0/kelp-v1.9.0-linux-amd64.tar';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const HighLight4 = () => {
  const codeString = 'tar -xvf kelp-v1.9.0-linux-amd64.tar';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const HighLight5 = () => {
  const codeString = 'cd kelp-v1.9.0';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};
const HighLight6 = () => {
  const codeString = './kelp';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const HighLight7 = () => {
  //const codeString = 'http://localhost:3000/exchanges';
  const codeString = '';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};


const HighLight8 = () => {
  const codeString = './kelp server --no-electron';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};




export default class Kelp extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    const shareUrl = "https://edunode.netlify.com/blog/kelp"
    const title = "Kelp: Setup your first trading bot on the Stellar Network"
    const exampleImage = kelp

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          <meta
            name="title"
            content="Kelp: Setup your first trading bot on the Stellar Network"
          />
          <meta
            name="description"
            content="Automated trading systems and trading bots like Kelp, are a quite an important concept in the financial markets, specially in the Cryptocurrency space. "
          />
        </Helmet>
        <NavBar />

        <Container>
          <h2>
            Kelp: Setup your first trading bot on the Stellar Network
          </h2>
          <Image src={kelp} className="header-image" fluid />
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>
                Automated trading systems and trading bots like Kelp,
                are a quite an important concept in the financial
                markets, specially in the Cryptocurrency space. When
                you are trading any type of assets on a decentralized
                or centralized exchange, there is a chance that a
                trading bot is the one dealing with your offer.
                Strategies can be used across different exchanges
                (inter-exchange) or within one exchange
                (intra-exchange). Trading bots are becoming very
                popular specially for companies that are looking into
                having a better control over the liquidity of their
                order books by automatically generating orders based
                on predefined set of rules using a particular trading
                strategy. Currently Kelp supports only the Buysell
                Strategy, but you are free to setup your strategies
                using your own code.{' '}
              </p>
              <p> </p>
              <p>
                The main goal of setting up a trading bot is to
                possibility a more liquid order book. In this blog I
                will explain what Kelp is and will provide a high end
                tutorial about setting up a Kelp bot using Ubuntu
                Windows Subsystem for Linux V2, so you can start
                testing your own trading strategies.
              </p>
              <h3>What is Kelp?</h3>
              <p>
                {' '}
                <a href="https://kelpbot.io/">Kelp</a> is a free,
                customizable, open-source trading bot for the Stellar
                universal marketplace. It also has a command line
                which allows you to create new trading strategies
                using you own code. Kelp also has support for more
                100+ centralized exchanges.{' '}
              </p>
              <h3>The importance of Liquidity</h3>
              <p>
                Liquidity is a key concept in the stock and
                cryptocurrency markets and usually refers to how easy
                it is for an asset or token to be turned into cash
                without affecting in a significant way the price of
                the asset. Its availability represents huge
                repercussions for token holders, traders and other
                interested parties. For this reason, it is of high
                importance for asset issuers to promote a heathy
                market that protect token holders, traders and
                exchanges from market disruption and manipulation.
              </p>

              <h3>
                Market makers and their role in providing Liquidity
              </h3>
              <p>
                A market maker is an organization or an individual who
                actively quotes two-sided markets in a security,
                providing bids and asks along with the market size of
                each. Market makers provide liquidity and depth to
                markets and profit from the difference in the bid-ask
                spread.
              </p>
              <p>
                A market maker bot creates offers to buy and sell
                token on certain market and keeps a spread for a
                potential profit.
              </p>
              <br></br>
              <Image src={orderbook} fluid />
              <br></br>
              <br></br>
              <i>
                Order book depth chart on a currency exchange. The
                x-axis is the unit price, the y-axis is cumulative
                order depth. Bids (buyers) on the left, asks (sellers)
                on the right. (Wikipedia)
              </i>
              <br></br>
              <br></br>
              <h3>
                How to setup your first trading bot on the Stellar
                Network
              </h3>

              <p>
                Kelp offers an user friendly GUI (graphical user
                interface) which can be compiled on Linux, Windows and
                iOS. For this tutorial we are compiling Kelp on Ubuntu
                18.04/Windows 10.{' '}
              </p>
              <p>
                Before installing Kelp, it is necessary to install
                Windows Subsystem for Linux (WSL), which allows you
                run a Linux environment directly on your Windows 10
                without the need for a virtual machine.
              </p>
              <p>
                You do this by running the following command (as
                admin) on the Windows PowerShell:
              </p>
              <br></br>
              <HighLight1 />
              <br></br>

              <p>
                Then by going to Windows Store and Installing Ubuntu
                18.04 LTS.
              </p>
              <br></br>
              <Image src={tut1} fluid />
              <br></br>
              <br></br>
              <p>
                After done, click on Launch, which will start the
                Ubuntu client. Then, add an username and password for
                Linux in the Ubuntu terminal. Once the user config is
                done, make sure to install Golang on your Ubuntu since
                is the language in which the bot was built.
              </p>

              <p>
                You can get the latest version of Golang here:{' '}
                <a href="https://golang.org/dl/">
                  https://golang.org/dl/
                </a>{' '}
              </p>

              <p>
                We have downloaded Golang to our Ubuntu using the
                following command:
              </p>

              <HighLight2 />

              <p>
                Once you have succesfully downloaded Golang, make sure
                to download the link of the Kelp binaries to run it on
                your OS. You can find the list here:{' '}
                <a href="https://github.com/stellar/kelp">
                  {' '}
                  https://github.com/stellar/kelp
                </a>{' '}
              </p>
              <br></br>
              <Image src={tut2} fluid />
              <br></br>
              <br></br>
              <p>
                In our case we will use the binary
                “kelp-v1.9.0-linux-amd64.tar” and we will use the
                following command to download the binaties (by copying
                the URL of the Binary) into our directory:{' '}
              </p>

              <HighLight3 />

              <p>
                Then you will see a file named
                “kelp-v1.9.0-linux-amd64.tar” on your directory. To
                extract the file to the current directory type on the
                terminal:
              </p>

              <HighLight4 />
              <p>
                Then you can proceed to enter to the folder
                kelp-v1.9.0 with the following command:
              </p>

              <HighLight5 />
              <p>And proceed to execute the binary with:</p>
              <HighLight6 />

              <p>
                During the installation you will need to grant Kelp
                access your firewall so that the application can talk
                to the ccxt server.{' '}
              </p>
              <br></br>
              <Image src={tut3} fluid />
              <br></br>
              <br></br>
              <p>
                Kelp uses CCXT to enable access to more than 100
                centralized exchanges. To make sure that CCXT was
                properly installed in your system, you can run
              </p>

              <HighLight7 />

              <p>
                If the response returned is an array of the different
                exchange names available on CCXT, then the CCXT server
                was installed correctly.
              </p>

              <p>
                If you are experiencing an{' '}
                <b>creating window failed: canceller.cancelled</b>{' '}
                error, try the following command on the terminal:
              </p>

              <HighLight8 />

              <p>
                The terminal will proceed to load the application and
                will display a live feed of the current operations
                happening on the sever.
              </p>
              <br></br>
              <Image src={tut4} fluid />
              <br></br>
              <br></br>
              <p>
                CCXT will take port 3000 and Kelp should open on
                http://localhost:8000/
              </p>
              <br></br>
              <Image src={tut5} fluid />
              <br></br>
              <br></br>
              <p>
                If you manage to reach this screen, congrats, you have
                succesfully compiled Kelp on your machine.{' '}
              </p>
              <h3>Managing your Bots</h3>
              <p>
                By clicking on “Autogenerate your first test bot” the
                bot will be created. It will automatically generate a
                new secret key and execute the relevant trustlines.{' '}
              </p>
              <br></br>
              <Image src={tut6} fluid />

              <br></br>
              <br></br>
              <p>
                As we can observe, the autogenerated bot with a
                "BuySell" strategy will start to initialize on the
                Stellar testnet. The bot will display the markets and
                the balances for this parcular bot for those tokens.{' '}
              </p>
              <p>
                If you would like to see the issuer of the base asset,
                you can do it by hovering on the "i" icon.{' '}
              </p>
              <p> </p>

              <Image src={tut7} fluid />
              <br></br>
              <br></br>
              <p>
                The first option called "Show Offers" will redirect
                you to the status of the offers on{' '}
                <a href="https://stellar.expert/">Stellar Expert</a>{' '}
              </p>
              <Image src={tut8} fluid />
              <br></br>
              <br></br>

              <p>
                The second option called "Show Market" will allow you
                to see the current BuySell spread on{' '}
                <a href="https://testnet.interstellar.exchange/">
                  Interstellar.exchange
                </a>{' '}
              </p>
              <Image src={tut9} fluid />
              <br></br>
              <br></br>
              <p>
                The third option called "Edit" will allow you to see
                and edit the details of the autogenerated bot,
                incluidng the Public Key, the base asset and the quote
                asset code.
              </p>

              <Image src={tut10} fluid />
              <br></br>
              <br></br>
              <p>
                Kelp allows the creation of{' '}
                <a href="https://www.investopedia.com/terms/b/bid.asp#:~:text=Key%20Takeaways-,A%20bid%20is%20an%20offer%20made%20by%20an%20investor%2C%20trader,the%20financial%20instrument%20in%20question.">
                  Bids
                </a>{' '}
                and{' '}
                <a href="https://www.investopedia.com/terms/a/ask.asp">
                  Asks
                </a>{' '}
                at different prices and levels. A Bid allows us to buy
                the base asset and sell the quote asset. An Ask is an
                offer to sell the market pair or selling the base
                asset and buying the quote asset. Quote assets are
                basically any token available on the market.
              </p>

              <p>
                Bellow, at the "Strategy Settings", we will be able to
                setup the details of our BuySell strategy.
              </p>
              <Image src={tut11} fluid />
              <br></br>
              <br></br>
              <p>
                The Bot takes the Numerator price of the base asset
                (in this case XLM) and divides that by the Denominator
                to calculate the final price. This will allow us to
                price both assets differently but in the same units.
                We also have the possibility to refresh the prices to
                see current price which will be used by the bot.
              </p>
              <p>
                On "Current Price" you will be able to see the
                explaination of how the pricing of the asset works.
              </p>
              <p>
                Below, we can see the 4 different levels that the bot
                uses.
              </p>
              <Image src={tut12} fluid />
              <br></br>
              <br></br>
              <p>
                The levels represents the change in percentange that a
                price must variate form the center price to perform
                the operation related to the amount added to the
                field.
              </p>
              <p>
                Finally, we are able to start the bot by clicking on
                the button "Start". Please keep in mind that as long
                as the bot stays running and the program open, the
                offers will be active and they will consume as soon as
                the price changes according to the details of the
                strategy in the bot configuration. So if you would
                like to stop your current offers, make sure to cancel
                the current offers by clicking on "Stop" or simply by
                quitting the application.{' '}
              </p>
              <Image src={tut13} fluid />
              <br></br>
              <br></br>
              <h3>Risks</h3>
              <p>
                I hope that this article was useful, but remember that
                this article is for educational purposes only and is
                intended to be a guide to be used on the Stellar
                Tesnet. Any attempt of trying Kelp on live
                environments might be contraproductive and might
                generate capital losses, so please be careful and make
                sure you know what you are doing when using
                automatized trading systems.{' '}
              </p>

              <h3>Conclusion</h3>
              <p>
                Kelp is the most innovative automated trading systems
                in the cryptocurrency space and its main goal is to
                solve the issue of liquidity which most of the
                projects in the industry face. The beauty of Kelp is
                that it is not only available on the Stellar Network
                but also allows to any developer to start developing
                their own trading strategies which they could
                potentially apply in any of the more than 100
                centralized exchanges which Kelp provides access to.{' '}
              </p>

              <p></p>
              <br></br>
              <p>
                This article was created as part of the Kelp Overview
                Battle organized by{' '}
                <a href="https://stellarbattle.com/kelp-overview-battle/">
                  StellarBattle
                </a>{' '}
              </p>
              <h3>Resources</h3>
              <p>
                [1] Github repository:{' '}
                <a href="https://github.com/stellar/kelp">
                  https://github.com/stellar/kelp
                </a>{' '}
              </p>
              <p>
                [2] Kelp GUI: Your First Automated Trading Bot:{' '}
                <a href="https://www.youtube.com/watch?v=_UDZfcQWOYg&feature=youtu.be">
                  https://www.youtube.com/watch?v=_UDZfcQWOYg&feature=youtu.be
                </a>{' '}
              </p>
              <p>
                [3] Engineering Talks - Kelp GUI:{' '}
                <a href="https://www.youtube.com/watch?v=zxBoERxZcQs">
                  https://www.youtube.com/watch?v=zxBoERxZcQs
                </a>{' '}
              </p>
              <p>
                [4] Understanding Liquidity Risk:{' '}
                <a href="https://www.investopedia.com/articles/trading/11/understanding-liquidity-risk.asp">
                  https://www.investopedia.com/articles/trading/11/understanding-liquidity-risk.asp
                </a>{' '}
              </p>
              <p>
                [5] Market Makers:{' '}
                <a href="https://www.investopedia.com/terms/m/marketmaker.asp">
                  https://www.investopedia.com/terms/m/marketmaker.asp
                </a>
              </p>
              <p></p>

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