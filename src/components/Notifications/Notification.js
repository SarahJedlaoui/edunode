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
import IconButton from '@mui/material/IconButton';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, 
      errors: {},
      notifications: [],
      messageNotifications: [],
      email:''
    }; 
  }

  
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  }
 

  componentDidMount() {
    const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : ""
    this.fetchNotifications(email);
    this.fetchMessageNotifications(email);
  }

 async fetchNotifications(props) {
    try {
        const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : ""
      this.setState({ isLoading: true });
      const response = await axios.get(`https://edunode.herokuapp.com/api/certificates/notification/${email}`);
      const notifications = response.data;
      console.log('email', email);
      console.log('hiii',response.data);
      this.setState({ isLoading: false, notifications });
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false, errors: error.response.data });
    }
  };

  async fetchMessageNotifications(props) {
    try {
        const receiver = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : ""
      this.setState({ isLoading: true });
      const response = await axios.get(`https://edunode.herokuapp.com/api/messageNotif/${receiver}`);
      const notifications = response.data;
      this.setState({ isLoading: false, messageNotifications: notifications });
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
      const { isLoading, notifications,messageNotifications } = this.state;
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
                
              <div>
          
              <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
      {notifications.map(notification => (
        <ListItem
          key={notification._id}
          disableGutters
          secondaryAction={
            <IconButton href="/certificate" aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={notification.notificationMessage} />
        </ListItem>
      ))}
    </List>
    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
      {messageNotifications.map(notification => (
        <ListItem
          key={notification._id}
          disableGutters
          secondaryAction={
            <IconButton href="/certificate" aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={notification.message} />
        </ListItem>
      ))}
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

Notification = connect(
  mapStateToProps
)(Notification)

export default Notification = reduxForm({
  form: "postReduxForm",
  clearErrors,
})(Notification)