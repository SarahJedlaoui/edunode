import React, { Component } from 'react'
import { clearErrors } from "../../actions/errorActions";
import { verifyCode } from "../../actions/authActions";
import Box from '@mui/material/Box';
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";  
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import axios from "axios"
import "./style.css"
import { Navigate } from "react-router-dom";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.auth.user.email,
      prompt: "",
      isLoading: false,
      errors: {},
      messages: [], // Add this line
      input: '',
      conversation: [],
    }

    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
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

   
handleSubmit = async (event) => {
  event.preventDefault();
  const { input, conversation, email } = this.state;
  if (input.trim()) {
    this.setState({
      conversation: [
        ...conversation,
        { message: input, sender: 'user' },
      ],
      input: '',
    });
console.log(conversation)
    // Send input to AI and handle response
    try {
      const response = await axios.post('http://localhost:5001/api/openai/openai', { input, email });
      const { message } = response.data;
console.log(message)
      this.setState((prevState) => ({
        conversation: [
          ...prevState.conversation,
          { message, sender: 'ai' },
        ],
      }));
    } catch (error) {
      console.error("FRONETEND-ERROR", error);
    }
  }
};

    
    


  
  render() {

   

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));


    const {

      isAuthenticated,

    } = this.props.auth;

    if (isAuthenticated) {
     
      const { input, conversation } = this.state;
      return ( 
  
        <>
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5} sm={3.5} md={2}>
          <Item><Sidebar /></Item>
        </Grid>
     
        <Grid xs={7} sm={8.5} md={10}>
          <Item><Topbar /></Item>
          <div>
          <div>
        <div>
          {conversation.map((message, index) => (
            <div key={index}>
              <p>{message.message}</p>
              <small>{message.sender}</small>
            </div>
          ))}
        </div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Ask a question"
            value={input}
            onChange={(event) =>
              this.setState({ input: event.target.value })
            }
            fullWidth
          />
          <Button type="submit" variant="contained">
            Send
          </Button>
        </form>
      </div>
</div>
          
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
        </div>
        </>
  
        )
      
    }


  if (!this.props.auth.isAuthenticated) {
    return (
      <Navigate to="/" />
    );
  }
}

}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Chat = connect(
  mapStateToProps, {verifyCode, clearErrors }
)(Chat);

export default Chat = reduxForm({
  form: "ReduxForm",
  fields: ["input", "email"],
  clearErrors
  
})((Chat));