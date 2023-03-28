import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { connect } from "react-redux";
import { clearErrors } from "../../../actions/errorActions";
import { verifyCode } from "../../../actions/authActions";
import { reduxForm } from "redux-form";
import  withRouter  from '../../../../withRouter'
import { Redirect } from "react-router-dom";
import albedo from '@albedo-link/intent'
import "./styles.css";
import { isConnected, getPublicKey } from "@stellar/freighter-api";


class Ediploma extends Component {
  constructor(props) {
    super(props);
    this.certificate = React.createRef();
    this.certificateWrapper = React.createRef();
    this.state = {
      Name: "",
      screenCapture: '',
    };
  }
  // certificateWrapper = React.createRef();

  

  render() {

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
        const name = this.state.Name
        const pkey = await getPublicKey();
      // await this.props.freighterSign(pkey, name)
      }
      
      alert("not conected")
      
    }

    // const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFCRDQ1NjYyZWRFNEUzOUEzODViQTkzRTQ3NDIxY0Y5NEY1NzFlYzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTQ5NTg0NDA1NjUsIm5hbWUiOiJlZHVub2RlIn0.epNvqGhVeetpf1ZecSYc66QcJYi3unASBhHuHt97DK0" })

    return (
      <div className="App">
         
        <div className="Meta">
        <h1>EduNode eCertificate</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
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
              exportComponentAsPNG(certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              })
                  setTimeout(function () {
      try {
       window.location.href = '/';
    
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

        <div id="downloadWrapper" ref={certificateWrapper}>
          <div id="certificateWrapper" ref={certificate}>
            <p>{this.state.Name}</p>
            <img src="https://i.imgur.com/MxzEwin.png" alt="eCertificate" />
          </div>
  
        </div>
      </div>
    );
  }
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
})(withRouter(Ediploma));
