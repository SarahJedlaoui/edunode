import withRouter from '../../withRouter';
import { clearErrors } from "../../actions/errorActions";
import { resend, verifyCode } from "../../actions/authActions";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../Footer';
import { connect } from 'react-redux';
import React, { Component } from 'react'
import { reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";
import { updateAccount, saveUsernameAlbedo, pkeyGoogleUser } from "../../actions/authActions";
import Navbar1 from '../Dashboard/Navbar1';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import growth from './growth.png';
import elearn from './elearning.png';
import home from './homework.png';
import Container from '@mui/material/Container';
import tuto from './tutorial.png';
import dec from './decision-making.png';
import { ContactsOutlined } from '@material-ui/icons';
import axios from 'axios';



class Badge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
            userName: "",
            pkey: this.props.auth && this.props.auth.user && this.props.auth.user.pkey ? this.props.auth.user.pkey : "",
            pubkey: "",
            isLoading: false,
            errors: {},
            coursesTrophy: this.props.auth && this.props.auth.user && this.props.auth.user.CoursesTrophy ? this.props.auth.user.CoursesTrophy : 0,
            postsTrophy: this.props.auth && this.props.auth.user && this.props.auth.user.PostsTrophy ? this.props.auth.user.PostsTrophy : 0,
            addCoursesTrophy: this.props.auth && this.props.auth.user && this.props.auth.user.AddCoursesTrophy ? this.props.auth.user.AddCoursesTrophy : 0,
            users: null
        }

    }

    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = async () => {
    

        const localUser = localStorage.getItem('user');
        const user = JSON.parse(localUser);
        const localEmail = user.email;
        console.log('local email ', user.email)
        axios.get('https://edunode.herokuapp.com/api/users/user', {
                body: {
                    email: localEmail // Pass the email as per your requirement
                }
            })
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(error => {
                console.error('Error fetching user:', error);
            });
    }

    render() {
        const {
            isAuthenticated,
            isVerified,
            hasUsername,
            isGranted,

        } = this.props.auth;
        const hasShownPopupChat = localStorage.getItem('shownPopupChat');

        console.log('local user ', this.state.users)



        //console.log(this.props.auth.user)
        //console.log(this.props.auth.user.pkey)

        const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "";
        const { certificateCount, certificates, coursesTrophy, postsTrophy, addCoursesTrophy } = this.state;

        if (this.props.auth.user) {
            return (
                <>

                    <div >

                        <Navbar1 />
                        <br />
                        <div>
                            <p>
                                <h3>Welcome to your Badges:</h3>
                            </p>
                            <br />


                            <Container sx={{ py: 5 }} maxWidth="md">
                                {/* End hero unit */}
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        {coursesTrophy !== 0 && (
                                            <Card sx={{ maxWidth: 300 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="120"
                                                        image={growth}
                                                        alt="Course badge"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            Course Badge
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Congratulations! You have finished {coursesTrophy} course(s)!
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        {postsTrophy !== 0 && (
                                            <Card sx={{ maxWidth: 300 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="120"
                                                        image={home}
                                                        alt="Course badge"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            Posts Badge
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Congratulations! You have added {postsTrophy} post(s)!
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        {addCoursesTrophy !== 0 && (
                                            <Card sx={{ maxWidth: 300 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="120"
                                                        image={elearn}
                                                        alt="Course badge"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            Add Course Badge
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Congratulations! You have added {addCoursesTrophy} course(s)!
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        {isAuthenticated && isVerified && (
                                            <Card sx={{ maxWidth: 300 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="120"
                                                        image={tuto}
                                                        alt="Course badge"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            Community Badge
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Congratulations! You are a member of our commumnity!
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        {hasShownPopupChat && (
                                            <Card sx={{ maxWidth: 300 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="120"
                                                        image={dec}
                                                        alt="Course badge"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            AI Badge
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Congratulations! You have an AI Badge!
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        )}
                                    </Grid>
                                </Grid>
                            </Container>
                        </div >

                        <Footer />

                    </div >



                </>
            )

        }



        if (!this.props.auth.isAuthenticated) {
            return (
                <Navigate to="/" />
            );
        }


        //this.props.history.push("/")
    }

}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});

Badge = connect(
    mapStateToProps, { updateAccount, saveUsernameAlbedo, pkeyGoogleUser, verifyCode, clearErrors }
)(Badge);

export default Badge = reduxForm({
    form: "ReduxForm",
    fields: ["name", "pkey"],
    clearErrors,
    //   generateCertificate,

})(withRouter(Badge));
