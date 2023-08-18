import React, { Component, useContext } from 'react';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import { verifyCode } from '../../actions/authActions';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { Navigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
//import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';
import NavBar from "../NavBar"
import withRouter from '../../withRouter';
import Alert from "@material-ui/lab/Alert";
import Popup from 'reactjs-popup';
import axios from "axios";
import 'reactjs-popup/dist/index.css';
import Navbar1 from './Navbar1';
import { makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import tuto from './tutorial.png'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Popover, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import IconButton from '@mui/material/IconButton';
import PostCard from "./postCard";
import BlogCard from "./blogCard";
import CourseCard from "./courseCard";
import { ThemeContext, ThemeProviders } from '../../ThemeContext';
import ToggleSwitch from '../../ToggleSwitch';
import './dashboard.css';
import { Card, CardContent, Typography } from '@mui/material';





const styles = {
  popupContent: {
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '10px',
  },
  saveButton: {
    backgroundColor: 'blue',
    color: 'white',
  },
};
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: '10px',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardDescription: {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))', // Add gradient for the overlay effect
  },
}));

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      preferences: this.props.auth.user.preferences ? this.props.auth.user.preferences : [],
      skills: this.props.auth.user.skills ? this.props.auth.user.skills : [],
      email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
      tags: ['Web3', 'Ethereum', 'Bitcoin', 'JavaScript', 'Rust', 'AI', 'Stellar', 'Programming', 'NFT', 'Blockchain', 'Crypto', 'E-learning', 'IT', 'Soroban'],
      role: ['Learner', 'Teacher', 'University'],
      selectedTags: [],
      selectedRole: '',
      showAlert: false,
      preference: [],
      user: [],
      notifications: [],
      achievement: [],
      showPopup: false,
      videos: [],
      redirectToDashboard: false
    };

  }






  async fetchNotifications(props) {
    try {
      const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : ""
      this.setState({ isLoading: true });
      const response = await axios.get(`https://edunode.herokuapp.com/api/notif/notification`);
      const notifications = response.data;
      this.setState({ isLoading: false, notifications });
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false, errors: error.response.data });
    }
  };


  async componentDidMount() {
    const localUser = localStorage.getItem('user')
    const user = JSON.parse(localUser)
    const localEmail = user.email
    const { isAuthenticated, isVerified } = this.props.auth;
    const hasShownPopup = localStorage.getItem('shownPopup');
    const { email, showAlert } = this.state;
    if (isAuthenticated && isVerified && !hasShownPopup) {
      this.setState({ showPopup: true });
    }
    await fetch(`https://edunode.herokuapp.com/api/users/user?email=${email}`)
      .then(response => response.json())
      .then(data => {

        this.setState({ user: data }, () => {

          this.setState({ preference: data.preferences })
        });
      })
      .catch(error => {
        console.error(error);
      });
    if (this.state.user.preferences && this.state.user.preferences.length === 0) {
      // preferences array is empty
      console.log("Preferences array is empty");
      
    } else {
      // preferences array is not empty
      console.log("Preferences array is not empty");
     
    }

    this.fetchNotifications();
    //const showAlert = !localStorage.getItem('selectedTags'); // check if the flag is set
    // update the state based on the flag
    console.log(this.state.preferences)


    fetch(`https://edunode.herokuapp.com/api/search/${email}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ preference: data });
      })
      .catch(error => {
        console.error(error);
      });

    fetch('https://edunode.herokuapp.com/api/gamechallenge/winners')
      .then((response) => response.json())
      .then((data) => this.setState({ achievement: data }))
      .catch((error) => console.error(error));

    this.fetchVideos();
  }

  fetchVideos = async () => {
    const { email } = this.state;
    try {
      const response = await axios.get(`https://edunode.herokuapp.com/api/search/youtube/${email}`); 
      this.setState({ videos: response.data.videos });
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

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


  handleRoleChange = (event) => {
    const { name } = event.target;
    this.setState({ selectedRole: name });
  };



  handleSave = () => {
    const email = this.props.auth.user ? this.props.auth.user.email : '';
    // Get the selected tags from state
    const { selectedTags } = this.state;
    console.log(selectedTags);
    // Make an HTTP request to your backend to save the selected tags
    axios.post('https://edunode.herokuapp.com/api/users/preferences', { preferences: selectedTags, email: email })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    // set the flag in localStorage
    localStorage.setItem('selectedTags', 'true');
    // Hide the popup after saving
    this.setState({ showAlert: true , redirectToDashboard: true});
    

  };




  handleClosePopup = () => {
    this.setState({ showPopup: false });
    localStorage.setItem('shownPopup', true);
  };

  render() {
    const { videos } = this.state;
    const hasShownPopup = localStorage.getItem('shownPopup');
    const { tags, role, selectedTags, selectedRole, showAlert, preference, skills, preferences, showPopup, user } = this.state;
    const {
      isAuthenticated,
      isVerified,
      hasUsername,
      isGranted,

    } = this.props.auth;
    const email = user && user.email ? user.email : '';
    const { notifications, achievement } = this.state;


    if (!isGranted && !isVerified && !isAuthenticated && !hasUsername) {
      return <Navigate to="/" />;
    }

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    if (isAuthenticated && !isVerified) {
      return <Navigate to="/" />;
    }

    if (this.state.redirectToDashboard) {
        return <Navigate to="/dashboard" />;
      }
        
    if (isAuthenticated) {
        
      
        return (
          <>
            <NavBar />
            <br></br>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <Alert className="text-center" severity="warning">
                  Please select your preferences so we can provide you with a personalized experience!
                  <Popup trigger=
                    {<Button> Click here </Button>}
                    position="right center">
                    {close => (
                      <div style={styles.popupContent}>
                        Select your preferences
                        {tags.map(tag => (
                          <div key={tag}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name={tag}
                                  checked={selectedTags.includes(tag)}
                                  onChange={this.handleTagChange}
                                />
                              }
                              label={tag}
                            />
                          </div>
                        ))}



                        <Button
                          variant="outlined"
                          onClick={() => {
                            this.handleSave();
                            close();
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    )}
                  </Popup>
                </Alert>
              </Grid>
            </Grid>








          </>
        )
      
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
