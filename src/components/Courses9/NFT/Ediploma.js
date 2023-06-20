import React, { useRef, useState,useEffect } from "react";
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
import growth from './growth.png';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import "./styless.css"
import Modal from 'react-modal';


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
  const [ratingValue, setRatingValue] = useState(5);
  const [Name, setName] = useState(props.user && props.user.name ? props.user.name : '');
  const [Feedback, setFeedback] = useState('');
  const loggedInUserEmail = props.auth.user.email ? props.auth.user.email : ''; 
  const courseId = '66464e2d58aca412ed2d81bf3';
  const shareUrl = 'https://edunode.org/blog/How-to-issue';
  const title = "EduNode certificate"
  const [showPopup, setShowPopup] = useState(false);
 async function sendImageToServer(base64Image, props) {
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
      window.location.href = "/";
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
      const response = await fetch(`https://edunode.herokuapp.com/api/cours/cours/${courseId}`, {
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
    const email = loggedInUserEmail;

    fetch('https://edunode.herokuapp.com/api/certificates/increment-trophy', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to increment trophy');
        }
      })
      .then(data => {
        console.log(data.message); // Success message from the server
        // Perform any additional actions or display a success message on the frontend
      })
      .catch(error => {
        console.error(error);
        // Handle any errors that occurred during the request
      });
  
    }
  
  
  
  
  
    useEffect(() => {
      setShowPopup(true);
    }, []);
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };

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

        {!props.auth.user.name && (
          <p>Please update your name in the profile page so we can provide you with certificate !</p>
        )}
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

      <Modal
  isOpen={showPopup}
  onRequestClose={handleClosePopup}
  contentLabel="Congratulations"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      width: '400px',
      height: '400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '8px'
    }
  }}
>
  <h2 style={{ marginBottom: '20px' }}>Congratulations!</h2>
  <p style={{ marginBottom: '20px', textAlign: 'center' }}>
    Thank you for finishing the course an claimed this trophy.
  </p>
  <img
    src={growth}
    alt="Trophy"
    style={{ width: '150px', marginBottom: '20px' }}
  />
  <button onClick={handleClosePopup}>Close</button>
</Modal>
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