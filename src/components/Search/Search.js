import React, { Component } from 'react'
import withRouter from '../../withRouter';
import { clearErrors } from "../../actions/errorActions";
import { resend, verifyCode } from "../../actions/authActions";
import Box from '@mui/material/Box';
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import { updateAccount, saveUsernameAlbedo, pkeyGoogleUser } from "../../actions/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";


const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            userName: "",
            pkey: "",
            pubkey: "",
            isLoading: false,
            errors: {},
            items: Array.from({ length: 20 }),
            hasMore: true,
            searchQuery: '',
            results: []
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }


    handleInputChange = event => {
        const searchQuery = event.target.value;
        this.setState({ searchQuery }, () => {
            this.performSearch();
        });
    }


    performSearch = () => {
        const { searchQuery } = this.state;
        fetch(`https://edunode.herokuapp.com/api/search?searchQuery=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data });
            })
            .catch(error => {
                console.error(error);
            });
    }



    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
                // this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    renderTextField = ({
        label,
        input,
        meta: { touched, invalid, error },
        ...custom
    }) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )

    fetchMoreData = () => {
        if (this.state.items.length >= 50) {
            this.setState({ hasMore: false });
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 500);
    };


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });

    };
    onSubmit = async values => {

        const email = this.props.auth.user.email
        const userName = values.userName
        const pkey = values.pkey


        // create user object
        const updateAccount = {
            email,
            userName,
            pkey
        };

        try {

            await this.props.updateAccount(updateAccount)

            if (this.props.auth.user) {

                this.props.history.push("/dashboard")
            }


        } catch (error) {
            console.log(error)
        }

    }

    onSubmitAlbedo = async values => {


        const userName = values.userName
        const pubkey = this.props.auth.user.pubkey

        // create user object
        const updateAccount = {
            userName,
            pubkey

        };


        try {

            await this.props.saveUsernameAlbedo(updateAccount)


            if (this.props.auth.user.pubkey) {

                // this.props.history.push("/dashboard")
                alert("Username is updated and will take effect of your next login")
            }


        } catch (error) {
            console.log(error)
        }

    }

    onSubmitGoogle = async values => {


        const email = this.props.auth.user.email
        const pkey = values.pkey

        // create user object
        const updateAccount = {
            email,
            pkey

        };


        try {

            await this.props.pkeyGoogleUser(updateAccount)


            if (this.props.auth.user.googleProfilePic) {

                // this.props.history.push("/dashboard")
                alert("Your public key has been updated and will take effect of your next login")
            }


        } catch (error) {
            console.log(error)
        }

    }

    render() {
        const { searchQuery, results } = this.state;
        const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "";


        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));
        const { pristine, submitting } = this.props

        const {
            isLoading,
            isAuthenticated,
            isVerified,
            hasUsername,
            googleProfilePic,
            isGranted,
            isFirstCourseSelected,
            courseOneDone,
        } = this.props.auth;




        return (

            <>


                <div>
                <Topbar />
                    <Box sx={{ flexGrow: 1 }}>
                   
                        <Grid container spacing={2}>
                            {/* <Grid xs={5} sm={3.5} md={2}>
                                <Item><Sidebar props={email} /></Item>
                            </Grid> */}

                            <Grid item xs={12} sm={8} md={9}>
                              

                                <div>


                                    <div>


                                      




                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                value={searchQuery}
                                                onChange={this.handleInputChange}
                                                style={{ border: '1px solid gray', borderRadius: '5px', padding: '5px' }}


                                            />
                                            <button onClick={this.performSearch} style={{ backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', padding: '5px' }} >Search</button>
                                            <div className="row justify-content-center card-deck d-flex">
                                                {results.courses && results.courses.map(course => (
                                                    <div className="col-md-4 mb-4 h-100" key={course.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                                <h6 className="card-title"> Course </h6>
                                                                <h5 className="card-title">{course.title}</h5>
                                                                <p className="card-text">{course.description}</p>
                                                                <p className="card-text">

                                                                    <a href={course.link} className="card-link">
                                                                        <FontAwesomeIcon icon={faLink} className="mr-2" />
                                                                        {course.link}
                                                                    </a>

                                                                </p>
                                                                <p className="card-text">
                                                                    <small className="text-muted">
                                                                        Tags: {course.tags.join(", ")}
                                                                    </small>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                {results.posts && results.posts.map(post => (
                                                    <div className="col-md-4 mb-4 h-100" key={post.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                            <h6 className="card-title"> Post </h6>
                                                                <h5 className="card-title">{post.title}</h5>
                                                                <p className="card-text">{post.description}</p>
                                                                <a href={post.link} className="card-link">
                                                                    <FontAwesomeIcon icon={faLink} className="mr-2" />
                                                                    {post.link}
                                                                </a>
                                                                <p className="card-text">
                                                                    <small className="text-muted">
                                                                        Tags: {post.tags.join(", ")}
                                                                    </small>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                {results.blogs && results.blogs.map(blog => (
                                                    <div className="col-md-4 mb-4 h-100" key={blog.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                            <h6 className="card-title"> Blog </h6>
                                                                <h5 className="card-title">{blog.title}</h5>
                                                                <p className="card-text">{blog.description}</p>
                                                                <p className="card-text">
                                                                    <a href={blog.link} className="card-link">
                                                                        <FontAwesomeIcon icon={faLink} className="mr-2" />
                                                                        {blog.link}
                                                                    </a>

                                                                    <p className="card-text">
                                                                        <small className="text-muted">
                                                                            Tags: {blog.tags.join(", ")}
                                                                        </small>
                                                                    </p>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>


                                    </div>

                                </div>


                            </Grid>

                        </Grid>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                       
                        <Footer />
                    </Box>
                </div>



            </>
        )

        // if (!this.props.auth.isAuthenticated) {
        //   return <Redirect to="/" />
        // }


    }

}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});

Search = connect(
    mapStateToProps, { updateAccount, saveUsernameAlbedo, pkeyGoogleUser, verifyCode, clearErrors }
)(Search);

export default Search = reduxForm({
    form: "ReduxForm",
    fields: ["name", "pkey"],
    clearErrors,
    updateAccount,
    saveUsernameAlbedo,
    pkeyGoogleUser

})(withRouter(Search));

