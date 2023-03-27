import React, { Component } from 'react'
import { Form, Button, Alert, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import { resend } from "../../actions/authActions";
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}

  if (values.password && values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match'
  }
  return errors
}


class verifyEmail extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    isVerified: PropTypes.bool,
  }

resendEmail = () => {
    // alert("clicked")
    // e.preventDefault();
    let email = this.props.auth.user.email

    resend(email);

 alert(`A confirmation code has be sent to ${email}, please also check your spam folder`);

}

  // verifyConfirmationCode = () => {
  //   let confirmationCode = "2343"
  //   if (condition) {

  //   }
  // }


  render() {
    return (
      <div>
        <Container>
            <Row>
                <Alert className="text-center" variant="warning">
                  We have sent a verification a code to <b>{this.props.auth.user.email}</b>, please check your inbox (or in spam folder) and enter the code below to verify your account or click {' '} <Button onClick={this.resendEmail}  type="submit">here</Button>{' '}  if you would like us to resend the email.{' '}
            </Alert>
              <Col md={{ span: 6, offset: 3 }}>
                <InputGroup style={{ width: "400px" }} className="mb-1">
                  <FormControl
                    placeholder="please enter your code"
                    aria-label="code"
                    aria-describedby="basic-addon2"
                  />
                  <div>
                  <Field>
                    <Button onClick={this.verifyConfirmationCode} variant="outline-secondary">Verify</Button>
                  </Field>
                  </div>
                  
                </InputGroup>
              </Col>
              <Col></Col>
            </Row>
            <Row>
            <Col className="text-center">

            </Col>
            </Row>
          </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})


// verifyEmail = connect(mapStateToProps, { clearErrors })(verifyEmail)

verifyEmail = connect(
  mapStateToProps, { clearErrors }
)(verifyEmail)

export default verifyEmail = reduxForm({
  form: "RegisterReduxForm",
  fields: ['confirmationCode'],
  validate,
  clearErrors
})(verifyEmail)
