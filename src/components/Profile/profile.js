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
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Navbar1 from '../Dashboard/Navbar1';
import Footer from '../Footer';
import axios from 'axios';
import add from'./addcourse.png'
import ai from './ai.png'
import challenge from './challenge.png'
import course from './course.png'
import community from './community.png'
import post from './post.png'
import { useParams } from 'react-router-dom';


class ProfilePage extends Component {
  constructor(props) {
    super(props);
    const { auth } = this.props;

    this.state = {
      email:'',
      user: {},
      posts: [],
      courses: [],
    };
  }


  async componentDidMount() {
    try {
      const { id } = this.props;
      console.log('profileID', id);
  
      const response = await axios.get(`https://edunode.herokuapp.com/api/users/userByid/${id}`);
      const data = response.data;
      this.setState({ user: data }, () => {

        // Store user information in local storage
      localStorage.setItem('userProfile', JSON.stringify(data.user))
        console.log('userProfile', this.state.user.user);
        this.setState({ email: this.state.user.user.email });
        this.fetchPosts();
        this.fetchCourses();
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchPosts = async () => {
    const { email } = this.state.user.user.email;
    try {
      const response = await axios.get(`https://edunode.herokuapp.com/api/post/postemail/${email}`);
      const posts = response.data;
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  };
  fetchCourses = async () => {
    const { email } = this.state.user.user.email;
    try {
      const response = await axios.get(`https://edunode.herokuapp.com/api/cours/coursemail/${email}`);
      const courses = response.data;
      this.setState({ courses });

    } catch (error) {
      console.log(error);
    }
  };

  render() {
    
    const { posts, courses, user } = this.state;
    const hasShownPopupChat = localStorage.getItem('shownPopupChat');
   // const name = this.state.user.user.name;
   const userProfile = localStorage.getItem('userProfile');
   const userAcoount = JSON.parse(userProfile);
   console.log('userProfilename ',userAcoount.name)
   // Check if user information exists before accessing it
  if (!user) {
    return ( 'loading'); // or display a loading indicator
  }
    return (
      <section style={{ backgroundColor: '#eee' }}>
        <Navbar1></Navbar1>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href='/'>Edunode</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">Users</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>{userAcoount.name}'s Profile </MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center d-flex justify-content-center flex-column align-items-center">
                  <MDBCardImage
                    src={userAcoount.images}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                  />
                  <p className="text-muted mb-1">{userAcoount.name}</p>


                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-4">
                <MDBCardBody className="p-0">
                  <MDBListGroup  className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>https://edunode.org</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                      <MDBCardText>edunode</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                      <MDBCardText>@edunode</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                      <MDBCardText>edunode</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                      <MDBCardText>edunode</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-4">
                <MDBCardBody className="p-0">
                  <MDBListGroup  className="rounded-3">
                    {userAcoount.CoursesTrophy !== 0 && (
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
                       {userAcoount.AddCoursesTrophy !== 0 && (
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
                     {userAcoount.isVerified  && (
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
                    {userAcoount.ChallengesTrophy !== 0 && (
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
                    {userAcoount.PostsTrophy !== 0 && (
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
            </MDBCol>




            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userAcoount.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userAcoount.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Preferences</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userAcoount.preferences}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Skills</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userAcoount.skills}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Age</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userAcoount.age}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                {posts.map((post) => (
                  <MDBCol md="6" key={post._id}>
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          Post
                        </MDBCardText>
                        <MDBCardText className="mb-1" style={{ fontSize: '1.2rem' }}>
                          Post title
                        </MDBCardText>
                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>
                          {post.title}
                        </MDBCardText>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.2rem' }}>
                          Post description
                        </MDBCardText>
                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          {post.description}
                        </MDBCardText>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.2rem' }}>
                          Post link
                        </MDBCardText>
                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          <a>{post.link}</a>
                        </MDBCardText>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.2rem' }}>
                          Post tags
                        </MDBCardText>
                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          {post.tags.join(', ')}
                        </MDBCardText>



                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                ))}
              </MDBRow>

              <MDBRow>
                {courses.map((course) => (
                  <MDBCol md="6" key={course._id}>
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          Courses
                        </MDBCardText>
                        <MDBCardText className="mb-1" style={{ fontSize: '1.2rem' }}>
                          Course title
                        </MDBCardText>
                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>
                          {course.title}
                        </MDBCardText>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.2rem' }}>
                          Course description
                        </MDBCardText>
                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          {course.description}
                        </MDBCardText>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.2rem' }}>
                          Course link
                        </MDBCardText>
                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          <a>{course.link}</a>
                        </MDBCardText>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.2rem' }}>
                          Course tags
                        </MDBCardText>
                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          {course.tags.join(', ')}
                        </MDBCardText>



                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                ))}
              </MDBRow>



            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer></Footer>
      </section>
    );
  }
}
const WithParams = () => {
  const { id } = useParams(); // Get the ID from the route parameters
  return <ProfilePage id={id} />;
};



export default reduxForm({
  form: "ReduxForm",
  fields: ["name", "email", "age", "location", "bio"],
})(withRouter(WithParams));


