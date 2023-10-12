import React, { Component } from 'react';
import { connect } from "react-redux";
import withRouter from '../../withRouter';
import { reduxForm } from "redux-form";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBModal, MDBModalBody, MDBModalHeader
} from 'mdb-react-ui-kit';
import Navbar1 from '../Dashboard/Navbar1';
import Footer from '../Footer/Footer';
import axios from 'axios';
import add from './addcourse.png'
import ai from './ai.png'
import challenge from './challenge.png'
import course from './course.png'
import community from './community.png'
import post from './post.png'
import PostCard from "../Dashboard/postCard";
import BlogCard from "../Dashboard/blogCard";
import CourseCard from "../Dashboard/courseCard";
import copy from 'clipboard-copy';
import userimage from './user.png'
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    const { auth } = this.props;

    this.state = {
      tags: auth.user && auth.user.preferences ? auth.user.preferences : [],
      skills: auth.user && auth.user.skills ? auth.user.skills : [],
      name: auth.user && auth.user.name ? auth.user.name : "",
      email: auth.user.email ? auth.user.email : '',
      preferences: auth.user && auth.user.preferences ? auth.user.preferences : [],
      age: auth.user && auth.user.age ? auth.user.age : "",
      bio: auth.user && auth.user.bio ? auth.user.bio : "",
      location: auth.user && auth.user.location ? auth.user.location : "",
      _id: auth.user && auth.user._id ? auth.user._id : "",
      user: auth.user ? auth.user : {},
      posts: [],
      courses: [],
      showPopup: false,
      popupMessage: '',
      selectedRequestId: '',
      friends: [],
      loading: true,
      error: null,
    };
  }
  acceptFriendRequest = async (userId) => {
    const userr = this.state.user;

    try {
      const { data } = await axios.post(`https://edunode.herokuapp.com/api/users/accept-friend-request/${userId}`, {
        user: userr,
      });
      alert('Invitation accepted');
      console.log(data.message); // Friend request accepted
      // Handle success message or update UI
    } catch (error) {
      console.error(error);
      // Handle error or display error message
    }

  };


  componentDidMount() {
    this.fetchFriendsList();
    const { email } = this.state;
    axios.get(`https://edunode.herokuapp.com/api/emaillogin/user/${email}`)
      .then(response => {
        const data = response.data;
        this.setState({ user: data }, () => {
          console.log('trophy', this.state.user.CoursesTrophy)
          console.log('user', this.state.user)
        });
      })
      .catch(error => {
        console.error(error);
      });

    this.fetchPosts();
    this.fetchCourses();
  }
  fetchPosts = async () => {
    const { email } = this.state;
    try {
      const response = await axios.get(`https://edunode.herokuapp.com/api/post/postemail/${email}`);
      const posts = response.data;
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  };
  fetchCourses = async () => {
    const { email } = this.state;
    try {
      const response = await axios.get(`https://edunode.herokuapp.com/api/cours/coursemail/${email}`);
      const courses = response.data;
      this.setState({ courses });

    } catch (error) {
      console.log(error);
    }
  };
  rejectFriendRequest = async (userId) => {
    const userr = this.state.user;
    alert('Invitation rejected');
    try {
      const { data } = await axios.post(`https://edunode.herokuapp.com/api/users/reject-friend-request/${userId}`, {
        user: userr,
      });
      console.log(data.message); // Friend request accepted
      // Handle success message or update UI
    } catch (error) {
      console.error(error);
      // Handle error or display error message
    }

  }
  fetchFriendsList = () => {

    const { email } = this.state;

    axios.get(`https://edunode.herokuapp.com/api/users/friends/${email}`)
      .then(response => {
        this.setState({
          friends: response.data.friends,
          loading: false,
          error: null,
        });
        console.log('')
        console.log('friends list :', response.data.friends)
      })
      .catch(error => {
        this.setState({
          friends: [],
          loading: false,
          error: 'Failed to fetch friends list.',
        });
        console.log('Failed to fetch friends list.');
      });
  };

  closePopup = () => {
    // Hide the popup
    this.setState({
      showPopup: false,
      popupMessage: '',
      selectedRequestId: '',
    });
  };
  sendMessage = (friend) => {
    // Implement your logic to send a message to the friend
    console.log('Sending a message to:', friend);
  };
  copyProfileLink = () => {
    const profileLink = `https://edunode.org/profile/${this.state.user._id}`;
    copy(profileLink);
    alert('Profile link copied to clipboard!');
  };
  render() {
    const {
      isAuthenticated,
      isVerified,
      hasUsername,
      isGranted,

    } = this.props.auth;
    const { posts, courses, user } = this.state;
    const hasShownPopupChat = localStorage.getItem('shownPopupChat');
    const { friends, loading, error } = this.state;
    return (
      <section style={{ backgroundColor: '#eee' }}>
        <Navbar1></Navbar1>
        <div className="py-20">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb 20">
                <MDBBreadcrumbItem>
                  <a href='/'>Edunode</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">Users</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>{this.state.user.name}'s Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <div>
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center d-flex justify-content-center flex-column align-items-center">
                    {this.state.user.images && this.state.user.images.length > 0 ? (
                      <MDBCardImage
                        src={this.state.user.images}
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid
                      />
                    ) : (
                      <MDBCardImage
                        src={userimage}
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid
                      />
                    )}
                    <p className="text-muted mb-1">{this.state.user.name}</p>



                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4" style={{ height: "auto" }}>
                  <MDBCardBody className="text-center d-flex justify-content-center flex-column align-items-center">

                    {/* List of pending friend requests */}
                    <h4>Pending Friend Requests:</h4>
                    {this.state.user.friendRequests && this.state.user.friendRequests.length > 0 ? (
                      <div>
                        <ul>
                          {this.state.user.friendRequests.map((request) => (
                            <li key={request._id}>
                              {request.userInfo}
                              
                              <button
                                onClick={() => this.acceptFriendRequest(request.user)}
                                className="btn btn-success"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() => this.rejectFriendRequest(request.user)}
                                className="btn btn-danger"
                              >
                                Reject
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p>There are no pending requests.</p>
                    )}
                  </MDBCardBody>
                </MDBCard>



                <MDBCard className="mb-4" style={{ height: "auto" }}>
                  <MDBCardBody className="text-center d-flex justify-content-center flex-column align-items-center">
                    <h4>Friends list:</h4>
                    <ul>
                      {friends.map(friend => (
                        <li key={friend._id}>
                          {friend.name}

                        </li>
                      ))}
                    </ul>
                    <a className="btn btn-primary"
                      style={{ fontSize: '12px', padding: '4px 8px' }}
                      href="/messages"
                    >
                      Send Messages
                    </a>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4 mb-lg-4" style={{ height: "auto" }}>
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fas icon="globe fa-lg text-warning" />
                        <button onClick={this.copyProfileLink} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                          Get your Profile link
                        </button>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-4" style={{ height: "auto" }}>
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush className="rounded-3">
                      {this.state.user.CoursesTrophy !== 0 && (
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <img
                            src={course} // Replace with the actual path or URL of the image
                            alt="Globe"
                            className="globe-icon"
                            style={{ width: '40px', height: '40px' }}
                          />
                          <MDBCardText>Courses Badge</MDBCardText>
                        </MDBListGroupItem>
                      )}
                      {this.state.user.AddCoursesTrophy !== 0 && (
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <img
                            src={add} // Replace with the actual path or URL of the image
                            alt="Globe"
                            className="globe-icon"
                            style={{ width: '40px', height: '40px' }}
                          />
                          <MDBCardText>Add course Badge</MDBCardText>
                        </MDBListGroupItem>
                      )}
                      {isAuthenticated && isVerified && (
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <img
                            src={community} // Replace with the actual path or URL of the image
                            alt="Globe"
                            className="globe-icon"
                            style={{ width: '40px', height: '40px' }}
                          />
                          <MDBCardText>Community Badge</MDBCardText>
                        </MDBListGroupItem>
                      )}
                      {hasShownPopupChat && (
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <img
                            src={ai} // Replace with the actual path or URL of the image
                            alt="Globe"
                            className="globe-icon"
                            style={{ width: '40px', height: '40px' }}
                          />
                          <MDBCardText>AI Badge </MDBCardText>
                        </MDBListGroupItem>
                      )}
                      {this.state.user.ChallengesTrophy !== 0 && (
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <img
                            src={challenge} // Replace with the actual path or URL of the image
                            alt="Globe"
                            className="globe-icon"
                            style={{ width: '40px', height: '40px' }}
                          />
                          <MDBCardText>Challenge Badge</MDBCardText>
                        </MDBListGroupItem>
                      )}
                      {this.state.user.PostsTrophy !== 0 && (
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <img
                            src={post} // Replace with the actual path or URL of the image
                            alt="Globe"
                            className="globe-icon"
                            style={{ width: '40px', height: '40px' }}
                          />
                          <MDBCardText>Posts Badge</MDBCardText>
                        </MDBListGroupItem>
                      )}
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>




            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{this.state.user.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{this.state.user.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Preferences</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{this.state.user.preferences.join(',')}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Skills</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{this.state.user.skills.join(',')}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Age</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{this.state.user.age}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Role</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{this.state.user.role}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCardText>Posts : </MDBCardText>
                {posts.map((post) => (
                  <MDBCol md="6" key={post._id}>
                    <PostCard post={post} />
                  </MDBCol>

                ))}
              </MDBRow>
              <br></br>
              <MDBRow>
                <MDBCardText>Courses : </MDBCardText>
                {courses.map((course) => (
                  <MDBCol md="6" key={course._id}>
                    <CourseCard course={course} />
                  </MDBCol>

                ))}
              </MDBRow>



            </MDBCol>
          </MDBRow>
        </div>
        <Footer></Footer>
      </section>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

ProfilePage = connect(
  mapStateToProps,
)(ProfilePage);

export default ProfilePage = reduxForm({
  form: "ReduxForm",
  fields: ["name", "email", "age", "location", "bio"],
})(withRouter(ProfilePage));