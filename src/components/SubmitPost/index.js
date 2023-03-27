import React, { Component } from 'react'
import  withRouter  from '../../withRouter';
import { clearErrors } from "../../actions/errorActions";
import {  verifyCode } from "../../actions/authActions";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import "./styles.css"
import { updateAccount, saveUsernameAlbedo, pkeyGoogleUser } from "../../actions/authActions";
import MyEditor from "./myEditor";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import axios from 'axios';
 
function Tags() {

  return (
    <Stack spacing={3} sx={{ width: 300 }}>
    
      <Autocomplete
        multiple
        id="tags-outlined"
        options={topTags}
        getOptionLabel={(option) => option.title}
        defaultValue={[topTags[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Please select post tags"
            placeholder="tags"
          />
        )}
      />
    </Stack>
  );
}


const topTags = [
  { title: 'Blockchain' },
  { title: 'Crypto' },
  { title: 'Smart Contracts' },
  { title: 'Solidity' },
  { title: 'Web3' },
  { title: 'IT' },
  { title: 'Dev' },
  { title: 'E-learning' },
  { title: 'Programming' },
  { title: 'Javascript' },
  { title: 'Nodejs' },
  { title: 'Reactjs' },
  { title: 'Other' },
];

class SubmitPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      link: "",
      email: "",
      userName: "",
      pkey: "",
      pubkey: "",
      isLoading: false,
      tags: [],
    }


    

    

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
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
    )

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });

    };

   
    handleClose = e => {
      this.props.history.push("/dashboard")
    }
    handleSave = async values => {
      console.log(this.state.title)
      console.log(values.title)
    }
    onSubmit = async e => {
      e.preventDefault();
  this.setState({ isLoading: true });
      
 
      const pkey = e.pkey 
      const { title, description, link, tags } = this.state;
      const email = this.props.auth.user.email;
      const userName = this.props.auth.user.username;
      
      const post = {
        title,
        description,
        link,
        tags,
        email,
        userName,
      };
      try {
        await axios.post('/api/posts', post);
        this.props.history.push('/dashboard');
      } catch (error) {
        console.log(error);
      }   
   

      
      // create user object
      const updateAccount = {
        email,
        userName,
        pkey
      };

      try {

       await this.props.updateAccount(updateAccount)
       
        if (this.props.auth.user) {
   
          this.props.history.push("/dashboard")
        }
  
  
      } catch (error) {
        console.log(error)
      }

    }
    
   
  
  render() {

   
  

const show = true


  
  return (
  <>
    <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit your own post</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form  onSubmit={this.onSubmit}>
              <Tags props={this.props}/>
              
          
              <Field
              name="title"
              type="text"
              label="Title*"
              component={this.renderTextField}
              id="title"
              value={this.state.title}
            />
            <p>
            <Field
            
              name="link"
              type="text"
              label="Link"
              component={this.renderTextField}
              id="link"
              value={this.state.link}
            />
            </p>
           
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description (Optional)</Form.Label>
    {/* <Form.Control as="textarea" rows={3} /> */}

    <MyEditor />
 
   
  </Form.Group>
</Form>

</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </>
    )
}

}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

SubmitPost = connect(
  mapStateToProps, { updateAccount, saveUsernameAlbedo, pkeyGoogleUser, verifyCode, clearErrors }
)(SubmitPost);

export default SubmitPost = reduxForm({
  form: "ReduxForm",
  fields: ['title', 'description', 'link'],
  clearErrors,
  updateAccount,
  saveUsernameAlbedo,
  pkeyGoogleUser
  
})(withRouter(SubmitPost));
