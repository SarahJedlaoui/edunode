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
import Navbar1 from '../Dashboard/Navbar1';
import Footer from '../Footer/Footer';



class Messages extends Component {
  constructor(props) {
    super(props);
    const { auth } = this.props;
    this.state = {
      friends: [],
      messages: [],
      messageText: '',
      receiverEmail: '',
      socket: null,
      currentTime: ''

    };
    this.socket = null;
  }

  componentDidMount() {
    this.fetchFriendsList();
    this.setupSocket();
  }

  setupSocket = () => {
    const socket = new WebSocket('ws://localhost:5002/api/ws');

    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.handleIncomingMessage(message);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    this.setState({ socket });
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
        const friends = response.data.friends.map((friend) => ({
          ...friend,
          messageCount: 0,
        }));
        // Get the current timestamp
        const currentTimestamp = new Date().toISOString();

        // Fetch the message counts for each friend
        const countPromises = friends.map((friend) => {
          return axios.get(`https://edunode.herokuapp.com/api/messages/count?sender=${email}&receiver=${friend.email}`);
        });

        Promise.all(countPromises)
          .then((countResponses) => {
            countResponses.forEach((countResponse, index) => {
              friends[index].messageCount = countResponse.data.count;
            });

            this.setState({
              friends: friends,
            });
          })
          .catch((error) => {
            console.error(error);
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

    // Reset the message count to 0 for the selected friend
    axios.put('https://edunode.herokuapp.com/api/messages/reset', { sender: senderEmail, receiver: receiverEmail })
      .then(() => {
        const { friends } = this.state;
        const updatedFriends = friends.map((friend) => {
          if (friend.email === receiverEmail) {
            return {
              ...friend,
              messageCount: 0,
            };
          }
          const currentTimestamp = new Date().toISOString();
          this.setState({
            currentTime: currentTimestamp,
          });
          return friend;
        });

        this.setState({
          friends: updatedFriends,
        });
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(`https://edunode.herokuapp.com/api/messages?sender=${senderEmail}&receiver=${receiverEmail}`)
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
  formatTimestamp = (timestamp) => {
    const currentTime = moment();
    const messageTime = moment(timestamp).local(); // Convert to user's local time zone
    const diffInMinutes = currentTime.diff(messageTime, 'minutes');

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 24 * 60) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hours ago`;
    } else {
      return messageTime.format('YYYY-MM-DD'); // Display full date
    }
  };
  render() {
    const { friends, messages, messageText, receiverEmail } = this.state;
    const localUser = localStorage.getItem('user');
    const user = JSON.parse(localUser);
    const senderEmail = user.email;
    return (
      <section style={{ backgroundColor: '#eee' }}>
        <Navbar1></Navbar1>

        <MDBContainer fluid className="py-5" style={{ backgroundColor: '#eee' }}>
          <MDBRow>
            <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">Friends:</h5>
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
                            {/**  <p className="small text-muted mb-1">Just now</p>*/}
                            <span className="badge bg-danger float-end">
                              {friend.messageCount || 0}
                            </span>
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
                            <MDBIcon far icon="clock" /> {this.formatTimestamp(message.timestamp)}
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


              <MDBTextArea
                label="Message"
                id="textAreaExample"
                rows={4}
                value={messageText}
                onChange={(e) => this.setState({ messageText: e.target.value })}
              />

              <MDBBtn color="info" rounded className="float-end" onClick={this.handleSendMessage}>
                Send
              </MDBBtn>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
        <Footer></Footer>
      </section>
    );
  }

}

export default Messages;
