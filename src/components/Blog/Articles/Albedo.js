import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import issue from "./issue.png"
import issue1 from "./issue1.PNG"
// import me from "../me.jpg"
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
import { Helmet } from 'react-helmet-async'
import "./style.css";
import albedo1 from "./albedo11.PNG"
import albedo2 from "./albedo2.png"
import albedo3 from "./albedo1_3.PNG"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import albedo from "./albedologo1grey.png";
import albedocode1 from "./albedocode1.PNG"
import Iframe from 'react-iframe'
import me from '../mepic.png';

const HighLight1 = () => {
  const codeString = 'npx create-react-app nameofyourapp';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const HighLight2 = () => {
  const codeString = 'npm i @material-ui/core react-bootstrap @albedo-link/intent';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const HighLight3 = () => {
  const codeString = 'react-scripts start';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};



export default class Albedo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };


  }
  render() {
    const shareUrl = "http://edunode.netlify.app/blog/How-to-issue"
    const title = "Identity verification with Albedo"
    const exampleImage = albedo

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
        </Helmet>
        <NavBar />

        <Container>
          <h2>Identity verification with Albedo</h2>
          <Image src={albedo} className="header-image" fluid />
          <Row>
            <Col  className="main-section">
              <p>
                Recently{' '}
                <a href="https://stellar.expert/blog/introducing-albedo-delegated-signer">
                  released
                </a>
                , Albedo allows any application to request transaction
                signing or identity verification without ever exposing
                your secret key. Built by{' '}
                <a href="https://github.com/orbitlens">orbitlents</a>,
                the same creator of{' '}
                <a href="https://stellar.expert/">Stellar.Expert</a>,
                Albedo enables a safe and reliable way to use Stellar
                accounts without trusting anyone with a secret key
                during the process.
              </p>
              <p></p>
              <p>
                It works like a bridge for other applications that
                allows them to ask permission to sign a transaction or
                verify identity on the user's behalf so that the same
                account can be used across the whole universe of
                Stellar applications. Sensitive data is encrypted and
                safely stored in the browser, it is important to point
                out that no one has access to the user's secret key.
              </p>
              <p>
                Albedo also provides a{' '}
                <a href="https://albedo.link/playground">
                  playground
                </a>
                , which allows developers to quickly get started
                building applications on top of it.
              </p>
              <p>
                The purpose of this tutorial, we will be covering a
                small part of the great variety of features and
                possibilities that Albedo enables, however it will
                certainly give you a better understanding of how
                Albedo and identity verification on Stellar works, so
                you can start using it on your own applications.
              </p>
              <p>
                We will be building a "Log In with Albedo" widget
                using React, and by installing the following
                dependencies: Material UI, React Bootstrap, and
                Albedo, you can find the github repository for the
                code of this tutorial{' '}
                <a href="https://github.com/Olvisgil/LogInWithAlbedo">
                  here
                </a>
                .
              </p>
              <p></p>
              <p>
                First that all, we will need an integrated development
                environment (IDE). In our case we will use Visual
                Studio Code, which is an open-source IDE developed by
                Microsoft and provides a user-friendly workspace for a
                great variety of programing languages. You can
                download it{' '}
                <a href="https://code.visualstudio.com">here</a>.
              </p>

              <p>
                After downloading and installing VSC, you will see an
                user interface which will look like this:{' '}
              </p>

              <Image src={albedo1} fluid />
              <br></br>
              <br></br>
              <p>
                After downloading it and installing it, let's proceed
                to create a new folder or open an already created
                folder using the IDE. Then, by going to the integrated
                terminal that VSC provides, let's create our React App
                by typing the following command:
              </p>

              <HighLight1 />

              <p>
                Developed by Facebook,{' '}
                <a href="https://github.com/facebook/create-react-app">
                  this
                </a>{' '}
                command will automatically set up a modern web
                application without having to configure it. Depending
                on your operating system it may take some minutes to
                install.{' '}
              </p>

              <Image src={albedo2} fluid />
              <br></br>
              <br></br>
              <p>
                Once the React installation is done, you will see the
                following files on your project.
              </p>

              <Image src={albedo3} fluid />
              <br></br>
              <br></br>
              <p>
                After that, we will need to install the dependencies
                that we need, let's type again on the terminal the
                following command:
              </p>
              <HighLight2 />

              <p>
                After the installation of the dependencies is done, go
                the src folder, select the "App.js" file, delete all
                of its content and replace it with the following code:
              </p>
              <Image src={albedocode1} fluid />
              <br></br>
              <br></br>
              <p>
                You can find this code{' '}
                <a href="https://github.com/Olvisgil/LogInWithAlbedo/blob/main/src/App.js">
                  here
                </a>
                .
              </p>
              <p>
                What the code basically does is; it creates a "Button"
                with Material UI for the layout and by displaying the
                Albedo Logo with "Image" from React-bootstrap. When a
                user clicks, it makes a call to Albedo using the{' '}
                <a href="https://albedo.link/playground#public_key">
                  "View Public Key"
                </a>{' '}
                request in order to verify that the selected public
                key is actually owned by the user performing the
                request. In this particular example, after the
                verification is successful, we proceed to console log
                the type of intent, the public key, the signature, and
                the message of the transaction. You can for example
                forward the user to another page after the validation
                is complete. Notice we do not have access to the
                secret key.
              </p>
              <p>
                Now you can to render the code and display it on a
                browser, to do this, you need to start your
                application with the following command:
              </p>
              <HighLight3 />
              <p>
                Below, you will find an example of how the button
                looks like, feel free to open the project on{' '}
                <a href="https://codesandbox.io/s/inspiring-cori-ojs73?from-embed">
                  Codesandbox
                </a>
                .
              </p>

              <Iframe
                src="https://codesandbox.io/embed/inspiring-cori-ojs73?fontsize=14&hidenavigation=1&theme=dark"
                style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                title="inspiring-cori-ojs73"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
              <br></br>
              <br></br>
              <p>
                And that's it, now you have successfully created your
                own "Log In with Albedo" widget, which allows you to
                verify the identity of your users.
              </p>
              <p>
                Thank you very much for reading and if you have any
                question, please do not hesitate in contacting me on
                olvisgil@gmail.com
              </p>
              <br></br>
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