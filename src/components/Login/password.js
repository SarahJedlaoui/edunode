/*global google*/

import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import "./style.css";
import NavBar from "../NavBar";
class PasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Trigger API request to initiate password reset process
    fetch('https://edunode.herokuapp.com/api/password/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.state.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle success or error response from the server
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <form id='form' onSubmit={this.handleSubmit}>
        <Typography >Reset Password</Typography>
        <br></br>
          <TextField
            type="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            Reset Password
          </Button>
        </form>
      </div>
    );
  }
}

export default PasswordPage;
