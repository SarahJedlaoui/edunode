import React, { Component } from "react";
import { styled as muiStyled } from '@mui/material/styles';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Footer from "../../Footer/Footer";
import Topbar from "../../Dashboard/Navbar1";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from "axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, 
      errors: {},
      users: []
    }; 
  }
  componentDidMount() {
    this.fetchUsers();
  }

  
  fetchUsers = async () => {
    try {
      const response = await axios.get('https://edunode.herokuapp.com/api/users/rating');
      const filteredUsers = response.data.filter((user) => user.rating > 0);
      this.setState({ users: filteredUsers });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  render() {
    const { users } = this.state;
    const Item = muiStyled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const { isLoading} = this.state;
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
               
                <h4 style={{ fontSize: "2em", textAlign: "left" }}>Leader Board:</h4>
              
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      {users.map((user) => (
        <React.Fragment key={user._id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="User Avatar" src={user.images || '/default-avatar.png'} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    {user.email}
                  </Typography>
                  
                </React.Fragment>
                
              }
            />
             <ListItemText
              primary='Rating'
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    {user.rating}
                  </Typography>
                  
                </React.Fragment>
                
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
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

LeaderBoard = connect(
  mapStateToProps
)(LeaderBoard)

export default LeaderBoard = reduxForm({
  form: "postReduxForm",
})(LeaderBoard)