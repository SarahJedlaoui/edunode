import React, { Component } from "react";
import { styled as muiStyled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import NavBar from "../NavBar"
import { clearErrors } from "../../actions/errorActions";
import { newPost } from "../../actions/authActions";
import Footer from "../Footer/Footer";
import Topbar from "../Dashboard/Navbar1";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from "axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import IconButton from '@mui/material/IconButton';

class Achievement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, 
      errors: {},
      notifications: [],
      achievement: [],
      email:''
    }; 
  }

  
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  }
  componentDidMount() {
    fetch('https://edunode.herokuapp.com/api/gamechallenge/winners') // Make sure this matches the endpoint you defined on the backend
      .then((response) => response.json())
      .then((data) => this.setState({ achievement: data }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : ""
    this.fetchNotifications(email);
  }

 async fetchNotifications(props) {
    try {
        const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : ""
      this.setState({ isLoading: true });
      const response = await axios.get(`https://edunode.herokuapp.com/api/notif/notification`);
      const notifications = response.data;
      console.log('email', email);
      console.log('hiii',response.data);
      this.setState({ isLoading: false, notifications });
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false, errors: error.response.data });
    }
  };


  render() {
    const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : ""
    const Item = muiStyled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const { isLoading, notifications,achievement} = this.state;
      if (isLoading) {
        return <div>Loading...</div>;
      }
    return (

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={20}>
              <Item><Topbar /></Item>
              <div style={{ padding: '10px' }}>
               
                <h4 style={{ fontSize: "2em", textAlign: "left" }}>Achievements:</h4>
              <div>
          
              <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
  {notifications.map(notification => {
    const message = notification.notificationMessage.replace('Congrats! You ', '');
    return (
      <ListItem
        key={notification._id}
        disableGutters
        secondaryAction={
          <IconButton href="#" aria-label="comment">
            <EmojiEventsIcon />
          </IconButton>
        }
      >
        <ListItemText primary={`${notification.email} ${message}`} />
      </ListItem>
    );
  })}
</List>
<List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
        {achievement.map((notification) => {
          const message = 'won a challenge game! ';
          return (
            <ListItem
              key={achievement._id}
              disableGutters
              secondaryAction={
                <IconButton href="#" aria-label="comment">
                  <EmojiEventsIcon />
                </IconButton>
              }
            >
              <ListItemText primary={`${achievement.winnerEmail} ${message}`} />
            </ListItem>
          );
        })}
      </List>

      </div>

              </div>
            </Grid>
          </Grid>
          <Footer></Footer>
        </Box>
      </div>



    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth
})

Achievement = connect(
  mapStateToProps
)(Achievement)

export default Achievement = reduxForm({
  form: "postReduxForm",
  clearErrors,
})(Achievement)