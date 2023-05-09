import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import me from '../sara.jpg';
import sc from './postgres.png';
import one from './11.png';
import two from './22.png';
import three from './33.png';
import four from './44.png';
import five from './55.png';
import six from './66.png';

import Typography from '@material-ui/core/Typography';
import {
  FacebookShareCount,
  RedditShareCount,
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
import { Helmet } from 'react-helmet';
import './style.css';

export default class PostgreSql extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }
  render() {
    const shareUrl = 'https://edunode.org/blog/postgresql';
    const title = 'What is PostgreSQL and how you can use it?';
    const exampleImage = sc;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={shareUrl} />
          
          <meta
            name="description"
            content="PostgreSQL is a popular open-source relational database management system "
          />
        </Helmet>
        <NavBar />

        <Image src={sc} className="header-image" fluid />
        <Container>
        <Typography
                component="h1"
                variant="h4"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                What is PostgreSQL and how you can use it?
              </Typography>
      

          <Row>
          <b></b>
         <b></b>
         <b></b>
         <b></b>
         <p></p>
            <Col xs={12} sm={8} className="main-section">
            <p>  
            <h4>Introduction to PostgreSQL:</h4>
            <br></br>
              <p>PostgreSQL is a popular open-source relational database management system that provides a robust platform for data storage, retrieval, and manipulation. It is widely used in various applications, including blockchain technology. In this blog, we will explore how to use PostgreSQL in blockchain applications.</p>
<br></br>
<h4>As a software student, I have worked with PostgreSQL and blockchain technology, and I would like to share my knowledge and experience with you.</h4>
<br></br>
 <p>Setting up PostgreSQL:<br></br>

 Before we start using PostgreSQL in blockchain applications, we need to set it up. The first step is to download and install PostgreSQL on our system. Once PostgreSQL is installed, we need to create a database and a user with the necessary permissions to access the database. We can use the following commands to create a database and a user in PostgreSQL.</p>
<br></br>
<Image src={one} fluid />
<br></br>
<h4>Next, we need to grant the necessary permissions to the user.</h4>
<br></br>
<Image src={two} fluid />
<br></br>
<p>Connecting to PostgreSQL:<br></br>
Now that we have set up PostgreSQL, we can connect to it from our blockchain application. We can use the following code snippet to connect to PostgreSQL in our blockchain application.
<br></br>
<Image src={three} fluid />

Once we have established a connection to PostgreSQL, we can perform various database operations, such as inserting, updating, and retrieving data.<br></br>
<br></br>


Storing blockchain data in PostgreSQL:
<br></br>
In a blockchain application, we need to store various types of data, such as transactions, blocks, and accounts. We can use PostgreSQL to store this data.
<br></br>
For example, to store transactions in PostgreSQL, we can create a table with the following schema.
<Image src={four} fluid />




We can then use SQL queries to insert transactions into the table.<br></br>
<Image src={five} fluid />


Retrieving blockchain data from PostgreSQL:<br></br>
In a blockchain application, we also need to retrieve data from the database. We can use SQL queries to retrieve data from PostgreSQL.<br></br>
For example, to retrieve all transactions from the transactions table, we can use the following SQL query.<br></br>
<Image src={six} fluid />

We can also use various SQL clauses, such as WHERE and ORDER BY, to filter and sort the data.<br></br>

</p>
<br></br>
<p><h4>Conclusion</h4></p>
<br></br>
<p>PostgreSQL is a powerful database management system that can be used in blockchain applications to store and retrieve data. In this blog, we have explored how to use PostgreSQL in a blockchain application. We have covered setting up PostgreSQL, connecting to PostgreSQL, storing blockchain data in PostgreSQL, and retrieving blockchain data from PostgreSQL. I hope this blog has been informative and helpful in understanding how to use PostgreSQL in a blockchain application.</p>
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
              </p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Card style={{ width: '9rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Title>Sarah Jedlaoui</Card.Title>
                <Card.Body>

                  <Card.Text>
                    <p>
                     Software Developer
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
