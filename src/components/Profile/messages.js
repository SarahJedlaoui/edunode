import React, { Component } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from 'mdb-react-ui-kit';
import moment from 'moment';

class Messages extends Component {
  constructor(props) {
    super(props);
    const { auth } = this.props;
    this.state = {
      friends: [],
      messages: [],
      messageText: '',
      receiverEmail: '',
    };
    this.socket = null;
  }

  componentDidMount() {
    this.fetchFriendsList();
    this.setupSocket();
  }

  setupSocket = () => {
    this.socket = new WebSocket('ws://localhost:5001/api/ws');
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.handleIncomingMessage(message);
    };
  };

  handleIncomingMessage = (message) => {
    const { messages } = this.state;
    const updatedMessages = [...messages, message];
    this.setState({
      messages: updatedMessages,
    });
  };

  fetchFriendsList = () => {
    const localUser = localStorage.getItem('user');
    const user = JSON.parse(localUser);
    const email = user.email;

    axios
      .get(`https://edunode.herokuapp.com/api/users/friends/${email}`)
      .then((response) => {
        this.setState({
          friends: response.data.friends,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleFriendClick = (receiverEmail) => {
    const localUser = localStorage.getItem('user');
    const user = JSON.parse(localUser);
    const senderEmail = user.email;
  
    axios
      .get(`https://edunode.herokuapp.com/api/messages?sender=${senderEmail}&receiver=${receiverEmail}`)
      .then((response) => {
        const messages = response.data.messages;
        this.setState({
          receiverEmail,
          messages,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleSendMessage = () => {
    const localUser = localStorage.getItem('user');
    const user = JSON.parse(localUser);
    const senderEmail = user.email;
    const { receiverEmail, messageText } = this.state;

    if (messageText.trim() !== '') {
      const messageData = {
        senderEmail,
        receiverEmail,
        content: messageText,
      };

      axios
        .post('https://edunode.herokuapp.com/api/messages', messageData)
        .then((response) => {
          const savedMessage = response.data.message;
          this.setState((prevState) => ({
            messages: [...prevState.messages, savedMessage],
            messageText: '',
          }));
          this.socket.send(JSON.stringify(savedMessage));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  render() {
    const { friends, messages, messageText, receiverEmail } = this.state;
   const localUser = localStorage.getItem('user');
    const user = JSON.parse(localUser);
    const senderEmail = user.email;
    return (
      <MDBContainer fluid className="py-5" style={{ backgroundColor: '#eee' }}>
        <MDBRow>
          <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>
            <MDBCard>
              <MDBCardBody>
                <MDBTypography listUnStyled className="mb-0">
                  {friends.map((friend) => (
                    <li
                      className="p-2 border-bottom"
                      style={{ backgroundColor: '#eee' }}
                      key={friend.id}
                      onClick={() => this.handleFriendClick(friend.email)}
                    >
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src={friend.images}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">{friend.name}</p>
                            <p className="small text-muted">{friend.status}</p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Just now</p>
                          <span className="badge bg-danger float-end">1</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
  
          <MDBCol md="6" lg="7" xl="8">
          <MDBTypography listUnStyled>
            {messages.map((message) => {
              const sender = friends.find((friend) => friend.email === message.senderEmail);
              const receiver = friends.find((friend) => friend.email === message.receiverEmail);
              const isUserMessage = sender && sender.email === receiverEmail;
              const messageContainerClass = isUserMessage ? 'user-message' : 'friend-message';
              const avatar = sender && sender.email === receiverEmail ? sender.images : receiver.images;


              return (
                <li className={`d-flex justify-content-between mb-4 ${messageContainerClass}`} key={message._id}>
                  {!isUserMessage && (
                    <img
                      src={user.images}
                      alt="avatar"
                      className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                      width="60"
                    />
                  )}
                  <MDBCard>
                    <MDBCardHeader className="d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">{message.senderEmail}</p>
                      <p className="text-muted small mb-0">
                        <MDBIcon far icon="clock" /> {message.timestamp}
                      </p>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <p className="mb-0">{message.content}</p>
                    </MDBCardBody>
                  </MDBCard>
                  {isUserMessage && (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                      width="60"
                    />
                  )}
                </li>
              );
            })}
          </MDBTypography>

          <li className="bg-white mb-3">
            <MDBTextArea
              label="Message"
              id="textAreaExample"
              rows={4}
              value={messageText}
              onChange={(e) => this.setState({ messageText: e.target.value })}
            />
          </li>
          <MDBBtn color="info" rounded className="float-end" onClick={this.handleSendMessage}>
            Send
          </MDBBtn>
        </MDBCol>

        </MDBRow>
      </MDBContainer>
    );
  }
  
}

export default Messages;
