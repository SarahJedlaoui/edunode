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
import dep from "./newediploma.png"
function Ediploma(props) {
  const certificateWrapper = useRef(null);
  const [Name, setName] = useState("");

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
    const response = await axios.post("http://localhost:5001/api/certificates/diploma", {
      image: base64Image,
      pkey: props.auth.user.pkey ? props.auth.user.pkey : null,
      email: props.auth.user.email ? props.auth.user.email : null,
      name: Name
    });
    console.log('hi');
    console.log(props.auth.user.pkey);
    console.log(response.data); // Check if the image was saved successfully
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
      html2CanvasOptions: {  backgroundColor: `url(${dep})`,},
    });
    setTimeout(function () {
      try {
      //  window.location.href = "/";
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  }
  

  return (
    <div className="App">
      <div className="Meta">
        <h1>EduNode eCertificate</h1>
        <p>Please enter your name.</p>
        <input
          type="text"
          placeholder="Please enter your name..."
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
          <img src="https://i.imgur.com/MxzEwin.png" alt="eCertificate" />
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