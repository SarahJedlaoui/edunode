import React, { useRef, useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { connect } from "react-redux";
import { clearErrors } from "../../../actions/errorActions";
import { verifyCode } from "../../../actions/authActions";
import { reduxForm } from "redux-form";
import albedo from '@albedo-link/intent'
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { isConnected, getPublicKey } from "@stellar/freighter-api";
import axios from "axios";
import html2canvas from 'html2canvas';
import dep from "./8.png";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
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

import "./styless.css"



const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};


function IconContainer(props) {
  const { value, ...other } = props;
  const ratingLabel = customIcons[value].label;

  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};





function Ediploma(props) {
  const certificateWrapper = useRef(null);
  const [ratingValue, setRatingValue] = useState(2);
  const [Name, setName] = useState(props.user && props.user.name ? props.user.name : '');
  const [Feedback, setFeedback] = useState('');
  const loggedInUserEmail = props.auth.user.email ? props.auth.user.email : ''; 
  const courseId = '66464e2d58aca412ed2d81bf3';
  const shareUrl = 'https://edunode.org/blog/How-to-issue';
  const title = "E certification "
  const albedoHandler = () => {

    albedo.publicKey({

    })
      .then(res => {
        const intent = res.intent
        const pubkey = res.pubkey
        const signature = res.signature
        const signed_message = res.signed_message
        const userName = ""
        const newAlbedoUser = {
          intent,
          pubkey,
          signature,
          signed_message,
          userName,

        }

        // this.props.albedoSign(newAlbedoUser)

      })
  }

  const freighterHandler = async () => {

    if (isConnected()) {
      const name = Name;
      const pkey = await getPublicKey();
      // await this.props.freighterSign(pkey, name)
    }

    alert("not conected")

  }

 {/* */} async function sendImageToServer(base64Image, props) {
  try {
    if (props.auth.user.email) {
      const response = await axios.post("https://edunode.herokuapp.com/api/certificates/diploma7", {
      
      pkey: props.auth.user.pkey ? props.auth.user.pkey : null,
      email: props.auth.user.email ? props.auth.user.email : null,
      name: Name
    });
    console.log('hi'); 
    console.log(props.auth.user.pkey);
    console.log(response.data); // Check if the image was saved successfully
      
    } else if (props.auth.user.pkey) {

      const response = await axios.post("https://edunode.herokuapp.com/api/certificates/diploma7", {
      //image: base64Image,
      pkey: props.auth.user.pkey,
      name: Name
    });
    console.log(response.data); // Check if the image was saved successfully
    
    }
    
   
  } catch (error) {
    console.error(error);
  }
}



  async function getCertificateBase64() {
    const canvas = await html2canvas(certificateWrapper.current, {
      backgroundColor: `url(${dep})`,
    });
    const base64Image = canvas.toDataURL("image/png");
    return base64Image;
  }

  const navigate = useNavigate();

  const handleConfirmDownload = async (e) => {
    e.preventDefault();

    const base64Image = await getCertificateBase64();
    await sendImageToServer(base64Image, props);
    console.log(base64Image); // This will log the base64 string of the image in the console
    // TODO: Send the base64Image to your server using an API
    exportComponentAsPNG(certificateWrapper, {
      html2CanvasOptions: { backgroundColor: `url(${dep})`, },
    });
    setTimeout(function () {
      try {
       // window.location.href = "/";
      } catch (error) {
        console.log(error);
      }
    }, 3000);

    const formData = {
      rate: ratingValue,
      text: Feedback,
      email: loggedInUserEmail,
    };
    try {
      const response = await fetch(`http://localhost:5001/api/cours/cours/${courseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle successful submission
      } else {
        // Handle submission error
      }
    } catch (error) {
      console.error(error);
      // Handle submission error
    }

  }


  return (
    <div className="App">
      <div className="Meta">
        <h1>How did you find our Courseee </h1>
        <p>Your feedback is very appreciated </p>
        <StyledRating
          name="highlight-selected-only"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
          IconContainerComponent={IconContainer}
          getLabelText={(value) => customIcons[value].label}
          highlightSelectedOnly
        />
        <p>Rating: {ratingValue}</p>
        <br></br>
        <input
          type="text"
          placeholder='Feedback'
          value={Feedback}
          onChange={(e) => {
            setFeedback(e.target.value);
          }}
        />
        <br></br>
        <br></br>

        <h1>EduNode eCertificate</h1>
        <p>Please enter your name.</p>
        <input
          disabled
          type="text"
          placeholder={props.auth.user.name}
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={handleConfirmDownload}>
          Confirm and Download
        </button>
      </div>
      <div id="downloadWrapper">

        <div id="certificateWrapper" ref={certificateWrapper}>
          <p>{Name}</p>
          <img src={dep} alt="eCertificate" />
        </div>

      </div>
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

    </div>
    
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Ediploma = connect(
  mapStateToProps, { verifyCode, clearErrors }
)(Ediploma);

export default Ediploma = reduxForm({
  form: "",
  fields: [""],
  clearErrors,
  verifyCode
})(Ediploma);