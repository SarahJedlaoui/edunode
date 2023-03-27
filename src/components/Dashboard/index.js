import React, { Component } from 'react'
import { connect } from "react-redux";
import Grid from '@mui/material/Grid';
import { verifyCode } from "../../actions/authActions";
import  withRouter  from '../../withRouter'
import { Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "../Footer"
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

class Dashboard extends Component {

  render() {

    const { isAuthenticated, isVerified, hasUsername,history, googleProfilePic, isGranted, user } = this.props.auth

    if (!isGranted && !isVerified && !isAuthenticated && !hasUsername) {

      return <div>Please log in to view this page.</div>;

    }

    if (!isAuthenticated) {

      return <div>Please log in to view this page.</div>;

    }

    if (isAuthenticated && !isVerified) {
      return <div>Please log in to view this page.</div>;
     
    }

    if (isAuthenticated) {

      return (
        <>
          <Grid container spacing={2}>
              <Grid item xs={5} md={2}>
                <Sidebar props={user} />
              </Grid>
              <Grid item xs={7} sm={8.5} md={10}>

                <Topbar />

                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="edunodeorg"
                  options={{height: 800}}
                />
                <TwitterFollowButton
                  screenName={'edunodeorg'}
                />
              </Grid>
              
            </Grid>
            <Footer />
        </>
      );

    }

    return <div>Please log in to view this page.....</div>;
  }

}

const mapStateToProps = (state) => ({
  auth: state.auth
});

Dashboard = connect(
  mapStateToProps, { verifyCode }
)(Dashboard);

export default Dashboard = withRouter(Dashboard);

