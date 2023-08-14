import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { styled as muiStyled } from '@mui/material/styles';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { clearErrors } from "../../actions/errorActions";
//import { newPost } from "../../actions/authActions";
import Grid from '@mui/material/Grid';
import Footer from '../Footer/Footer';
import Box from '@mui/material/Box';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Navbar1 from '../Dashboard/Navbar1';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';






const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%; // Set the width to 100% or a specific width, e.g., 600px
  max-width: 600px; // Add a max-width to keep the form from becoming too wide
  height: auto; // Set the height to auto to adjust according to its content
  margin: 0 auto; // Center the form within its parent container
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; // Include padding and border in the form's dimensions
`;


const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // Set the width to 100% to align form fields to the left
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;


const SelectedTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const SelectedTag = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  background-color: #f5f5f5;
  color: #333;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const RemoveTagButton = styled.button`
  background-color: transparent;
  color: #333;
  border: none;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0061c9;
  }
`;

const tagsList = [
  "Web3",
  "Blockchain",
  "Crypto",
  "Smart Contracts",
  "NFTs",
  "Soroban",
  "Solidity",
  "IT",
  "Dev",
  "E-learning",
  "Programming",
  "Javascript",
  "Nodejs",
  "Reactjs",
  "Other",
];

class Teach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      name: "",
      link: "",
      university: '',
      role: '',
      email: "",
      success: false,
      isLoading: false,
      errors: {},
      privatee: false,
      showPopup: false,
      image: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSwitchChange(event) {
    this.setState({ privatee: event.target.checked });
  }

  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };


  async handleSubmit(e) {
    e.preventDefault();
    // Validate the form fields
    const errors = {};
    if (this.state.name.trim() === "") {
      errors.name = "Title is required.";
    }
    if (this.state.email.trim() === "") {
      errors.email = "Questions are required.";
    }
    if (this.state.role.trim() === "") {
      errors.role = "Grade is required.";
    }
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }


    this.setState({ showPopup: true });

    const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "anonymous";
    fetch('https://edunode.herokuapp.com/api/cours/increment-trophy', {
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
        console.log(data.message);
      })
      .catch(error => {
        console.error(error);
      });
    this.setState({ showPopup: true });

    e.preventDefault();
    //const email= this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "anonymous";
    const data = {
      email: this.state.email,
      name: this.state.name,
      url: this.state.link,
      university: this.state.university,
      role: this.state.role,
      teachingsProof: this.state.image,
    };
    try {
      const response = await fetch("http://localhost:5001/api/tutors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      this.setState({ success: true });
      console.log(data)

      if (this.props.auth.user) {
        console.log("users?", this.props.auth.user)
        return (
          <Navigate to="/dashboard" />
        );
      }
    } catch (error) {
      console.error(error);
    }



    this.setState({ errors: {} });


  }

  handleClosePopup = () => {
    this.setState({ showPopup: false });
  };
  onChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageString = reader.result;
      this.setState({ image: imageString });
    };
  };

  render() {
    const { errors } = this.state;
    const { email, name, link, university, success, role, showPopup, image } = this.state;
    return (

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={20}>
              <Navbar1 />
              <br></br>
              <div style={{ padding: '10px' }}>
                <Form onSubmit={this.handleSubmit}>
                  <h4 style={{ fontSize: "2em", textAlign: "center" }}>Tutor Role Request</h4>
                  <br></br>
                  <FormGroup>
                    <Label htmlFor="title">Name:</Label>
                    <Input
                      fullWidth
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    {errors.name && <Alert severity="error">{errors.name}</Alert>}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="link">Email:</Label>
                    <Input
                      fullWidth
                      type="email"
                      value={email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    {errors.eamil && <Alert severity="error">{errors.email}</Alert>}
                  </FormGroup>
                  <FormControl>
                    <Label htmlFor="link">Requested Role:</Label>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={role}
                      onChange={this.handleRoleChange}
                    >
                      <FormControlLabel value="Tutor" control={<Radio />} label="Tutor" />
                      <FormControlLabel value="University" control={<Radio />} label="University" />
                    </RadioGroup>
                    {errors.role && <Alert severity="error">{errors.role}</Alert>}
                  </FormControl>
                  <FormGroup>
                    <Label htmlFor="title">University:</Label>
                    <Input
                      fullWidth
                      type="text"
                      value={university}
                      onChange={(e) => this.setState({ university: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="image">Teaching proof(optional):</Label>
                    <Input
                      type="file"
                      id="image"
                      onChange={this.onChangeImage}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="title">URL:</Label>
                    <Input
                      fullWidth
                      type="text"
                      value={link}
                      onChange={(e) => this.setState({ link: e.target.value })}
                    />
                  </FormGroup>


                  <SubmitButton type="submit">Submit</SubmitButton>
                  {success && (
                    <div style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
                      Success! Your request has been submitted.
                    </div>
                  )}
                </Form>


              </div>
            </Grid>
          </Grid>

        </Box>
        <Footer></Footer>
      </div>



    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth
})

Teach = connect(
  mapStateToProps
)(Teach)

export default Teach = reduxForm({
  form: "postReduxForm",
  fields: ['email', "tags", 'title', "university", "link"],
  clearErrors,
})(Teach)