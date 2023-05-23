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
import dep from "./7.png"
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


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
  const courseId = '6464e2b48aca412ed2d81bf1';

 async function sendImageToServer(base64Image, props) {
  try {
    if (props.auth.user.email) {
      const response = await axios.post("https://edunode.herokuapp.com/api/certificates/diploma6", {
      
      pkey: props.auth.user.pkey ? props.auth.user.pkey : null,
      email: props.auth.user.email ? props.auth.user.email : null,
      name: Name
    });
    console.log('hi'); 
    console.log(props.auth.user.pkey);
    console.log(response.data); // Check if the image was saved successfully
      
    } else if (props.auth.user.pkey) {

      const response = await axios.post("https://edunode.herokuapp.com/api/certificates/diploma6", {
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
        <h1>How did you find our Course </h1>
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