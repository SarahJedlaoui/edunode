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


function Ediploma(props) {
  const certificate = useRef(null);
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

  const navigate = useNavigate();

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
        <button
          onClick={(e) => {
            
            e.preventDefault();
            // var img = new Image();
            // img.src = urlImg;
            // img.crossOrigin = 'Anonymous';
            //ipfs upload
            // freighterHandler()
            exportComponentAsPNG(certificateWrapper.current, {
              html2CanvasOptions: { backgroundColor: null }
            })
            setTimeout(function () {
              try {
                navigate('/');
              } catch (error) {
                console.log(error);
              }
            }, 3000);
            // const exported = exportComponentAsPNG()
            // console.log(exported)
           
          }}
        >
          Confirm and Download
        </button>
      

      </div>
      {/* <Diploma /> */}
      <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper" ref={this.certificate}>
            <p>{this.state.Name}</p>
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
