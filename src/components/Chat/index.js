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
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const suggestedQuestions = [
  "What is the Stellar Network?",
  "What is the Soroban Smart Contract Platform?",
  "How does Oracles Work?",
  "What is Hyperledger?",
  "What is Ethereum?",
  "What is Solidity?",
  "How to build a React app?",
  "How does IPFS work?",
  "What are NFTs?"
];


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
      prompt: "",
      isLoading: false,
      errors: {},
      messages: [], // Add this line
      input: '',
      conversation: [],
      messages: [],
      sessionMessages: [],
    }

    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

     /**
  componentDidMount() {
    // Clear chat history when component mounts
    this.setState({ messages: [] });
  }
 */
 


  componentDidUpdate() {

     
    // Scroll to the end of the page if new messages have been added
    this.scrollToBottom();
  }
  
  scrollToBottom() {
    // Use the DOM API to scroll to the end of the page
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
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
    const { input, email, sessionMessages } = this.state;

    // Set loading to true when the request is sent
    this.setState({ loading: true });

    // Send the new question to the backend to get the AI's response
    const response = await fetch('https://edunode.herokuapp.com/api/chat/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input, email }),
    });
    const data = await response.json();
    const aiResponse = data.msg;

    // Update the state with the new chat message and set loading to false
    this.setState({ input: '', sessionMessages: [...sessionMessages, { user: input, ai: aiResponse }], loading: false });


 // Clear the input field after the message is sent
 this.setState({ input: '' });


     // Scroll to the end of the page
     window.scrollTo(0,document.body.scrollHeight);

  }








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

      const { input, sessionMessages, loading } = this.state;
      return (

        <>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {/* <Grid xs={5} sm={3.5} md={2}>
                  <Item><Sidebar /></Item>
                </Grid> */}

                <Grid item xs={12} sm={8} md={9}>
                 <Topbar />
                  <div>
                    <div>
                      <div>

                        {sessionMessages.map((message, index) => (
                          <div key={index}>

                            <Alert severity="info"><Typography variant="h6">User:</Typography> {message.user}</Alert>

                            <Alert severity="success">
                              <Typography variant="h6">AI:</Typography> {message.ai}
                            </Alert>
                          </div>
                        ))}

                        <form onSubmit={this.handleSubmit}>



                          <div>
                            <h2>Suggested Questions:</h2>
                            <br></br>
                            {suggestedQuestions.map((question, index) => (
                              <Button key={index} variant="contained" onClick={() => this.setState({ input: question }, this.handleSubmit)}>
                                {question}
                              </Button>
                            ))}
                          </div>
                          <br></br>

                          <TextField
                            label="Ask a question"
                            value={input}
                            onChange={(event) =>
                              this.setState({ input: event.target.value })
                            }
                            fullWidth
                          />
                          <Button type="submit" variant="contained" disabled={loading}>
                            {loading ? "Sending..." : "Send"}
                          </Button>
                        </form>
                        <div ref={el => this.messagesEnd = el}></div>

                      </div>
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
  mapStateToProps, { verifyCode, clearErrors }
)(Chat);

export default Chat = reduxForm({
  form: "ReduxForm",
  fields: ["input", "email"],
  clearErrors

})((Chat));