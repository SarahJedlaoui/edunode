import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import { resend, verifyCode } from "../../actions/authActions";
import { Field, reduxForm } from "redux-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@mui/material/CircularProgress"
import withRouter from '../../withRouter'
//import { useNavigate, BrowserRouter } from "react-router-dom";
import "./style.css";
import { styled } from '@mui/material/styles';
//import NavBar from "../NavBar"
import Sidebar from "../Dashboard/Sidebar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../Footer';
import Paper from '@mui/material/Paper';
import Topbar from "../Dashboard/Topbar";
import { Navigate } from "react-router-dom";
import { loadUser } from '../../actions/authActions';
//import Modal from "react-modal"; 
import axios from "axios";
import { Modal } from '@mui/material';
import Typography from '@mui/material/Typography';

const validate = values => {
  const errors = {};
  const requiredFields = ["confirmationCode"];
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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationCode: "",
      isLoading: false,
      errors: {},
      results: {},
      values: {},
      isVerified: false,
      email: "",
      tags: ['tag1', 'tag2', 'tag3', 'tag4'],
      showPopup: false,
      selectedTags: [],
      error: null,
      showModal: true,
      open: false
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
  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleTagChange = (event) => {
    const tagName = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => {
      const selectedTags = new Set(prevState.selectedTags);
      if (isChecked) {
        selectedTags.add(tagName);
      } else {
        selectedTags.delete(tagName);
      }
      return { selectedTags: [...selectedTags] };
    });
  };

  handleSave = () => {
    // Get the selected tags from state
    const { selectedTags, open } = this.state;
    this.setState({open: false});
    // Make an HTTP request to your backend to save the selected tags
    axios.post('/api/user/preferences', { preferences: selectedTags })
      .then(response => {
        console.log(response.data); // Log the response from the backend
        this.setState({ showModal: false });
        this.setState({open: false}); // Close the modal after saving
      })
      .catch(error => {
        console.error(error); // Log any errors that occur
      });
   
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

  resendEmail = () => {
    // alert("clicked")
    //e.preventDefault();
    const email = this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : '';

    resend(email);
    alert(`A confirmation code has be sent to your email ${email}, please also check your spam folder`);
    //   };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const email = this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : '';
    this.props.loadUser(email);
  }


  onSubmit = async (values) => {
    const user = this.props.auth.user;
    if (!user || !user.email || !user.confirmationCode) {
      console.log("Invalid user object:", user);
      return;
    }
    const email = user.email;
    const vCode = user.confirmationCode;
    const id = user.id;
    const inputcode = values.confirmationCode;
    const verifyUser = {
      email,
      inputcode,
      id
    };
    console.log("Verify user:", verifyUser);

    try {
      await this.props.verifyCode(verifyUser);
      if (inputcode === vCode) {
        alert("Verification successful");
      } else {
        alert("Verification failed: invalid code");
      }
    } catch (error) {
      console.log("Verification failed:", error);
    }
  };

  render() {
    const { tags, selectedTags, showModal } = this.state;
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    const { pristine, submitting } = this.props;
    const { isLoading, isVerified, isAuthenticated, history } = this.props.auth
    const email = this.props.auth.user ? this.props.auth.user.email : '';
    if (isLoading) {

      return <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}> <CircularProgress
          color="secondary"
        />
      </div>
    }
    if (isVerified) {
      return (
        <Navigate to="/dashboard" />
      );
    }
    if (!isAuthenticated && !isVerified) {

      return (
        <Navigate to="/" />
      );
    }
    if (isAuthenticated && !isVerified) {

      return (
        <div>
          <div>

            <Modal
              open={this.handleOpen}
              onClose={this.handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Select your preferences
                </Typography>
                {tags.map(tag => (
                  <div key={tag}>
                    <input
                      type="checkbox"
                      name={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={this.handleTagChange}
                    />
                    <label>{tag}</label>
                  </div>
                ))}

                <button onClick={this.handleSave}>Save</button>
              </Box>
            </Modal>





            {/**  <Modal isOpen={showModal}>
          <Modal.Header>
            <Modal.Title>Select your preferences</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {tags.map(tag => (
              <div key={tag}>
                <input
                  type="checkbox"
                  name={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={this.handleTagChange}
                />
                <label>{tag}</label>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleSave}>Save</button>
          </Modal.Footer>
        </Modal>
*/}




            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item={true} xs={5} sm={3.5} md={2}>
                  <Item><Sidebar /></Item>
                </Grid>
                <Grid item={true} xs={7} sm={8.5} md={10}>
                  <Item><Topbar /></Item>
                  <div>
                    <div className="centered">

                    </div>
                    <div className="centered">

                    </div>
                    <div className="centered">
                      <Container>
                        <Row>
                          <Alert className="text-center" severity="warning">

                            We have sent a verification a code to your email
                            , please check your inbox (or
                            in spam folder) and enter the code below to verify your account or
                            click{" "}
                            <Button onClick={this.resendEmail} type="submit">
                              <b>here</b>
                            </Button>{" "}
                            if you would like us to resend the email.{" "}
                          </Alert>

                          <form id="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div>
                              <Field
                                component={this.renderTextField}
                                value={this.state.confirmationCode}
                                type="text"
                                label="Confirmation Code"
                                name="confirmationCode"
                                id="code"
                              />
                            </div>
                            <div>
                              <Button
                                variant="contained"
                                id="button"
                                type="submit"
                                disabled={pristine || submitting}
                              >
                                Verify
                              </Button>
                            </div>
                            <div>
                              <p>{this.props.error.msg.msg}</p>
                              <p>{this.props.auth.message}</p>
                            </div>
                          </form>
                        </Row>
                      </Container>
                    </div>
                  </div>

                </Grid>

              </Grid>
              < br />
              < br />
              < br />
              < br />
              < br />
              < br />
              < br />< br />
              < br />
              < br />
              < br />
              < br />
              <Footer />
            </Box>
          </div>
          < br />

        </div>
      );
    }

    //     return (
    //       <div>
    //         <div>
    //             <Box sx={{ flexGrow: 1 }}>
    //       <Grid container spacing={2}>
    //         <Grid xs={5} sm={3.5} md={2}>
    //           <Item><Sidebar /></Item>
    //         </Grid>

    //         <Grid xs={7} sm={8.5} md={10}>
    //           <Item><Topbar /></Item>
    //           <div>
    //           <div  className="centered">

    //           </div>
    //           <div  className="centered">

    //          </div>
    //          <div  className="centered">
    //          <Container>
    //           <Row>
    //             <Alert className="text-center" severity="warning">
    //               We have sent a verification a code to{" "}
    //               {/* <b>{this.props.auth.user.email.email}</b>, please check your inbox (or */}
    //               in spam folder) and enter the code below to verify your account or
    //               click{" "}
    //               <Button onClick={this.resendEmail} type="submit">
    //                 <b>here</b>
    //               </Button>{" "}
    //               if you would like us to resend the email.{" "}
    //             </Alert>

    //             <form id="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
    //               <div>
    //                 <Field
    //                   component={this.renderTextField}
    //                   value={this.state.confirmationCode}
    //                   type="text"
    //                   label="Confirmation Code"
    //                   name="confirmationCode"
    //                   id="code"
    //                 />
    //               </div>
    //               <div>
    //                 <Button
    //                   variant="contained"
    //                   id="button"
    //                   type="submit"
    //                   disabled={pristine || submitting}
    //                 >
    //                   Verify
    //                 </Button>
    //               </div>
    //               <div>
    //         <p>{this.props.error.msg.msg}</p>
    //         <p>{this.props.auth.message}</p>
    //         </div>
    //             </form>
    //           </Row>
    //         </Container>
    //         </div>
    // </div>

    //         </Grid>

    //       </Grid>
    //       <Footer />
    //     </Box>
    //         </div>
    //         < br />

    //       </div>
    //     );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user,
  error: state.error,
});

VerifyEmail = connect(
  mapStateToProps, { loadUser, verifyCode, clearErrors }
)(VerifyEmail);

export default VerifyEmail = reduxForm({
  form: "VerifyEmailForm",
  fields: ["confirmationCode"],
  validate,
  clearErrors,
  verifyCode,
  loadUser
})(withRouter(VerifyEmail));
