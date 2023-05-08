import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import { verifyCode } from '../../actions/authActions';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from '../Footer';
import withRouter from '../../withRouter';

class Dashboard extends Component {
  render() {
    const {
      isAuthenticated,
      isVerified,
      hasUsername,
      history,
      googleProfilePic,
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
      return (
        <>
        <Topbar />
      
          {/* <Sidebar props={email} /> */}
          
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
