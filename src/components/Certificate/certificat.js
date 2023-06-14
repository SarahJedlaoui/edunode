import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { useLocation, useParams } from 'react-router-dom';
import Certificate from './index';
import QRCode from 'qrcode';
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
import axios from 'axios';
import { Helmet } from 'react-helmet-async'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';











const metaDecorator = require("./metaDecorator.json");



// const ciid = 'https://edunode.org/blog/automated-market-maker';

function Certificat() {
  const { certificateNumber } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [qrCode, setQRCode] = useState('');
  const title = "E-certification "
  const stellarLab = "https://horizon-futurenet.stellar.org/accounts/?sponsor=GC4MEJJJMNIBIDZSJOZOPVUQQUKR3AARFLPFYKUFXU2D7PHWJP5S4AEI"
  const shareUrl = `https://edunode.org/certificates/${certificateNumber}`;
  const theme = useTheme();
  console.log('url', shareUrl);
  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await axios.get(`https://edunode.herokuapp.com/api/certificates/cert/${certificateNumber}`);
        setCertificate(response.data);
        console.log('certificatttt', response.data)
        const qrCodeDataURL = await QRCode.toDataURL(shareUrl);
        setQRCode(qrCodeDataURL);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCertificate();
  }, [certificateNumber]);

  if (!certificate) {
    return <div>Loading...</div>;
  }
  
  const { cid, distributorPublicKey, issuerPublicKey } = certificate;
  const ciid = `https://${cid}.ipfs.w3s.link/newdiplomav2.jpg`
  console.log('cid', cid)
  return (


    <div>
      {/*  <MetaDecorator
        description='desc'
        title='certificate'
        imageUrl={ciid}
        imageAlt='hi'
  />*/}

      <MetaTags>
        <meta property="og:image" content={ciid} />
      </MetaTags>


      <Helmet>
        <title>E-Certification</title>
        <meta name="description" content='E-certification' />
        <meta property="og:image" content={ciid} />
        <meta
          property="og:url"
          content={metaDecorator.hostname + window.location.pathname + window.location.search}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metaDecorator.twitterUsername} />
        <link rel="canonical" href={shareUrl} />

      </Helmet>
      <h1>Share you certification with others : </h1>
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

      </div>

      <img src={ciid} alt="Certificate" />
     
      
      <Card sx={{ display: 'flex' }}>
  <CardContent sx={{ flex: '1 1 auto' }}>
    <Typography component="div" variant="h5">
      Certificate informations:
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      distributorPublicKey: {distributorPublicKey}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      issuerPublicKey: {issuerPublicKey}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      IPFS: <a href={cid}>{cid}</a>
    </Typography>
    <Button
      href={`https://horizon-futurenet.stellar.org/accounts/?sponsor=${issuerPublicKey}`}
      size="small"
      color="primary"
    >
      Check on the Laboratory
    </Button>
  </CardContent>
  <CardMedia
    component="img"
    sx={{ width: 180 }}
    image={qrCode}
    alt="qr code"
  />
</Card>


    </div>
  );
};

export default Certificat;
