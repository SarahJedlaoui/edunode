import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import { verifyCode } from '../../actions/authActions';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { Navigate } from 'react-router-dom';
//import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from '../Footer';
import withRouter from '../../withRouter';
import Alert from "@material-ui/lab/Alert";
import Popup from 'reactjs-popup';
import Button from "@mui/material/Button";
import axios from "axios";
import 'reactjs-popup/dist/index.css';
import Navbar from './Navbar';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: this.props.auth.user.preferences ? this.props.auth.user.preferences: [],
      skills:this.props.auth.user.skills ? this.props.auth.user.skills: [],
      email: "",
      tags: ['web3', 'Stellar', 'Programming', 'NFT', 'Blockchain', 'Crypto', 'E-learning', 'IT', 'Soroban'],
      selectedTags: [],
      showAlert: true, //  a state variable to control the visibility of the alert
    };

  }

  componentDidMount() {
    const showAlert = !localStorage.getItem('selectedTags'); // check if the flag is set
    this.setState({ showAlert }); // update the state based on the flag
    console.log(this.state.preferences)
  }



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
    const email = this.props.auth.user ? this.props.auth.user.email : '';
    // Get the selected tags from state
    const { selectedTags } = this.state;
    console.log(selectedTags);
    // Make an HTTP request to your backend to save the selected tags
    axios.post('https://edunode.herokuapp.com/api/users/preferences', { preferences: selectedTags, email: email })
      .then(response => {
        console.log(response.data); // Log the response from the backend
      })
      .catch(error => {
        console.error(error); // Log any errors that occur
      });
    // set the flag in localStorage
    localStorage.setItem('selectedTags', 'true');
    // Hide the popup after saving
    this.setState({ showAlert: false });
  };

  render() {
    const { tags, selectedTags, showAlert,preferences,skills } = this.state;
    const {
      isAuthenticated,
      isVerified,
      hasUsername,
      isGranted,
      user,
    } = this.props.auth;
    const email = user && user.email ? user.email : '';



    if (!isGranted && !isVerified && !isAuthenticated && !hasUsername) {
      return <Navigate to="/" />;
    }

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    if (isAuthenticated && !isVerified) {
      return <Navigate to="/" />;
    }

    if (isAuthenticated) {

      if (!showAlert) {
        return (
          <>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            {/* <Sidebar props={email} /> */}
            
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>

        <h1 style={{fontSize: '24px', fontWeight: 'bold'}}>These are your preferences and skills:</h1>

        <p className="card-text">
          <small className="text-muted">
          Preferences: {this.state.preferences.join(", ")}
          </small>
        </p>
        <p className="card-text">
          <small className="text-muted">
          Skills: {this.state.skills.join(", ")}
          </small>
        </p>
        </Grid>
      </Grid>
      <br></br>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>

                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="edunodeorg"
                  options={{ height: 800 }}
                />
                <TwitterFollowButton screenName={'edunodeorg'} />
              </Grid>
            </Grid>
            <Footer />
          </>
        );
      }
      // show the alert and the popup if the flag is not set
      else {
        return (
          <>
          <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Alert className="text-center" severity="warning">
            Please select your preferences so we can provide you with a personalized experience!  
            <Popup trigger=
            {<Button> Click here </Button>}
            position="right center">
            {close => (
            <div> Select your preferences
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

              <button
                onClick={() => {
                  this.handleSave();
                  close();
                }}
              >
                Save
              </button>
            </div>
            )}
            </Popup>
          </Alert>
        </Grid>
      </Grid>
      <Grid container spacing={2}>

      

        <br></br>
            {/**  /* <Grid item xs={12} sm={12} md={12}>

                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="edunodeorg"
                  options={{ height: 800 }}
                />
                <TwitterFollowButton screenName={'edunodeorg'} />
              </Grid>*/}
            </Grid>
      <Footer />
      </>
        )
      }
    }

    return (
      <Navigate to="/" />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Dashboard = connect(mapStateToProps, { verifyCode })(Dashboard);

export default withRouter(Dashboard);
