import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import { reduxForm } from "redux-form";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress"
import "./style.css";
import withRouter  from '../../withRouter'
import {Container, Row, Col } from "react-bootstrap";
import SideBar from "../SideBar"
import { Navigate } from "react-router-dom";

const validate = values => {
  const errors = {};
  const requiredFields = ["firstName", "secondName"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.confirmationCode && values.confirmationCode.length < 4) {
    errors.confirmationCode = "Confirmation Code must be at least 5 characters";
  }
  return errors;
};

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationCode: "",
      isLoading: false,
      errors: {},
      results: {},
      values: {},
      isVerified: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    isVerified: PropTypes.bool,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "VERIFICATION_FAIL") {
        this.setState({ msg: error.msg.msg });
        console.log(error.msg.msg)
      } else {
        this.setState({ msg: null });
      }
    }

  }

  renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
onSubmit = async (values, dispatch) => {

const email = this.props.auth.user.email;
const inputcode = values.confirmationCode;
// const { isLoading, isVerified } = this.props.auth;

const verifyUser = {
  email,
  inputcode
}

// this.props.clearErrors()

  };
  
  render() {
    const { pristine, submitting } = this.props;
    const { isLoading, isVerified, isAuthenticated } = this.props.auth

    if (isLoading) {
      //  <p class="loading">Loading...</p> <CircularProgress color="secondary" />
      return <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}> <CircularProgress 
      color="secondary"
       />
          </div>
    }
    if (isAuthenticated && isVerified) {

   
    return (
      <>
        <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <SideBar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        Form to add a new article which will be linked to the account
                    </Col> 
                </Row>

            </Container>  
      </>
    );
  }
  return (
    <Navigate to="/" />
  );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

NewPost = connect(
  mapStateToProps, { clearErrors }
  )(NewPost);

export default NewPost = reduxForm({
  form: "profileForm",
  fields: ["firstName", "secondName"],
  validate,
  clearErrors,

})(withRouter(NewPost));
